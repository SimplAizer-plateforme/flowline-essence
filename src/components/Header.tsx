import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-border">
      <div className="container-max">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#top" className="text-2xl font-bold text-text-primary hover:text-primary transition-colors">
            SimplAizer
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-text-secondary hover:text-primary transition-colors duration-200 font-medium">
              Features
            </a>
            <a href="#pricing" className="text-text-secondary hover:text-primary transition-colors duration-200 font-medium">
              Tarficication
            </a>
            <a href="#contact" className="text-text-secondary hover:text-primary transition-colors duration-200 font-medium">
              Contact
            </a>
          </nav>
          
          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Button className="bg-primary hover:bg-primary-hover text-primary-foreground px-6 py-2 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200">
              Commencez
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-text-secondary hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-border shadow-lg">
            <nav className="flex flex-col space-y-4 p-4">
              <a href="#features" className="text-text-secondary hover:text-primary transition-colors font-medium">
                Features
              </a>
              <a href="#pricing" className="text-text-secondary hover:text-primary transition-colors font-medium">
                Tarification 
              </a>
              <a href="#contact" className="text-text-secondary hover:text-primary transition-colors font-medium">
                Contact
              </a>
              <Button asChild className="bg-primary hover:bg-primary-hover text-primary-foreground px-6 py-2 rounded-lg font-semibold mt-4">
                <a href="#contact">Commencez</a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;