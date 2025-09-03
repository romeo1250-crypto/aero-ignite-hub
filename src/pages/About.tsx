import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Lightbulb, Users, Target } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Creative Excellence",
      description: "We foster creativity and innovation in every learning experience we design."
    },
    {
      icon: Target,
      title: "Drive Impactful Learning Outcomes", 
      description: "Our programs are designed to deliver measurable educational impact."
    },
    {
      icon: Users,
      title: "Promote Equity and Inclusion",
      description: "We ensure equal access to quality STEM education for all students."
    }
  ];

  const achievements = [
    "10+ Years of Experience in aeronautical education",
    "25+ Educational institutions served",
    "5+ Counties reached across Kenya",
    "18+ Successful projects completed",
    "Hundreds of students inspired in STEM fields"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
              ABOUT AEROLABZ
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Where Innovation and Education Take Flight
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              At AeroLabz, we blend aeronautics research with immersive, hands-on learning experiences. 
              Our programs ignite the spark of innovation in young minds, propelling the next generation 
              of aerospace pioneers.
            </p>
          </div>
        </div>
      </section>

      {/* Main About Content */}
      <section className="py-24">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                YOUR DREAMS, OUR FLIGHT PATH
              </h2>
              <p className="text-lg text-muted-foreground">
                Welcome to AeroLabz, where innovation meets inspiration, and your aeronautical dreams take flight. 
                We are more than an educational partner; we are your gateway to success, dedicated to delivering 
                exceptional learning experiences, cutting-edge research, and unparalleled expertise.
              </p>
              <p className="text-lg text-muted-foreground">
                Through technology and educational programs, we cultivate a deep understanding of aeronautical 
                principles and a lifelong passion for STEM. Join us in transforming curiosity into boundless 
                opportunity, where the skies are just the beginning.
              </p>
            </div>
            
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">{achievement}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Values Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our mission to transform STEM education
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-premium transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="mx-auto p-4 bg-gradient-hero rounded-lg w-fit mb-4">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Mission</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              To inspire and educate the next generation of aerospace pioneers through innovative, 
              hands-on learning experiences that blend cutting-edge technology with fundamental 
              aeronautical principles. We are committed to making STEM education accessible, 
              engaging, and transformative for K-12 students across Kenya and beyond.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;