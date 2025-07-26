import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import chairmanPortrait from "@/assets/chairman-portrait.jpg";

const Leadership = () => {
  const leaders = [
    {
      name: "Thabo Makhado",
      position: "Chairman",
      image: chairmanPortrait,
      bio: "Final year Business Administration student with a passion for servant leadership and community building. Thabo has been with SCO for 3 years and leads with wisdom and compassion.",
      email: "chairman@sco-univen.org",
      phone: "+27 82 123 4567"
    }
  ];

  const executiveTeam = [
    {
      name: "Nomsa Ramaila",
      position: "Vice-Chairperson",
      description: "Supports the chairman and oversees internal programs and member development initiatives."
    },
    {
      name: "David Mthimkhulu",
      position: "Secretary",
      description: "Manages all communication, documentation, and coordinates meetings and events."
    },
    {
      name: "Grace Netshituni",
      position: "Treasurer",
      description: "Oversees financial management, budgeting, and fundraising activities for the organization."
    },
    {
      name: "Peter Mavhungu",
      position: "Worship Leader",
      description: "Leads our worship services and coordinates music ministry for all SCO gatherings."
    },
    {
      name: "Sarah Mudau",
      position: "Outreach Coordinator",
      description: "Organizes community service projects and evangelistic outreach programs."
    },
    {
      name: "John Tshivhase",
      position: "Youth Pastor",
      description: "Provides spiritual guidance, counseling, and oversight for all SCO activities."
    }
  ];

  return (
    <section id="leadership" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">Our Leadership</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Meet the dedicated leaders who guide SCO with faith, wisdom, and a heart for service. 
            Our leadership team is committed to fostering spiritual growth and community development.
          </p>
        </div>

        {/* Chairman Spotlight */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">Meet Our Chairman</h3>
          {leaders.map((leader, index) => (
            <Card key={index} className="max-w-4xl mx-auto shadow-card hover:shadow-card-hover transition-all duration-300">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  <div className="lg:col-span-1">
                    <div className="relative">
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="w-full max-w-sm mx-auto rounded-2xl shadow-lg"
                      />
                      <div className="absolute inset-0 rounded-2xl ring-4 ring-primary/20"></div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <div className="text-center lg:text-left">
                      <h4 className="text-3xl font-bold text-foreground mb-2">{leader.name}</h4>
                      <p className="text-xl text-primary font-semibold mb-6">{leader.position}</p>
                      <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{leader.bio}</p>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center justify-center lg:justify-start text-muted-foreground">
                          <Mail className="h-5 w-5 mr-3 text-primary" />
                          <span>{leader.email}</span>
                        </div>
                        <div className="flex items-center justify-center lg:justify-start text-muted-foreground">
                          <Phone className="h-5 w-5 mr-3 text-primary" />
                          <span>{leader.phone}</span>
                        </div>
                      </div>
                      
                      <Button className="bg-primary hover:bg-primary-dark">
                        Contact Chairman
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Executive Team */}
        <div>
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">Executive Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {executiveTeam.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-card-hover transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow-blue transition-all duration-300">
                    <span className="text-2xl font-bold text-primary">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">{member.name}</h4>
                  <p className="text-primary font-medium mb-3">{member.position}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-accent rounded-2xl p-8 max-w-2xl mx-auto">
            <h4 className="text-2xl font-bold text-foreground mb-4">Interested in Leadership?</h4>
            <p className="text-muted-foreground mb-6">
              We're always looking for passionate students who want to serve and lead in our community.
            </p>
            <Button variant="outline" size="lg">
              Learn About Leadership Opportunities
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;