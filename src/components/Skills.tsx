import { motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Habilidades Pessoais",
      skills: [
        "Liderança",
        "Fácil aprendizagem",
        "Disciplina",
        "Tomada de decisão",
        "Adaptabilidade",
        "Boa comunicação",
        "Gestão de prazos",
      ],
    },
    {
      title: "Front-end",
      skills: [
        "HTML",
        "CSS",
        "Tailwind",
        "NativeWind",
        "Javascript",
        "React",
        "React Native",
        "Integração com APIs",
        "UX/UI",
      ],
    },
    {
      title: "Back-end e Banco de Dados",
      skills: [
        "Python",
        "Selenium",
        "Node.js",
        "Node Express",
        "TypeScript",
        "JWT",
        "Bcrypt",
        "AWS",
        "Serverless Framework",
        "PostgreSQL",
      ],
    },
    {
      title: "Ferramentas e Outros",
      skills: ["Git/GitHub", "Photoshop", "N8n", "Scrum/Kanban"],
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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="habilidades" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          className="text-4xl md:text-5xl font-display font-bold mb-12 text-center bg-gradient-primary bg-clip-text "
        >
          Habilidades & Tecnologias
        </motion.h2>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={item}
              className="glass-card rounded-2xl p-8"
            >
              <h3 className="text-2xl font-display font-semibold mb-6 text-primary">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => {
                  const SkillBadge = () => {
                    const [isHovered, setIsHovered] = useState(false);
                    const x = useMotionValue(0);
                    const y = useMotionValue(0);
                    const rotateX = useTransform(y, [-50, 50], [10, -10]);
                    const rotateY = useTransform(x, [-50, 50], [-10, 10]);

                    return (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={
                          isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
                        }
                        transition={{
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                          type: "spring",
                          stiffness: 260,
                          damping: 20
                        }}
                        whileHover={{ 
                          scale: 1.1,
                          zIndex: 10,
                        }}
                        onHoverStart={() => setIsHovered(true)}
                        onHoverEnd={() => setIsHovered(false)}
                        onMouseMove={(e) => {
                          const rect = e.currentTarget.getBoundingClientRect();
                          const centerX = rect.left + rect.width / 2;
                          const centerY = rect.top + rect.height / 2;
                          x.set((e.clientX - centerX) / 10);
                          y.set((e.clientY - centerY) / 10);
                        }}
                        onMouseLeave={() => {
                          x.set(0);
                          y.set(0);
                        }}
                        style={{
                          rotateX: isHovered ? rotateX : 0,
                          rotateY: isHovered ? rotateY : 0,
                          transformStyle: "preserve-3d",
                        }}
                        className="px-4 py-2 bg-muted/50 rounded-full text-sm font-medium text-foreground border border-border/50 hover:border-primary/50 hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/20 transition-colors cursor-default relative"
                      >
                        <motion.span
                          className="absolute inset-0 rounded-full bg-gradient-primary opacity-0"
                          animate={{ opacity: isHovered ? 0.1 : 0 }}
                          transition={{ duration: 0.3 }}
                        />
                        {skill}
                      </motion.span>
                    );
                  };
                  
                  return <SkillBadge key={skill} />;
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;