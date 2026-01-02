import { Building2 } from 'lucide-react';

const clients = [
  { name: 'CAG (Comptroller Audit General of India)', type: 'Government' },
  { name: 'Govt of Nagaland (NSDMA)', type: 'Government' },
  { name: 'Qalercosmetic.com', type: 'E-commerce' },
  { name: 'P&G Hospitals', type: 'Healthcare' },
  { name: 'Avanttec Medical Systems', type: 'Healthcare' },
  { name: 'Kissmineral SBD', type: 'Retail' },
];

export const ClientsSection = () => {
  return (
    <section id="clients" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
            Our Clientele
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-muted-foreground text-lg">
            We're proud to partner with organizations across government, healthcare, and enterprise sectors.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-border/50"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/10 transition-colors">
                  <Building2 className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1 leading-tight">{client.name}</h3>
                  <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full">
                    {client.type}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        {/* <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { value: '100%', label: 'Project Success Rate' },
            { value: '95%', label: 'Client Retention' },
            { value: '4.9/5', label: 'Client Satisfaction' },
            { value: '24/7', label: 'Support Available' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">{stat.value}</div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};