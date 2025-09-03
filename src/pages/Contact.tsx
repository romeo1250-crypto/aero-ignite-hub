import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "info@aerolabz.com",
      description: "Send us an email anytime"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+254 700 123 456",
      description: "Mon-Fri from 8am to 5pm"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Nairobi, Kenya",
      description: "Our headquarters location"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon-Fri: 8am-5pm",
      description: "Weekend support available"
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

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
              GET IN TOUCH
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Let's Start Your STEM Journey
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to transform your educational approach? We're here to help you create 
              engaging STEM experiences that inspire and educate. Get in touch with our team today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Send us a message</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you within 24 hours. 
                Let us know how we can help transform your educational programs.
              </p>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Your last name" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="+254 700 000 000" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="organization">School/Organization</Label>
                  <Input id="organization" placeholder="Your school or organization name" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Service Interest</Label>
                  <Select>
                    <SelectTrigger>
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
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your educational goals and how we can help..."
                    rows={5}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-gradient-hero">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in touch</h2>
              <p className="text-muted-foreground mb-8">
                We're here to help you succeed. Reach out through any of these channels 
                and let's discuss how AeroLabz can support your educational mission.
              </p>

              <div className="grid gap-6 mb-8">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="hover:shadow-premium transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-gradient-hero rounded-lg">
                          <info.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">{info.title}</h3>
                          <p className="text-lg font-medium text-primary mb-1">{info.details}</p>
                          <p className="text-sm text-muted-foreground">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* FAQ */}
              <Card className="bg-gradient-card">
                <CardHeader>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                  <CardDescription>Quick answers to common questions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-1">How quickly can you start a program?</h4>
                    <p className="text-sm text-muted-foreground">
                      We can typically begin implementation within 2-3 weeks of initial consultation.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Do you provide teacher training?</h4>
                    <p className="text-sm text-muted-foreground">
                      Yes, comprehensive teacher training is included in all our programs.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">What age groups do you serve?</h4>
                    <p className="text-sm text-muted-foreground">
                      We serve K-12 students with age-appropriate programs for all levels.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Education?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join the growing community of educators who are revolutionizing STEM learning 
              with AeroLabz. Let's create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-hero">
                Schedule a Consultation
              </Button>
              <Button variant="outline" size="lg">
                Request a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;