import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowLeft, Calendar, Clock, Eye, Heart, Share2, TrendingUp, CheckCircle } from "lucide-react";

interface BlogPostData {
  title: string;
  category: string;
  author: string;
  authorRole: string;
  authorImage: string;
  date: string;
  readTime: string;
  image: string;
  views: number;
  likes: number;
  content: string;
}

const blogPostData: Record<string, BlogPostData> = {
  "1": {
    title: "The Complete Guide to SEO in 2024: Strategies That Actually Work",
    category: "SEO",
    author: "Sarah Chen", 
    authorRole: "SEO Director",
    authorImage: "/api/placeholder/64/64",
    date: "2024-01-15",
    readTime: "8 min read",
    image: "/api/placeholder/1200/600",
    views: 2847,
    likes: 142,
    content: "SEO has evolved dramatically in 2024, with artificial intelligence and user experience becoming central to ranking algorithms. This comprehensive guide covers the latest strategies that are driving real results for businesses.\n\n## The New SEO Landscape\n\nSearch engines have become increasingly sophisticated, using AI to understand user intent and content quality better than ever before. Google's latest algorithm updates prioritize E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness).\n\n### Key SEO Strategies for 2024\n\n- **Content Clusters**: Build comprehensive topic clusters instead of targeting individual keywords\n- **AI-Powered Optimization**: Leverage AI tools to enhance your content strategy\n- **Core Web Vitals**: Focus on page experience signals as ranking factors\n- **User Intent Optimization**: Understand the why behind searches\n\n### Technical SEO Fundamentals\n\nModern SEO requires a solid technical foundation:\n\n- **Page Speed**: Aim for LCP under 2.5 seconds\n- **Mobile Responsiveness**: Ensure perfect mobile experience\n- **HTTPS Security**: Non-negotiable for modern websites\n- **Schema Markup**: Help search engines understand your content\n\n## Measuring SEO Success\n\nTrack metrics that matter:\n\n- **Organic click-through rates**: Better titles and metas improve CTR\n- **Conversion tracking**: Connect organic traffic to business goals\n- **Technical performance**: Monitor Core Web Vitals regularly\n- **Content engagement**: Measure time on page and user behavior\n\nSEO in 2024 requires a comprehensive, user-focused approach that combines technical excellence with high-quality content creation. The businesses winning at SEO today prioritize user experience and genuine value creation."
  },
  "2": {
    title: "Social Media Marketing Trends: What's Working Now",
    category: "Social Media", 
    author: "Marcus Rodriguez",
    authorRole: "Social Media Strategist",
    authorImage: "/api/placeholder/64/64",
    date: "2024-01-12",
    readTime: "6 min read",
    image: "/api/placeholder/1200/600",
    views: 1923,
    likes: 87,
    content: "Social media marketing has fundamentally shifted from broadcast to conversation. The platforms, algorithms, and user behaviors that drove success just two years ago have evolved dramatically.\n\n## The Authenticity Revolution\n\nUsers are craving real, unfiltered content. The most successful brands in 2024 are those that embrace authenticity over polish.\n\n### Platform-Specific Strategies\n\n**TikTok for Business Growth:**\n- Educational content and quick tutorials\n- Trend participation with brand twist\n- User-generated content campaigns\n- Behind-the-scenes content\n\n**LinkedIn Professional Evolution:**\n- Industry insights and thought leadership\n- Case studies and success stories\n- Personal stories with business lessons\n- Consistent value-first content\n\n**Instagram Creator Economy:**\n- Short-form Reels for maximum reach\n- Stories for behind-the-scenes content\n- Educational carousels that encourage engagement\n- IGTV for longer-form tutorials\n\n## Micro-Influencer Partnerships\n\nMicro-influencers (1K-100K followers) often deliver better results than mega-influencers:\n\n- **Higher engagement rates**: Typically 2-5x higher\n- **Better audience trust**: More relatable and authentic\n- **Lower costs**: Budget-friendly for SMBs\n- **Niche targeting**: Highly specific, engaged audiences\n\n### Community Building\n\nThe most successful brands are building communities, not just audiences. Focus on creating engaged communities through Facebook Groups, Discord servers, and platform-native features.\n\n## Video-First Content Strategy\n\nShort-form video dominates all platforms. Successful video content includes quick tutorials, product demonstrations, trend participation, and authentic customer testimonials.\n\nSocial media marketing success comes down to authentic relationship building, consistent value delivery, and strategic community cultivation. Be authentic, be helpful, and be consistent."
  }
};

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPostData[id || ""];

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist.</p>
          <Link to="/blog">
            <Button className="hero-glow">
              <ArrowLeft size={16} className="mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const formatContent = (content: string) => {
    return content.split('\n').map((line, index) => {
      if (line.trim() === '') {
        return <br key={index} />;
      }
      if (line.startsWith('## ')) {
        return <h2 key={index} className="text-2xl font-bold mb-4 mt-8 morphing-text">{line.slice(3)}</h2>;
      }
      if (line.startsWith('### ')) {
        return <h3 key={index} className="text-xl font-bold mb-3 mt-6">{line.slice(4)}</h3>;
      }
      if (line.startsWith('**') && line.includes(':**')) {
        const [label, ...rest] = line.slice(2).split(':**');
        return (
          <div key={index} className="mb-3">
            <span className="font-semibold text-primary">{label}:</span>
            <span className="ml-1">{rest.join(':**')}</span>
          </div>
        );
      }
      if (line.startsWith('- **') && line.includes('**:')) {
        const [label, ...rest] = line.slice(4).split('**:');
        return (
          <div key={index} className="flex items-start gap-2 mb-2">
            <CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" />
            <div>
              <span className="font-semibold text-primary">{label}:</span>
              <span className="ml-1">{rest.join('**:')}</span>
            </div>
          </div>
        );
      }
      if (line.startsWith('- ')) {
        return (
          <div key={index} className="flex items-start gap-2 mb-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span>{line.slice(2)}</span>
          </div>
        );
      }
      return <p key={index} className="mb-4 leading-relaxed">{line}</p>;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      {/* Back Navigation */}
      <div className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b">
        <div className="container mx-auto max-w-4xl px-6 py-4">
          <Link to="/blog">
            <Button variant="ghost" size="sm" className="hover:text-primary">
              <ArrowLeft size={16} className="mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <article className="container mx-auto max-w-4xl px-6 py-12">
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-6">
            <Badge className="hero-glow">{post.category}</Badge>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar size={14} />
                {new Date(post.date).toLocaleDateString()}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={14} />
                {post.readTime}
              </span>
              <span className="flex items-center gap-1">
                <Eye size={14} />
                {post.views.toLocaleString()} views
              </span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Author Info */}
          <div className="flex items-center justify-between mb-8 p-6 bg-card rounded-lg border">
            <div className="flex items-center gap-4">
              <Avatar className="w-12 h-12">
                <AvatarImage src={post.authorImage} alt={post.author} />
                <AvatarFallback>{post.author.split(' ').map((n: string) => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold">{post.author}</h3>
                <p className="text-sm text-muted-foreground">{post.authorRole}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm">
                <Heart size={16} className="mr-1" />
                {post.likes}
              </Button>
              <Button variant="ghost" size="sm">
                <Share2 size={16} />
              </Button>
            </div>
          </div>

          {/* Featured Image */}
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
          />
        </div>

        {/* Article Content */}
        <div className="prose max-w-none">
          {formatContent(post.content)}
        </div>

        {/* Article Footer */}
        <div className="border-t pt-8 mt-12">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" className="hover:text-primary">
                <Heart size={16} className="mr-2" />
                Like ({post.likes})
              </Button>
              <Button variant="ghost" className="hover:text-primary">
                <Share2 size={16} className="mr-2" />
                Share
              </Button>
            </div>
            <div className="text-sm text-muted-foreground">
              {post.views.toLocaleString()} views
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6">Continue Reading</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="service-card">
              <CardContent className="p-6">
                <Badge variant="outline" className="mb-3">Marketing Strategy</Badge>
                <h4 className="font-bold mb-2">Content Marketing That Converts</h4>
                <p className="text-sm text-muted-foreground">Discover innovative content formats that drive engagement and sales.</p>
                <Link to="/blog" className="inline-flex items-center text-primary hover:underline text-sm mt-3">
                  Read More <ArrowLeft size={14} className="ml-1 rotate-180" />
                </Link>
              </CardContent>
            </Card>
            <Card className="service-card">
              <CardContent className="p-6">
                <Badge variant="outline" className="mb-3">Analytics</Badge>
                <h4 className="font-bold mb-2">Marketing ROI Measurement</h4>
                <p className="text-sm text-muted-foreground">Learn how to track and optimize your marketing performance effectively.</p>
                <Link to="/blog" className="inline-flex items-center text-primary hover:underline text-sm mt-3">
                  Read More <ArrowLeft size={14} className="ml-1 rotate-180" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;