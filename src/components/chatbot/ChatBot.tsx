import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm AeroBot, your AeroLabz assistant. I can help you learn about our STEM education programs, services, and aeronautics courses. What would you like to know?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const aerolabzKnowledge = {
    about: {
      keywords: ['about', 'company', 'aerolabz', 'who', 'what is'],
      response: "AeroLabz is where innovation meets inspiration! We blend aeronautics research with immersive, hands-on learning experiences. Our programs ignite the spark of innovation in young minds, propelling the next generation of aerospace pioneers. We serve 25+ educational institutions across 5+ counties in Kenya with over 10 years of experience."
    },
    services: {
      keywords: ['services', 'programs', 'workshops', 'what do you offer', 'stem'],
      response: "We offer comprehensive STEM education services including: 1) STEM Workshops and Activities with hands-on aeronautics simulations, 2) Student Competitions and Challenges with regional and national events, 3) Technology Integration with VR experiences and simulation software, 4) Flight Simulation Programs with professional-grade simulators, 5) Educational Field Trips to aerospace facilities, and 6) Ongoing Support and Evaluation for continuous improvement."
    },
    mission: {
      keywords: ['mission', 'goal', 'purpose', 'why'],
      response: "Our mission is to inspire and educate the next generation of aerospace pioneers through innovative, hands-on learning experiences that blend cutting-edge technology with fundamental aeronautical principles. We're committed to making STEM education accessible, engaging, and transformative for K-12 students across Kenya and beyond."
    },
    values: {
      keywords: ['values', 'principles', 'core'],
      response: "Our core values are: 1) Creative Excellence - fostering creativity and innovation in every learning experience, 2) Drive Impactful Learning Outcomes - delivering measurable educational impact, and 3) Promote Equity and Inclusion - ensuring equal access to quality STEM education for all students."
    },
    packages: {
      keywords: ['packages', 'pricing', 'cost', 'programs available'],
      response: "We offer three main packages: 1) Basic Workshop Package - 2-day STEM workshop for up to 30 students with basic materials and digital resources, 2) Comprehensive Program - Full semester program with teacher training, technology integration, ongoing support, student competitions, and field trips, and 3) Custom Solutions - Tailored programs with customized curriculum, flexible scheduling, and specialized equipment."
    },
    contact: {
      keywords: ['contact', 'reach', 'phone', 'email', 'location'],
      response: "You can reach us at: Email: info@aerolabz.com, Phone: +1 (555) 123-4567, Location: Kenya. We're always happy to discuss how we can help transform your STEM education programs!"
    },
    technology: {
      keywords: ['technology', 'simulation', 'vr', 'digital', 'software'],
      response: "We integrate cutting-edge technology including virtual reality experiences, professional flight simulation software, digital learning platforms, and modern interactive tools. Our simulators provide real-world scenarios for practical learning applications with safety training protocols."
    },
    competitions: {
      keywords: ['competitions', 'challenges', 'contests', 'awards'],
      response: "We organize exciting aeronautics competitions and challenges at regional and national levels. These include team-building activities, provide resources and support for participation, and feature recognition and awards programs to celebrate student achievements."
    }
  };

  const findBestResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    // Check each knowledge category
    for (const [category, data] of Object.entries(aerolabzKnowledge)) {
      if (data.keywords.some(keyword => input.includes(keyword))) {
        return data.response;
      }
    }

    // Default responses for common greetings
    if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
      return "Hello! Welcome to AeroLabz! I'm here to help you learn about our innovative STEM education programs and aeronautics courses. What would you like to know?";
    }

    if (input.includes('thank') || input.includes('thanks')) {
      return "You're welcome! Is there anything else you'd like to know about AeroLabz and our STEM education programs?";
    }

    // Default fallback
    return "I'd be happy to help you learn more about AeroLabz! I can tell you about our STEM workshops, flight simulation programs, educational services, mission, values, or how to contact us. What specific information are you looking for?";
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse = findBestResponse(inputMessage);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-gradient-hero hover:shadow-premium transition-all duration-300 hover:scale-110 z-50"
          size="icon"
        >
          <MessageCircle className="h-6 w-6 text-white" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-96 h-[500px] shadow-2xl z-50 flex flex-col">
          <CardHeader className="bg-gradient-hero text-white rounded-t-lg flex flex-row items-center justify-between p-4">
            <div className="flex items-center space-x-3">
              <div className="h-8 w-8 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <CardTitle className="text-lg">AeroBot</CardTitle>
                <p className="text-xs text-white/80">AeroLabz Assistant</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20"
            >
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>

          <CardContent className="flex-1 flex flex-col p-0">
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`flex items-start space-x-2 max-w-[80%] ${
                        message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                      }`}
                    >
                      <div className={`h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                        message.sender === 'user' 
                          ? 'bg-primary' 
                          : 'bg-gradient-hero'
                      }`}>
                        {message.sender === 'user' ? (
                          <User className="h-3 w-3 text-white" />
                        ) : (
                          <Bot className="h-3 w-3 text-white" />
                        )}
                      </div>
                      <div
                        className={`rounded-lg p-3 text-sm ${
                          message.sender === 'user'
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted text-muted-foreground'
                        }`}
                      >
                        {message.text}
                      </div>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="flex items-start space-x-2 max-w-[80%]">
                      <div className="h-6 w-6 bg-gradient-hero rounded-full flex items-center justify-center flex-shrink-0">
                        <Bot className="h-3 w-3 text-white" />
                      </div>
                      <div className="bg-muted rounded-lg p-3 text-sm">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>

            <div className="border-t p-4">
              <div className="flex space-x-2">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me about AeroLabz..."
                  className="flex-1"
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim() || isTyping}
                  size="icon"
                  className="bg-gradient-hero"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default ChatBot;