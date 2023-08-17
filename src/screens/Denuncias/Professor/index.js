import "./styles.css";

const Professor = () => {
  return (
    <>
       <div className="container-anom">
        
        <div className="janela">
        <h1>Faça sua Denuncia Anonimamente</h1>
        <div className="input-info">
          <input type="text" placeholder="insira o apelido (opcional)"/>
          <input type="text" placeholder="insira o titulo"/>
          </div>
          <div className="denuncia">
          <textarea placeholder="insira a mensagem..." className="area-texto"></textarea>
          </div>
        </div>
        </div>
    </>
  );
};

export default Professor;
