import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import NoPage from "./Pages/NoPage";
import About from "./Pages/About";
import Results from "./Pages/Results";
import DeblurApp from "./Pages/DeblurApp";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="results" element={<Results />} />
          <Route path="app" element={<DeblurApp />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
