'use client';

import { useState } from 'react';
import SectionHeading from '@/components/ui/section-heading';
import { FiMail, FiSend, FiMapPin, FiPhone, FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError('');
    
    try {
      // Burada gerçek bir form gönderimi yapılabilir
      // Örnek: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });
      
      // Simüle edilmiş başarılı gönderim
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitError('An error occurred while sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <SectionHeading 
          title="Contact Me"
          subtitle="Get in touch and let's work together"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8 animate-fade-in">
            <p className="text-lg text-foreground/90">
              I'm interested in freelance opportunities – especially ambitious or large projects. However, if you have other requests or questions, don't hesitate to contact me using the form.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <FiMail size={20} />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Email</p>
                  <a href="mailto:akira.info@gmail.com" className="font-medium hover:text-primary transition-colors">
                    akira.info@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <FiMapPin size={20} />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Location</p>
                  <p className="font-medium">Istanbul, Turkey</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <FiPhone size={20} />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Phone</p>
                  <p className="font-medium">+90 (123) 456 789</p>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-card rounded-xl border border-border">
              <h3 className="text-xl font-semibold mb-4">Let's Connect</h3>
              <p className="text-muted-foreground mb-4">
                Follow me on social media and stay updated with my latest projects and announcements.
              </p>
              <div className="flex space-x-3">
                <a 
                  href="https://github.com/akira" 
                  target="_blank" 
                  rel="noopener github"
                  className="p-3 bg-secondary rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <FiGithub size={20} />
                </a>
                <a 
                  href="https://twitter.com/akira" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-secondary rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <FiTwitter size={20} />
                </a>
                <a 
                  href="https://linkedin.com/in/akira" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-secondary rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <FiLinkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in delay-200">
              <form onSubmit={handleSubmit} className="bg-card rounded-xl p-6 border border-border shadow-lg">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-secondary/50 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-secondary/50 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your email"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-secondary/50 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Subject"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 bg-secondary/50 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2"></div>
                    ) : (
                      <FiSend className="mr-2" />
                    )}
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                  
                  {submitSuccess && (
                    <div className="p-3 bg-green-500/20 border border-green-500 rounded-md text-green-500">
                      Your message has been sent successfully. I'll get back to you soon!
                    </div>
                  )}
                  
                  {submitError && (
                    <div className="p-3 bg-red-500/20 border border-red-500 rounded-md text-red-500">
                      {submitError}
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Contact;