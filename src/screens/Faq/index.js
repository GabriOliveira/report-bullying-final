import "./styles.css";
import Card from "../../components/Card/index";

const Faq = () => {
  const info = [
    {
      title: "Não sabe seu RA?",
      content: "Aluno, para saber seu RA basta ir na secretaria da sua escola, ou entrar no site da secretaria de educação e ir em consulta de RA.",
    },
    {
      title: "O que é CyberBullying?",
      content: "é o uso mal intencionado de tecnologia, como redes sociais e mensagens, para prejudicar, intimidar ou ameaçar alguém, causando danos emocionais.",
    },
    {
      title: "Quem pode usar a plataforma?",
      content: "Alunos e Professores, assim também como pessoas fora da area escolar, porém o foco é o combate ao cyberbullying dentro das escolas. ",
    }, {
      title: "Como relatar um caso?",
      content: "Para relatar um caso é simples, se você já tem o cadastro feito na plataforma e ter o login validado com sucesso, após você acessar sua conta, basta entrar  ",
    },
    {
      title: "Posso usar um apelido anonimo?",
      content: "Certamente, é viável realizar essa ação, contanto que as suas palavras não contenham nenhum teor que possa ser interpretado como prejudicial, injurioso ou desrespeitoso para qualquer pessoa envolvida.",
    },
    {
      title: "Como posso dar um feedback?",
      content: "counteudo de teste",
    },
  ];

  return (
    <div className="container-faq">
      <h1 className="faq-title">Perguntas frequentes (FAQ)</h1>
      <div className="card-box">
        {info.map(({ title, content }) => {
          return <Card content={content} title={title} />;
        })}
      </div>
    </div>
  );
};

export default Faq;
