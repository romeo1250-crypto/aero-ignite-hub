import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ChatBot from "@/components/chatbot/ChatBot";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BookOpen, 
  Users, 
  Target, 
  TrendingUp, 
  ArrowRight,
  CheckCircle,
  Zap,
  Award
} from "lucide-react";

const Index = () => {
  const services = [
    {
      icon: BookOpen,
      title: "STEM Workshops",
      description: "Interactive aeronautics activities and hands-on learning experiences"
    },
    {
      icon: Zap,
      title: "Technology Integration", 
      description: "Virtual reality experiences and simulation software training"
    },
    {
      icon: Target,
      title: "Flight Simulation",
      description: "Professional-grade simulators with real-world scenarios"
    }
  ];

  const stats = [
    { number: "25+", label: "Educational Institutions" },
    { number: "5+", label: "Counties Reached" },
    { number: "10+", label: "Years of Experience" },
    { number: "100+", label: "Students Inspired" }
  ];

  const features = [
    "Hands-on STEM workshops and activities",
    "Student competitions and challenges", 
    "Technology integration in education",
    "Flight simulation programs",
    "Educational field trips",
    "Ongoing support and evaluation"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      
      {/* About Section */}
      <section className="py-24 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <Badge className="bg-accent/10 text-accent border-accent/20">
                ABOUT AEROLABZ
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold">
                Where Innovation and Education Take Flight
              </h2>
              <p className="text-lg text-muted-foreground">
                At AeroLabz, we blend aeronautics research with immersive, hands-on learning experiences. 
                Our programs ignite the spark of innovation in young minds, propelling the next generation 
                of aerospace pioneers.
              </p>
              <Button className="bg-gradient-hero">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center hover:shadow-premium transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="container px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
              OUR SERVICES
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Explore Our Educational Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Unleash Your Students' Potential with Our Programs. Our services are designed to cater to your 
              educational needs in STEM and aeronautics.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-premium transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="p-4 bg-gradient-hero rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why AeroLabz Section */}
      <section className="py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
                WHY CHOOSE US
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why AeroLabz?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We're committed to transforming STEM education through innovative approaches 
                and hands-on learning experiences that prepare students for the future.
              </p>
              
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {[
                {
                  icon: Users,
                  title: "Expert Team",
                  description: "Passionate educators and STEM specialists"
                },
                {
                  icon: Award,
                  title: "Proven Results", 
                  description: "Track record of improving student engagement"
                },
                {
                  icon: TrendingUp,
                  title: "Continuous Growth",
                  description: "Regular assessments and program improvements"
                }
              ].map((item, index) => (
                <Card key={index} className="hover:shadow-premium transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gradient-hero rounded-lg">
                        <item.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;
