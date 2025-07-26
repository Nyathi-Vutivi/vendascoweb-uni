import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Users, Heart, Cross } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: BookOpen,
      title: "Biblical Foundation",
      description: "Grounded in God's Word, we study and apply biblical principles to our daily lives as students."
    },
    {
      icon: Users,
      title: "Community",
      description: "Building lasting friendships and supporting one another through the university journey."
    },
    {
      icon: Heart,
      title: "Service",
      description: "Serving our campus, local community, and beyond with the love of Christ."
    },
    {
      icon: Cross,
      title: "Growth",
      description: "Encouraging spiritual, academic, and personal development in every member."
    }
  ];

  return (
    <section id="about" className="py-20 bg-section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-foreground mb-6">About Us</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-body">
            "As iron sharpens iron, so one person sharpens another." - Proverbs 27:17
            <span className="block mt-4">The Student Christian Organization at the University of Venda is a vibrant community 
            of believers dedicated to growing in faith, building relationships, and making a 
            positive impact on our campus and beyond.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">Our Mission</h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We exist to create a supportive Christian community where university students can 
              deepen their relationship with God, connect with fellow believers, and develop 
              the skills and character needed for effective Christian leadership.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Through worship, fellowship, Bible study, and service opportunities, we aim to 
              equip students to live out their faith boldly on campus and in their future careers.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-card">
            <h4 className="text-2xl font-bold text-foreground mb-4">What We Offer</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Weekly worship services and Bible studies
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Small group fellowships and mentorship programs
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Community service and outreach opportunities
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Leadership development and training
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Social events and retreats
              </li>
            </ul>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="text-center hover:shadow-card-hover transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow-blue transition-all duration-300">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-3">{value.title}</h4>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;