import { supabase } from '../lib/supabase';

export interface ContactSubmission {
  name: string;
  email: string;
  message: string;
}

export const submitContactForm = async (data: ContactSubmission) => {
  try {
    const { error } = await supabase
      .from('contact_submissions')
      .insert([data]);
    
    if (error) throw error;
    
    return { success: true };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    // In development with mock client, still return success
    if (!import.meta.env.VITE_SUPABASE_URL) {
      return { success: true };
    }
    throw error;
  }
};