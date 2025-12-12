import { Trophy, Medal, Award } from "lucide-react";

const Prizes = () => {
  const prizes = [
    {
      position: "Winner",
      prize: "₹₹₹",
      icon: Trophy,
      gradient: "from-yellow-400 to-yellow-600",
      glow: "shadow-[0_0_40px_hsl(45_100%_60%/0.4)]",
    },
    {
      position: "Runner up",
      prize: "₹₹₹",
      icon: Medal,
      gradient: "from-gray-300 to-gray-500",
      glow: "shadow-[0_0_40px_hsl(0_0%_70%/0.4)]",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--neon-purple)/0.15),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Prizes & Rewards
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Compete for glory and amazing cash prizes worth ₹10,000
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {prizes.map((prize, index) => (
            <div
              key={index}
              className="group relative animate-slide-in-up hover:scale-105 transition-transform duration-500"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Glassmorphism Card */}
              <div className={`relative p-8 rounded-3xl border border-primary/30 bg-glass/40 backdrop-blur-xl hover:border-primary/60 transition-all duration-500 ${prize.glow} hover:${prize.glow}`}>
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Content */}
                <div className="relative text-center">
                  {/* Trophy Icon */}
                  <div className="mb-6 flex justify-center">
                    <div className={`p-6 rounded-2xl bg-gradient-to-br ${prize.gradient} group-hover:animate-float`}>
                      <prize.icon className="w-12 h-12 text-background" />
                    </div>
                  </div>

                  {/* Position */}
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {prize.position}
                  </h3>

                  {/* Prize Amount */}
                  <div className={`text-5xl font-bold mb-4 bg-gradient-to-r ${prize.gradient} bg-clip-text text-transparent`}>
                    {prize.prize}
                  </div>

                  {/* Decorative Line */}
                  <div className="h-1 w-20 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent rounded-full group-hover:w-full transition-all duration-500"></div>
                </div>

                {/* Corner Glow */}
                <div className={`absolute -top-2 -right-2 w-24 h-24 bg-gradient-to-br ${prize.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="inline-block p-6 rounded-2xl border border-accent/30 bg-glass/30 backdrop-blur-md">
            <p className="text-lg text-muted-foreground">
              Plus certificates for all participants 🎉 and each round will have its own Winner 🥇 and Runner-up 🥈!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prizes;