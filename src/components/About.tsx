import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);

  return (
    <section id="sobre" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          style={{ opacity, scale }}
          className="glass-card rounded-2xl p-8 md:p-12"
        >
          <motion.h2
            initial={{ y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-display font-bold mb-8 bg-gradient-primary bg-clip-text "
          >
            Sobre Mim
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 1 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4 }}
            className="space-y-6 text-muted-foreground text-lg leading-relaxed"
          >
            <p>
              Desenvolvedor Fullstack com foco em JavaScript, React e Node.js. Formado em Análise e Desenvolvimento de Sistemas. 
              Dedicado a criar soluções de automação e interfaces eficientes. Utilizo a disciplina e a capacidade de liderança
              desenvolvidas durante minha formação no Exército Brasileiro para entregar projetos 
              funcionais e colaborar de forma eficiente em equipe.
            </p>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;