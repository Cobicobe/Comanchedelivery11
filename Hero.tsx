import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Truck, Clock, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center text-white mb-12">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            🚚 HomeTown Express
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Fast, Friendly Delivery Right to Your Door!
          </p>
          <Button 
            size="lg" 
            className="bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-8 py-4 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Order Now! 📦
          </Button>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <Card className="p-6 bg-gray-900 border-gray-700 text-white hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
            <div className="text-center">
              <Truck className="w-12 h-12 mx-auto mb-4 text-red-500" />
              <h3 className="text-xl font-bold mb-2 text-white">Fast Delivery</h3>
              <p className="text-gray-300">Same-day delivery across town!</p>
            </div>
          </Card>
          
          <Card className="p-6 bg-gray-900 border-gray-700 text-white hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
            <div className="text-center">
              <Clock className="w-12 h-12 mx-auto mb-4 text-red-500" />
              <h3 className="text-xl font-bold mb-2 text-white">24/7 Service</h3>
              <p className="text-gray-300">We're here when you need us!</p>
            </div>
          </Card>
          
          <Card className="p-6 bg-gray-900 border-gray-700 text-white hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
            <div className="text-center">
              <MapPin className="w-12 h-12 mx-auto mb-4 text-red-500" />
              <h3 className="text-xl font-bold mb-2 text-white">Local Knowledge</h3>
              <p className="text-gray-300">We know every street in town!</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Hero;