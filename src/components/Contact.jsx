import { useState } from 'react';
import { BiSend } from 'react-icons/bi';
import Laptop from './Laptop';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const sendEmail = () => {
    // Validate required fields
    if (!formData.name.trim() || !formData.email.trim()) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 4000);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('sending');

    // Use emailjs.send instead of sendForm to avoid form element
    emailjs.send(
      import.meta.env.VITE_SERVICE_ID, // Replace with your EmailJS Service ID
      import.meta.env.VITE_TEMPLATE_ID, // Replace with your EmailJS Template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      import.meta.env.VITE_PUBLIC_KEY // Replace with your EmailJS Public Key
    )
      .then(
        () => {
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
          });
          setSubmitStatus('success');
        },
        (error) => {
          console.error('EmailJS error:', error);
          setSubmitStatus('error');
        }
      )
      .finally(() => {
        setIsSubmitting(false);
        setTimeout(() => setSubmitStatus(null), 4000);
      });
  };

  return (
    <div className='flex flex-col md:flex-row p-5 justify-between font-serif'>
      <div className='w-full'>
        <h1 className='text-2xl md:text-3xl' style={{fontFamily:"incognito"}}>Contact Me</h1>
        <p>I'm always excited to connect, collaborate, or chat about new opportunities.
        Whether you have a question, a project idea, or just want to say hi — feel free to reach out! I'll get back to you as soon as I can.</p>
      </div>
      <div className="w-full max-w-md mx-auto mt-10 md:mt-0">
        {submitStatus === 'success' && (
          <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-md">
            Thank you for your message! We'll get back to you soon.
          </div>
        )}
        {submitStatus === 'error' && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
            Failed to send message. Please try again later.
          </div>
        )}
        {submitStatus === 'sending' && (
          <div className="mb-4 p-3 bg-blue-100 text-blue-700 rounded-md">
            Sending email...
          </div>
        )}
        
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your name"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-1 border h-10 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="your.email@example.com"
            />
          </div>
          
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Message subject"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="3"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type your message here..."
            />
          </div>
          
          <button
            onClick={sendEmail}
            disabled={isSubmitting}
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors duration-300 disabled:bg-blue-400"
          >
            {isSubmitting ? (
              <>
                <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                <span>Sending...</span>
              </>
            ) : (
              <>
                <BiSend/>
                <span>Send Message</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};