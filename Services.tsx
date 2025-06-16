import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Services: React.FC = () => {
  const services = [
    {
      icon: '🛒',
      title: "Delbert's Grocery Store",
      description: 'Fresh groceries and essentials',
      price: '$5 Delivery Fee',
      color: 'bg-red-600'
    },
    {
      icon: '🏪',
      title: 'Dollar General',
      description: 'Everyday low prices on household items',
      price: '$5 Delivery Fee',
      color: 'bg-gray-600'
    },
    {
      icon: '🏪',
      title: 'Family Dollar',
      description: 'Value shopping for the whole family',
      price: '$5 Delivery Fee',
      color: 'bg-red-500'
    },
    {
      icon: '💊',
      title: "Thompson's Pharmacy",
      description: 'Prescriptions and health items',
      price: '$5 + Medicine Cost',
      color: 'bg-gray-700'
    },
    {
      icon: '⛽',
      title: 'Loves Convenient Store',
      description: 'Gas station and convenience items',
      price: '$5 Delivery Fee',
      color: 'bg-red-700'
    },
    {
      icon: '🏪',
      title: "Nak's Convenient Store",
      description: 'Local convenience store pickup',
      price: '$5 Delivery Fee',
      color: 'bg-gray-600'
    },
    {
      icon: '🥤',
      title: 'Thirstys Cold Pop Shop',
      description: 'Cold drinks and refreshments',
      price: '$5 Delivery Fee',
      color: 'bg-red-600'
    },
    {
      icon: '🍔',
      title: 'Sonic Drive-Thru',
      description: 'Fast food delivery service',
      price: '$5 Delivery Fee',
      color: 'bg-red-800'
    },
    {
      icon: '👕',
      title: 'Laundry Service',
      description: 'Wash, dry, pickup & drop off',
      price: '$5 + $3 Wash + $3 Dry',
      color: 'bg-gray-700'
    },
    {
      icon: '🚗',
      title: 'In Town Rides',
      description: 'Local transportation service',
      price: '$5 Flat Rate',
      color: 'bg-red-600'
    }
  ];

  return (
    <div className="bg-black py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            🌟 Our Services
          </h2>
          <p className="text-xl text-gray-300">
            Local businesses we deliver from!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-gray-700 bg-gray-900"
            >
              <CardHeader className="text-center">
                <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <span className="text-3xl">{service.icon}</span>
                </div>
                <CardTitle className="text-lg font-bold text-white">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                <Badge 
                  variant="secondary" 
                  className="bg-red-600 hover:bg-red-700 text-white font-bold px-3 py-1 text-xs"
                >
                  {service.price}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;