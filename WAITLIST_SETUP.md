# PulseFit AI - Waitlist Setup Guide

## Prerequisites

- Neon PostgreSQL database account
- Database connection string
- Node.js and npm installed

## Setup Steps

### 1. Environment Variables

The `.env.local` file has already been created with your Neon connection string:

```bash
DATABASE_URL=postgresql://[your-connection-string]
```

**Important:** This file is gitignored and will not be committed to version control.

### 2. Database Migration

Run the SQL schema against your Neon database:

```bash
# Option 1: Using psql command line
psql 'postgresql://neondb_owner:npg_cM4eogvS3wKk@ep-red-feather-a4yxmeqo-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require' < db/schema.sql

# Option 2: Using Neon SQL Editor (recommended)
# 1. Go to your Neon dashboard
# 2. Navigate to SQL Editor
# 3. Copy and paste the contents of db/schema.sql
# 4. Execute the query
```

This will create:
- `waitlist_signups` table with proper constraints
- Indexes for performance (created_at, status, source)
- Check constraint for valid status values

### 3. Install Dependencies

Dependencies have already been installed:

```bash
npm install @neondatabase/serverless
```

### 4. Restart Development Server

After setting up the database, restart your dev server:

```bash
npm run dev
```

## Testing the Waitlist

### Manual Testing

1. **Navigate to the homepage** at `http://localhost:3000`

2. **Test Hero CTA:**
   - Enter an email in the hero section form
   - Click "Join Early Access"
   - Verify success message appears
   - Check Neon dashboard for the new record with `source = 'hero_cta'`

3. **Test Footer CTA:**
   - Scroll to the final CTA section
   - Enter a different email
   - Click "Get Started Free"
   - Verify success message appears
   - Check Neon dashboard for the new record with `source = 'footer_cta'`

4. **Test Duplicate Handling:**
   - Submit the same email again
   - Verify you get a friendly "already on the list" message
   - No error should be thrown

5. **Test Rate Limiting:**
   - Submit 6+ different emails quickly
   - After the 5th submission, you should see a rate limit message

6. **Test Validation:**
   - Try submitting an invalid email (e.g., "notanemail")
   - Verify validation error message appears

### Database Verification

Query your waitlist signups:

```sql
-- View all signups
SELECT * FROM waitlist_signups ORDER BY created_at DESC;

-- Count by source
SELECT source, COUNT(*) as count 
FROM waitlist_signups 
GROUP BY source;

-- Count by status
SELECT status, COUNT(*) as count 
FROM waitlist_signups 
GROUP BY status;
```

## Architecture Overview

### Backend Files

- **`lib/db.ts`** - Neon database client (serverless-safe)
- **`lib/waitlist.ts`** - Core waitlist logic (validation, rate limiting, database operations)
- **`app/actions/waitlist/actions.ts`** - Server Actions for Next.js

### Frontend Files

- **`components/WaitlistForm.tsx`** - Reusable form component with states
- **`app/components/sections/Hero.jsx`** - Hero section with waitlist form
- **`app/components/sections/FinalCTA.jsx`** - Final CTA with waitlist form

### Database Schema

- **Table:** `waitlist_signups`
- **Indexes:** created_at, status, source
- **Constraints:** Unique email, valid status check

## Future Expansion

The system is designed to support:

### Invite System
```sql
-- Update status when sending invites
UPDATE waitlist_signups 
SET status = 'invited' 
WHERE id = $1;
```

### Analytics
```sql
-- Conversion funnel
SELECT 
  source,
  COUNT(*) FILTER (WHERE status = 'pending') as pending,
  COUNT(*) FILTER (WHERE status = 'invited') as invited,
  COUNT(*) FILTER (WHERE status = 'onboarded') as onboarded
FROM waitlist_signups
GROUP BY source;
```

### Cohort Management
```sql
-- Add cohort column
ALTER TABLE waitlist_signups ADD COLUMN cohort TEXT NULL;

-- Assign cohorts
UPDATE waitlist_signups 
SET cohort = 'beta_1' 
WHERE created_at < '2024-02-01' AND status = 'pending';
```

## Troubleshooting

### Connection Issues

If you see database connection errors:

1. Verify `DATABASE_URL` in `.env.local`
2. Check Neon dashboard for database status
3. Ensure IP is whitelisted (Neon allows all by default)
4. Restart dev server after changing `.env.local`

### Import Errors

If you see TypeScript import errors:

1. Restart your IDE/editor
2. Run `npm run dev` to regenerate Next.js types
3. Check `tsconfig.json` has correct path aliases

### Rate Limiting Issues

Rate limiting is in-memory and resets when the server restarts. For production:

1. Use Redis or database-backed rate limiting
2. Consider using a service like Upstash
3. Implement sliding window algorithm

## Production Considerations

Before deploying to production:

1. **Environment Variables:** Set `DATABASE_URL` in Vercel dashboard
2. **Rate Limiting:** Implement persistent rate limiting (Redis/Upstash)
3. **Monitoring:** Add logging for signup events
4. **Email Verification:** Consider adding email verification flow
5. **GDPR Compliance:** Add privacy policy and consent checkboxes
6. **Analytics:** Track conversion rates by source

## Support

For issues or questions:
- Check Neon documentation: https://neon.tech/docs
- Check Next.js Server Actions: https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions
