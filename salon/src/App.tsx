import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importe seus componentes fixos (Header e Footer)
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

// Importe as Páginas
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import About from "./components/pages/Aboutpage";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <BrowserRouter>
      {/* O Header fica fora das rotas para aparecer em todas as páginas */}
      <Header />

      <Routes>
        {/* Rota da Página Inicial (http://localhost:5173/) */}
        <Route path="/" element={<Home />} />

        {/* Rota de Serviços (http://localhost:5173/services) */}
        <Route path="/services" element={<Services />} />
        {/* Rota de Sobre (http://localhost:5173/about) */}
        <Route path="/about" element={<About />} />
        {/* Rota de Contato (http://localhost:5173/contact) */}
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* O Footer também fica fixo */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
