import { createBrowserRouter } from "react-router";
import RootLayout from "./components/Layout";
import LandingPage from "./components/LandingPage";
import Auth from "./components/Auth";
import FarmerDashboard from "./components/FarmerDashboard";
import DiagnoseCrop from "./components/DiagnoseCrop";
import DiagnosisHistory from "./components/DiagnosisHistory";
import LenderDashboard from "./components/LenderDashboard";
import HowItWorks from "./components/HowItWorks";
import AboutFarmers from "./components/AboutFarmers";
import AboutLenders from "./components/AboutLenders";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: LandingPage },
      { path: "login", Component: Auth },
      { path: "register", Component: Auth },
      { path: "lender-login", Component: Auth },
      { path: "for-farmers", Component: AboutFarmers },
      { path: "for-lenders", Component: AboutLenders },
      { path: "how-it-works", Component: HowItWorks },
      { path: "dashboard", Component: FarmerDashboard },
      { path: "diagnose", Component: DiagnoseCrop },
      { path: "history", Component: DiagnosisHistory },
      { path: "lender", Component: LenderDashboard },
    ],
  },
]);
