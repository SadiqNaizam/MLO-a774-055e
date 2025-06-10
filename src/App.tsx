import { Toaster } from "@/components/ui/toaster"; // Shadcn Toaster (if used for general toasts)
import { Toaster as Sonner } from "@/components/ui/sonner"; // Sonner for rich notifications
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import ServicesOverviewPage from "./pages/ServicesOverviewPage";
import InsightsListingPage from "./pages/InsightsListingPage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";
import NotFound from "./pages/NotFound"; // Assuming NotFound.tsx exists

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster /> {/* Default shadcn Toaster */}
      <Sonner richColors position="bottom-right" /> {/* Sonner Toaster */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/services" element={<ServicesOverviewPage />} />
          <Route path="/insights" element={<InsightsListingPage />} />
          {/* Dynamic route for individual insights - actual page would need to be created */}
          <Route path="/insights/:insightId" element={<div>Insight Detail Page Placeholder</div>} /> 
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          
          {/* Placeholder routes for service detail pages linked from ServiceTeaserCard if they were to be built out */}
          <Route path="/services/:serviceCategory/:serviceDetail" element={<div>Service Detail Page Placeholder</div>} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;