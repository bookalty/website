import { Mail, Phone, MapPin, Linkedin, Instagram, Github } from "lucide-react";

const Contact: React.FC = () => {
    return <>
        <section className="bg-background text-foreground py-16 px-6">
            <div className="max-w-5xl mx-auto text-center space-y-8">
                {/* Titre */}
                <div>
                  <h2 className="text-4xl font-bold">Contact</h2>
                  <p className="text-highlight mt-2">
                    Discutons de votre projet ou collaboration.
                  </p>
                </div>
    
                {/* Infos principales */}
                <div className="grid md:grid-cols-3 gap-8 text-sm md:text-base">
                  <div className="flex flex-col items-center">
                    <Phone className="h-6 w-6 text-primary mb-2" />
                    <p>+33 6 12 34 56 78</p>
                    <p>+33 1 23 45 67 89</p>
                  </div>
    
                  <div className="flex flex-col items-center">
                    <Mail className="h-6 w-6 text-primary mb-2" />
                    <p>contact@exemple.com</p>
                    <p>support@exemple.com</p>
                  </div>
    
                  <div className="flex flex-col items-center">
                    <MapPin className="h-6 w-6 text-primary mb-2" />
                    <p>Paris, France</p>
                    <p>Ouvert du Lundi au Vendredi</p>
                  </div>
                </div>
    
                {/* Réseaux sociaux */}
                <div className="flex justify-center gap-6 mt-8">
                  <a
                    href="https://linkedin.com/in/votreprofil"
                    target="_blank"
                    className="text-foreground hover:text-primary transition"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-7 w-7" />
                  </a>
    
                  <a
                    href="https://instagram.com/votreprofil"
                    target="_blank"
                    className="text-foreground hover:text-primary transition"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-7 w-7" />
                  </a>
    
                  <a
                    href="https://github.com/votreprofil"
                    target="_blank"
                    className="text-foreground hover:text-primary transition"
                    aria-label="GitHub"
                  >
                    <Github className="h-7 w-7" />
                  </a>
                </div>
    
                {/* Pied */}
                <p className="text-sm text-highlight mt-8">
                  © {new Date().getFullYear()} Votre société — Tous droits réservés.
                </p>
            </div>
        </section>
    </>
};

export default Contact;