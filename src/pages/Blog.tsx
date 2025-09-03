import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Calendar, User, ArrowRight } from "lucide-react";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const blogPosts = [
    {
      id: 1,
      title: "The Future of STEM Education in Kenya",
      excerpt: "Exploring how innovative educational approaches are transforming the way students learn science, technology, engineering, and mathematics in Kenya's schools.",
      author: "Dr. Sarah Kimani",
      date: "2024-01-15",
      category: "Education",
      image: "/placeholder.svg",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "How Flight Simulation Enhances Learning",
      excerpt: "Discover the educational benefits of flight simulation technology and how it's helping students understand complex aeronautical concepts through hands-on experience.",
      author: "James Mwangi",
      date: "2024-01-10",
      category: "Technology",
      image: "/placeholder.svg",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Student Success Stories from AeroLabz",
      excerpt: "Inspiring stories of young innovators who have transformed their passion for aviation and STEM into remarkable achievements through our programs.",
      author: "Grace Wanjiku",
      date: "2024-01-08",
      category: "Success Stories",
      image: "/placeholder.svg",
      readTime: "4 min read"
    },
    {
      id: 4,
      title: "Building the Next Generation of Aerospace Engineers",
      excerpt: "How our comprehensive STEM programs are preparing students for careers in aerospace engineering and related fields.",
      author: "Prof. Michael Ochieng",
      date: "2024-01-05",
      category: "Career Development",
      image: "/placeholder.svg",
      readTime: "6 min read"
    },
    {
      id: 5,
      title: "Innovation in K-12 Aeronautics Education",
      excerpt: "Exploring cutting-edge teaching methods and technologies that are making aeronautics education more accessible and engaging for K-12 students.",
      author: "Dr. Sarah Kimani",
      date: "2024-01-03",
      category: "Innovation",
      image: "/placeholder.svg",
      readTime: "8 min read"
    },
    {
      id: 6,
      title: "The Impact of Hands-On Learning in STEM",
      excerpt: "Research-backed insights into how practical, hands-on learning experiences improve student engagement and understanding in STEM subjects.",
      author: "Dr. Peter Ndung'u",
      date: "2024-01-01",
      category: "Research",
      image: "/placeholder.svg",
      readTime: "5 min read"
    }
  ];

  const categories = ["All", "Education", "Technology", "Success Stories", "Career Development", "Innovation", "Research"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              AeroLabz <span className="text-primary">Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Insights, innovations, and inspiration in STEM education and aeronautics
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="mb-2"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <div className="text-6xl text-primary/30">📖</div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <span className="text-sm text-muted-foreground">{post.readTime}</span>
                  </div>
                  <CardTitle className="line-clamp-2 hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="group">
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-xl font-semibold text-muted-foreground mb-2">No articles found</h3>
              <p className="text-muted-foreground">Try adjusting your search or category filter.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;