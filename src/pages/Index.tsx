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

      {/* Our Goals Section */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
        <div className="container px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
              OUR GOALS
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Goals
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-12">
              Our overarching goal at AeroLabz is to empower and inspire the next generation of innovators, 
              problem-solvers, and leaders in STEM education. Through our programs and initiatives, we aim to 
              cultivate a culture of curiosity, creativity, and excellence, equipping students with the skills, 
              knowledge, and confidence they need to thrive in an increasingly complex and interconnected world.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-premium transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="p-4 bg-gradient-hero rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Foster Innovation</CardTitle>
                <CardDescription>
                  Encourage creativity and innovative thinking among students by providing hands-on experiences 
                  and exposure to cutting-edge technologies in STEM fields.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-premium transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="p-4 bg-gradient-hero rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Promote Equity and Inclusion</CardTitle>
                <CardDescription>
                  Ensure that all students, regardless of background or circumstances, have equal access to 
                  high-quality STEM education, fostering diversity and inclusion in the STEM workforce of the future.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-premium transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="p-4 bg-gradient-hero rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Drive Impactful Learning Outcomes</CardTitle>
                <CardDescription>
                  Measure and improve the effectiveness of our programs by continuously evaluating student learning 
                  outcomes, engagement levels, and overall program impact, ensuring that AeroLabz remains at the 
                  forefront of STEM education excellence.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-24">
        <div className="container px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
              OUR VALUES
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Values
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-premium transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-accent rounded-lg">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-accent">Innovation</h3>
                    <p className="text-sm text-muted-foreground">
                      We are committed to fostering a culture of creativity, experimentation, and continuous 
                      improvement, where new ideas are welcomed, explored, and implemented to drive positive change.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-premium transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-accent rounded-lg">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-accent">Equity</h3>
                    <p className="text-sm text-muted-foreground">
                      We believe that all individuals deserve equal access to educational opportunities and resources, 
                      regardless of their background or circumstances.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-premium transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-accent rounded-lg">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-accent">Excellence</h3>
                    <p className="text-sm text-muted-foreground">
                      We are committed to upholding the highest standards of quality, professionalism, and integrity 
                      in curriculum development, program delivery, and student support.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-premium transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-accent rounded-lg">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-accent">Collaboration</h3>
                    <p className="text-sm text-muted-foreground">
                      We believe in the power of partnerships and teamwork to leverage collective expertise and 
                      resources for greater impact.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-premium transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-accent rounded-lg">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-accent">Integrity</h3>
                    <p className="text-sm text-muted-foreground">
                      We hold ourselves to the highest ethical standards and strive to earn the trust and confidence 
                      of our students, partners, and communities through our actions and deeds.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
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
