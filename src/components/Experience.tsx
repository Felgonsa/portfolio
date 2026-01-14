import { motion, useInView } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { useRef } from "react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
     {
      company: "B15 Optidados",
      role: "Análista de Suporte Técnico",
      period: "10/2025 - Atual",
      description:
        "Atendimento técnico voltado à resolução de problemas relacionados a banco de dados e infraestrutura. Trabalho com diagnóstico e solução de incidentes em SQL Server e suporte a sistemas ERP, garantindo a continuidade das operações dos clientes por meio de suporte remoto.",
      tech: ["SQL Server", "ERP", "Suporte Técnico", "Infraestrutura"],
    },
    {
      company: "Ernesto Borges Advogados",
      role: "Desenvolvedor de Automação",
      period: "08/2025",
      description:
        "Atuei no desenvolvimento e implementação de fluxos de automação para atendimento ao cliente com N8N, criando soluções personalizadas que utilizam Inteligência Artificial para triagem, qualificação e respostas automáticas. O projeto envolveu a integração de múltiplos sistemas via API, como o CRM Kommo, Chatwoot, Evolution API, entre outros, com o objetivo de centralizar a comunicação e otimizar os processos de suporte e vendas, garantindo maior eficiência e uma jornada do cliente mais personalizada.",
      tech: ["N8N", "IA", "APIs", "CRM Kommo", "Chatwoot", "Evolution API"],
    },
    {
      company: "Ernesto Borges Advogados",
      role: "Estagiário",
      period: "05/2025 - 07/2025",
      description:
        "Prestei suporte técnico (help desk) com GLPI aos colaboradores, solucionando incidentes de hardware, software e rede para garantir a continuidade das operações.",
      tech: ["GLPI", "Help Desk", "Hardware", "Software", "Rede"],
    },
    {
      company: "Exército Brasileiro – 20RCB",
      role: "Aluno NPOR",
      period: "02/2024 - 12/2024",
      description:
        "Fui aluno do Núcleo de Preparação de Oficiais de Reserva do 20º Regimento de Cavalaria Blindado. Na minha formação, aprendi sobre liderança, camaradagem, disciplina, além de todos os atributos de um oficial da arma de cavalaria.",
      tech: ["Liderança", "Disciplina", "Camaradagem", "Gestão de Equipes"],
    },
   
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <section id="experiencia" className="py-20 px-4 relative overflow-hidden">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          className="text-4xl md:text-5xl font-display font-bold mb-12 text-center bg-gradient-primary bg-clip-text"
        >
          Experiência Profissional
        </motion.h2>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="max-w-4xl mx-auto relative"
        >
          {/* Linha vertical da timeline */}
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : { height: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute left-8 top-0 w-0.5 bg-gradient-primary opacity-30 hidden md:block"
          />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ x: 10 }}
              className="relative mb-12 md:pl-20"
            >
              {/* Ícone da timeline */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: 0.3 + index * 0.2, type: "spring" }}
                className="absolute left-0 top-0 hidden md:flex items-center justify-center w-16 h-16 rounded-full glass-card border-2 border-primary/30"
              >
                <Briefcase className="w-6 h-6 text-primary" />
              </motion.div>

              <div className="glass-card rounded-2xl p-6 hover:border-primary/50 transition-all group">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-display font-semibold text-primary mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-lg text-foreground/80 mb-2">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={
                        isInView
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0.8 }
                      }
                      transition={{ delay: 0.5 + index * 0.2 + techIndex * 0.05 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="px-3 py-1 bg-muted/30 rounded-full text-xs text-muted-foreground hover:bg-primary/20 hover:text-primary transition-all cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;