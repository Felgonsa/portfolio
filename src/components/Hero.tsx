import { Button } from "@/components/ui/button";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { FileText, Github, Linkedin } from "lucide-react";
import { useEffect } from "react";

import foto from "../assets/foto.jpg";

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springX = useSpring(mouseX, { stiffness: 150, damping: 15 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 15 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set((clientX - innerWidth / 2) / 25);
      mouseY.set((clientY - innerHeight / 2) / 25);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);


  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Felgonsa",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/felipegoncalvesdesouza/",
    },
    {
      icon: FileText,
      label: "Currículo",
      href: "https://docs.google.com/document/d/1plyCMoQ0pYjFQZoqIjqe-C5NuOFEIM1vXg5L0fGuWT0/edit?usp=sharing",
    },
  ];

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 opacity-30"
        style={{ x: springX, y: springY }}
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
      </motion.div>

      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ y: y1 }}
            className="space-y-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-display font-bold"
            >
              Felipe Gonçalves
              
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl text-muted-foreground font-medium"
            >
              Desenvolvedor Full-Stack
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              Construindo aplicações web modernas com foco na experiência do
              usuário e desempenho
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                >
                  <Button variant="outline" className="gap-2 relative overflow-hidden group">
                    <motion.span
                      className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity"
                      initial={false}
                    />
                    <link.icon size={18} />
                    {link.label}
                  </Button>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ y: y2 }}
            className="relative flex justify-center"
          >
            <motion.div 
              className="relative w-80 h-80 md:w-96 md:h-96"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 blur-3xl"
              />
              <motion.div 
                className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl glow-primary"
                whileHover={{ 
                  borderColor: "hsl(217 91% 60%)",
                  boxShadow: "0 0 60px hsl(217 91% 60% / 0.5)"
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-full bg-gradient-card backdrop-blur-sm flex items-center justify-center text-8xl font-display font-bold text-primary">
                  <img src={foto} alt="" />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;