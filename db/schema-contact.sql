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
