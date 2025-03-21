import emailjs from '@emailjs/browser';

interface EmailData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const sendEmail = async (data: EmailData) => {
  try {
    // Ensure all values are strings
    const formattedData: Record<string, string> = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message,
    };

    const response = await emailjs.send(
      'service_y6ubxfw',   // Your EmailJS service ID
      'template_qou6e2c',  // Your EmailJS template ID
      formattedData,       // Ensure correct data structure
      'pBInar79GZWbUBmxW'  // Your EmailJS public key
    );

    return response;
  } catch (error) {
    console.error('Email sending failed:', error);
    throw error;
  }
};
