import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Youtube } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "info@sco-univen.org",
      description: "Send us a message anytime"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+27 15 962 8000",
      description: "University of Venda main line"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "University of Venda Campus",
      description: "Thohoyandou, Limpopo"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: "Mon-Fri: 9AM-5PM",
      description: "Student Center Room 205"
    }
  ];

  const socialLinks = [
    { icon: Facebook, name: "Facebook", url: "#" },
    { icon: Instagram, name: "Instagram", url: "#" },
    { icon: Youtube, name: "YouTube", url: "#" }
  ];

  return (
    <section id="contact" className="py-20 bg-section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Have questions about SCO? Want to get involved? We'd love to hear from you! 
            Reach out through any of the methods below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-card hover:shadow-card-hover transition-all duration-300">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-foreground font-medium">First Name</Label>
                    <Input 
                      id="firstName" 
                      placeholder="Your first name"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-foreground font-medium">Last Name</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Your last name"
                      className="mt-2"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-foreground font-medium">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your.email@univen.ac.za"
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone" className="text-foreground font-medium">Phone (Optional)</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="+27 82 123 4567"
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="subject" className="text-foreground font-medium">Subject</Label>
                  <Input 
                    id="subject" 
                    placeholder="What's this about?"
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-foreground font-medium">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us more about your inquiry..."
                    rows={5}
                    className="mt-2"
                  />
                </div>
                
                <Button className="w-full bg-primary hover:bg-primary-dark" size="lg">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="hover:shadow-card-hover transition-all duration-300 group">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow-blue transition-all duration-300">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">{info.title}</h4>
                      <p className="text-primary font-medium mb-1">{info.details}</p>
                      <p className="text-muted-foreground text-sm">{info.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <Card className="shadow-card">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold text-foreground mb-4 text-center">Follow Us</h4>
                <div className="flex justify-center space-x-4">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="hover:bg-primary hover:text-white transition-colors duration-300"
                    >
                      <social.icon className="h-5 w-5 mr-2" />
                      {social.name}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Info */}
            <Card className="shadow-card">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold text-foreground mb-4">Quick Info</h4>
                <div className="space-y-3 text-muted-foreground">
                  <p>🕐 <strong>Sunday Service:</strong> 10:00 AM - 12:00 PM</p>
                  <p>📖 <strong>Bible Study:</strong> Wednesdays 6:00 PM</p>
                  <p>🤝 <strong>Fellowship:</strong> Fridays 7:00 PM</p>
                  <p>📍 <strong>Location:</strong> Main Campus Chapel</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <Card className="shadow-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Find Us on Campus</h3>
              <div className="bg-accent rounded-lg p-8 text-center">
                <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-foreground mb-2">University of Venda</h4>
                <p className="text-muted-foreground mb-4">
                  Private Bag X5050, Thohoyandou, 0950<br />
                  Limpopo Province, South Africa
                </p>
                <Button variant="outline">
                  Get Directions
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;