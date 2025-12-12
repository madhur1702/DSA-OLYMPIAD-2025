import { CheckCircle2, Circle } from "lucide-react";

const EventTimeline = () => {
  const rounds = [
    {
      round: "Round 1",
      title: "Quiz",
      description: "MCQ-based assessment covering DSA fundamentals, time complexity, and algorithmic concepts",
      duration: "30 minutes",
      points: "30 points",
    },
    {
      round: "Round 2",
      title: "Debug",
      description: "Identify and fix bugs in pre-written code. Speed and accuracy matter!",
      duration: "45 minutes",
      points: "30 points",
    },
    {
      round: "Round 3",
      title: "DSA Coding",
      description: "Solve advanced DSA challenges in the final round.",
      duration: "60 minutes",
      points: "40 points",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(var(--neon-blue)/0.1),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
            Event Structure
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Three intense rounds designed to challenge every aspect of your programming prowess
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {rounds.map((round, index) => (
            <div
              key={index}
              className="relative mb-12 last:mb-0 animate-slide-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Connecting Line */}
              {index < rounds.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-full bg-gradient-to-b from-primary to-accent opacity-30"></div>
              )}

              <div className="flex gap-6">
                {/* Timeline Icon */}
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 rounded-full border-2 border-primary bg-glass/50 backdrop-blur-md flex items-center justify-center group hover:border-accent hover:shadow-[0_0_20px_hsl(var(--neon-purple)/0.5)] transition-all duration-300">
                    <CheckCircle2 className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />
                  </div>
                  <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl group-hover:bg-accent/30 transition-colors"></div>
                </div>

                {/* Content Card */}
                <div className="flex-1 p-8 rounded-2xl border border-primary/20 bg-glass/30 backdrop-blur-md hover:border-primary/50 hover:bg-glass/50 transition-all duration-300 group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div className="relative">
                    <div className="flex flex-wrap items-center gap-4 mb-3">
                      <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-semibold border border-primary/30">
                        {round.round}
                      </span>
                      <span className="text-sm text-muted-foreground">⏱️ {round.duration}</span>
                      <span className="text-sm text-accent font-semibold">🏆 {round.points}</span>
                    </div>

                    <h3 className="text-3xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {round.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">
                      {round.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventTimeline;
