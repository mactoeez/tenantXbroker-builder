import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X, Home, Users, Building2 } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
              <Home className="w-5 h-5 text-white" />
            </div>
            <span className="font-semibold text-xl gradient-text">
              RentConnect
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-600 hover:text-primary-600 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/browse"
              className="text-gray-600 hover:text-primary-600 transition-colors"
            >
              Browse Properties
            </Link>
            <Link
              to="/brokers"
              className="text-gray-600 hover:text-primary-600 transition-colors"
            >
              Find Brokers
            </Link>
            <Link
              to="/about"
              className="text-gray-600 hover:text-primary-600 transition-colors"
            >
              About
            </Link>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link to="/login">Sign In</Link>
            </Button>
            <Button asChild>
              <Link to="/register">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden transition-all duration-300 ease-in-out",
            isOpen
              ? "max-h-64 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden",
          )}
        >
          <div className="py-4 space-y-4 border-t border-gray-200">
            <Link
              to="/"
              className="block text-gray-600 hover:text-primary-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/browse"
              className="block text-gray-600 hover:text-primary-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Browse Properties
            </Link>
            <Link
              to="/brokers"
              className="block text-gray-600 hover:text-primary-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Find Brokers
            </Link>
            <Link
              to="/about"
              className="block text-gray-600 hover:text-primary-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <div className="flex flex-col space-y-2 pt-4">
              <Button variant="ghost" asChild>
                <Link to="/login" onClick={() => setIsOpen(false)}>
                  Sign In
                </Link>
              </Button>
              <Button asChild>
                <Link to="/register" onClick={() => setIsOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
