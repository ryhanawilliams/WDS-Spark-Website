import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';

const WaitlistSignUp = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleBack = () => {
    navigate('/');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!firstName || !lastName || !email) {
      alert('Please fill in all fields');
      return;
    }

    setIsSubmitting(true);

    // Confirmation email body for the user
    const confirmationEmailBody = `Hi there,

Thanks for joining the waitlist for Spark, Western Developer Society's 24-hour hackathon and case competition. Happening at Western University from January 30th - February 1st 2026. 

You're all set. As soon as applications open, you'll be the first to know. Keep an eye on your inbox for updates, key dates, and everything you'll need to get ready for Spark.

If you have any questions in the meantime, feel free to reply to this email.

Can't wait to share more soon, get ready to create something big. 🔥⚡

Best,

WDS Externals Team`;

    // Notification email body for ryhana.williams0@gmail.com
    const notificationEmailBody = `New Waitlist Signup:

Name: ${firstName} ${lastName}
Email: ${email}

They have been added to the Spark waitlist.`;

    // EmailJS configuration from environment variables
    // See EMAILJS_SETUP.md for detailed setup instructions
    const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
    const EMAILJS_CONFIRMATION_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_CONFIRMATION_TEMPLATE_ID || 'YOUR_CONFIRMATION_TEMPLATE_ID';
    const EMAILJS_NOTIFICATION_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_NOTIFICATION_TEMPLATE_ID || 'YOUR_NOTIFICATION_TEMPLATE_ID';
    const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

    const isEmailJSConfigured = EMAILJS_PUBLIC_KEY !== 'YOUR_PUBLIC_KEY' && 
                                 EMAILJS_SERVICE_ID !== 'YOUR_SERVICE_ID' &&
                                 EMAILJS_CONFIRMATION_TEMPLATE_ID !== 'YOUR_CONFIRMATION_TEMPLATE_ID' &&
                                 EMAILJS_NOTIFICATION_TEMPLATE_ID !== 'YOUR_NOTIFICATION_TEMPLATE_ID';

    try {
      if (isEmailJSConfigured) {
        // Initialize EmailJS
        emailjs.init(EMAILJS_PUBLIC_KEY);
        
        // Send confirmation email to the user
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_CONFIRMATION_TEMPLATE_ID,
          {
            to_email: email,
            to_name: `${firstName} ${lastName}`,
            from_email: 'ryhana.williams0@gmail.com',
            from_name: 'WDS Externals Team',
            subject: "You're on the Spark Waitlist! ⚡",
            message: confirmationEmailBody,
            reply_to: 'ryhana.williams0@gmail.com'
          }
        );

        // Send notification email to ryhana.williams0@gmail.com
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_NOTIFICATION_TEMPLATE_ID,
          {
            to_email: 'ryhana.williams0@gmail.com',
            to_name: 'WDS Externals Team',
            from_email: 'ryhana.williams0@gmail.com',
            from_name: 'Spark Waitlist',
            subject: `New Waitlist Signup: ${firstName} ${lastName}`,
            message: notificationEmailBody,
            user_name: `${firstName} ${lastName}`,
            user_email: email
          }
        );
        
        alert(`Successfully joined the waitlist, ${firstName}! Check your email for confirmation.`);
        // Reset form
        setFirstName('');
        setLastName('');
        setEmail('');
      } else {
        // Fallback: Use mailto to send notification to owner
        const subject = encodeURIComponent(`New Waitlist Signup: ${firstName} ${lastName}`);
        const body = encodeURIComponent(notificationEmailBody);
        window.location.href = `mailto:ryhana.williams0@gmail.com?subject=${subject}&body=${body}`;
        alert('EmailJS not configured yet. Please check EMAILJS_SETUP.md for setup instructions. A notification email will open in your email client.');
      }
    } catch (error) {
      console.error('Email sending failed:', error);
      alert('There was an error sending the email. Please try again or contact support.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image - Fixed, no scrolling */}
      <img 
        src="/assets/waitlist sign up.png" 
        alt="Waitlist Sign Up Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Back Button - Top Right Corner */}
      <button
        onClick={handleBack}
        className="absolute top-8 right-8 z-50 bg-white bg-opacity-80 hover:bg-opacity-100 text-dark-green font-metropolis font-bold px-6 py-3 rounded-lg shadow-lg transition-all duration-200 hover:scale-105"
      >
        ← Back
      </button>

      {/* White Form Card with Shadow - Scaled Up */}
      <div className="absolute inset-0 flex items-center justify-center z-40">
        <div className="bg-white rounded-lg shadow-2xl p-12 w-full max-w-2xl mx-4">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* First Name Input */}
            <div>
              <label htmlFor="firstName" className="block text-dark-green font-metropolis font-semibold mb-3 text-xl">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:border-dark-green font-metropolis text-gray-800"
                placeholder="Enter your first name"
              />
            </div>

            {/* Last Name Input */}
            <div>
              <label htmlFor="lastName" className="block text-dark-green font-metropolis font-semibold mb-3 text-xl">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:border-dark-green font-metropolis text-gray-800"
                placeholder="Enter your last name"
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-dark-green font-metropolis font-semibold mb-3 text-xl">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:border-dark-green font-metropolis text-gray-800"
                placeholder="Enter your email"
              />
            </div>

            {/* Join Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-dark-green hover:bg-green-700 text-white font-metropolis font-bold py-4 px-8 rounded-lg text-xl shadow-lg transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Join'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WaitlistSignUp;

