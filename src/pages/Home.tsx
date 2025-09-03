import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Plane, 
  Users, 
  Award, 
  Zap, 
  Target,
  BookOpen,
  FlaskConical,
  Gamepad2,
  Star,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const Home = () => {
  const services = [
    {
      icon: BookOpen,
      title: "STEM Workshops and Activities",
      description: "Hands-on STEM workshops tailored for K-12 students. Interactive aeronautics activities and simulations."
    },
    {
      icon: Gamepad2,
      title: "Student Competitions and Challenges",
      description: "Organizing aeronautics competitions and challenges. Providing resources and support for student participation."
    },
    {
      icon: Zap,
      title: "Technology Integration in Education",
      description: "Implementing cutting-edge technology in classrooms. Supporting schools with digital tools and resources."
    },
    {
      icon: Target,
      title: "Ongoing Support and Evaluation",
      description: "Regular progress assessments and feedback. Continuous support for educators and students."
    },
    {
      icon: Plane,
      title: "Flight Simulation Programs",
      description: "Engaging flight simulation activities to enhance understanding of aeronautics. Real-world scenarios to foster practical learning."
    },
    {
      icon: FlaskConical,
      title: "Educational Field Trips",
      description: "Organizing visits to aerospace museums and research centers. Providing immersive experiences to inspire students."
    }
  ];

  const stats = [
    { number: "25+", label: "Clients" },
    { number: "5+", label: "Counties Served" },
    { number: "18+", label: "Projects" },
    { number: "10+", label: "Years of Experience" }
  ];

  const features = [
    "Innovative Training Programs",
    "Adaptive Learning Paths", 
    "Practical Skill Development",
    "Expert Team Support"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Main Content Section */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
        <div className="container px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
              YOUR DREAMS, OUR FLIGHT PATH
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Where Innovation and Education Take Flight
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Welcome to AeroLabz, where innovation meets inspiration, and your aeronautical dreams take flight. 
              We are more than an educational partner; we are your gateway to success, dedicated to delivering 
              exceptional learning experiences, cutting-edge research, and unparalleled expertise.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">About Us</h3>
              <p className="text-muted-foreground">
                At AeroLabz, we blend aeronautics research with immersive, hands-on learning experiences. 
                Our programs ignite the spark of innovation in young minds, propelling the next generation 
                of aerospace pioneers.
              </p>
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              <Button variant="hero" size="lg" className="group">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <div className="relative">
              <div className="bg-gradient-card rounded-2xl p-8 shadow-premium">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-background">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Explore Our Educational Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Unleash Your Students' Potential with Our Programs. Our services are designed to cater to your 
              educational needs in STEM and aeronautics.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-premium transition-all duration-300 hover:-translate-y-2 border-border/50">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-hero rounded-lg">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {service.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why AeroLabz Section */}
      <section className="py-24 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why AeroLabz?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Unleash Your Aerial Potential With Our Expert Team. Unlock Your Success with Our Expertise 
              and Dive into a World of Cutting-Edge Drone Training, Technology, and Support.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Aerolabz: Your partner in Drone Excellence</h3>
                <p className="text-muted-foreground">
                  Join the creative revolution for tomorrow's Success and Embrace a trusted Partnership 
                  Committed to Your Satisfaction and Driven by Passion and Unwavering dedication to 
                  transformative STEM Education.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    title: "Innovative Training Programs",
                    description: "Aerolabz offers cutting-edge training programs that incorporate the latest in drone technology and industry standards."
                  },
                  {
                    title: "Adaptive Learning Paths", 
                    description: "We provide adaptive learning paths that cater to your specific needs and goals, ensuring a personalized and effective learning experience."
                  },
                  {
                    title: "Practical Skill Development",
                    description: "Through hands-on training and real-world simulations, you'll develop the practical skills necessary to excel in various applications."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex space-x-4">
                    <div className="flex-shrink-0">
                      <div className="p-2 bg-accent/10 rounded-lg">
                        <Star className="h-5 w-5 text-accent" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-card rounded-2xl p-8 shadow-premium">
                <div className="text-center space-y-6">
                  <div className="text-6xl">🎯</div>
                  <h4 className="text-2xl font-bold">Over a Decade of Excellence</h4>
                  <p className="text-muted-foreground">
                    Pioneering Excellence in Cutting-Edge Aeronautical Innovations
                  </p>
                  <Button variant="accent" size="lg" className="w-full">
                    Get Started Today
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;