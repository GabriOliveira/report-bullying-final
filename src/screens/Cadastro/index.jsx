import "./styles.css";

import patoAnonima from "../../assets/images/pato-anonimo.svg";
import sirene from "../../assets/images/sirene.jpg";
import { Link } from "react-router-dom";

const Cadastro = () => {
  return (
    <>
    <div className="alinhadora">
    <div class="tipo-conta">
  <label class="card-conta">
    <input type="radio" name="tipoConta" class="radio-input"/>
    <span className="checkmark"></span>
    <p className="title-card-tipo">Conta Aluno</p>
  </label>

  <label class="card-conta">
    <input type="radio" name="tipoConta" class="radio-input"/>
    <span className="checkmark"></span>

    <p className="title-card-tipo">Conta Professor</p>
  </label>
</div>

    </div>
    
      <div class="container-cadastro">
        <form action="" method="post">
          <div class="form-group-cadastro">
            <label for=""></label>
            <input type="email" placeholder="E-mail" />
          </div>
          <div class="form-group-cadastro">
            <label for=""></label>
            <input type="password" placeholder="Senha" />
          </div>
          <div class="form-group-cadastro">
            <label for=""></label>
            <input type="text" placeholder="RA ou SIAPE"/>
            
          </div>
          <div className="a-cadastrado">

          <p>
              <a href="/entrar">Já é cadastrado?</a>
            </p>
            </div>
          <div class="form-group-cadastro">
            
            <div class="button-group">
              <button type="submit">Finalizar</button>
              
            </div>
          </div>
        </form>
        <div class="circle-container">
        <Link to="/faq" class="circle">?</Link>
        </div>
        <div class="barra-navegacao none">
          <div>
            <img
              src="../../images/icone-pessoa-barra-navegacao.svg"
              alt="Icone de Login"
            />
            Login
          </div>
          <div>
            <img
              src="../../images/icone-pessoa-sorrindo-navegacao.svg"
              alt="Icone de Pessoa Sorrindo"
            />
            Saude
          </div>
          <div>
            <img
              src="../../images/icone-carta-navegacao.svg"
              alt="Icone de uma Carta"
            />
            Denuncia
          </div>
        </div>
      </div>
      
    </>
    
  );
};

export default Cadastro;
