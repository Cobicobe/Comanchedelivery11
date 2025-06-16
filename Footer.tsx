import React from 'react';
import { Card } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4 text-red-500">
              🚚 HomeTown Express
            </h3>
            <p className="text-gray-300">
              Your trusted local delivery service since 2024!
            </p>
          </div>
          
          <Card className="bg-gray-900 border-gray-700 p-4">
            <div className="flex items-center space-x-3 text-white">
              <Phone className="w-6 h-6 text-red-500" />
              <div>
                <p className="font-semibold text-white">Call Us</p>
                <p className="text-sm text-gray-300">(555) 123-FAST</p>
              </div>
            </div>
          </Card>
          
          <Card className="bg-gray-900 border-gray-700 p-4">
            <div className="flex items-center space-x-3 text-white">
              <Mail className="w-6 h-6 text-red-500" />
              <div>
                <p className="font-semibold text-white">Email Us</p>
                <p className="text-sm text-gray-300">hello@hometown.delivery</p>
              </div>
            </div>
          </Card>
          
          <Card className="bg-gray-900 border-gray-700 p-4">
            <div className="flex items-center space-x-3 text-white">
              <Clock className="w-6 h-6 text-red-500" />
              <div>
                <p className="font-semibold text-white">Hours</p>
                <p className="text-sm text-gray-300">24/7 Service</p>
              </div>
            </div>
          </Card>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <MapPin className="w-5 h-5 text-red-500" />
            <span className="text-gray-300">Serving all of HomeTown and surrounding areas</span>
          </div>
          <p className="text-gray-400 text-sm">
            © 2024 HomeTown Express. Made with ❤️ for our community.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;