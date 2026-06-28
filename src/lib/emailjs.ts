import emailjs from '@emailjs/browser';

// TODO: Add EmailJS credentials to your .env.local file
// NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
// NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
// NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

export const sendEmail = async (form: HTMLFormElement) => {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    console.warn('EmailJS credentials are not fully configured. Email will not be sent.');
    // Return a fake success for demonstration if keys are missing
    return new Promise((resolve) => setTimeout(() => resolve({ status: 200, text: 'Simulated success' }), 1000));
  }

  return emailjs.sendForm(serviceId, templateId, form, publicKey);
};
