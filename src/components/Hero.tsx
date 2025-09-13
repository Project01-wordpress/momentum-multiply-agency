import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { TrendingUp, Zap, Target, BarChart } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const morphingTexts = ["SEO", "Leads", "Sales", "Loyalty"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % morphingTexts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/30 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-float" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-primary/5 rounded-full blur-2xl animate-float animation-delay-400" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-primary/8 rounded-full blur-lg animate-float animation-delay-200" />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Tagline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            We Don't Just Market.{" "}
            <span className="morphing-text">We Multiply.</span>
          </h1>

          {/* Morphing Keywords */}
          <div className="mb-12">
            <div className="flex items-center justify-center gap-4 text-2xl md:text-3xl font-semibold">
              <TrendingUp className="text-primary" size={32} />
              <span className="text-muted-foreground">From</span>
              <div className="relative h-12 w-32 flex items-center justify-center">
                <span 
                  key={currentText}
                  className="absolute inset-0 flex items-center justify-center morphing-text text-3xl font-bold animate-scale-in"
                >
                  {morphingTexts[currentText]}
                </span>
              </div>
              <span className="text-muted-foreground">to Growth</span>
              <Zap className="text-primary" size={32} />
            </div>
          </div>

          {/* Animated Growth Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="animate-slide-up">
              <div className="growth-number text-4xl font-bold mb-2">200%</div>
              <p className="text-muted-foreground">Average ROI</p>
            </div>
            <div className="animate-slide-up animation-delay-200">
              <div className="growth-number text-4xl font-bold mb-2">5M+</div>
              <p className="text-muted-foreground">Organic Impressions</p>
            </div>
            <div className="animate-slide-up animation-delay-400">
              <div className="growth-number text-4xl font-bold mb-2">98%</div>
              <p className="text-muted-foreground">Client Retention</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="animate-slide-up animation-delay-600 flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="hero-glow text-lg px-8 py-6 hover:scale-105 transition-transform duration-300"
            >
              <Target className="mr-2" size={24} />
              Let's Grow Together
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-6 hover:scale-105 transition-transform duration-300"
              asChild
            >
              <Link to="/blog">
                <TrendingUp className="mr-2" size={24} />
                Marketing Insights
              </Link>
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <BarChart className="text-primary/60" size={24} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;