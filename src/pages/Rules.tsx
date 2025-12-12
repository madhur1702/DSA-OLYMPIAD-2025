import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Clock, Code2, Trophy, Users, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const Rules = () => {
  const rules = [
    {
      icon: Users,
      title: "Eligibility",
      points: [
        "Open to all students from participating institutions",
        "Participation can be Individual or in a Team of 2 members",
        "Must register with valid college email ID",
        "Only one entry per team is allowed"
      ]
    },
    {
      icon: Clock,
      title: "Event Structure",
      points: [
        "Round 1: MCQ Quiz (30 minutes)",
        "Round 2: Debugging Challenge (45 minutes)",
        "Round 3: Problem Solving (90 minutes)",
        "Each round will have a Winner and a Runner-up."
      ]
    },
    {
      icon: CheckCircle2,
      title: "Code of Conduct",
      points: [
        "No plagiarism or code copying allowed",
        "No external help or collaboration during rounds",
        "Use of AI tools is strictly prohibited",
        "Any form of cheating will result in immediate disqualification"
      ]
    },
    {
      icon: Trophy,
      title: "Scoring & Ranking",
      points: [
        "Each round has different weightage",
        "Time taken to solve problems affects ranking",
        "Partial points for partially correct solutions in Round 3",
        "Final leaderboard based on cumulative performance"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-gradient-to-b from-background via-background/80 to-background"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--neon-blue)/0.15),transparent_50%)]"></div>
        </div>

        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-blue/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto px-4 z-10 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Rules & Regulations
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Read carefully to ensure fair play and smooth participation in ACM DSA Olympiad 2025
            </p>
          </div>
        </div>
      </section>

      {/* Rules Content */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {rules.map((section, index) => (
              <Card
                key={index}
                className="p-8 bg-glass/30 backdrop-blur-md border-primary/20 hover:border-primary/50 transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <section.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4 text-foreground">
                      {section.title}
                    </h3>
                    <ul className="space-y-3">
                      {section.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="inline-flex flex-col items-center gap-4 p-8 rounded-2xl border border-primary/30 bg-glass/20 backdrop-blur-md">
              <h3 className="text-2xl font-bold text-foreground">
                Ready to Compete?
              </h3>
              <p className="text-muted-foreground max-w-md">
                Make sure you've read all the rules before registering for the event
              </p>
              <Link to="/">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-primary to-accent hover:shadow-[0_0_30px_hsl(var(--neon-blue)/0.5)] transition-all duration-300"
                >
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Rules;
