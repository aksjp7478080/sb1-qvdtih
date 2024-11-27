import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Create a mock client for development if environment variables are missing
const createMockClient = () => {
  console.warn('⚠️ Using mock Supabase client. Contact form submissions will not be saved.');
  return {
    from: () => ({
      insert: async () => ({ error: null }),
    }),
  };
};

export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : createMockClient() as any;