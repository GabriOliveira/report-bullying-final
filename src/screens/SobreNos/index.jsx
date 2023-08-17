import "./styles.css";
import Card from "../../components/Card/index";
import setaDireita from "../../assets/images/seta-direita-submit.svg";
import sirene from "../../assets/images/sirene.jpg";
const SobreNos = () => {
  return (
    <div className="container-about">
      <Card title="Um pouco sobre nós">
        <p>Somos um grupo de alunos que, como ideia para um projeto escolar, escolhemos combater o cyberbullying. Observamos um aumento de casos desse tipo de violência, tanto em escolas como fora delas. Esse tipo de agressão é sério, pois pode envolver chantagens emocionais, subornos e outras coisas na internet, incluindo redes sociais. Percebemos que não existe uma tecnologia voltada para apoiar as vítimas. Visto isso, decidimos criar uma plataforma que crie uma ponte entre profissionais da área da psicologia e vítimas do cyberbullying. A ideia é que o atendimento seja gratuito para ser mais acessível a todos. Faça parte do nosso projeto e ajude a tornar o mundo digital um lugar melhor e mais seguro.</p>
      </Card>
        <img
          src={sirene}
          alt="seta indicando abaixo"
          className="seta-abaixo"
        />
    </div>
  );
};

export default SobreNos;
