import { Card, CardContent } from "@/components/ui/card";
import { Clock, Calendar, MapPin, Users } from "lucide-react";

const ServiceTimes = () => {
  const services = [
    {
      icon: Clock,
      title: "Sunday Worship",
      time: "10:00 AM - 12:00 PM",
      location: "University Chapel",
      description: "Join us for inspiring worship, fellowship, and powerful messages from God's Word."
    },
    {
      icon: Users,
      title: "Bible Study",
      time: "Wednesday 6:00 PM",
      location: "Student Center Room 201",
      description: "Dive deeper into Scripture with interactive discussions and practical applications."
    },
    {
      icon: Calendar,
      title: "Prayer Meeting",
      time: "Friday 5:00 PM",
      location: "Chapel Prayer Room",
      description: "Come together in prayer for our community, campus, and personal needs."
    },
    {
      icon: MapPin,
      title: "Small Groups",
      time: "Various Times",
      location: "Different Locations",
      description: "Connect with a smaller community for deeper relationships and spiritual growth."
    }
  ];

  return (
    <section id="service-times" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-foreground mb-6">Service Times</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-body">
            "Let us not give up meeting together, as some are in the habit of doing, but let us encourage one another." - Hebrews 10:25
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-card-hover transition-all duration-500 border-0 shadow-card">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center group-hover:shadow-golden-glow transition-all duration-300">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-heading font-semibold text-foreground mb-2">{service.title}</h3>
                    <div className="flex items-center text-primary mb-1">
                      <Clock className="h-4 w-4 mr-2" />
                      <span className="font-medium">{service.time}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground mb-4">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{service.location}</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-primary/5 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-heading font-bold text-foreground mb-4">First Time Visitor?</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We'd love to welcome you! Come as you are - no dress code required. 
              Our services are casual and welcoming to everyone.
            </p>
            <div className="text-sm text-muted-foreground">
              <p>📍 For directions to our meetings, contact us at info@scounivenda.ac.za</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceTimes;