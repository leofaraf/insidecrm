import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./index.css"
import App from "./App.tsx"
import Footer from "@/components/common/Footer.tsx"
import Header from "@/components/common/Header.tsx"
import Cases from "@/pages/Cases.tsx"
import Services from "@/pages/Services.tsx"
import AuditCRM from "@/pages/services/AuditCRM.tsx"
import AuditSales from "@/pages/services/AuditSales.tsx"
import IntegrationCRM from "@/pages/services/IntegrationCRM.tsx"
import IntegrationYClients from "@/pages/services/IntegrationYClients.tsx"
import MarketingLeadGeneration from "@/pages/services/MarketingLeadGeneration.tsx"
import SetupEmail from "@/pages/services/SetupEmail.tsx"
import SetupIPTel from "@/pages/services/SetupIPTel.tsx"
import SetupSMS from "@/pages/services/SetupSMS.tsx"
import CallTracking from "@/pages/services/CallTracking.tsx"
import GetInTouch from "./components/common/GetInTouch.tsx"
import CarService from "./pages/cases/CarService.tsx"
import BeutyAgency from "./pages/cases/BeutyAgency.tsx"
import Flowers from "./pages/cases/Flowers.tsx"
import RealEstateAgency from "./pages/cases/RealEstateAgency.tsx"
import ShipRental from "./pages/cases/ShipRental.tsx"
import CasesDefault from "./components/cases/CasesDefault.tsx"
import ServicesOutlet from "./pages/ServicesOutlet.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<App />} />
        
        {/* Cases */}
        <Route path="cases">
          <Route index element={<Cases />} />
          <Route path="carsevice" element={<CarService />} />
          <Route path="beutyagency" element={<BeutyAgency />} />
          <Route path="flowers" element={<Flowers />} />
          <Route path="realestate" element={<RealEstateAgency />} />
          <Route path="shipping" element={<ShipRental />} />
        </Route>

        {/* Services */}
        <Route path="/services" element={<Services />} />
        <Route element={<ServicesOutlet/>}>
          <Route path="/audit-crm" element={<AuditCRM />} />
          <Route path="/audit-sales" element={<AuditSales />} />
          <Route path="/integration-crm" element={<IntegrationCRM />} />
          <Route path="/integration-y-clients" element={<IntegrationYClients />} />
          <Route path="/marketing-lead-generation" element={<MarketingLeadGeneration />} />
          <Route path="/setup-email" element={<SetupEmail />} />
          <Route path="/setup-ip-tel" element={<SetupIPTel />} />
          <Route path="/call-tracking" element={<CallTracking />} />
          <Route path="/setup-sms" element={<SetupSMS />} />
        </Route>
      </Routes>

      <GetInTouch />
      <Footer />
    </BrowserRouter>
  </StrictMode>,
)
