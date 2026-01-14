# Contact Form Setup Instructions

## Database Schema Setup

Before the contact form can work, you need to run the SQL schema in your Neon database.

### Steps:

1. **Open your Neon Database Console**
   - Go to [console.neon.tech](https://console.neon.tech)
   - Navigate to your PulseFit.AI project
   - Click on "SQL Editor"

2. **Run the Contact Messages Schema**
   
   Copy and paste the entire contents of `db/schema-contact.sql` into the SQL Editor and execute it:

   ```sql
   -- PulseFit AI Contact Messages Schema
   -- Database: Neon PostgreSQL
   -- Purpose: Store contact form submissions

   CREATE TABLE IF NOT EXISTS contact_messages (
     id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
     name TEXT NOT NULL,
     email TEXT NOT NULL,
     subject TEXT NOT NULL,
     message TEXT NOT NULL,
     status TEXT NOT NULL DEFAULT 'new',
     created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
     ip_address TEXT NULL,
     user_agent TEXT NULL,
     
     CONSTRAINT valid_contact_status CHECK (status IN ('new', 'in_progress', 'resolved'))
   );

   -- Indexes for performance
   CREATE INDEX IF NOT EXISTS idx_contact_created_at ON contact_messages(created_at DESC);
   CREATE INDEX IF NOT EXISTS idx_contact_status ON contact_messages(status);
   CREATE INDEX IF NOT EXISTS idx_contact_email ON contact_messages(email);

   -- Comments for documentation
   COMMENT ON TABLE contact_messages IS 'Contact form submissions for PulseFit AI support';
   COMMENT ON COLUMN contact_messages.status IS 'Message status: new, in_progress, or resolved';
   ```

3. **Verify the Table was Created**

   Run this query to confirm:
   ```sql
   SELECT * FROM contact_messages LIMIT 1;
   ```

   You should see the column headers even with no data.

## Testing the Contact Form

After setting up the database:

1. **Start your development server** (if not already running):
   ```bash
   npm run dev
   ```

2. **Navigate to the Contact Page**:
   - Open `http://localhost:3000/contact` in your browser

3. **Submit a Test Message**:
   - Fill in the form with test data
   - Click "Send Message"
   - You should see a success message

4. **Verify in Database**:
   Run this query in Neon SQL Editor:
   ```sql
   SELECT * FROM contact_messages ORDER BY created_at DESC LIMIT 5;
   ```

   Your test submission should appear in the results!

## Features Implemented

✅ **Backend Integration**
- Server action for form submission
- Database storage with PostgreSQL
- Proper error handling

✅ **Security & Validation**
- Email format validation
- Required field validation
- Minimum length requirements
- Rate limiting (5 submissions per hour per IP)

✅ **User Experience**
- Real-time form validation
- Clear success/error messages
- Loading states during submission
- Auto-reset after success
- Improved responsive alignment

✅ **Database Features**
- UUID primary keys
- Timestamps for tracking
- Status tracking (new, in_progress, resolved)
- IP address and user agent logging
- Optimized indexes for queries

## Viewing Contact Messages (Admin)

To view all contact messages in your database:

```sql
-- Get all messages
SELECT name, email, subject, created_at, status 
FROM contact_messages 
ORDER BY created_at DESC;

-- Count by status
SELECT status, COUNT(*) as count 
FROM contact_messages 
GROUP BY status;

-- Get recent unresolved messages
SELECT * FROM contact_messages 
WHERE status = 'new' 
ORDER BY created_at DESC;
```

## Next Steps

Consider building an admin dashboard to:
- View all contact messages
- Update message status
- Reply to inquiries
- Filter by status/date
