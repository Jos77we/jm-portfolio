import { useState } from 'react';
import { Send, Mail } from 'lucide-react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { sendEmail } from '../../utils/email';
import FormField from './FormField';

interface FormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
  channel: string;
}

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  phone: Yup.string(),
  message: Yup.string().required('Message is required'),
  channel: Yup.string().required('Please select a contact method'),
});

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const formik = useFormik<FormValues>({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
      channel: 'email',
    },
    validationSchema,
    onSubmit: async (values) => {
      setIsSubmitting(true);
      setSubmitStatus('idle');
      
      try {
        await sendEmail(values);
        setSubmitStatus('success');
        formik.resetForm();
      } catch (error) {
        console.error('Error during form submission:', error);
        setSubmitStatus('error');
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      {submitStatus === 'success' && (
        <div className="mb-4 p-4 bg-green-50 text-green-700 rounded-lg">
          Message sent successfully!
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="mb-4 p-4 bg-red-50 text-red-700 rounded-lg">
          Failed to send message. Please try again later.
        </div>
      )}

      <form onSubmit={formik.handleSubmit} className="space-y-6">
        <FormField
          id="name"
          label="Name"
          placeholder="Enter your name"
          formik={formik}
        />
        
        <FormField
          id="email"
          label="Email"
          type="email"
          placeholder="Enter your email"
          formik={formik}
        />
        
        <FormField
          id="phone"
          label="Phone Number"
          type="tel"
          placeholder="Enter your phone number"
          formik={formik}
        />
        
        <FormField
          id="message"
          label="Message"
          placeholder="Type your message here..."
          formik={formik}
          isTextArea
        />

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Preferred Contact Method
          </label>
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                {...formik.getFieldProps('channel')}
                value="email"
                className="w-4 h-4 text-blue-600"
              />
              <Mail className="w-4 h-4 ml-2 mr-1" />
              <span className="ml-1">Email</span>
            </label>
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
        >
          {isSubmitting ? (
            <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            <>
              <Send className="w-5 h-5 mr-2" />
              Send Message
            </>
          )}
        </button>
      </form>
    </div>
  );
}