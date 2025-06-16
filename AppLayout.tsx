import React from 'react';
import { useAppContext } from '@/contexts/AppContext';
import { useIsMobile } from '@/hooks/use-mobile';
import Hero from './Hero';
import Services from './Services';
import OrderForm from './OrderForm';
import Footer from './Footer';

const AppLayout: React.FC = () => {
  const { sidebarOpen, toggleSidebar } = useAppContext();
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <OrderForm />
      <Footer />
    </div>
  );
};

export default AppLayout;