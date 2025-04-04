
import { useState } from "react";
import { PageLayout } from "@/components/PageLayout";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Search } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const categories = [
    "All",
    "Design",
    "Development",
    "UX",
    "Career",
    "Tools",
  ];
  
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const posts = [
    {
      id: 1,
      title: "The Future of Web Design: Trends to Watch in 2025",
      excerpt: "Explore the emerging trends in web design that will shape the digital landscape in the coming year.",
      date: "April 2, 2025",
      category: "Design",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Building Accessible Websites: A Comprehensive Guide",
      excerpt: "Learn how to create websites that are accessible to everyone, regardless of ability or disability.",
      date: "March 28, 2025",
      category: "Development",
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "How to Conduct Effective User Research",
      excerpt: "A step-by-step guide to conducting user research that yields actionable insights for your design process.",
      date: "March 15, 2025",
      category: "UX",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "From Designer to Developer: My Career Transition",
      excerpt: "My personal journey of transitioning from a design role to becoming a full-stack developer.",
      date: "March 5, 2025",
      category: "Career",
      readTime: "7 min read"
    },
    {
      id: 5,
      title: "Essential Tools for Modern Web Development",
      excerpt: "A curated list of tools that every web developer should have in their toolkit.",
      date: "February 27, 2025",
      category: "Tools",
      readTime: "4 min read"
    },
    {
      id: 6,
      title: "Creating a Design System from Scratch",
      excerpt: "A comprehensive guide to building a consistent design system for your product or organization.",
      date: "February 15, 2025",
      category: "Design",
      readTime: "10 min read"
    },
  ];
  
  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h1 className="text-4xl font-heading font-bold mb-4">Blog</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Thoughts, insights, and ideas about design, development, and the digital world.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="search"
              placeholder="Search articles..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto mb-12 flex flex-wrap gap-2">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto">
          {filteredPosts.length > 0 ? (
            <div className="space-y-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="border-b border-border pb-8 last:border-0">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.category}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-2xl font-heading font-bold mb-2">{post.title}</h2>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <Link to={`/blog/post-${post.id}`} className="text-primary font-medium inline-flex items-center">
                    Read article <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No articles found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );
};

export default Blog;
