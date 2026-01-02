import { Target, Users, Award } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
                About Us
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                Who are we
              </h2>
              <p className="text-muted-foreground text-xl leading-relaxed mb-8">
                Tanmet Technologies was formed by passionate people to transform the vision of businesses in the areas of Healthcare, HR, and Inventory. We deliver efficient and growth-accelerating solutions from website design, development, mobile apps to cloud solutions.Since 2012, we are committed to always achieving and pushing the level of our performance. We deliver end-to-end technology solutions from startups to small and medium enterprises.
              </p>

            </div>

            {/* Visual */}
            <div className="relative">
              <div className="relative mt-10">
                {/* Features */}
                <h3 className="font-display text-3xl font-bold text-foreground mb-8">
                  Our Approach
                </h3>
                <div className="space-y-10">
                  {[
                    {
                      icon: Target,
                      title: 'Understand Customer Needs',
                      description: 'We diligently understand every customer problem to deliver efficient, long-term solutions.',
                    },
                    {
                      icon: Users,
                      title: 'Be a Technology Partner',
                      description: "We believe in walking that extra mile to be our customers' trusted technology partner.",
                    },
                    {
                      icon: Award,
                      title: 'Excellence',
                      description: 'We continuously push ourselves to be better, keeping our customers ahead of competition.',
                    },
                  ].map((feature, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                        <feature.icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                        <p className="text-muted-foreground text-sm">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
          
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};