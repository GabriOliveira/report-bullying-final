import "./styles.css";
import setaDireita from "../../assets/images/seta-direita-submit.svg";
import iconePessoaBarraNavegacao from "../../assets/images/icone-pessoa-barra-navegacao.svg";
import iconePessoaSorrindo from "../../assets/images/icone-pessoa-sorrindo-navegacao.svg";
import iconeCartaNavegacao from "../../assets/images/icone-carta-navegacao.svg";
import Faq from "../Faq";
import Fulano from "../../assets/images/fulano.png";
import { Link } from "react-router-dom";
const Perfil = () => {
  return (
    <>
      <div class="container-fale-conosco">
        <div className="perfil-e-desc">
        <img className="photo" src={Fulano} alt="foto-perfil"/>
        <h2>Fulano de Tal da Silva</h2>
        <p>Olá eu sou o Fulaninho e tenho 20 anos Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium assumenda temporibus optio culpa sapiente possimus dolore, nostrum similique delectus consectetur odit vitae doloribus fugiat illo natus. Facere harum fuga quos!</p>
        <div className="emotions">
          <p className="txt-sent">Fulano de Tal da Silva está se sentindo:</p>
          <img className="happy"/>
          <img className="normal"/>
          <img className="sad"/>
          <img className="angry"/>
        </div>
        </div>
      </div>
    </>
  );
};

export default Perfil;
