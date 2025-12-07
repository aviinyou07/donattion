import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className=" bg-background  z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between relative">
        
        {/* --- LEFT SECTION --- */}
        <div className="flex items-center gap-8">
          <button className="p-2 hover:bg-muted rounded-full">
            <Search className="w-5 h-5 text-foreground" /> 
          </button>
          
          {/* Desktop Nav - Hidden on Mobile */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/donate" className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-muted-foreground">
              Donate <ChevronDown className="w-4 h-4" />
            </Link>
            <Link to="/donate" className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-muted-foreground">
              Fundraise <ChevronDown className="w-4 h-4" />
            </Link>
          </nav>
        </div>

        {/* --- CENTER LOGO --- */}
        <Link to="/" className="absolute left-1/2 -translate-x-1/2 z-10">
          <span className="text-2xl font-bold text-primary">gofundme</span>
        </Link>

        {/* --- RIGHT SECTION --- */}
        <div className="flex items-center gap-4">
          
          {/* Desktop Right Actions - Hidden on Mobile */}
          <div className="hidden md:flex items-center gap-4">
            <button className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-muted-foreground">
              About <ChevronDown className="w-4 h-4" />
            </button>
            <button className="text-sm font-medium text-foreground hover:text-muted-foreground">
              Sign in
            </button>
            <Button variant="outline" className="rounded-full border-foreground text-foreground hover:bg-foreground hover:text-background">
              Start a GoFundMe
            </Button>
          </div>

          {/* Mobile Menu Toggle - Visible only on Mobile */}
          <button 
            className="md:hidden p-2 text-foreground hover:bg-muted rounded-full"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* --- MOBILE MENU DROPDOWN --- */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-background border-b border-border shadow-lg animate-in slide-in-from-top-2">
          <div className="flex flex-col p-4 space-y-4">
            <Link to="/donate" className="flex items-center justify-between text-sm font-medium text-foreground py-2 border-b border-border/50">
              Donate <ChevronDown className="w-4 h-4" />
            </Link>
            <Link to="/donate" className="flex items-center justify-between text-sm font-medium text-foreground py-2 border-b border-border/50">
              Fundraise <ChevronDown className="w-4 h-4" />
            </Link>
           
            <a href="#" className="flex items-center justify-between text-sm font-medium text-foreground py-2 border-b border-border/50">
              About <ChevronDown className="w-4 h-4" />
            </a>
            
            <div className="pt-4 flex flex-col gap-3">
              <button className="w-full text-left text-sm font-medium text-foreground hover:text-muted-foreground py-2">
                Sign in
              </button>
              <Button className="w-full rounded-full bg-foreground text-background hover:bg-foreground/90">
                Start a GoFundMe
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;