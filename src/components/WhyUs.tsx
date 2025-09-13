import { Lightbulb, Rocket, BarChart, Trophy } from "lucide-react";

const WhyUs = () => {
  const timeline = [
    {
      phase: "Strategy",
      icon: Lightbulb,
      title: "Data-Driven Planning",
      description: "We analyze your market, competitors, and audience to create a custom growth strategy.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      phase: "Execution",
      icon: Rocket,
      title: "Flawless Implementation",
      description: "Our expert team executes every campaign with precision and attention to detail.",
      color: "from-purple-500 to-pink-500"
    },
    {
      phase: "Growth",
      icon: BarChart,
      title: "Measurable Results",
      description: "Track real-time performance with detailed analytics and optimization insights.",
      color: "from-green-500 to-emerald-500"
    },
    {
      phase: "Success",
      icon: Trophy,
      title: "Sustained Excellence",
      description: "Continuous optimization ensures long-term growth and market leadership.",
      color: "from-orange-500 to-red-500"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      company: "TechFlow Solutions",
      role: "CEO",
      content: "The team transformed our digital presence completely. Our ROI increased by 200% in just 3 months!",
      avatar: "bg-gradient-to-br from-blue-400 to-blue-600"
    },
    {
      name: "Marcus Rodriguez",
      company: "Urban Fitness Co.",
      role: "Marketing Director",
      content: "Finally found a partner who understands growth. 5M impressions later, we're market leaders.",
      avatar: "bg-gradient-to-br from-green-400 to-green-600"
    },
    {
      name: "Emily Watson",
      company: "Eco Beauty Brand",
      role: "Founder",
      content: "Their creative approach and data-driven execution delivered results beyond our expectations.",
      avatar: "bg-gradient-to-br from-pink-400 to-pink-600"
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose <span className="morphing-text">Us</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our proven methodology transforms businesses through strategic 
            thinking, flawless execution, and measurable growth.
          </p>
        </div>

        {/* Animated Timeline */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {timeline.map((step, index) => (
              <div
                key={step.phase}
                className="timeline-step relative animate-slide-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-center">
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-electric`}>
                    <step.icon className="text-white" size={32} />
                  </div>
                  <div className="text-sm font-medium text-primary mb-2">{step.phase}</div>
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                
                {/* Connection Line */}
                {index < timeline.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent transform -translate-y-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Social Media Style Testimonials */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="bg-card rounded-2xl p-6 shadow-card animate-scale-in hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-full ${testimonial.avatar} flex items-center justify-center text-white font-bold mr-4`}>
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-xs text-primary">{testimonial.company}</div>
                  </div>
                </div>
                <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                
                {/* Social Media Style Interactions */}
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                  <div className="flex space-x-4 text-sm text-muted-foreground">
                    <span>❤️ 247</span>
                    <span>🚀 89</span>
                    <span>💬 34</span>
                  </div>
                  <div className="text-xs text-muted-foreground">3 months ago</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;