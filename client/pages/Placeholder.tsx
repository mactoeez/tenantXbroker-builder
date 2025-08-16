import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Construction, ArrowLeft } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Navigation } from "@/components/Navigation";

interface PlaceholderProps {
  title?: string;
  description?: string;
}

export default function Placeholder({ title, description }: PlaceholderProps) {
  const location = useLocation();
  const pageName = title || location.pathname.slice(1).replace(/^\w/, c => c.toUpperCase()) || "Page";

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-100">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <Card className="p-12 border-0 shadow-xl bg-white/90 backdrop-blur-sm">
            <CardContent className="p-0">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-8">
                <Construction className="w-10 h-10 text-white" />
              </div>
              
              <h1 className="text-4xl font-bold mb-4 gradient-text">
                {pageName} Coming Soon
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {description || `We're working hard to bring you the ${pageName.toLowerCase()} page. Check back soon for exciting new features!`}
              </p>
              
              <div className="space-y-4">
                <p className="text-gray-500">
                  In the meantime, continue exploring RentConnect to find your perfect home.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild variant="outline" size="lg">
                    <Link to="/">
                      <ArrowLeft className="w-5 h-5 mr-2" />
                      Back to Home
                    </Link>
                  </Button>
                  <Button asChild size="lg">
                    <Link to="/browse">Browse Properties</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
