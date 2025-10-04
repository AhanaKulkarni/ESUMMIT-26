import { Twitter, Linkedin, Globe, Calendar, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import { ShineBorder } from "./magicui/shine-border";

export function Speakers() {
  const speakers = [
    {
      name: "Dr. Rajesh Kumar",
      title: "CEO, TechVentures India",
      bio: "Dr. Rajesh Kumar is a serial entrepreneur with over 20 years of experience in building and scaling tech startups. He has successfully led 3 companies to acquisition and currently serves as the CEO of TechVentures India, a leading venture capital firm.",
      expertise: ["Startup Strategy", "Fundraising", "Market Expansion"],
      achievements: [
        "Built and sold 3 startups",
        "Invested in 50+ companies",
        "TEDx Speaker",
        "Author of 'Scaling Success'",
      ],
      session: {
        title: "Building Scalable Startups in Emerging Markets",
        date: "March 15, 2025",
        time: "10:45 AM",
        venue: "Main Auditorium",
      },
      social: {
        twitter: "@rajeshkumar",
        linkedin: "in/rajeshkumar",
        website: "rajeshkumar.com",
      },
      image: "https://images.unsplash.com/photo-1689150571822-1b573b695391?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbmZlcmVuY2UlMjBzcGVha2VyfGVufDF8fHx8MTc1OTQyODg5Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Priya Sharma",
      title: "Founder & CEO, StartupHub",
      bio: "Priya Sharma founded StartupHub at age 25 and scaled it to become India's largest startup community platform. She's a passionate advocate for women in tech and has mentored over 500 entrepreneurs.",
      expertise: ["Community Building", "Product Development", "Growth Strategy"],
      achievements: [
        "Forbes 30 Under 30",
        "Started from college dorm",
        "Raised $50M in funding",
        "100+ team members",
      ],
      session: {
        title: "From Idea to IPO: The Startup Journey",
        date: "March 16, 2025",
        time: "09:00 AM",
        venue: "Main Auditorium",
      },
      social: {
        twitter: "@priyasharma",
        linkedin: "in/priyasharma",
        website: "startuphub.com",
      },
      image: "https://images.unsplash.com/photo-1590097520505-416422f07ad1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwZW50cmVwcmVuZXVyJTIwcHJlc2VudGF0aW9ufGVufDF8fHx8MTc1OTQyODg5Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Amit Patel",
      title: "VP Engineering, GlobalTech",
      bio: "Amit Patel is a technology visionary who has been at the forefront of AI and machine learning innovation. As VP of Engineering at GlobalTech, he leads a team of 200+ engineers building next-generation AI solutions.",
      expertise: ["AI/ML", "Engineering Leadership", "Product Innovation"],
      achievements: [
        "Led teams at Google, Amazon",
        "Filed 15+ patents",
        "Built AI products used by millions",
        "Published researcher",
      ],
      session: {
        title: "AI & the Future of Entrepreneurship",
        date: "March 15, 2025",
        time: "03:30 PM",
        venue: "Main Auditorium",
      },
      social: {
        twitter: "@amitpatel",
        linkedin: "in/amitpatel",
        website: "amitpatel.tech",
      },
      image: "https://images.unsplash.com/photo-1675716921224-e087a0cca69a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG5ldHdvcmtpbmclMjBldmVudHxlbnwxfHx8fDE3NTk0MTY5MDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Sarah Chen",
      title: "Managing Partner, VC Fund",
      bio: "Sarah Chen is a prominent venture capitalist who has invested in over 100 startups, including 5 unicorns. She's known for backing bold entrepreneurs and helping them navigate the fundraising landscape.",
      expertise: ["Venture Capital", "Investment Strategy", "Startup Evaluation"],
      achievements: [
        "Invested in 5 unicorns",
        "Fortune 40 Under 40",
        "$500M+ portfolio",
        "Board member of multiple startups",
      ],
      session: {
        title: "Fundraising Strategies Panel",
        date: "March 16, 2025",
        time: "01:30 PM",
        venue: "Main Auditorium",
      },
      social: {
        twitter: "@sarahchen",
        linkedin: "in/sarahchen",
      },
      image: "https://images.unsplash.com/photo-1560523159-94c9d18bcf27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29uZmVyZW5jZSUyMGF1ZGllbmNlfGVufDF8fHx8MTc1OTM4OTg3OHww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Vikram Malhotra",
      title: "Serial Entrepreneur & Angel Investor",
      bio: "Vikram Malhotra has started and scaled 4 successful companies across fintech, e-commerce, and SaaS. He now mentors early-stage startups and invests as an angel investor.",
      expertise: ["E-commerce", "Fintech", "Angel Investing"],
      achievements: [
        "4 successful exits",
        "Angel investor in 30+ startups",
        "Mentor at top accelerators",
        "IIT Alumni",
      ],
      session: {
        title: "Pitch Competition Judge",
        date: "March 16, 2025",
        time: "11:00 AM",
        venue: "Main Auditorium",
      },
      social: {
        twitter: "@vikramm",
        linkedin: "in/vikrammalhotra",
        website: "vikram.vc",
      },
      image: "https://images.unsplash.com/photo-1689150571822-1b573b695391?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbmZlcmVuY2UlMjBzcGVha2VyfGVufDF8fHx8MTc1OTQyODg5Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Meera Krishnan",
      title: "Head of Growth, Unicorn Startup",
      bio: "Meera Krishnan is a growth marketing expert who helped scale a startup from 0 to 10M users in 18 months. She specializes in growth hacking and viral marketing strategies.",
      expertise: ["Growth Marketing", "Viral Strategies", "User Acquisition"],
      achievements: [
        "Scaled startup to 10M users",
        "Growth Hacker Awards winner",
        "Speaker at 50+ conferences",
        "Author of growth blog",
      ],
      session: {
        title: "Growth Hacking Workshop",
        date: "March 16, 2025",
        time: "01:30 PM",
        venue: "Workshop Hall B",
      },
      social: {
        twitter: "@meerak",
        linkedin: "in/meerakrishnan",
      },
      image: "https://images.unsplash.com/photo-1590097520505-416422f07ad1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwZW50cmVwcmVuZXVyJTIwcHJlc2VudGF0aW9ufGVufDF8fHx8MTc1OTQyODg5Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-12 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          Keynote Speakers & Guests
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto max-w-2xl text-muted-foreground"
        >
          Learn from industry leaders, successful entrepreneurs, and investors who have built and scaled remarkable businesses
        </motion.p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {speakers.map((speaker, index) => (
          <motion.div
            key={speaker.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
          >
            <Card className="overflow-hidden transition-shadow hover:shadow-2xl h-full">
            <div className="relative h-64">
              <ImageWithFallback
                src={speaker.image}
                alt={speaker.name}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="mb-1 text-white">{speaker.name}</h3>
                <p className="text-sm text-white/90">{speaker.title}</p>
              </div>
            </div>

            <CardContent className="space-y-4 p-6">
              <p className="text-sm text-muted-foreground">{speaker.bio}</p>

              <div>
                <h4 className="mb-2 text-sm">Expertise</h4>
                <div className="flex flex-wrap gap-2">
                  {speaker.expertise.map((exp) => (
                    <Badge key={exp} variant="secondary">
                      {exp}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="mb-2 text-sm">Key Achievements</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  {speaker.achievements.slice(0, 3).map((achievement) => (
                    <li key={achievement}>• {achievement}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-lg bg-muted p-3">
                <h4 className="mb-2 text-sm">Session Details</h4>
                <p className="mb-2 text-sm">{speaker.session.title}</p>
                <div className="flex flex-col gap-1 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {speaker.session.date} at {speaker.session.time}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {speaker.session.venue}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 border-t pt-4">
                {speaker.social.twitter && (
                  <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Twitter className="h-4 w-4" />
                    </Button>
                  </motion.div>
                )}
                {speaker.social.linkedin && (
                  <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                  </motion.div>
                )}
                {speaker.social.website && (
                  <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Globe className="h-4 w-4" />
                    </Button>
                  </motion.div>
                )}
              </div>
            </CardContent>
          </Card>
          </motion.div>
        ))}
      </div>

      {/* Q&A Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-12"
      >
        <ShineBorder color="#dc2626">
          <Card className="border-0">
            <CardContent className="p-8 text-center">
              <h2 className="mb-4">Q&A Opportunities</h2>
              <p className="mb-6 text-muted-foreground">
                Get your questions answered during dedicated Q&A sessions after each keynote
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button>Submit Your Question</Button>
              </motion.div>
            </CardContent>
          </Card>
        </ShineBorder>
      </motion.div>
    </div>
  );
}