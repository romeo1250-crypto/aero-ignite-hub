import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, ArrowRight, Users, Award, Lightbulb } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "info@aerolabz.com",
      description: "Send us an email anytime",
      action: () => window.open("mailto:info@aerolabz.com")
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+254 791 040 912",
      description: "Mon-Fri from 8am to 5pm",
      action: () => window.open("tel:+254791040912")
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: "+254 791 040 912",
      description: "Chat with us instantly",
      action: () => window.open("https://wa.me/254791040912?text=Hello%20AeroLabz!%20I'm%20interested%20in%20your%20STEM%20programs.")
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Nairobi, Kenya",
      description: "Our headquarters location",
      action: () => {}
    }
  ];

  const services = [
    "STEM Workshops",
    "Flight Simulation Programs",
    "Student Competitions",
    "Technology Integration",
    "Educational Field Trips",
    "Teacher Training",
    "Custom Programs"
  ];

  const handleWhatsAppContact = () => {
    const message = "Hello AeroLabz! I'm interested in learning more about your STEM programs and how they can benefit our institution.";
    window.open(`https://wa.me/254791040912?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-primary/10 via-secondary/5 to-background overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container px-4 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-hero/10 border border-primary/20 mb-6">
              <MessageCircle className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Connect With Us</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Let's Transform Education Together
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              Ready to revolutionize your STEM programs? Our expert team is here to guide you through innovative 
              educational solutions that inspire the next generation of innovators.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-hero group" onClick={handleWhatsAppContact}>
                <MessageCircle className="mr-2 h-5 w-5" />
                Chat on WhatsApp
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="group">
                <Phone className="mr-2 h-5 w-5" />
                Schedule a Call
              </Button>
            </div>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="text-center p-6 rounded-2xl bg-background/50 backdrop-blur border border-primary/10">
              <Users className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold text-primary">1000+</div>
              <div className="text-sm text-muted-foreground">Students Reached</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-background/50 backdrop-blur border border-primary/10">
              <Award className="h-8 w-8 text-secondary mx-auto mb-3" />
              <div className="text-2xl font-bold text-secondary">50+</div>
              <div className="text-sm text-muted-foreground">Schools Partnered</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-background/50 backdrop-blur border border-primary/10">
              <Lightbulb className="h-8 w-8 text-accent mx-auto mb-3" />
              <div className="text-2xl font-bold text-accent">100+</div>
              <div className="text-sm text-muted-foreground">Programs Delivered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 bg-gradient-to-b from-background to-secondary/5">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Contact Form */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Start Your Journey
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Share your vision with us. Whether you're looking to implement new STEM programs, 
                  upgrade existing curricula, or explore innovative teaching methods, we're here to help 
                  you succeed.
                </p>
              </div>

              <Card className="border-0 shadow-premium bg-gradient-to-br from-background to-background/80 backdrop-blur">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-sm font-medium">First Name</Label>
                        <Input id="firstName" placeholder="Your first name" className="h-12" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-sm font-medium">Last Name</Label>
                        <Input id="lastName" placeholder="Your last name" className="h-12" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">Email Address</Label>
                      <Input id="email" type="email" placeholder="your.email@example.com" className="h-12" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-medium">Phone Number</Label>
                      <Input id="phone" placeholder="+254 700 000 000" className="h-12" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="organization" className="text-sm font-medium">School/Organization</Label>
                      <Input id="organization" placeholder="Your school or organization name" className="h-12" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service" className="text-sm font-medium">Service Interest</Label>
                      <Select>
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service, index) => (
                            <SelectItem key={index} value={service.toLowerCase().replace(/\s+/g, '-')}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-medium">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us about your educational goals and how we can help transform your programs..."
                        rows={5}
                        className="resize-none"
                      />
                    </div>

                    <div className="flex gap-3">
                      <Button type="submit" size="lg" className="flex-1 bg-gradient-hero h-12 group">
                        <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        Send Message
                      </Button>
                      <Button 
                        type="button" 
                        variant="outline" 
                        size="lg" 
                        className="h-12 px-6"
                        onClick={handleWhatsAppContact}
                      >
                        <MessageCircle className="h-4 w-4" />
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Connect With Us
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Choose your preferred way to reach out. Our team is ready to discuss your needs 
                  and provide customized solutions for your educational goals.
                </p>
              </div>

              <div className="grid gap-4">
                {contactInfo.map((info, index) => (
                  <Card 
                    key={index} 
                    className="group hover:shadow-premium transition-all duration-300 hover:scale-[1.02] cursor-pointer border-primary/10 hover:border-primary/20"
                    onClick={info.action}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="p-4 bg-gradient-hero rounded-xl group-hover:scale-110 transition-transform">
                          <info.icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-1">{info.title}</h3>
                          <p className="text-lg font-medium text-primary mb-1">{info.details}</p>
                          <p className="text-sm text-muted-foreground">{info.description}</p>
                        </div>
                        <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <Card className="bg-gradient-to-br from-green-50 to-green-100/50 dark:from-green-950/20 dark:to-green-900/10 border-green-200 dark:border-green-800">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex p-4 bg-green-100 dark:bg-green-900/30 rounded-2xl mb-4">
                    <MessageCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Need Immediate Assistance?</h3>
                  <p className="text-muted-foreground mb-6">
                    Get instant support on WhatsApp. Our team is ready to answer your questions 
                    and provide quick solutions.
                  </p>
                  <Button 
                    onClick={handleWhatsAppContact}
                    className="bg-green-600 hover:bg-green-700 text-white w-full"
                    size="lg"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Chat on WhatsApp Now
                  </Button>
                </CardContent>
              </Card>

              {/* FAQ */}
              <Card className="bg-gradient-card border-primary/10">
                <CardHeader>
                  <CardTitle className="text-xl">Frequently Asked Questions</CardTitle>
                  <CardDescription>Quick answers to help you get started</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary">How quickly can you start a program?</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      We can typically begin implementation within 2-3 weeks of initial consultation, 
                      including curriculum planning and teacher preparation.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary">Do you provide teacher training?</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Yes, comprehensive teacher training is included in all our programs, with ongoing 
                      support and professional development opportunities.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary">What age groups do you serve?</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      We serve K-12 students with age-appropriate programs designed for different 
                      learning stages and developmental needs.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary">Can programs be customized?</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Absolutely! We work closely with each institution to tailor programs that 
                      align with their specific goals and curriculum requirements.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-hero/10 border border-primary/20 mb-8">
              <Award className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Join 50+ Partner Schools</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Ready to Lead the Future?
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Join the growing community of forward-thinking educators who are shaping the next 
              generation through innovative STEM programs. Together, we're building tomorrow's innovators.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button size="lg" className="bg-gradient-hero group h-14 px-8">
                <Phone className="mr-2 h-5 w-5" />
                Schedule a Consultation
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="h-14 px-8 group">
                <MessageCircle className="mr-2 h-5 w-5" />
                Start WhatsApp Chat
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">24h</div>
                <div className="text-sm text-muted-foreground">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;