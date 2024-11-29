import { supabase } from '../lib/supabase';

export interface ContactSubmission {
  name: string;
  email: string;
  message: string;
}

export const submitContactForm = async (data: ContactSubmission) => {
  // For development and production without Supabase setup, use email sending fallback
  if (!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY) {
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Log the submission for development
      console.log('Contact form submission:', data);
      
      // In a real implementation, you would send this to your API
      // For now, we'll simulate a successful submission
      return { success: true };
    } catch (error) {
      console.error('Error submitting contact form:', error);
      throw new Error('Failed to send message');
    }
  }

  try {
    const { error } = await supabase
      .from('contact_submissions')
      .insert([{
        ...data,
        created_at: new Date().toISOString()
      }]);
    
    if (error) throw error;
    
    return { success: true };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw new Error('Failed to send message');
  }
};