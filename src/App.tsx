import { BrowserRouter, Route, Routes } from "react-router-dom";
import MesscribeLanding from "@/pages/messscribe-landing";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MesscribeLanding />} />
      </Routes>
    </BrowserRouter>
  );
}
