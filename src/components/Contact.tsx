
import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Message sent! Thank you for reaching out.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 bg-gray-800 text-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Let's Connect
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Ready to collaborate on your next project? Let's discuss how we can bring your ideas to life with cutting-edge web technologies.
            </p>
            
            <div className="space-y-4">
              <a href="mailto:bhanudahiya8@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors duration-300 group">
                <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center group-hover:bg-purple-600 transition-colors duration-300">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p>bhanudahiya8@gmail.com</p>
                </div>
              </a>
              
              <a href="https://linkedin.com/in/bhanupratap1" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors duration-300 group">
                <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                  <Linkedin size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">LinkedIn</p>
                  <p>bhanupratap1</p>
                </div>
              </a>
              
              <a href="https://github.com/bhanudahiyaa" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors duration-300 group">
                <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center group-hover:bg-gray-600 transition-colors duration-300">
                  <Github size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">GitHub</p>
                  <p>bhanudahiyaa</p>
                </div>
              </a>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-transparent focus:border-purple-500 focus:outline-none peer"
                  placeholder="Your Name"
                />
                <label className="absolute left-4 -top-2.5 bg-gray-800 px-2 text-sm text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-purple-400 peer-focus:text-sm">
                  Your Name
                </label>
              </div>
              
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-transparent focus:border-purple-500 focus:outline-none peer"
                  placeholder="Your Email"
                />
                <label className="absolute left-4 -top-2.5 bg-gray-800 px-2 text-sm text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-purple-400 peer-focus:text-sm">
                  Your Email
                </label>
              </div>
              
              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-transparent focus:border-purple-500 focus:outline-none peer resize-none"
                  placeholder="Your Message"
                />
                <label className="absolute left-4 -top-2.5 bg-gray-800 px-2 text-sm text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-purple-400 peer-focus:text-sm">
                  Your Message
                </label>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
              >
                Send Message <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
