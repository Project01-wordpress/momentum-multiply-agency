import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, TrendingUp, Search, ArrowRight, Eye, Heart, Share2 } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  views: number;
  likes: number;
  featured?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Complete Guide to SEO in 2024: Strategies That Actually Work",
    excerpt: "Discover the latest SEO techniques that are driving real results for businesses. From AI-powered content optimization to technical SEO fundamentals.",
    content: "SEO has evolved dramatically in 2024, with AI and user experience becoming central to ranking algorithms...",
    category: "SEO",
    author: "Sarah Chen",
    date: "2024-01-15",
    readTime: "8 min read",
    image: "/api/placeholder/600/300",
    views: 2847,
    likes: 142,
    featured: true
  },
  {
    id: "2", 
    title: "Social Media Marketing Trends: What's Working Now",
    excerpt: "From authentic storytelling to micro-influencer partnerships, explore the social media strategies generating real engagement and conversions.",
    content: "Social media marketing has shifted from broadcast to conversation. Here's what's working in 2024...",
    category: "Social Media",
    author: "Marcus Rodriguez",
    date: "2024-01-12",
    readTime: "6 min read",
    image: "/api/placeholder/600/300",
    views: 1923,
    likes: 87,
  },
  {
    id: "3",
    title: "ROI-Driven PPC Campaigns: A Data-Backed Approach",
    excerpt: "Learn how to build PPC campaigns that deliver measurable results. Real case studies showing 200%+ ROI improvements.",
    content: "PPC success isn't about spending more—it's about spending smarter. Here's our proven framework...",
    category: "PPC",
    author: "David Park",
    date: "2024-01-10",
    readTime: "10 min read",
    image: "/api/placeholder/600/300",
    views: 1654,
    likes: 95,
  },
  {
    id: "4",
    title: "Content Marketing That Converts: Beyond Blog Posts",
    excerpt: "Explore innovative content formats that drive engagement and sales. From interactive content to video series that build authority.",
    content: "Content marketing has evolved beyond traditional blog posts. Here's how to create content that converts...",
    category: "Content Marketing",
    author: "Emma Thompson",
    date: "2024-01-08",
    readTime: "7 min read", 
    image: "/api/placeholder/600/300",
    views: 2156,
    likes: 124,
  },
  {
    id: "5",
    title: "Marketing Automation: Scaling Personal Touch",
    excerpt: "How to implement automation systems that feel personal and drive results. Complete workflows for lead nurturing and customer retention.",
    content: "Marketing automation doesn't mean losing the human touch. Here's how to scale personalization...",
    category: "Automation",
    author: "Alex Kim",
    date: "2024-01-05",
    readTime: "9 min read",
    image: "/api/placeholder/600/300", 
    views: 1789,
    likes: 78,
  },
  {
    id: "6",
    title: "Brand Building in the Digital Age: Authenticity That Scales",
    excerpt: "Learn how modern brands build trust and loyalty online. Strategies for authentic storytelling and consistent brand voice across all touchpoints.",
    content: "Brand building has fundamentally changed in the digital landscape. Here's how to build authentic connections...",
    category: "Branding",
    author: "Jordan Miller",
    date: "2024-01-03",
    readTime: "12 min read",
    image: "/api/placeholder/600/300",
    views: 2341,
    likes: 156,
  }
];

const categories = ["All", "SEO", "Social Media", "PPC", "Content Marketing", "Automation", "Branding"];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      {/* Header */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-6">
              <TrendingUp className="text-primary" size={32} />
              <span className="text-sm font-medium text-muted-foreground tracking-wider uppercase">Marketing Insights</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="morphing-text">Marketing</span> Intelligence
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Data-driven insights, proven strategies, and actionable tactics to accelerate your growth. 
              Learn from real campaigns that deliver results.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-12">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="hover:scale-105 transition-transform"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredPost && selectedCategory === "All" && !searchTerm && (
        <section className="px-6 mb-16">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-8">
              <Badge className="hero-glow mb-4">Featured Article</Badge>
            </div>
            <Card className="service-card overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <CardContent className="md:w-1/2 p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <Badge variant="outline">{featuredPost.category}</Badge>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {new Date(featuredPost.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {featuredPost.readTime}
                      </span>
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold mb-4">{featuredPost.title}</h2>
                  <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Eye size={14} />
                        {featuredPost.views.toLocaleString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <Heart size={14} />
                        {featuredPost.likes}
                      </span>
                    </div>
                    <Link to={`/blog/${featuredPost.id}`}>
                      <Button className="hero-glow">
                        Read Article <ArrowRight size={16} className="ml-2" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="px-6 pb-20">
        <div className="container mx-auto max-w-6xl">
          {regularPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <Card key={post.id} className={`service-card overflow-hidden animate-slide-up`} style={{animationDelay: `${index * 100}ms`}}>
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="text-xs">{post.category}</Badge>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Clock size={12} />
                        {post.readTime}
                      </div>
                    </div>
                    <h3 className="font-bold text-lg leading-tight">{post.title}</h3>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Eye size={12} />
                          {post.views.toLocaleString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <Heart size={12} />
                          {post.likes}
                        </span>
                      </div>
                      <Link to={`/blog/${post.id}`}>
                        <Button variant="ghost" size="sm" className="hover:text-primary">
                          Read More <ArrowRight size={14} className="ml-1" />
                        </Button>
                      </Link>
                    </div>
                    <div className="border-t pt-3 mt-4">
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>By {post.author}</span>
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Search className="text-muted-foreground mx-auto mb-4" size={48} />
              <h3 className="text-xl font-semibold mb-2">No articles found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;