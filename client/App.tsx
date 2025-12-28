import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import CallForPapers from "./pages/CallForPapers";
import ImportantDates from "./pages/ImportantDates";
import Registration from "./pages/Registration";
import Contact from "./pages/Contact";
import SubmitPaper from "./pages/SubmitPaper";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";
import ConceptNote from "./pages/ConceptNote";
import HostInstitution from "./pages/HostInstitution";
import KnowledgePartners from "./pages/KnowledgePartners";
import ReceptionCommittee from "./pages/ReceptionCommittee";
import OrganisingCommittee from "./pages/OrganisingCommittee";
import Speakers from "./pages/Speakers";
import ProgrammeSchedule from "./pages/ProgrammeSchedule";
import VenueTravel from "./pages/VenueTravel";

const queryClient = new QueryClient();

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/concept-note" element={<ConceptNote />} />
          <Route path="/host-institution" element={<HostInstitution />} />
          <Route path="/knowledge-partners" element={<KnowledgePartners />} />
          <Route path="/call-for-papers" element={<CallForPapers />} />
          <Route path="/reception-committee" element={<ReceptionCommittee />} />
          <Route
            path="/organising-committee"
            element={<OrganisingCommittee />}
          />
          <Route path="/important-dates" element={<ImportantDates />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/programme-schedule" element={<ProgrammeSchedule />} />
          <Route path="/venue-travel" element={<VenueTravel />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/submit-paper" element={<SubmitPaper />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);
