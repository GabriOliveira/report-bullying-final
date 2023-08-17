import { Link } from "react-router-dom";
import "./styles.css";

const Anonima = () => {
  return (
    <>
      <div className="container-anom">
        <div className="janela">
          <h1 id="title">Faça sua Denuncia Anonimamente</h1>
          <div className="input-info">
            <input type="text" placeholder="insira o apelido (opcional)" />
            <input type="text" placeholder="insira o titulo" />
          </div>
          <div className="denuncia">
            <textarea
              placeholder="insira a mensagem..."
              className="area-texto"
            ></textarea>
          </div>
        </div>
        <div className="enviar-agrupar">
          <button className="option" type="submit" onClick="#">Enviar</button>
        </div>
        <div className="avaliar-agrupar">
          
            <Link to="/feedback" className="option">
           
              ⭐
            </Link>
          
        </div>
      </div>
    </>
  );
};

export default Anonima;
