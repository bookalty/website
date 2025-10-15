import {
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaWhatsapp,
    FaEnvelope,
  } from "react-icons/fa";
  import Link from "next/link";


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
                    <a
                      href="https://wa.me/590691282230"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-green-900 hover:bg-gray-700 text-white font-medium px-4 py-1 rounded-full text-sm transition"
                    >
                      <FaWhatsapp /> +33 640 29 25 94
                    </a>
                  </div>
    
                  <div className="flex flex-col items-center">
                    <a
                      href="mailto:caribbeancodelab@gmail.com"
                      className="flex items-center gap-2 bg-blue-800 hover:bg-gray-700 text-white font-medium px-4 py-1 rounded-full text-sm transition"
                    >
                      <FaEnvelope /> caribbeancodelab@gmail.com
                    </a>
                  </div>
    
                  <div className="flex flex-col items-center">
                    <p className="text-sm text-gray-300">📍 Guadeloupe, FR</p>
                    <p>Ouvert du Lundi au Vendredi</p>
                  </div>
                </div>
    
                {/* Réseaux sociaux */}
                <div className="flex justify-center gap-6 mt-8">
                  <Link href="https://www.linkedin.com/company/kaouka/" target="_blank" aria-label="LinkedIn">
                    <FaLinkedin className="w-5 h-5 hover:text-blue-300 transition" />
                  </Link>
    
                  <Link href="https://www.instagram.com/caribbean_code/profilecard/?igsh=bjF4YTk5aWJtZnZn" target="_blank" aria-label="Instagram">
                    <FaInstagram className="w-5 h-5 hover:text-pink-400 transition" />
                  </Link>
    
                  <Link href="https://github.com" target="_blank" aria-label="GitHub">
                    <FaGithub className="w-5 h-5 hover:text-gray-400 transition" />
                  </Link>
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