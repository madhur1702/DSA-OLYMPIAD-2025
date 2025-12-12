import { Brain, Bug, Code } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Brain,
      title: "Quiz Round",
      description: "Test your theoretical knowledge of data structures and algorithms",
      color: "from-primary to-blue-400",
    },
    {
      icon: Bug,
      title: "Debugging Round",
      description: "Hunt down bugs and fix code under time pressure",
      color: "from-accent to-purple-400",
    },
    {
      icon: Code,
      title: "Problem Solving",
      description: "Solve competitive programming challenges on DSA",
      color: "from-primary to-accent",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--neon-purple)/0.1),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About the DSA Olympiad
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A three-round competitive programming challenge designed to test your algorithmic thinking, 
            debugging skills, and problem-solving abilities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl border border-primary/20 bg-glass/30 backdrop-blur-md hover:border-primary/50 transition-all duration-500 animate-slide-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Icon */}
              <div className="relative mb-6">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${feature.color} group-hover:animate-glow-pulse`}>
                  <feature.icon className="w-8 h-8 text-background" />
                </div>
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
