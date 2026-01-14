import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useRef } from "react";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Memory Game",
      description:
        "Jogo da memória criado com Javascript intermediário/Avançado. Futuramente pretendo adicionar mais funcionalidades e melhorar o design, além de adapta-lo em React.",
      tech: ["HTML", "CSS", "Javascript"],
      demo: "https://felgonsa.github.io/Memory-Game/",
      code: "https://github.com/Felgonsa/Memory-Game",
    },
    {
      title: "TodoList",
      description:
        "Este foi meu projeto inicial com React, onde criei uma aplicação de lista de tarefas que inclui todas as operações de CRUD e uma interface intuitiva com drag-and-drop para facilitar a organização das atividades.",
      tech: ["React", "Javascript", "Drag and Drop", "SweetAlert2"],
      demo: "https://to-do-list-react-rho-neon.vercel.app/",
      code: "https://github.com/Felgonsa/ToDoListReact?tab=readme-ov-file",
    },
    {
      title: "Mural de avisos",
      description:
        "Este mural de avisos foi desenvolvido como um projeto prático para aprimorar habilidades em back-end, utilizando o Javascript, Node.js, APIs e outras tecnologias.",
      tech: ["HTML", "CSS", "Javascript", "Bootstrap", "Node.js"],
      code: "https://github.com/Felgonsa/Mural-de-avisos",
    },
    {
      title: "Cadastro e Login",
      description:
        "Este projeto é um sistema simples de cadastro e login full stack, desenvolvido em Node.js com PostgreSQL no backend e HTML/JavaScript puro no frontend. Ele permite o cadastro, login e visualização de usuários autenticados.",
      tech: ["Node.js", "JWT", "Bcrypt", "PostgreSQL", "Bootstrap"],
      code: "https://github.com/Felgonsa/loginCadastro",
    },
    {
      title: "Previsão do tempo",
      description:
        "Este projeto é uma aplicação web que exibe a previsão do tempo atual e para os próximos dias com base na cidade pesquisada. Utiliza a API da OpenWeather, sendo inteiramente construído com HTML, CSS e JavaScript puro, e armazena o histórico de buscas localmente no navegador.",
      tech: ["HTML", "CSS", "Javascript", "OpenWeather API", "LocalStorage"],
      code: "https://github.com/Felgonsa/previsaoTempo",
    },
    {
      title: "SnakeGame AI",
      description:
        "Agente Q-Learning para o 'Jogo da Cobra'. Suas funcionalidades incluem treinamento paralelo para aprendizado por repetição e uma interface Pygame com métricas em tempo real. Destacam-se ainda a visualização do aprendizado via Matplotlib e mecânicas avançadas de RL, como Memória de Replay e Custo de Vida.",
      tech: ["Python", "PyGame", "Matplotlib", "IPython"],
      code: "https://github.com/Felgonsa/snakeGame",
    },
    {
      title: "Checklist",
      description:
        "Projeto fullstack para gerenciar checklists de forma eficiente, com dados para preenchimento, fotos e assinatura. Node.js com Express.js para o backend e React.js para o frontend, a aplicação oferece uma interface intuitiva para o CRUD. O banco de dados PostgreSQL, autenticação com JWT e a criptografia de senhas com bcrypt asseguram a segurança.",
      tech: [
        "React",
        "Axios",
        "Node.js",
        "Express",
        "PostgreSQL",
        "Multer",
        "JWT",
      ],
      code: "https://github.com/Felgonsa/checklist",
    },
    {
      title: "Kanban Adaptado",
      description:
        "Este projeto é um sistema de gerenciamento de fluxo de trabalho, no estilo Kanban, projetado especificamente para uma oficina automotiva. A plataforma permite visualizar o andamento dos reparos dos veículos em colunas dinâmicas, que podem ser criadas, editadas e reordenadas diretamente pela interface.",
      tech: [
        "React",
        "TanStack table",
        "drag-and-drop",
        "React-CSV",
        "Node.js",
        "Express",
        "PostgreSQL",
      ],
      code: "https://github.com/Felgonsa/kanban",
    },
    {
      title: "Bot Orçamentos",
      description:
        "Este projeto automatiza o download de orçamentos de veículos em formato XML, otimizando um fluxo de trabalho que envolve múltiplos sistemas. O robô inicia lendo uma lista de placas de um arquivo CSV, processando-as primeiro no sistema Cilia. As placas não encontradas são subsequentemente pesquisadas no sistema Soma.",
      tech: ["Python", "Selenium WebDriver", "Pandas"],
      code: "https://github.com/Felgonsa/roboDownload",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="projetos" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          className="text-4xl md:text-5xl font-display font-bold mb-12 text-center bg-gradient-primary bg-clip-text "
        >
          Projetos
        </motion.h2>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={item}
              className="glass-card rounded-2xl p-6 flex flex-col h-full hover:border-primary/50 transition-colors"
            >
              <h3 className="text-xl font-display font-semibold mb-3 text-primary">
                {project.title}
              </h3>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-muted/30 rounded-full text-xs text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="text-muted-foreground text-sm mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>

              <div className="flex gap-3">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button variant="outline" size="sm" className="w-full gap-2">
                      <ExternalLink size={14} />
                      Ver Demo
                    </Button>
                  </a>
                )}
                {project.code && (
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button variant="outline" size="sm" className="w-full gap-2">
                      <Github size={14} />
                      Código
                    </Button>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
