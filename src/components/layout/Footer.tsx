import { Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const footerLinks = {
  product: [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Documentation', href: '#docs' },
    { name: 'Changelog', href: '#changelog' },
  ],
  company: [
    { name: 'About', href: '#about' },
    { name: 'Blog', href: '#blog' },
    { name: 'Careers', href: '#careers' },
    { name: 'Contact', href: '#contact' },
  ],
  legal: [
    { name: 'Privacy', href: '#privacy' },
    { name: 'Terms', href: '#terms' },
    { name: 'Security', href: '#security' },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <div className="text-xl font-semibold mb-4">Berget</div>
            <p className="text-sm text-white/60 mb-4">
              Enterprise-grade AI model deployment platform built for teams who need reliability and performance.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:bg-white/10">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-white/10">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-white/10">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/60">
              © {new Date().getFullYear()} Berget. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="text-white/60 hover:text-white">
                Status
              </Button>
              <div className="w-1 h-1 rounded-full bg-white/20" />
              <Button variant="ghost" size="sm" className="text-white/60 hover:text-white">
                Support
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}