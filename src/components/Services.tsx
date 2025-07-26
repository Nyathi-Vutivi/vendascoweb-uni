import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, Users, Calendar } from "lucide-react";
import worshipService from "@/assets/worship-service.jpg";
import meetingSpace from "@/assets/meeting-space.jpg";

const Services = () => {
  const services = [
    {
      title: "Sunday Worship Service",
      time: "10:00 AM - 12:00 PM",
      location: "Main Campus Chapel",
      description: "Join us for uplifting worship, inspiring messages, and fellowship with fellow students.",
      image: worshipService,
      attendees: "80-120 students"
    },
    {
      title: "Wednesday Bible Study",
      time: "6:00 PM - 7:30 PM",
      location: "Student Center Room 205",
      description: "Deep dive into God's Word with interactive discussions and practical applications.",
      image: meetingSpace,
      attendees: "30-50 students"
    },
    {
      title: "Friday Fellowship",
      time: "7:00 PM - 9:00 PM",
      location: "SCO Meeting Hall",
      description: "Casual fellowship with games, food, testimonies, and building relationships.",
      image: meetingSpace,
      attendees: "40-70 students"
    }
  ];

  const specialEvents = [
    {
      title: "Monthly Prayer Meetings",
      description: "First Saturday of every month - Dedicated time for prayer and seeking God's guidance",
      frequency: "Monthly"
    },
    {
      title: "Community Outreach",
      description: "Serving local communities, orphanages, and those in need around Venda",
      frequency: "Bi-monthly"
    },
    {
      title: "Leadership Retreats",
      description: "Intensive leadership training and spiritual development weekends",
      frequency: "Quarterly"
    },
    {
      title: "Guest Speaker Series",
      description: "Renowned Christian leaders and speakers sharing insights and inspiration",
      frequency: "Monthly"
    }
  ];

  return (
    <section id="services" className="py-20 bg-section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join us for regular worship services, Bible studies, and fellowship opportunities 
            designed to strengthen your faith and build lasting relationships.
          </p>
        </div>

        {/* Regular Services */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-card-hover transition-all duration-300 group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/30 transition-colors duration-300"></div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2 text-primary" />
                    <span className="text-sm">{service.time}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2 text-primary" />
                    <span className="text-sm">{service.location}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Users className="h-4 w-4 mr-2 text-primary" />
                    <span className="text-sm">{service.attendees}</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                
                <Button className="w-full">Join This Service</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Special Events */}
        <div>
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">Special Events & Programs</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {specialEvents.map((event, index) => (
              <Card key={index} className="hover:shadow-card-hover transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {event.title}
                    </h4>
                    <div className="flex items-center text-primary bg-accent px-3 py-1 rounded-full">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="text-sm font-medium">{event.frequency}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-white rounded-2xl p-8 max-w-2xl mx-auto shadow-card">
              <h4 className="text-2xl font-bold text-foreground mb-4">Ready to Join Us?</h4>
              <p className="text-muted-foreground mb-6">
                All students are welcome! No previous church experience required. 
                Come as you are and discover a community that cares.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary-dark">
                  Attend This Sunday
                </Button>
                <Button variant="outline" size="lg">
                  Contact Us First
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;