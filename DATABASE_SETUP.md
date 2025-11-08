# Database Setup Guide

## Automatic Setup (Recommended)

The SQL scripts in the `/scripts` folder will automatically set up your database tables. v0 can execute these scripts directly.

## What Gets Created

### 1. Profiles Table (`public.profiles`)
- Extends the built-in `auth.users` table
- Stores additional user information like full name and avatar
- Automatically creates a profile when a user signs up
- **Columns:**
  - `id` (UUID) - References auth.users.id
  - `email` (TEXT)
  - `full_name` (TEXT)
  - `avatar_url` (TEXT)
  - `created_at` (TIMESTAMP)
  - `updated_at` (TIMESTAMP)

### 2. Posts Table (`public.posts`) - Example
- Example table for storing user posts
- You can customize or remove this based on your needs
- **Columns:**
  - `id` (UUID) - Primary key
  - `user_id` (UUID) - References auth.users.id
  - `title` (TEXT)
  - `content` (TEXT)
  - `created_at` (TIMESTAMP)
  - `updated_at` (TIMESTAMP)

## Security (Row Level Security)

All tables have RLS enabled with policies:
- Users can only view/edit their own data
- Posts are publicly viewable but only editable by owners

## How to Add More Tables

Create a new SQL file in `/scripts` folder with naming pattern:
`003_create_your_table_name.sql`

Example structure:
\`\`\`sql
CREATE TABLE IF NOT EXISTS public.your_table (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  -- your columns here
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE public.your_table ENABLE ROW LEVEL SECURITY;

-- Add your policies here
CREATE POLICY "policy_name"
  ON public.your_table
  FOR SELECT
  USING (auth.uid() = user_id);
\`\`\`

## Important Notes

- **Auth Tables**: Supabase automatically creates `auth.users` table - don't create it manually
- **RLS is Required**: Always enable Row Level Security for data protection
- **Policies**: Define who can access what data
- **Triggers**: Automatically create profiles when users sign up
