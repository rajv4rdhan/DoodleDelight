import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Get in Touch</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Information</h2>
            <div className="flex items-center space-x-4 mb-6">
              <MapPin className="h-6 w-6 text-purple-600" />
              <span className="text-gray-600">123 Main Street, Anytown India</span>
            </div>
            <div className="flex items-center space-x-4 mb-6">
              <Mail className="h-6 w-6 text-purple-600" />
              <span className="text-gray-600">info@kidscolor.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="h-6 w-6 text-purple-600" />
              <span className="text-gray-600">+91 8232323223</span>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Send Us a Message</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-600 font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-600 font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-600 font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;