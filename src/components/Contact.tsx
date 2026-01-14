import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { motion, useInView } from "framer-motion";
import { Send } from "lucide-react";
import { useRef, useState } from "react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch("https://formsubmit.co/98aa8d4c82ec165939db36453fbeeb35", {
        method: "POST",
        body: formData,
      });

      toast({
        title: "Mensagem enviada!",
        description: "Obrigado pelo contato. Responderei em breve!",
      });

      form.reset();
    } catch (error) {
      toast({
        title: "Erro ao enviar",
        description: "Por favor, tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="py-20 px-4">
      <div className="container mx-auto max-w-2xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          className="text-4xl md:text-5xl font-display font-bold mb-12 text-center bg-gradient-primary bg-clip-text "
        >
          Contato
        </motion.h2>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-2xl p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_next"
              value={window.location.href}
            />

            <motion.div 
              className="space-y-2"
              whileFocus={{ scale: 1.02 }}
            >
              <label htmlFor="name" className="text-sm font-medium text-foreground">
                Nome
              </label>
              <motion.div
                whileFocus={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Input
                  id="name"
                  name="name"
                  placeholder="Seu nome"
                  required
                  className="bg-muted/30 border-border/50 focus:border-primary focus:shadow-lg focus:shadow-primary/20 transition-all"
                />
              </motion.div>
            </motion.div>

            <motion.div 
              className="space-y-2"
              whileFocus={{ scale: 1.02 }}
            >
              <label htmlFor="email" className="text-sm font-medium text-foreground">
                Email
              </label>
              <motion.div
                whileFocus={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="seu@email.com"
                  required
                  className="bg-muted/30 border-border/50 focus:border-primary focus:shadow-lg focus:shadow-primary/20 transition-all"
                />
              </motion.div>
            </motion.div>

            <motion.div 
              className="space-y-2"
              whileFocus={{ scale: 1.02 }}
            >
              <label htmlFor="message" className="text-sm font-medium text-foreground">
                Mensagem
              </label>
              <motion.div
                whileFocus={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Sua mensagem"
                  rows={6}
                  required
                  className="bg-muted/30 border-border/50 focus:border-primary focus:shadow-lg focus:shadow-primary/20 resize-none transition-all"
                />
              </motion.div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-primary hover:opacity-90 hover:shadow-xl hover:shadow-primary/30 transition-all gap-2 relative overflow-hidden group"
              >
                <motion.span
                  className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10"
                  transition={{ duration: 0.3 }}
                />
                {isSubmitting ? (
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    Enviando...
                  </motion.span>
                ) : (
                  <>
                    <Send size={18} />
                    Enviar Mensagem
                  </>
                )}
              </Button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;