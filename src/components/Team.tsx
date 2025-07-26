import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Heart, Music, BookOpen, Handshake, Star } from "lucide-react";
import scoTeam from "@/assets/sco-team.jpg";

const Team = () => {
  const departments = [
    {
      icon: Music,
      name: "Worship Team",
      description: "Leading our community in praise and worship",
      members: 12,
      color: "bg-blue-100 text-blue-700"
    },
    {
      icon: BookOpen,
      name: "Bible Study Leaders",
      description: "Facilitating small groups and Bible studies",
      members: 8,
      color: "bg-green-100 text-green-700"
    },
    {
      icon: Heart,
      name: "Outreach Ministry",
      description: "Serving our campus and local community",
      members: 15,
      color: "bg-red-100 text-red-700"
    },
    {
      icon: Handshake,
      name: "Welcome Team",
      description: "Greeting and integrating new members",
      members: 10,
      color: "bg-purple-100 text-purple-700"
    },
    {
      icon: Users,
      name: "Small Group Leaders",
      description: "Building intimate fellowship communities",
      members: 6,
      color: "bg-orange-100 text-orange-700"
    },
    {
      icon: Star,
      name: "Events Committee",
      description: "Organizing retreats and special events",
      members: 9,
      color: "bg-yellow-100 text-yellow-700"
    }
  ];

  const testimonials = [
    {
      name: "Mbali Tshivenda",
      role: "Worship Team Member",
      quote: "Being part of SCO has transformed my university experience. The community here feels like family.",
      year: "3rd Year, Psychology"
    },
    {
      name: "Emmanuel Ramavhoya",
      role: "Small Group Leader",
      quote: "Leading a small group has helped me grow as a leader and deepen my own faith journey.",
      year: "4th Year, Computer Science"
    },
    {
      name: "Precious Munyai",
      role: "Outreach Coordinator",
      quote: "Through SCO's outreach programs, I've learned the joy of serving others and making a difference.",
      year: "2nd Year, Social Work"
    }
  ];

  return (
    <section id="team" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">Our Team</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            SCO is powered by passionate students who volunteer their time and talents to serve 
            our community. Get to know the different ministry teams and how you can get involved.
          </p>
        </div>

        {/* Team Photo */}
        <div className="mb-20">
          <div className="relative rounded-2xl overflow-hidden shadow-card max-w-4xl mx-auto">
            <img
              src={scoTeam}
              alt="SCO Team"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-3xl font-bold mb-2">SCO Team 2024</h3>
              <p className="text-lg opacity-90">United in faith, service, and fellowship</p>
            </div>
          </div>
        </div>

        {/* Ministry Departments */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">Ministry Departments</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <Card key={index} className="hover:shadow-card-hover transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow-blue transition-all duration-300">
                    <dept.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">{dept.name}</h4>
                  <p className="text-muted-foreground mb-4">{dept.description}</p>
                  <Badge className={`${dept.color} border-0`}>
                    {dept.members} Members
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">What Our Members Say</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-card-hover transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-xl font-bold text-primary">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-primary font-medium">{testimonial.role}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.year}</p>
                  </div>
                  <blockquote className="text-muted-foreground italic text-center leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Join the Team CTA */}
        <div className="text-center">
          <div className="bg-accent rounded-2xl p-8 max-w-2xl mx-auto">
            <h4 className="text-2xl font-bold text-foreground mb-4">Want to Join Our Team?</h4>
            <p className="text-muted-foreground mb-6">
              We're always looking for passionate students to join our ministry teams. 
              No experience necessary - just a heart to serve!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary-dark">
                Volunteer With Us
              </Button>
              <Button variant="outline" size="lg">
                Learn More About Teams
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;