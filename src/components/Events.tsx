import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, MapPin, Users, Heart, Music, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const Events = () => {
  const upcomingEvents = [
    {
      icon: Music,
      title: "Worship Night",
      date: "Friday, March 15",
      time: "7:00 PM - 9:00 PM",
      location: "University Chapel",
      description: "An evening of praise, worship, and testimony. Come ready to experience God's presence.",
      category: "Worship"
    },
    {
      icon: BookOpen,
      title: "Bible Study Retreat",
      date: "Saturday, March 23",
      time: "9:00 AM - 4:00 PM",
      location: "Conference Center",
      description: "A day of intensive Bible study, fellowship, and spiritual growth. Lunch provided.",
      category: "Study"
    },
    {
      icon: Heart,
      title: "Community Outreach",
      date: "Sunday, March 31",
      time: "1:00 PM - 5:00 PM",
      location: "Local Community Center",
      description: "Join us in serving our local community through food distribution and fellowship.",
      category: "Service"
    },
    {
      icon: Users,
      title: "New Student Welcome",
      date: "Sunday, April 7",
      time: "2:00 PM - 4:00 PM",
      location: "Student Union Building",
      description: "Special welcome event for new students. Meet the team, make friends, and learn about SCO.",
      category: "Fellowship"
    }
  ];

  const regularEvents = [
    {
      title: "Sunday Worship Service",
      frequency: "Every Sunday",
      time: "10:00 AM",
      description: "Weekly worship service with inspiring messages and fellowship"
    },
    {
      title: "Midweek Bible Study",
      frequency: "Every Wednesday",
      time: "6:00 PM",
      description: "Interactive Bible study sessions with discussion and prayer"
    },
    {
      title: "Prayer & Fasting",
      frequency: "First Friday",
      time: "12:00 PM",
      description: "Monthly prayer and fasting session for spiritual breakthrough"
    }
  ];

  return (
    <section id="events" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-foreground mb-6">Upcoming Events</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-body">
            Join us for these special events designed to strengthen our faith community and reach out to others.
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {upcomingEvents.map((event, index) => (
            <Card key={index} className="group hover:shadow-card-hover transition-all duration-500 border-0 shadow-card overflow-hidden">
              <CardContent className="p-0">
                <div className="p-6 pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
                        <event.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-heading font-bold text-foreground">{event.title}</h3>
                        <span className="text-xs bg-accent/20 text-accent-foreground px-2 py-1 rounded-full font-medium">
                          {event.category}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2 text-primary" />
                      <span className="font-medium">{event.date}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2 text-primary" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2 text-primary" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-4">{event.description}</p>
                </div>
                
                <div className="px-6 pb-6">
                  <Button className="w-full bg-primary hover:bg-primary-dark transition-colors duration-300">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Regular Events */}
        <div className="bg-section-gradient rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-heading font-bold text-foreground mb-4">Regular Events</h3>
            <p className="text-muted-foreground leading-relaxed">
              Our weekly and monthly gatherings that form the foundation of our community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {regularEvents.map((event, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-card">
                <h4 className="text-lg font-heading font-bold text-foreground mb-2">{event.title}</h4>
                <div className="text-primary font-semibold mb-1">{event.frequency}</div>
                <div className="text-sm text-muted-foreground mb-3">{event.time}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{event.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Event Newsletter Signup */}
        <div className="mt-16 text-center">
          <div className="bg-primary/5 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-heading font-bold text-foreground mb-4">Stay Connected</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Never miss an event! Follow us on social media or contact us directly to stay updated 
              on all our upcoming activities and special announcements.
            </p>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              Get Event Updates
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;