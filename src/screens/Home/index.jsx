import "./styles.css";

import patoAnonimo from "../../assets/images/pato-anonimo.svg";
import iconePessoa from "../../assets/images/icone-pessoa.svg";
import patoNormal from "../../assets/images/pato-normal.svg";

import Footer from "../../components/Footer/index";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="container-home">
      <div className="alinhar-home">
        <div className="seguradora">
        <h1>Selcione O Tipo de Denuncia:</h1>
        <div class="agrupar-botões">
  <span class="botão">
    <button>
    <Link to="/anonima" className="no-decoration">
      <p class="text-responsive text-esquerda">
        Anônima
        <img src={patoAnonimo} alt="Pato Anônimo" class="imagem-lado" />
      </p>
      </Link>
    </button>
  </span>
          
          <span className="botão">
          <button>
          <Link to="/normal" className="no-decoration">
            <p className="text-responsive text-direita">Aberta
            <img src={patoNormal} alt="Pato Anônimo" class="imagem-lado" /></p>
            </Link>
          </button>
          </span>
          <p>Ou</p>
          <span className="botão">
          <button className="custom-button text-responsive">
          <Link to="/professor" className="no-decoration"><p>Sou Professor
            <img src={iconePessoa} alt="Pato Anônimo" class="imagem-lado" />
            </p>
            </Link>
          </button>
          </span>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
