import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Areas from './pages/Areas';
import Contato from './pages/Contato';
import './App.css';

// Placeholder components for remaining pages
const Equipe = () => <div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl font-serif text-gradient-gold">Equipe - Em Desenvolvimento</h1></div>;
const Blog = () => <div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl font-serif text-gradient-gold">Blog - Em Desenvolvimento</h1></div>;
const PoliticaPrivacidade = () => <div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl font-serif text-gradient-gold">Política de Privacidade - Em Desenvolvimento</h1></div>;
const TermosUso = () => <div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl font-serif text-gradient-gold">Termos de Uso - Em Desenvolvimento</h1></div>;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="areas" element={<Areas />} />
          <Route path="equipe" element={<Equipe />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contato" element={<Contato />} />
          <Route path="politica-privacidade" element={<PoliticaPrivacidade />} />
          <Route path="termos-uso" element={<TermosUso />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

