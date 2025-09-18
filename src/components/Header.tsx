import { Button } from "@/components/ui/button";
import { Sun, Menu, User } from "lucide-react";

export const Header = () => {
  return (
    <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-gradient-solar rounded-lg p-2">
            <Sun className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">SolarFlow</span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#dashboard" className="text-muted-foreground hover:text-foreground transition-colors">
            Dashboard
          </a>
          <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
            Projects
          </a>
          <a href="#leads" className="text-muted-foreground hover:text-foreground transition-colors">
            Leads
          </a>
          <a href="#proposals" className="text-muted-foreground hover:text-foreground transition-colors">
            Proposals
          </a>
          <a href="#compliance" className="text-muted-foreground hover:text-foreground transition-colors">
            Compliance
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-4 w-4" />
          </Button>
          <Button variant="energy" size="sm">
            New Project
          </Button>
        </div>
      </div>
    </header>
  );
};