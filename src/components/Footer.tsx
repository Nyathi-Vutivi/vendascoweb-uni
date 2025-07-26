import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Youtube, Cross, BookOpen, Users } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Leadership", href: "#leadership" },
    { name: "Services", href: "#services" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" }
  ];

  const resources = [
    { name: "Bible Study Materials", href: "#" },
    { name: "Prayer Requests", href: "#" },
    { name: "Event Calendar", href: "#" },
    { name: "Volunteer Opportunities", href: "#" },
    { name: "Student Resources", href: "#" }
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center mr-3">
                <Cross className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl font-heading font-bold">SCO</div>
            </div>
            <p className="text-primary-light mb-6 leading-relaxed font-body">
              "Therefore encourage one another and build each other up" - 1 Thessalonians 5:11
            </p>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-primary-light hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a 
                    href={resource.href}
                    className="text-primary-light hover:text-white transition-colors duration-200"
                  >
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Times */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Service Times</h3>
            <div className="space-y-3 text-primary-light">
              <div>
                <div className="font-medium text-white">Sunday Worship</div>
                <div className="text-sm">10:00 AM - 12:00 PM</div>
                <div className="text-sm">Main Campus Chapel</div>
              </div>
              <div>
                <div className="font-medium text-white">Bible Study</div>
                <div className="text-sm">Wednesdays 6:00 PM</div>
                <div className="text-sm">Student Center Room 205</div>
              </div>
              <div>
                <div className="font-medium text-white">Fellowship</div>
                <div className="text-sm">Fridays 7:00 PM</div>
                <div className="text-sm">SCO Meeting Hall</div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-light/20 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-primary-light text-sm mb-4 md:mb-0">
            © {currentYear} Student Christian Organization - University of Venda. All rights reserved.
          </div>
          <div className="flex items-center text-primary-light text-sm">
            Made with <Heart className="h-4 w-4 mx-1 text-red-400" /> for the Kingdom
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;