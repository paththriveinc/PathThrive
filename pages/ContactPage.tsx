
import React, { useState } from 'react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

// WhatsApp Icon Component
const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52s-.67-.816-.917-1.103c-.247-.287-.5-.312-.67-.312-.172 0-.37.025-.52.025-.148 0-.37.074-.568.371-.198.297-.768.768-.768 1.852 0 1.084.795 2.139.917 2.308.122.17.15.248.15.248l1.006 1.628c.075.124.15.248.224.372.076.124.15.248.225.372a2.73 2.73 0 001.799.975c.728.15 1.12.1 1.483-.125.362-.225 1.02-.697 1.167-.866.148-.17.297-.297.446-.496.149-.2.099-.348 0-.497s-.149-.173-.297-.297c-.149-.124-.297-.223-.297-.223zM12.05 2.01C6.55 2.01 2.07 6.48 2.07 11.98c0 1.79.462 3.485 1.256 4.962L2.072 22l5.193-1.34c1.42.742 3.038 1.156 4.787 1.156 5.498 0 9.97-4.47 9.97-9.97S17.55 2.01 12.05 2.01zm0 18.13c-1.612 0-3.14-.43-4.485-1.19l-.32-.188-3.328.86L4.01 16.34l-.202-.332a8.134 8.134 0 01-1.27-4.04c0-4.533 3.696-8.218 8.23-8.218 4.532 0 8.23 3.685 8.23 8.218 0 4.53-3.698 8.217-8.23 8.217z"></path>
  </svg>
);


const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formError, setFormError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (formError) setFormError(null); // Clear error when user starts typing
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError(null); 

    const { name, email, subject, message } = formData;
    const isNameEmpty = !name.trim();
    const isEmailEmpty = !email.trim();
    const isSubjectEmpty = !subject.trim(); 
    const isMessageEmpty = !message.trim();
    
    if (isNameEmpty || isEmailEmpty || isSubjectEmpty || isMessageEmpty) {
      setFormError("Please fill in all required fields.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
        setFormError("Please enter a valid email address.");
        return;
    }
    
    setFormError(null);

    const recipientEmail = 'paththriveinc@gmail.com';
    const emailSubject = subject.trim(); 
    const emailBody = message.trim();

    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    window.location.href = mailtoLink;

    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="text-center mb-12 animate-content-fade-in-up">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4">
          Get in Touch
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Have questions, want to book a consultation, or just say hello? We'd love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Contact Form */}
        <Card className="p-8 animate-content-fade-in-up" style={{animationDelay: '0.2s'}}>
          <h2 className="text-2xl font-semibold text-slate-800 mb-6">Send Us a Message</h2>
          
          {formError && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 border border-red-200 text-sm" role="alert"> {/* Removed rounded-md */}
              {formError}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name <span className="text-red-500">*</span></label>
              <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required
                     className="w-full px-4 py-2 border border-slate-300 shadow-sm focus:ring-[#5468FF] focus:border-[#5468FF]"  // Removed rounded-md
                     aria-invalid={formError && formData.name.trim() === '' ? 'true' : 'false'}
                     aria-describedby={formError && formData.name.trim() === '' ? 'name-error' : undefined}
              />
              {formError && formData.name.trim() === '' && <p id="name-error" className="text-xs text-red-600 mt-1">Name is required.</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address <span className="text-red-500">*</span></label>
              <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required
                     className="w-full px-4 py-2 border border-slate-300 shadow-sm focus:ring-[#5468FF] focus:border-[#5468FF]" // Removed rounded-md
                     aria-invalid={formError && (formData.email.trim() === '' || (formData.email.trim() !== '' && !/\S+@\S+\.\S+/.test(formData.email))) ? 'true' : 'false'}
                     aria-describedby={formError && (formData.email.trim() === '' || (formData.email.trim() !== '' && !/\S+@\S+\.\S+/.test(formData.email))) ? 'email-error' : undefined}
              />
              {formError && formData.email.trim() === '' && <p id="email-error" className="text-xs text-red-600 mt-1">Email is required.</p>}
              {formError && formData.email.trim() !== '' && !/\S+@\S+\.\S+/.test(formData.email) && <p id="email-error" className="text-xs text-red-600 mt-1">Please enter a valid email format.</p>}
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">Subject <span className="text-red-500">*</span></label>
              <input type="text" name="subject" id="subject" value={formData.subject} onChange={handleChange} required
                     className="w-full px-4 py-2 border border-slate-300 shadow-sm focus:ring-[#5468FF] focus:border-[#5468FF]" // Removed rounded-md
                     aria-invalid={formError && formData.subject.trim() === '' ? 'true' : 'false'}
                     aria-describedby={formError && formData.subject.trim() === '' ? 'subject-error' : undefined}
              />
              {formError && formData.subject.trim() === '' && <p id="subject-error" className="text-xs text-red-600 mt-1">Subject is required.</p>}
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message <span className="text-red-500">*</span></label>
              <textarea name="message" id="message" rows={4} value={formData.message} onChange={handleChange} required
                        className="w-full px-4 py-2 border border-slate-300 shadow-sm focus:ring-[#5468FF] focus:border-[#5468FF]" // Removed rounded-md
                        aria-invalid={formError && formData.message.trim() === '' ? 'true' : 'false'}
                        aria-describedby={formError && formData.message.trim() === '' ? 'message-error' : undefined}
              ></textarea>
              {formError && formData.message.trim() === '' && <p id="message-error" className="text-xs text-red-600 mt-1">Message is required.</p>}
            </div>
            <div>
              <Button type="submit" variant="primary" size="lg" className="w-full">
                Send Message
              </Button>
            </div>
          </form>
        </Card>

        {/* Consultation Booking & Direct Contact Card */}
        <Card className="p-8 bg-indigo-50 animate-content-fade-in-up" style={{animationDelay: '0.4s'}}>
          <h2 className="text-2xl font-semibold text-slate-800 mb-6">Book or Connect Instantly</h2>
          
          <p className="text-slate-700 mb-2">
            Schedule a 30-minute call to discuss your job search needs:
          </p>
          <a
            href="https://calendly.com/paththriveinc/30min"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Schedule a free 30-minute consultation on Calendly"
            className="block mb-6" 
          >
            <Button variant="primary" size="lg" className="w-full">
              Schedule on Calendly
            </Button>
          </a>

          <p className="text-slate-700 mb-2">
            Prefer a quick chat? Reach us on WhatsApp:
          </p>
          <a
            href="https://wa.me/917428430636" // Updated WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with PathThrive on WhatsApp"
            className="block"
          >
            <Button 
              variant="secondary" 
              size="lg" 
              className="w-full !bg-green-500 hover:!bg-green-600 !text-white flex items-center justify-center"
            >
              {/* WhatsAppIcon removed from here */}
              Chat on WhatsApp
            </Button>
          </a>
          
          <div className="mt-8 border-t border-indigo-200 pt-6">
            <h3 className="text-lg font-semibold text-slate-800 mb-3">Or, Traditional Contact</h3>
            <p className="text-slate-700 mb-1"><strong>Email:</strong> <a href="mailto:paththriveinc@gmail.com" className="text-[#5468FF] hover:underline">paththriveinc@gmail.com</a></p>
            <p className="text-slate-700"><strong>Phone:</strong> (732) 668-6171</p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ContactPage;
