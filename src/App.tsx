import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home/index";
import Galeria from "./components/Galeria/index";
import Sobre from "./components/Sobre/index"
import Contato from "./components/Contato/index"
import NotFound from "./components/NotFound/index";


import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/Galeria" element={<Galeria />} />
      <Route path="/Contato" element={<Contato />} />
      <Route path="/Sobre" element={<Sobre />} />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export function WrappedApp() {
  return (
    <HashRouter>
      <App /> 
    </HashRouter>
  );
}
