import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Trophy, Code2 } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-bg.jpg";
import svkmNewLogo from "@/assets/svkm-new-logo.png";
import acmLogo from "@/assets/acm-logo.png";
import acesLogo from "@/assets/aces-logo.png";
import svkmOldLogo from "@/assets/svkm-old-logo.png";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const phrases = ["Quiz Round", "Debugging Round", "Problem Solving Round"];
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentPhrase.length) {
        setTypedText(currentPhrase.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setTypedText(currentPhrase.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentPhrase.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setPhraseIndex((phraseIndex + 1) % phrases.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, phraseIndex, phrases]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--neon-blue)/0.2),transparent_50%)]"></div>
      </div>

      {/* Floating Shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-blue/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="animate-fade-in">
          {/* Logos Section */}
          <div className="flex items-center justify-center gap-6 mb-8 mt-12 flex-wrap">
            <img src={svkmNewLogo} alt="SVKM New Logo" className="h-16 md:h-20 object-contain" />
            <img src={acmLogo} alt="ACM Logo" className="h-16 md:h-20 object-contain" />
            <img src={acesLogo} alt="ACES Logo" className="h-16 md:h-20 object-contain" />
            <img src={svkmOldLogo} alt="SVKM Old Logo" className="h-16 md:h-20 object-contain" />
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-slide-in-up">
            DSA OLYMPIAD
          </h1>

          <div className="text-4xl md:text-6xl font-bold mb-4 text-foreground animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
            2025
          </div>
          {/*
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
            Crack The Code. Beat The Clock. Rule The Leaderboard.
            just remove the below line up to typing animation when 2026 event is live
*/}
          {/* Event Ended Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/50 bg-accent/10 mb-6 animate-slide-in-up" style={{ animationDelay: '0.3s' }}>
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            <span className="text-accent font-semibold">Event Concluded</span>
          </div>

          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
            Thank you for being part of DSA Olympiad 2025!
          </p>

          <p className="text-lg text-muted-foreground/80 mb-8 max-w-2xl mx-auto animate-slide-in-up" style={{ animationDelay: '0.5s' }}>
            Stay tuned for DSA Olympiad 2026
          </p>

          {/* Typing Animation */}
          <div className="h-12 mb-12 animate-slide-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-accent/30 bg-glass/50 backdrop-blur-md">
              <Code2 className="w-5 h-5 text-accent" />
              <span className="text-lg font-mono text-accent">
                {typedText}
                <span className="animate-pulse">|</span>
              </span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-in-up" style={{ animationDelay: '0.8s' }}>
            <a href="#"> <Button
              size="lg"
              className="group relative overflow-hidden bg-gradient-to-r from-primary to-accent hover:shadow-[0_0_30px_hsl(var(--neon-blue)/0.5)] transition-all duration-300 text-lg px-8 py-6" disabled
            >
              {/*<Trophy className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Register Now
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>*/}
              <Trophy className="w-5 h-5 mr-2" />
              See You in 2026!            </Button>
            </a>
            <Link to="/rules">
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 hover:shadow-[0_0_20px_hsl(var(--neon-blue)/0.3)] transition-all duration-300 text-lg px-8 py-6"
              >
                View Rules
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 mt-20 max-w-3xl mx-auto animate-slide-in-up" style={{ animationDelay: '1s' }}>
          {[
            { number: "3", label: "Rounds" },
            { number: "₹200", label: "Registration Fee" },
            { number: "10K", label: "Prize Pool" },
          ].map((stat, index) => (
            <div
              key={index}
              className="relative p-6 rounded-xl border border-primary/20 bg-glass/30 backdrop-blur-md hover:border-primary/50 hover:bg-glass/50 transition-all duration-300 group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="text-2xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;