const technologies = [
  { name: 'Android', icon: '🤖', color: 'bg-green-500/10 text-green-600' },
  { name: 'iOS', icon: '🍎', color: 'bg-gray-500/10 text-gray-600' },
  { name: 'Oracle Cloud', icon: '☁️', color: 'bg-red-500/10 text-red-600' },
  { name: '.NET', icon: '💜', color: 'bg-purple-500/10 text-purple-600' },
  { name: 'React', icon: '⚛️', color: 'bg-cyan-500/10 text-cyan-600' },
  { name: 'Node.js', icon: '🟢', color: 'bg-green-500/10 text-green-600' },
  { name: 'Python', icon: '🐍', color: 'bg-yellow-500/10 text-yellow-600' },
  { name: 'Power BI', icon: '📊', color: 'bg-amber-500/10 text-amber-600' },
  { name: 'Tableau', icon: '📈', color: 'bg-blue-500/10 text-blue-600' },
  { name: 'SQL Server', icon: '🗃️', color: 'bg-red-500/10 text-red-600' },
];

export const TechnologySection = () => {
  return (
    <section id="technology" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
            Technology Stack
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Powered by Modern Technologies
          </h2>
          <p className="text-muted-foreground text-lg">
            We leverage industry-leading technologies to build robust, scalable, and future-ready solutions.
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 max-w-5xl mx-auto">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-center p-6 bg-card rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <div className={`w-14 h-14 rounded-xl ${tech.color} flex items-center justify-center text-2xl mb-3 group-hover:scale-110 transition-transform`}>
                {tech.icon}
              </div>
              <span className="text-sm font-medium text-foreground text-center">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};