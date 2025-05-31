
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RaffleProvider } from "./contexts/RaffleContext";
import Index from "./pages/Index";
import PaymentSuccess from "./pages/PaymentSuccess";
import PaymentCancel from "./pages/PaymentCancel";
import MeusNumeros from "./pages/MeusNumeros";
import Resultados from "./pages/Resultados";
import Contato from "./pages/Contato";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import PrivateRoute from "./components/PrivateRoute";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <RaffleProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/payment-success" element={<PaymentSuccess />} />
            <Route path="/payment-cancel" element={<PaymentCancel />} />
            <Route path="/meus-numeros" element={
              <PrivateRoute>
                <MeusNumeros />
              </PrivateRoute>
            } />
            <Route path="/resultados" element={<Resultados />} />
            <Route path="/contato" element={<Contato />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </RaffleProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
