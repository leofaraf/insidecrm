import { StrictMode, useLayoutEffect } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
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
import Case from "./pages/Case.tsx"
import ServicesOutlet from "./pages/ServicesOutlet.tsx"

//@ts-ignore
const Wrapper = ({children}) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);
  return children
} 

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Header />

      <Wrapper>
        <Routes>
          <Route path="/" element={<App />} />
          
          {/* Cases */}
          <Route path="cases">
            <Route index element={<Cases />} />
            <Route path=":caseid" element={<Case />} />
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
      </Wrapper>

      <GetInTouch />
      <Footer />
    </BrowserRouter>
  </StrictMode>,
)
