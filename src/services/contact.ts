import { supabase } from '../lib/supabase';

export interface ContactSubmission {
  name: string;
  email: string;
  message: string;
}

export const submitContactForm = async (data: ContactSubmission) => {
  const { error } = await supabase
    .from('contact_submissions')
    .insert([data]);
  
  if (error) throw error;
  
  return { success: true };
};