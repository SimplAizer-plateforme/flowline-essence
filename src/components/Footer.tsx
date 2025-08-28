const Footer = () => {
  return (
    <footer className="bg-text-primary text-white py-6">
      <div className="container-max">
        <div className="grid md:grid-cols-4 gap-6">
          {/* Société */}
          <div>
            <div className="text-lg font-bold mb-3">SimplAizer</div>
            <p className="text-gray-400 text-xs leading-relaxed mb-3">
              Un SAAS français pour les restaurateurs, conçu pour simplifier la gestion de votre établissement.
            </p>
            <div className="flex space-x-3">
              {[
                { name: "Twitter", icon: "🐦" },
                { name: "LinkedIn", icon: "💼" },
                { name: "GitHub", icon: "💻" }
              ].map((social) => (
                <a 
                  key={social.name}
                  href={`#${social.name.toLowerCase()}`}
                  className="w-7 h-7 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label={social.name}
                >
                  <span className="text-xs">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
          
          {/* Produits */}
          <div>
            <h4 className="font-semibold mb-3 text-sm">Produits</h4>
            <ul className="space-y-1 text-gray-400 text-xs">
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  Fonctionnalités
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Tarifs
                </a>
              </li>
            </ul>
          </div>
          
          {/* Société */}
          <div>
            <h4 className="font-semibold mb-3 text-sm">Société</h4>
            <ul className="space-y-1 text-gray-400 text-xs">
              {["À propos", "Blog", "Partenaires"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="font-semibold mb-3 text-sm">Support</h4>
            <ul className="space-y-1 text-gray-400 text-xs">
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#confidentialite" className="hover:text-white transition-colors">
                  Confidentialité
                </a>
              </li>
              <li>
                <a href="#conditions" className="hover:text-white transition-colors">
                  Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Barre du bas */}
        <div className="border-t border-gray-800 mt-8 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-xs">
            © 2024 SimplAizer. Tous droits réservés.
          </p>
          <div className="flex items-center space-x-4 mt-3 md:mt-0">
            <a href="#confidentialite" className="text-gray-400 text-xs hover:text-white transition-colors">
              Politique de confidentialité
            </a>
            <a href="#conditions" className="text-gray-400 text-xs hover:text-white transition-colors">
              Conditions d'utilisation
            </a>
            <a href="#cookies" className="text-gray-400 text-xs hover:text-white transition-colors">
              Politique des cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
