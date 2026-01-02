import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ServicesSection } from '@/components/ServicesSection';
import { TechnologySection } from '@/components/TechnologySection';
import { ProductsSection } from '@/components/ProductsSection';
import { ClientsSection } from '@/components/ClientsSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TechnologySection />
      <ProductsSection />
      <ClientsSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;