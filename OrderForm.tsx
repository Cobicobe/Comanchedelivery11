import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const OrderForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    service: '',
    description: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Order Submitted! 🎉",
      description: "We'll contact you within 15 minutes!",
    });
    setFormData({ name: '', phone: '', address: '', service: '', description: '' });
  };

  return (
    <div className="bg-black py-16">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto shadow-2xl border-gray-700 bg-gray-900">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-white">
              📋 Place Your Order
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-white">Full Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    className="bg-gray-800 border-gray-600 text-white focus:border-red-500"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-white">Phone Number</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                    className="bg-gray-800 border-gray-600 text-white focus:border-red-500"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="address" className="text-white">Delivery Address</Label>
                <Input
                  id="address"
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                  required
                  className="bg-gray-800 border-gray-600 text-white focus:border-red-500"
                />
              </div>
              
              <div>
                <Label htmlFor="service" className="text-white">Service Type</Label>
                <Select onValueChange={(value) => setFormData({...formData, service: value})}>
                  <SelectTrigger className="bg-gray-800 border-gray-600 text-white focus:border-red-500">
                    <SelectValue placeholder="Choose a service" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-600">
                    <SelectItem value="delberts">🛒 Delbert's Grocery Store</SelectItem>
                    <SelectItem value="dollargeneral">🏪 Dollar General</SelectItem>
                    <SelectItem value="familydollar">🏪 Family Dollar</SelectItem>
                    <SelectItem value="thompsons">💊 Thompson's Pharmacy</SelectItem>
                    <SelectItem value="loves">⛽ Loves Convenient Store</SelectItem>
                    <SelectItem value="naks">🏪 Nak's Convenient Store</SelectItem>
                    <SelectItem value="thirstys">🥤 Thirstys Cold Pop Shop</SelectItem>
                    <SelectItem value="sonic">🍔 Sonic Drive-Thru</SelectItem>
                    <SelectItem value="laundry">👕 Laundry Service</SelectItem>
                    <SelectItem value="rides">🚗 In Town Rides</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="description" className="text-white">Order Details</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  placeholder="Tell us what you need delivered or picked up..."
                  className="bg-gray-800 border-gray-600 text-white focus:border-red-500"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 text-lg rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                🚀 Submit Order
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OrderForm;