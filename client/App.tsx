import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Placeholder from "./pages/Placeholder";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
              <Navigation />
              <Index />
            </>
          } />
          <Route path="/browse" element={
            <Placeholder
              title="Browse Properties"
              description="Discover thousands of verified properties from trusted brokers. Advanced filters help you find exactly what you're looking for."
            />
          } />
          <Route path="/brokers" element={
            <Placeholder
              title="Find Brokers"
              description="Connect with professional, verified brokers who understand your needs and local market expertise."
            />
          } />
          <Route path="/about" element={
            <Placeholder
              title="About RentConnect"
              description="Learn more about our mission to simplify the rental process and connect tenants with their perfect homes."
            />
          } />
          <Route path="/login" element={
            <Placeholder
              title="Sign In"
              description="Access your RentConnect account to manage your property searches, saved listings, and broker communications."
            />
          } />
          <Route path="/register" element={
            <Placeholder
              title="Get Started"
              description="Join thousands of happy tenants who found their perfect home through RentConnect. Sign up is quick and free!"
            />
          } />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
