import "./styles.css";

import patoAnonimo from "../../assets/images/pato-anonimo.svg";
import iconePessoa from "../../assets/images/icone-pessoa.svg";
import patoNormal from "../../assets/images/pato-normal.svg";

import Footer from "../../components/Footer/index";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <main className="container-home">

        <section className="tipo-de-denuncia">
        <h1 className="title-home">Selcione O Tipo de Denuncia:</h1>

          <section className="seguradora">
                <button class="botão-opções">
                  <Link to="/anonima" className="no-decoration">
                    <p class="text-responsive text-esquerda">
                      Anônima
                      <img src={patoAnonimo} alt="Pato Anônimo" class="imagem-lado" />
                    </p>
                  </Link>
                </button>
              

                <button class="botão-opções">
                  <Link to="/normal" className="no-decoration">
                    <p className="text-responsive text-direita">Aberta
                      <img src={patoNormal} alt="Pato Anônimo" class="imagem-lado" />
                      </p>
                  </Link>
                </button>
              <p>Ou</p>
                <button class="botão-opções">
                  <Link to="/professor" className="no-decoration"><p>Sou Professor
                    <img src={iconePessoa} alt="Pato Anônimo" class="imagem-lado" />
                  </p>
                  </Link>
                </button>
          </section>
        </section>
      </main>
    </>
  );
};

export default Home;
