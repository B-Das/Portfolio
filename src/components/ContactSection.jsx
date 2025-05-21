import React, { useState, useRef } from 'react';
import { Mail, MapPin, Linkedin, Twitter, Github, Send } from 'lucide-react';
import { cn } from '../lib/utils';
import emailjs from '@emailjs/browser';

export const ContactSection = () => {
  // Form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  // Error state
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');
  
  // Submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null
  
  // Form reference for EmailJS
  const form = useRef();
  
  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Clear previous errors
    setNameError('');
    setEmailError('');
    setMessageError('');
    setSubmitStatus(null);
    
    // Validation flag
    let isValid = true;
    
    // Name validation
    if (!name.trim()) {
      setNameError('Please enter your name');
      isValid = false;
    }
    
    // Email validation
    if (!email.trim()) {
      setEmailError('Please enter your email');
      isValid = false;
    } else if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address');
      isValid = false;
    }
    
    // Message validation
    if (!message.trim()) {
      setMessageError('Please enter your message');
      isValid = false;
    }
    
    // If validation fails, stop here
    if (!isValid) {
      return;
    }
    
    // Set submitting state to true
    setIsSubmitting(true);
    
    try {
      // Send email using EmailJS
      // For Vite, environment variables must be prefixed with VITE_
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';
      
      await emailjs.sendForm(
        serviceId,
        templateId,
        form.current,
        publicKey
      );
      
      // Success handling
      setSubmitStatus('success');
      
      // Clear form fields
      setName('');
      setEmail('');
      setMessage('');
      
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get in <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information Column */}
          <div className="space-y-8 flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">Contact Information</h3>
            
            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a 
                    href="mailto:hello@example.com" 
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    hello@example.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">Kolkata, IN</p>
                </div>
              </div>
            </div>
            
            <div className="pt-8 w-full flex flex-col items-center md:items-start">
              <h4 className="font-medium mb-4 text-center md:text-left">Connect with me</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/in/biraj-das-02" 
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-card hover:bg-card/80 p-3 rounded-full transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={20} />
                </a>
                {/* <a 
                  href="https://twitter.com/yourusername" 
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-card hover:bg-card/80 p-3 rounded-full transition-colors"
                  aria-label="Twitter Profile"
                >
                  <Twitter size={20} />
                </a> */}
                <a 
                  href="https://github.com/B-Das" 
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-card hover:bg-card/80 p-3 rounded-full transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form Column */}
          <div className="bg-card p-8 rounded-lg shadow-md border border-border/40">
            <h3 className="text-2xl font-semibold mb-6">Send a message</h3>
            
            {/* Status messages */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-3 bg-green-100 text-green-800 rounded-md">
                Message sent successfully! Thank you for reaching out.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-6 p-3 bg-red-100 text-red-800 rounded-md">
                Failed to send message. Please try again later.
              </div>
            )}
            
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Your name</label>
                <input 
                  type="text" 
                  id="name"
                  name="from_name" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={cn(
                    "w-full px-4 py-3 rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-primary",
                    nameError ? "border-red-500" : "border-border"
                  )}
                  placeholder="Your name"
                />
                {nameError && <p className="mt-1 text-sm text-red-500">{nameError}</p>}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Your email</label>
                <input 
                  type="email" 
                  id="email"
                  name="from_email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={cn(
                    "w-full px-4 py-3 rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-primary",
                    emailError ? "border-red-500" : "border-border"
                  )}
                  placeholder="your.email@example.com"
                />
                {emailError && <p className="mt-1 text-sm text-red-500">{emailError}</p>}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Your message</label>
                <textarea 
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="4" 
                  className={cn(
                    "w-full px-4 py-3 rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none",
                    messageError ? "border-red-500" : "border-border"
                  )}
                  placeholder="Hello, I'd like to talk about..."
                ></textarea>
                {messageError && <p className="mt-1 text-sm text-red-500">{messageError}</p>}
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2",
                  isSubmitting && "opacity-70 cursor-not-allowed"
                )}
              >
                {isSubmitting ? (
                  <>
                    <span className="inline-block h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}; 