-- PulseFit AI Waitlist Schema
-- Database: Neon PostgreSQL
-- Purpose: Early access signup and waitlist management

CREATE TABLE IF NOT EXISTS waitlist_signups (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL UNIQUE,
  source TEXT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  ip_address TEXT NULL,
  user_agent TEXT NULL,
  
  CONSTRAINT valid_status CHECK (status IN ('pending', 'invited', 'onboarded'))
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_waitlist_created_at ON waitlist_signups(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_waitlist_status ON waitlist_signups(status);
CREATE INDEX IF NOT EXISTS idx_waitlist_source ON waitlist_signups(source);

-- Comments for documentation
COMMENT ON TABLE waitlist_signups IS 'Early access waitlist signups for PulseFit AI';
COMMENT ON COLUMN waitlist_signups.source IS 'CTA source: hero_cta, footer_cta, etc.';
COMMENT ON COLUMN waitlist_signups.status IS 'Signup status: pending, invited, or onboarded';
