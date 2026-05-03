import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MesscribeLanding from "@/pages/messscribe-landing";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MesscribeLanding />} />
      </Routes>
      <Analytics />
      <SpeedInsights />
    </BrowserRouter>
  );
}
