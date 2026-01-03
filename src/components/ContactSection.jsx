import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent("Website Enquiry");
    const body = encodeURIComponent(
      `Name: ${formData.name}
      Email: ${formData.email}
      Phone: ${formData.phone}

      Message:
      ${formData.message}`
    );

    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isMobile) {
      // 📱 Mobile → Gmail App (via mailto)
      window.location.href = `mailto:05ranjandibya@gmail.com?subject=${subject}&body=${body}`;
    } else {
      // 💻 Desktop → Gmail Web
      window.open(
        `https://mail.google.com/mail/?view=cm&fs=1&to=05ranjandibya@gmail.com&su=${subject}&body=${body}`,
        "_blank"
      );
    }
    // toast({
    //   title: "contact us in gmail contactus@tanmet.in!",
    //   description: "Thank you for reaching out.",
    // });
    // setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/919876543210?text=Hello! I am interested in your services.', '_blank');
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, hsl(215, 70%, 12%) 0%, hsl(215, 50%, 20%) 50%, hsl(215, 70%, 12%) 100%)' }}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-accent/15 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
              Get in Touch
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Let's Make Something Great Together
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Have a project in mind? Get in touch and let's discuss how we can help transform your business.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card rounded-3xl p-8 lg:p-10 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                    className="h-12"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="min-h-32 resize-none"
                  />
                </div>

                <Button type="submit" variant="accent" size="lg" className="w-full">
                  <a href="mailto:contactus@tanmet.in">Send Message</a>
                  <Send className="w-5 h-5" />
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col justify-center space-y-10">
              {/* Contact Cards */}
              <div className="space-y-4">
                {[
                  {
                    icon: Mail,
                    title: 'Email Us',
                    value: 'contactus@tanmet.in',
                    href: 'mailto:contactus@tanmet.in',
                  },
                  {
                    icon: MapPin,
                    title: 'Address',
                    value: 'No.22, Journalist Colony, Srinivasapuram, Thiruvanmiyur, chennai 600041',
                    href: '#',
                  },
                ].map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-2 hover:bg-white/15 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                      <contact.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className='flex-1'>
                      <div className="text-white/60 text-sm">{contact.title}</div>
                      <div className="text-white text-sm">{contact.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-8 rounded-xl overflow-hidden h-[40vh]  sm:flex-1 card-glass">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.5879654772974!2d80.25384!3d13.0037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAwJzEzLjMiTiA4MMKwMTUnMTMuOCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Tanmet Technologies Location"
                />
              </div>

              {/* WhatsApp Button */}
              {/* <Button
                onClick={openWhatsApp}
                size="lg"
                className="w-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </Button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};