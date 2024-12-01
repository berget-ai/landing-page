import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-white/5">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="text-xl font-semibold">Berget</div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm text-white/60 hover:text-white transition-colors">Features</a>
          <a href="#pricing" className="text-sm text-white/60 hover:text-white transition-colors">Pricing</a>
          <a href="#docs" className="text-sm text-white/60 hover:text-white transition-colors">Documentation</a>
          <Button variant="secondary" size="sm">Sign In</Button>
          <Button size="sm">Get Started</Button>
        </nav>

        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
}