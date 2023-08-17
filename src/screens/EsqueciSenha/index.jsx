import "./styles.css";
import setaDireita from "../../assets/images/seta-direita-submit.svg";
import iconePessoaBarraNavegacao from "../../assets/images/icone-pessoa-barra-navegacao.svg";
import iconePessoaSorrindo from "../../assets/images/icone-pessoa-sorrindo-navegacao.svg";
import iconeCartaNavegacao from "../../assets/images/icone-carta-navegacao.svg";
import Faq from "../Faq";
import { Link } from "react-router-dom";

const EsqueciSenha = () => {
  return (
    <>
      <div class="container-fale-conosco">
        <div class="title-fale-conosco">
          
          <h1>Como Podemos Te Ajudar ?</h1>
        </div>
        <form action="" method="post">
          <div class="form-group">
            <label for="">Nome</label>
            <input type="text" name="nome" placeholder="Nome" />
          </div>
          <div class="form-group-double">
            <label for="">E-Mail</label>
            <input
              type="email"
              class="input-double"
              name="email"
              placeholder="E-Mail"
            />
            <label for="">RA </label>
            <input
              type="text"
              class="input-double"
              name="ra"
              placeholder="RA"
            />
          </div>
          <div class="form-group submit-group">
            <textarea
              name="mensagem"
              cols="20"
              rows="10"
              placeholder="Mensagem"
            ></textarea>
           
          </div>
          <div className="engloba-botão">
          <button className="icon-area" type="submit">
              <p>Enviar</p>
            </button>
            </div>
        </form>
        <div class="circle-container">
          <Link to="/faq" class="circle">? </Link>
          
        </div>
        <div class="barra-navegacao none">
          <div>
            <img src={iconePessoaBarraNavegacao} alt="Icone de Login" />
            Login
          </div>
          <div>
            <img src={iconePessoaSorrindo} alt="Icone de Pessoa Sorrindo" />
            Saude
          </div>
          <div>
            <img src={iconeCartaNavegacao} alt="Icone de uma Carta" />
            Denuncia
          </div>
        </div>
      </div>
    </>
  );
};

export default EsqueciSenha;
