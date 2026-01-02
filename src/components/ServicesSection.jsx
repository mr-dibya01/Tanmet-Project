import { BarChart3, Database, Code, Smartphone, ShoppingCart, Link, ArrowUpRight,  } from 'lucide-react';


const services = [
  {
    icon: BarChart3,
    title: 'Business Intelligence & Analytics',
    description: "Data-drive, rapid decision-making is crucial for businesses to deliver the right information when it’s needed. We help businesses  harness the power of data, and apply intelligence on it to deliver actionable insights",
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Database,
    title: "Oracle Products – HRMS, Finance, SCM",
    description: 'We are specialist in Human Capital Management, Financial Accounting Hub,PIM',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Code,
    title: "Software Development",
    description: "Software applications are the basic building block in today’s competitive business world. Whether it is large corporations or smaller organizations, we provide solutions for every business need.",
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: 'We have extensive experience in creating high performing, user-friendly, feature-rich, and cross-platform mobile applications',
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    icon: ShoppingCart,
    title: "eCommerce Solutions",
    description: "Ecommerce solutions that are engaging, responsive, user-friendly, and SEO optimized for various business verticals.",
    gradient: 'from-green-400 via-emerald-500 to-teal-500',
  },
  {
    icon: Link,
    title: "Blockchain",
    description: "We offer end-to-end blockchain application development services to build reliable blockchain solutions that provide traceability and security of your data and transactions",
    gradient: 'from-indigo-600 via-violet-600 to-fuchsia-500',
  }
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What We Offer
          </h2>
          <p className="text-muted-foreground text-lg">
            We offer complete technology solutions for your unique business challenges, allowing you to focus on growing your business. 
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Link */}
              {/* <div className="flex items-center gap-2 text-accent font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more <ArrowUpRight className="w-4 h-4" />
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};