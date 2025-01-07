import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const team = [
  {
    name: 'Erik Moberg',
    role: 'CEO & Co-founder',
    bio: 'Previously CTO at Epidemic Sound. 15+ years of experience in scaling technology companies.',
    image: '/team/erik.jpg',
    links: {
      linkedin: 'https://linkedin.com/in/erikmoberg',
      github: 'https://github.com/erikmoberg',
      email: 'erik@berget.ai'
    }
  },
  {
    name: 'Marcus Wallén',
    role: 'CTO & Co-founder',
    bio: 'Former Lead Engineer at Klarna. Expert in distributed systems and cloud infrastructure.',
    image: '/team/marcus.jpg',
    links: {
      linkedin: 'https://linkedin.com/in/marcuswallen',
      github: 'https://github.com/marcuswallen',
      email: 'marcus@berget.ai'
    }
  },
  {
    name: 'Anna Lindström',
    role: 'Head of AI Research',
    bio: 'PhD in Machine Learning from KTH. Previously led AI initiatives at Spotify.',
    image: '/team/anna.jpg',
    links: {
      linkedin: 'https://linkedin.com/in/annalindstrom',
      github: 'https://github.com/annalindstrom',
      email: 'anna@berget.ai'
    }
  }
];

export function About() {
  return (
    <section className="py-24 relative" id="about">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-medium mb-6">About Berget AI</h1>
          <p className="text-lg text-white/60">
            We're building Europe's most secure and sustainable AI infrastructure. 
            Our team combines deep expertise in cloud computing, AI, and security 
            to help companies deploy AI responsibly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/5 to-transparent group-hover:from-white/10 transition-colors" />
              
              <div className="relative p-6 rounded-2xl border border-white/10 group-hover:border-white/20 transition-colors">
                <div className="aspect-square mb-6 rounded-xl overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <h3 className="text-xl font-medium mb-1">{member.name}</h3>
                <p className="text-white/60 mb-4">{member.role}</p>
                <p className="text-sm text-white/60 mb-6">{member.bio}</p>
                
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" asChild>
                    <a href={member.links.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <a href={member.links.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <a href={`mailto:${member.links.email}`}>
                      <Mail className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-medium mb-4">Join Our Team</h2>
          <p className="text-lg text-white/60 mb-8">
            We're always looking for talented people who share our vision of 
            making AI infrastructure more secure, sustainable, and accessible.
          </p>
          <Button size="lg">View Open Positions</Button>
        </div>
      </div>
    </section>
  );
}
