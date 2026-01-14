import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      
      <footer className="py-8 text-center text-muted-foreground border-t border-border/50">
        <div className="container mx-auto px-4">
          <p>© 2026 Felipe Gonçalves. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
