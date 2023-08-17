import { Link } from "react-router-dom";
import "./styles.css";


const Normal = () => {
  return (
    <>
       <div className="container-anom">
       <div className="janela">
      <h1 id="title">Faça sua Denuncia Anonimamente</h1>
      <div className="input-info">
        <input type="text" placeholder="insira o apelido (opcional)"/>
        <input type="text" placeholder="insira o titulo"/>
        </div>
        <div className="denuncia">
        <textarea placeholder="insira a mensagem..." className="area-texto"></textarea>
        </div>
        
      </div>
      <div className="enviar-agrupar">
      <button className="option">
        <Link to="/feedback" className="no-decoration" > Enviar </Link>
        </button>
      </div>
      <div  className="avaliar-agrupar">
      <button className="option">
        <Link to="/feedback" className="no-decoration" > ⭐ </Link>
        </button>
        </div>
        </div>
    </>
  );
};

export default Normal;
