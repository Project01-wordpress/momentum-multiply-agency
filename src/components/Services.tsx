import { Search, Megaphone, Share2, Palette, BarChart3, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Search,
      title: "SEO & Content Marketing",
      description: "Dominate search results with data-driven SEO strategies and compelling content.",
      features: ["Keyword Research", "Technical SEO", "Content Strategy", "Link Building"]
    },
    {
      icon: Megaphone,
      title: "Paid Ads (Google, Meta, TikTok)",
      description: "Maximize ROI with precision-targeted ad campaigns across all major platforms.",
      features: ["Google Ads", "Meta Advertising", "TikTok Campaigns", "YouTube Ads"]
    },
    {
      icon: Share2,
      title: "Social Media Strategy",
      description: "Build engaged communities that convert followers into loyal customers.",
      features: ["Content Planning", "Community Management", "Influencer Partnerships", "Social Commerce"]
    },
    {
      icon: Palette,
      title: "Branding & Creative Design",
      description: "Create memorable brand experiences that resonate with your target audience.",
      features: ["Brand Identity", "Visual Design", "Creative Campaigns", "Brand Guidelines"]
    },
    {
      icon: BarChart3,
      title: "Analytics & Automation",
      description: "Turn data into actionable insights with advanced analytics and smart automation.",
      features: ["Performance Tracking", "Marketing Automation", "A/B Testing", "Conversion Optimization"]
    },
    {
      icon: Zap,
      title: "Growth Strategy",
      description: "Accelerate your business growth with proven scaling methodologies.",
      features: ["Growth Hacking", "Customer Acquisition", "Retention Strategies", "Market Expansion"]
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Services That <span className="morphing-text">Scale</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From strategy to execution, we deliver comprehensive marketing solutions 
            that drive measurable growth for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="service-card p-8 rounded-2xl animate-slide-up group cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <service.icon className="text-primary group-hover:text-primary-glow transition-colors" size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
              </div>

              <div className="space-y-2">
                {service.features.map((feature, idx) => (
                  <div 
                    key={feature}
                    className="flex items-center text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ transitionDelay: `${idx * 50}ms` }}
                  >
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-primary/10 rounded-full text-primary font-semibold animate-float">
            <Zap className="mr-2" size={20} />
            Custom Solutions Available
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;