import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Filter, Star, Home, Users, Shield, Zap, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  const [searchLocation, setSearchLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [budget, setBudget] = useState("");

  const features = [
    {
      icon: Search,
      title: "Smart Search",
      description: "Find properties that match your exact needs with our advanced filtering system"
    },
    {
      icon: Users,
      title: "Verified Brokers",
      description: "Connect with trusted, professional brokers who understand your requirements"
    },
    {
      icon: Shield,
      title: "Secure Process",
      description: "Safe and transparent rental process with verified listings and secure payments"
    },
    {
      icon: Zap,
      title: "Quick Matching",
      description: "Get matched with ideal properties and brokers in minutes, not weeks"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Engineer",
      content: "Found my perfect apartment in downtown within a week. The brokers were professional and the process was seamless.",
      rating: 5
    },
    {
      name: "Mike Chen",
      role: "Marketing Manager", 
      content: "RentConnect made finding a broker so much easier. They understood exactly what I was looking for.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Graduate Student",
      content: "As a student, I needed something affordable and close to campus. The platform helped me find both.",
      rating: 5
    }
  ];

  const stats = [
    { number: "10,000+", label: "Happy Tenants" },
    { number: "500+", label: "Verified Brokers" },
    { number: "25,000+", label: "Properties Listed" },
    { number: "98%", label: "Success Rate" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-100">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="mb-8">
            <Badge variant="secondary" className="mb-4">
              🏠 Connect • Search • Move In
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Find Your Perfect
              <span className="gradient-text block">Home Today</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Connect with trusted brokers and discover ideal properties that match your lifestyle and budget. 
              Your dream home is just a search away.
            </p>
          </div>

          {/* Search Bar */}
          <Card className="p-6 max-w-4xl mx-auto mb-12 shadow-xl border-0 bg-white/90 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <Input
                  placeholder="Enter location"
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  className="pl-10 h-12 border-gray-200 focus:border-primary-500"
                />
              </div>
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="h-12 px-3 border border-gray-200 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 bg-white"
              >
                <option value="">Property Type</option>
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="studio">Studio</option>
                <option value="condo">Condo</option>
              </select>
              <select
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="h-12 px-3 border border-gray-200 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 bg-white"
              >
                <option value="">Budget Range</option>
                <option value="0-1000">$0 - $1,000</option>
                <option value="1000-2000">$1,000 - $2,000</option>
                <option value="2000-3000">$2,000 - $3,000</option>
                <option value="3000+">$3,000+</option>
              </select>
              <Button size="lg" className="h-12 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800">
                <Search className="w-5 h-5 mr-2" />
                Search
              </Button>
            </div>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" asChild className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 px-8">
              <Link to="/browse">
                Browse Properties
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-primary-300 text-primary-700 hover:bg-primary-50 px-8">
              <Link to="/brokers">Find a Broker</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/60 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold gradient-text">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose RentConnect?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We make finding your next home simple, fast, and stress-free with cutting-edge technology and human expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm group hover:-translate-y-1">
                <CardContent className="p-0 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Simple steps to find your perfect home</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Tell Us What You Need</h3>
              <p className="text-gray-600">Share your preferences, budget, and ideal location with our smart search system.</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Get Matched</h3>
              <p className="text-gray-600">Our AI connects you with verified brokers and properties that match your criteria.</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Move In</h3>
              <p className="text-gray-600">Complete the secure rental process and get the keys to your new home.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-xl text-gray-600">Join thousands of happy tenants who found their perfect home</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-4xl font-bold mb-4">Ready to Find Your Perfect Home?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of satisfied tenants who found their ideal property through RentConnect.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild className="bg-white text-primary-700 hover:bg-gray-50 px-8">
              <Link to="/register">
                Get Started Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10 px-8">
              <Link to="/browse">Browse Properties</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
