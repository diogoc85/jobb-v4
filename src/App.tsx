import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Funcionalidades from './pages/Funcionalidades';
import Clientes from './pages/Clientes';
import EstudantesProfessores from './pages/EstudantesProfessores';
import PoliticaDePrivacidade from './pages/PoliticaDePrivacidade';
import TermosDeUso from './pages/TermosDeUso';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/funcionalidades" element={<Funcionalidades />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/estudantes-professores" element={<EstudantesProfessores />} />
        <Route path="/politica-de-privacidade" element={<PoliticaDePrivacidade />} />
        <Route path="/termos-de-uso" element={<TermosDeUso />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
