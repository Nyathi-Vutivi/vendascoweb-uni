import { Card, CardContent } from "@/components/ui/card";
import { Target, Globe, Lightbulb, Users2 } from "lucide-react";

const Mission = () => {
  const missions = [
    {
      icon: Target,
      title: "Our Purpose",
      description: "To create a Christ-centered community where university students can grow in faith, build meaningful relationships, and discover their God-given purpose.",
      verse: "\"For I know the plans I have for you,\" declares the Lord, \"plans to prosper you and not to harm you, to give you hope and a future.\" - Jeremiah 29:11"
    },
    {
      icon: Globe,
      title: "Our Vision",
      description: "To see students transformed by the Gospel and equipped to impact their campus, community, and the world for Christ.",
      verse: "\"Go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit.\" - Matthew 28:19"
    },
    {
      icon: Lightbulb,
      title: "Our Values",
      description: "Faith, Community, Service, Excellence, and Integrity guide everything we do as we seek to honor God in our academic and spiritual journey.",
      verse: "\"Whatever you do, work at it with all your heart, as working for the Lord, not for human masters.\" - Colossians 3:23"
    },
    {
      icon: Users2,
      title: "Our Commitment",
      description: "We are committed to supporting each other through prayer, encouragement, and practical help as we navigate university life together.",
      verse: "\"Carry each other's burdens, and in this way you will fulfill the law of Christ.\" - Galatians 6:2"
    }
  ];

  return (
    <section id="mission" className="py-20 bg-section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-foreground mb-6">Our Mission</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-body">
            We exist to glorify God by building a vibrant Christian community at the University of Venda, 
            where students can grow in faith and be equipped for a lifetime of service.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {missions.map((mission, index) => (
            <Card key={index} className="group hover:shadow-card-hover transition-all duration-500 border-0 shadow-card bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 flex-shrink-0">
                    <mission.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-heading font-bold text-foreground mb-4">{mission.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">{mission.description}</p>
                    <blockquote className="border-l-4 border-accent pl-4 italic text-primary/80 text-sm leading-relaxed">
                      {mission.verse}
                    </blockquote>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-card max-w-4xl mx-auto">
            <h3 className="text-3xl font-heading font-bold text-foreground mb-6">Join Our Mission</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Whether you're a new believer, seasoned in faith, or simply curious about Christianity, 
              you have a place in our community. Together, we can make a difference at University of Venda and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-primary/5 rounded-lg px-6 py-4">
                <h4 className="font-semibold text-primary mb-1">Weekly Gatherings</h4>
                <p className="text-sm text-muted-foreground">Building community through regular fellowship</p>
              </div>
              <div className="bg-accent/20 rounded-lg px-6 py-4">
                <h4 className="font-semibold text-accent-foreground mb-1">Service Projects</h4>
                <p className="text-sm text-muted-foreground">Making a positive impact on campus and community</p>
              </div>
              <div className="bg-primary/5 rounded-lg px-6 py-4">
                <h4 className="font-semibold text-primary mb-1">Spiritual Growth</h4>
                <p className="text-sm text-muted-foreground">Deepening faith through study and prayer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;