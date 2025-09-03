import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BookOpen, 
  Gamepad2, 
  Zap, 
  Target,
  Plane,
  FlaskConical,
  ArrowRight,
  Users,
  Award,
  TrendingUp
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: BookOpen,
      title: "STEM Workshops and Activities",
      description: "Hands-on STEM workshops tailored for K-12 students",
      features: [
        "Interactive aeronautics activities and simulations",
        "Age-appropriate curriculum design",
        "Professional instructor guidance",
        "Real-world problem solving"
      ]
    },
    {
      icon: Gamepad2,
      title: "Student Competitions and Challenges",
      description: "Organizing aeronautics competitions and challenges",
      features: [
        "Regional and national competitions",
        "Team-building activities",
        "Resources and support for participation",
        "Recognition and awards program"
      ]
    },
    {
      icon: Zap,
      title: "Technology Integration in Education",
      description: "Implementing cutting-edge technology in classrooms",
      features: [
        "Digital tools and resources",
        "Virtual reality experiences", 
        "Simulation software training",
        "Modern learning platforms"
      ]
    },
    {
      icon: Target,
      title: "Ongoing Support and Evaluation",
      description: "Regular progress assessments and feedback",
      features: [
        "Continuous educator support",
        "Student progress tracking",
        "Performance analytics",
        "Program optimization"
      ]
    },
    {
      icon: Plane,
      title: "Flight Simulation Programs",
      description: "Engaging flight simulation activities",
      features: [
        "Professional-grade simulators",
        "Real-world scenarios",
        "Practical learning applications",
        "Safety training protocols"
      ]
    },
    {
      icon: FlaskConical,
      title: "Educational Field Trips",
      description: "Organizing visits to aerospace facilities",
      features: [
        "Aerospace museums tours",
        "Research center visits",
        "Industry expert interactions",
        "Immersive learning experiences"
      ]
    }
  ];

  const packages = [
    {
      name: "Basic Workshop Package",
      description: "Perfect for schools starting their STEM journey",
      features: [
        "2-day STEM workshop",
        "Up to 30 students",
        "Basic materials included",
        "Digital resources access"
      ],
      highlighted: false
    },
    {
      name: "Comprehensive Program",
      description: "Complete STEM education transformation",
      features: [
        "Full semester program",
        "Teacher training included",
        "Technology integration",
        "Ongoing support",
        "Student competitions",
        "Field trip organization"
      ],
      highlighted: true
    },
    {
      name: "Custom Solutions",
      description: "Tailored programs for specific needs",
      features: [
        "Customized curriculum",
        "Flexible scheduling",
        "Specialized equipment",
        "Dedicated support team"
      ],
      highlighted: false
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
              OUR SERVICES
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Explore Our Educational Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Unleash Your Students' Potential with Our Programs. Our services are designed to cater to your 
              educational needs in STEM and aeronautics.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-premium transition-all duration-300 hover:-translate-y-2 border-border/50">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-gradient-hero rounded-lg">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Service Packages */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Tailor-Made Solutions Await
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore Your Ideal Package. Aerolabz offers a diverse range of educational services, 
              each uniquely designed to ignite the curiosity and ambitions of K12 students.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative ${pkg.highlighted ? 'border-accent shadow-accent' : ''} hover:shadow-premium transition-all duration-300`}>
                {pkg.highlighted && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-accent text-accent-foreground">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{pkg.name}</CardTitle>
                  <CardDescription>{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${pkg.highlighted ? 'bg-gradient-hero' : ''}`}>
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-24 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Comprehensive STEM Education Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to transform your educational approach
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Expert Team",
                description: "Passionate educators and STEM specialists dedicated to student success"
              },
              {
                icon: Award,
                title: "Proven Results",
                description: "Track record of improving student engagement and academic outcomes"
              },
              {
                icon: TrendingUp,
                title: "Continuous Growth",
                description: "Regular assessments and program improvements for lasting impact"
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="mx-auto p-4 bg-gradient-hero rounded-lg w-fit">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;