import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, DAO } from "./pages";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vote" element={<DAO />} />
      </Routes>
    </BrowserRouter>
  );
}
