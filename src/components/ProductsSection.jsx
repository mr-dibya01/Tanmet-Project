import { Check, Smartphone, Calendar, MapPin, Video, CreditCard, FileText, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import cabinzImage from '@/assets/cabinz-app.png';
import klinik2uImage from '@/assets/klinik2u-app.png';

const products = [
  {
    name: 'Cabinz',
    tagline: 'Workspace Management App',
    description: 'CABINZ is a workspace management platform built to cater to the demands of the flexible workforce of today. Working professionals can easily locate workspaces in their location and rent it as needed.',
    image: cabinzImage,
    features: [
      { icon: MapPin, text: 'QR/Geo attendance tracking' },
      { icon: Users, text: 'Workspace & employee management' },
      { icon: Calendar, text: 'Easy booking system' },
      { icon: Smartphone, text: 'Android & iOS Support' },
    ],
    gradient: 'from-blue-600 to-indigo-600',
    bgGradient: 'from-blue-50 to-indigo-50',
  },
  {
    name: 'Klinik2U',
    tagline: 'Telemedicine App',
    description: 'Comprehensive telemedicine platform connecting patients with healthcare professionals seamlessly.',
    image: klinik2uImage,
    features: [
      { icon: Video, text: 'Doctor video consultation' },
      { icon: Calendar, text: 'Online appointment booking' },
      { icon: CreditCard, text: 'Online payment' },
      { icon: FileText, text: 'Digital prescription' },
    ],
    gradient: 'from-emerald-600 to-teal-600',
    bgGradient: 'from-emerald-50 to-teal-50',
  },
];

export const ProductsSection = () => {
  return (
    <section id="products" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
            Products Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Featured Products
          </h2>
          <p className="text-muted-foreground text-lg">
            Innovative solutions designed to solve real-world business challenges with cutting-edge technology.
          </p>
        </div>

        <div className="space-y-12 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${product.bgGradient} p-8 lg:p-10`}
            >
              {/* Background decoration */}
              <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${product.gradient} opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2`} />
              
              <div className="relative grid lg:grid-cols-2 gap-8 items-center">
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  {/* Header */}
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${product.gradient} text-white text-sm font-medium mb-6`}>
                    <Smartphone className="w-4 h-4" />
                    {product.tagline}
                  </div>

                  <h3 className="text-3xl font-bold text-foreground mb-4">{product.name}</h3>
                  <p className="text-muted-foreground text-lg mb-8 max-w-md">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3 bg-card/80 backdrop-blur-sm rounded-xl p-4">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${product.gradient} flex items-center justify-center`}>
                          <feature.icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-foreground font-medium text-sm">{feature.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* <Button variant="default" size="lg">
                    Learn More
                  </Button> */}
                </div>

                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} flex justify-center`}>
                  <img 
                    src={product.image} 
                    alt={`${product.name} App Screenshots`}
                    className="rounded-2xl shadow-lg max-w-full h-auto max-h-96 object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};