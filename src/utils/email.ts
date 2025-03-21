import emailjs from '@emailjs/browser';

interface EmailData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const sendEmail = async (data: EmailData) => {
  try {
   
    const formattedData: Record<string, unknown> = { ...data };

    const response = await emailjs.send(
      'service_uhnmdsj',
      'template_2ggu9mf',
      formattedData, 
      'ZyoKGWMmWOuZWgoY0'
    );
    
    return response;
  } catch (error) {
    console.error('Email sending failed:', error);
    throw error;
  }
};
