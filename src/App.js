import "./App.css";
import Home from "./screens/Home/index";
import Cadastro from "./screens/Cadastro/index";
import Login from "./screens/Login/index";
import FaleConosco from "./screens/FaleConosco/index";
import Faq from "./screens/Faq/index";
import NotFound from "./screens/NotFound/index";
import Painel from "./screens/Painel/index";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SobreNos from "./screens/SobreNos";
import Footer from "./components/Footer";
import Anonima from "./screens/Denuncias/Anonima/index"
import Normal from "./screens/Denuncias/Normal";
import Professor from "./screens/Denuncias/Professor";
import EsqueciSenha from "./screens/EsqueciSenha/index.jsx";
import Feedback from "./screens/Feedback";
import Perfil from "./screens/Perfil";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fale-conosco" element={<FaleConosco />} />
        <Route path="/cadastrar" element={<Cadastro />} />
        <Route path="/entrar" element={<Login />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/painel" element={<Painel />} />
        <Route path="/sobre-nos" element={<SobreNos />} />
        <Route path="/anonima" element={<Anonima />}/> 
        <Route path="/normal" element={<Normal />} />
        <Route path="/professor" element={<Professor />} />
        <Route path="/esquecisenha" element={<EsqueciSenha />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
