import iconePessoaBarraNavegacao from "../../assets/images/icone-pessoa-barra-navegacao.svg";
import iconePessoaSorrindo from "../../assets/images/icone-pessoa-sorrindo-navegacao.svg";
import iconeCartaNavegacao from "../../assets/images/icone-carta-navegacao.svg";

import patoNormal from "../../assets/images/pato-normal.svg";
import sirene from "../../assets/images/sirene.jpg";
import "./styles.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div class="container-login">
        <img src={sirene} class="pato" alt="logo site" className="icon-site"/>
        <form action="" method="post">
          <div class="form-group-login">
            <label for="" ></label>
            <input type="email" placeholder="E-mail" />
          </div>
          <div class="form-group-login">
            <label for=""></label>
            <input type="password" placeholder="Senha" />
            <p>
              <a href="#">Esqueceu a senha? </a>
            </p>
          </div>
          <div class="form-group-login">
            <div class="button-group">
              <button type="submit" className="botão-cadastro"> <Link to="/" className="no-decoration">Entrar</Link></button>
            </div>
          </div>
          <div class="form-group-login">
            <div class="button-group">
             <button type="submit" className="botão-cadastro"> <Link to="/cadastrar" className="no-decoration">Cadastrar-se</Link></button>
            </div>
          </div>
        </form>
        <div class="circle-container">
        <Link to="/faq" class="circle">?</Link>
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

export default Login;
