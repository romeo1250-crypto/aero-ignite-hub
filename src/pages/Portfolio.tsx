import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Play } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "Flight Simulation Lab Setup",
      category: "Simulation Unit Set",
      description: "Complete flight simulation laboratory installation at Nairobi Technical Institute. Features professional-grade simulators and immersive learning environments.",
      image: "🛩️",
      achievements: [
        "150+ students trained",
        "95% completion rate",
        "Advanced certification program"
      ]
    },
    {
      title: "THE AERONAUTICS LAB",
      category: "Aero Space",
      description: "State-of-the-art aeronautics laboratory established at Kenyatta University. Comprehensive hands-on learning facility for aerospace engineering principles.",
      image: "🚀",
      achievements: [
        "300+ students engaged",
        "Research publications increased 40%",
        "Industry partnerships established"
      ]
    },
    {
      title: "STEM Workshop Series",
      category: "Educational Program",
      description: "Multi-county STEM education initiative reaching rural schools across Kenya. Interactive workshops focusing on aviation and technology.",
      image: "🔬",
      achievements: [
        "25 schools participated",
        "500+ students reached",
        "Teacher training programs"
      ]
    },
    {
      title: "Drone Racing Championship",
      category: "Student Competition",
      description: "National drone racing and programming competition for K-12 students. Combining technical skills with competitive excitement.",
      image: "🏆",
      achievements: [
        "12 counties participated",
        "200+ student teams",
        "National media coverage"
      ]
    },
    {
      title: "Virtual Reality Flight Training",
      category: "Technology Integration",
      description: "Immersive VR flight training program implemented across multiple institutions. Revolutionary approach to aviation education.",
      image: "🥽",
      achievements: [
        "8 institutions equipped",
        "VR-certified instructors",
        "International recognition"
      ]
    },
    {
      title: "Aerospace Museum Partnership",
      category: "Educational Field Trip",
      description: "Collaborative educational programs with the National Museum. Interactive exhibits and guided learning experiences.",
      image: "🏛️",
      achievements: [
        "Monthly educational visits",
        "Interactive exhibit design",
        "Cultural heritage integration"
      ]
    }
  ];

  const stats = [
    { number: "25+", label: "Educational Institutions" },
    { number: "1000+", label: "Students Impacted" },
    { number: "18+", label: "Major Projects" },
    { number: "5+", label: "Counties Served" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
              OUR PORTFOLIO
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Let's See Some of Our Best Works
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              AeroLabz is dedicated to advancing STEM education for K-12 students. Our innovative programs 
              and hands-on learning experiences have transformed classrooms, inspiring young minds to reach 
              new heights in aeronautics and technology.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-premium transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="text-6xl mb-4 text-center">{project.image}</div>
                  <Badge className="w-fit mb-2 bg-accent/10 text-accent border-accent/20">
                    {project.category}
                  </Badge>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {project.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex space-x-2 pt-4">
                    <Button size="sm" className="flex-1">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Details
                    </Button>
                    <Button variant="outline" size="sm">
                      <Play className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statement */}
      <section className="py-24 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Transforming Education Across Kenya
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Our portfolio represents more than just projects – each initiative represents dreams fulfilled, 
              minds inspired, and futures transformed. From rural schools to urban institutions, we've brought 
              cutting-edge STEM education to students across Kenya, creating pathways to careers in aviation, 
              engineering, and technology.
            </p>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Educational Impact</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                    <span className="text-muted-foreground">Improved STEM performance across participating schools</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                    <span className="text-muted-foreground">Increased student interest in aviation careers</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                    <span className="text-muted-foreground">Enhanced teacher capabilities and confidence</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Innovation Highlights</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                    <span className="text-muted-foreground">First VR flight training program in East Africa</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                    <span className="text-muted-foreground">Award-winning simulation laboratory designs</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                    <span className="text-muted-foreground">Recognition by Kenya's Ministry of Education</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;