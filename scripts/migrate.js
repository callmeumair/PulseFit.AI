#!/usr/bin/env node

const { neon } = require('@neondatabase/serverless');
const fs = require('fs');
const path = require('path');

async function migrate() {
    try {
        // Read DATABASE_URL from .env.local
        const envPath = path.join(__dirname, '..', '.env.local');
        const envContent = fs.readFileSync(envPath, 'utf8');
        const match = envContent.match(/DATABASE_URL=(.+)/);

        if (!match) {
            console.error('❌ DATABASE_URL not found in .env.local');
            process.exit(1);
        }

        const databaseUrl = match[1].trim();
        console.log('🔗 Connecting to Neon database...');

        // Create SQL client
        const sql = neon(databaseUrl);

        // Read schema file
        const schemaPath = path.join(__dirname, '..', 'db', 'schema.sql');
        const schema = fs.readFileSync(schemaPath, 'utf8');

        console.log('📝 Running migration...');

        // Split schema into individual statements and execute them
        const statements = schema
            .split(';')
            .map(s => s.trim())
            .filter(s => s.length > 0 && !s.startsWith('--'));

        for (const statement of statements) {
            if (statement) {
                await sql`${sql.unsafe(statement)}`;
            }
        }

        console.log('✅ Migration completed successfully!');
        console.log('');
        console.log('Next steps:');
        console.log('1. Restart your dev server: npm run dev');
        console.log('2. Test the waitlist signup at http://localhost:3000');

    } catch (error) {
        console.error('❌ Migration failed:', error.message);
        process.exit(1);
    }
}

migrate();
