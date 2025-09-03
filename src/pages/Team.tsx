import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, Mail } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Kimani",
      role: "Founder & CEO",
      specialization: "Aerospace Engineering",
      image: "👩‍🚀",
      description: "Former NASA researcher with 15+ years in aeronautical education. Passionate about inspiring the next generation of aerospace pioneers.",
      achievements: ["PhD Aerospace Engineering", "NASA Alumni", "Educational Innovation Award"],
      social: { linkedin: "#", twitter: "#", email: "sarah@aerolabz.com" }
    },
    {
      name: "James Mwangi",
      role: "Head of Education",
      specialization: "STEM Curriculum Development",
      image: "👨‍🏫",
      description: "Master educator with a decade of experience in K-12 STEM programs. Expert in making complex concepts accessible and engaging.",
      achievements: ["M.Ed STEM Education", "Curriculum Design Expert", "Teacher Trainer"],
      social: { linkedin: "#", twitter: "#", email: "james@aerolabz.com" }
    },
    {
      name: "Dr. Grace Wanjiku",
      role: "Research Director",
      specialization: "Educational Technology",
      image: "👩‍💻",
      description: "Leading researcher in educational technology integration. Focuses on innovative learning solutions for aeronautics education.",
      achievements: ["PhD Educational Technology", "Research Publications", "Innovation Leader"],
      social: { linkedin: "#", twitter: "#", email: "grace@aerolabz.com" }
    },
    {
      name: "Captain David Ochieng",
      role: "Flight Training Specialist",
      specialization: "Aviation Training",
      image: "👨‍✈️",
      description: "Commercial pilot and certified flight instructor. Brings real-world aviation experience to educational programs.",
      achievements: ["Commercial Pilot License", "Flight Instructor", "Safety Specialist"],
      social: { linkedin: "#", twitter: "#", email: "david@aerolabz.com" }
    },
    {
      name: "Maria Santos",
      role: "Technology Integration Lead",
      specialization: "VR/AR Development",
      image: "👩‍💼",
      description: "Tech innovator specializing in immersive learning experiences. Creates cutting-edge VR and simulation programs.",
      achievements: ["VR/AR Developer", "Tech Innovation Award", "Digital Learning Expert"],
      social: { linkedin: "#", twitter: "#", email: "maria@aerolabz.com" }
    },
    {
      name: "Prof. Michael Kariuki",
      role: "Academic Advisor",
      specialization: "Aeronautical Science",
      image: "👨‍🎓",
      description: "University professor and industry consultant. Ensures our programs meet the highest academic and industry standards.",
      achievements: ["Professor of Aeronautics", "Industry Consultant", "Academic Excellence"],
      social: { linkedin: "#", twitter: "#", email: "michael@aerolabz.com" }
    }
  ];

  const advisors = [
    {
      name: "Dr. Jane Muthoni",
      role: "Educational Policy Advisor",
      organization: "Ministry of Education, Kenya"
    },
    {
      name: "Captain Robert Singh",
      role: "Aviation Industry Advisor", 
      organization: "Kenya Airways"
    },
    {
      name: "Prof. Elizabeth Nyong'o",
      role: "STEM Education Consultant",
      organization: "University of Nairobi"
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
              MEET THE TEAM
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Discover the AeroLabz Family
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Our team isn't just any team; they're passionate educators, innovators, and STEM enthusiasts. 
              Behind each project's success are individuals who love what they do. They bring talent, dedication, 
              and a commitment to inspiring the next generation to every task.
            </p>
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section className="py-24">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Core Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Meet the educators and experts who craft our success story
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="group hover:shadow-premium transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="text-center">
                  <div className="text-6xl mb-4">{member.image}</div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {member.name}
                  </CardTitle>
                  <Badge className="w-fit mx-auto mb-2 bg-accent/10 text-accent border-accent/20">
                    {member.role}
                  </Badge>
                  <CardDescription className="text-sm text-muted-foreground">
                    {member.specialization}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground text-center">
                    {member.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Key Qualifications:</h4>
                    <ul className="space-y-1">
                      {member.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-center space-x-2 pt-4">
                    <Button variant="ghost" size="icon">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Twitter className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Mail className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-24 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Advisory Board</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Distinguished experts guiding our mission and strategy
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {advisors.map((advisor, index) => (
              <Card key={index} className="text-center hover:shadow-premium transition-all duration-300">
                <CardHeader>
                  <div className="text-4xl mb-4">🎯</div>
                  <CardTitle className="text-lg">{advisor.name}</CardTitle>
                  <CardDescription>{advisor.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge className="bg-primary/10 text-primary border-primary/20">
                    {advisor.organization}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-24">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Team Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="text-4xl">🚀</div>
                <h3 className="text-xl font-semibold">Innovation First</h3>
                <p className="text-muted-foreground">
                  We continuously push boundaries to create revolutionary educational experiences
                </p>
              </div>
              <div className="space-y-4">
                <div className="text-4xl">🤝</div>
                <h3 className="text-xl font-semibold">Collaborative Spirit</h3>
                <p className="text-muted-foreground">
                  Together we achieve more, supporting each other and our students' success
                </p>
              </div>
              <div className="space-y-4">
                <div className="text-4xl">💡</div>
                <h3 className="text-xl font-semibold">Passionate Teaching</h3>
                <p className="text-muted-foreground">
                  Every team member brings genuine passion for education and student empowerment
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;