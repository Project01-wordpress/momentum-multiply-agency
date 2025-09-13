import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Send, Zap, ArrowRight } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    challenge: "",
    budget: ""
  });

  const [currentStep, setCurrentStep] = useState(0);

  const questions = [
    {
      id: "challenge",
      question: "What's your biggest growth challenge?",
      placeholder: "e.g., Low website traffic, poor conversion rates, limited brand awareness...",
      icon: MessageCircle
    },
    {
      id: "budget",
      question: "What's your monthly marketing budget?",
      type: "select",
      options: ["< $5K", "$5K - $15K", "$15K - $50K", "$50K+", "Let's discuss"],
      icon: Zap
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-40 h-40 bg-primary/5 rounded-full blur-2xl animate-float" />
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-primary/8 rounded-full blur-xl animate-float animation-delay-400" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to <span className="morphing-text">Multiply</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let's discuss your growth goals and create a custom strategy 
              that delivers measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card rounded-3xl p-8 shadow-card">
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <MessageCircle className="text-primary mr-3" size={24} />
                  <h3 className="text-2xl font-bold">Let's Talk Growth</h3>
                </div>
                <p className="text-muted-foreground">
                  Tell us about your business and we'll create a custom growth plan.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Name</label>
                    <Input
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="focus:ring-primary focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="focus:ring-primary focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Company</label>
                  <Input
                    placeholder="Your company name"
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                    className="focus:ring-primary focus:border-primary"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">
                    What's your biggest growth challenge?
                  </label>
                  <Textarea
                    placeholder="Tell us about your current marketing challenges and goals..."
                    value={formData.challenge}
                    onChange={(e) => handleInputChange("challenge", e.target.value)}
                    className="focus:ring-primary focus:border-primary min-h-[120px]"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Monthly Marketing Budget</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {["< $5K", "$5K - $15K", "$15K - $50K", "$50K+", "Let's discuss"].map((budget) => (
                      <button
                        key={budget}
                        type="button"
                        onClick={() => handleInputChange("budget", budget)}
                        className={`p-3 rounded-lg border text-sm font-medium transition-colors ${
                          formData.budget === budget
                            ? "bg-primary text-primary-foreground border-primary"
                            : "border-border hover:border-primary hover:bg-primary/5"
                        }`}
                      >
                        {budget}
                      </button>
                    ))}
                  </div>
                </div>

                <Button 
                  type="submit"
                  className="w-full hero-glow text-lg py-6 hover:scale-105 transition-transform duration-300"
                >
                  <Send className="mr-2" size={20} />
                  Start My Growth Journey
                </Button>
              </form>
            </div>

            {/* Contact Info & CTA */}
            <div className="space-y-8">
              <div className="bg-gradient-primary rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Get Started Today</h3>
                <p className="mb-6 opacity-90">
                  Join 500+ businesses that trust us to multiply their growth.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                      <Zap size={16} />
                    </div>
                    <span>Free strategy consultation</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                      <ArrowRight size={16} />
                    </div>
                    <span>Custom growth roadmap</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                      <MessageCircle size={16} />
                    </div>
                    <span>24/7 support & optimization</span>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center px-6 py-3 bg-success/10 text-success rounded-full font-semibold animate-float">
                  <div className="w-2 h-2 bg-success rounded-full mr-2 animate-pulse" />
                  Response within 2 hours
                </div>
              </div>

              <div className="bg-card rounded-2xl p-6 shadow-card">
                <h4 className="font-bold mb-3">What happens next?</h4>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center mr-3 text-xs font-bold mt-0.5">1</div>
                    <span>We analyze your business and current marketing performance</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center mr-3 text-xs font-bold mt-0.5">2</div>
                    <span>Create a custom growth strategy tailored to your goals</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center mr-3 text-xs font-bold mt-0.5">3</div>
                    <span>Present your roadmap and start multiplying your results</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;