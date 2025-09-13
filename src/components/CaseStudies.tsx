import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, TrendingUp, DollarSign, Users, Target } from "lucide-react";

const CaseStudies = () => {
  const [currentCase, setCurrentCase] = useState(0);

  const caseStudies = [
    {
      company: "TechFlow Solutions",
      industry: "SaaS",
      challenge: "Low organic visibility and poor conversion rates",
      result: "200% ROI in 3 months",
      metrics: [
        { icon: TrendingUp, value: "350%", label: "Organic Traffic Growth" },
        { icon: DollarSign, value: "200%", label: "Revenue Increase" },
        { icon: Users, value: "5M+", label: "New Impressions" },
        { icon: Target, value: "45%", label: "Conversion Rate Boost" }
      ],
      image: "bg-gradient-to-br from-blue-500 to-purple-600"
    },
    {
      company: "Urban Fitness Co.",
      industry: "Health & Fitness",
      challenge: "Limited local market reach and brand awareness",
      result: "5M organic impressions generated",
      metrics: [
        { icon: Users, value: "500%", label: "Social Media Growth" },
        { icon: TrendingUp, value: "280%", label: "Local Search Visibility" },
        { icon: Target, value: "150%", label: "Lead Generation" },
        { icon: DollarSign, value: "300%", label: "Monthly Revenue" }
      ],
      image: "bg-gradient-to-br from-green-500 to-teal-600"
    },
    {
      company: "Eco Beauty Brand",
      industry: "E-commerce",
      challenge: "High customer acquisition costs and low retention",
      result: "98% client satisfaction rate",
      metrics: [
        { icon: DollarSign, value: "180%", label: "ROAS Improvement" },
        { icon: Users, value: "250%", label: "Customer Retention" },
        { icon: TrendingUp, value: "400%", label: "Email Performance" },
        { icon: Target, value: "65%", label: "Repeat Purchase Rate" }
      ],
      image: "bg-gradient-to-br from-pink-500 to-rose-600"
    }
  ];

  const nextCase = () => {
    setCurrentCase((prev) => (prev + 1) % caseStudies.length);
  };

  const prevCase = () => {
    setCurrentCase((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  const currentStudy = caseStudies[currentCase];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Success <span className="morphing-text">Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real businesses. Real results. See how we've transformed 
            our clients' marketing performance.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-card">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Case Study Content */}
              <div className="space-y-8">
                <div>
                  <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                    {currentStudy.industry}
                  </div>
                  <h3 className="text-3xl font-bold mb-4">{currentStudy.company}</h3>
                  <p className="text-muted-foreground mb-6">{currentStudy.challenge}</p>
                  <div className="text-2xl font-bold growth-number">{currentStudy.result}</div>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-6">
                  {currentStudy.metrics.map((metric, index) => (
                    <div 
                      key={metric.label}
                      className="text-center animate-scale-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <metric.icon className="text-primary" size={20} />
                      </div>
                      <div className="growth-number text-2xl font-bold mb-1">{metric.value}</div>
                      <div className="text-sm text-muted-foreground">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual Representation */}
              <div className="relative">
                <div className={`${currentStudy.image} h-80 rounded-2xl flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="relative z-10 text-center text-white">
                    <div className="text-5xl font-bold mb-2">{currentStudy.result.split(' ')[0]}</div>
                    <div className="text-lg opacity-90">{currentStudy.result.split(' ').slice(1).join(' ')}</div>
                  </div>
                  <div className="absolute top-4 right-4 w-16 h-16 bg-white/20 rounded-full animate-float" />
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/10 rounded-full animate-float animation-delay-400" />
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-12">
              <Button 
                variant="outline" 
                onClick={prevCase}
                className="hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <ChevronLeft size={20} />
              </Button>

              <div className="flex space-x-2">
                {caseStudies.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentCase(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentCase ? 'bg-primary' : 'bg-muted'
                    }`}
                  />
                ))}
              </div>

              <Button 
                variant="outline" 
                onClick={nextCase}
                className="hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <ChevronRight size={20} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;