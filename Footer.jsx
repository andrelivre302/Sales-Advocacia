import { Link } from 'react-router-dom';
import { Scale, Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-primary p-2 rounded-lg">
                <Scale className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-serif font-bold text-gradient-gold">
                  Sales Advocacia
                </h3>
                <p className="text-xs text-muted-foreground">
                  Excelência Jurídica
                </p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Escritório de advocacia comprometido com a excelência jurídica, 
              oferecendo soluções personalizadas com transparência e confiança.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Links Rápidos</h4>
            <ul className="space-y-2">
              {[
                { name: 'Início', href: '/' },
                { name: 'Sobre Nós', href: '/sobre' },
                { name: 'Áreas de Atuação', href: '/areas' },
                { name: 'Equipe', href: '/equipe' },
                { name: 'Blog', href: '/blog' },
                { name: 'Contato', href: '/contato' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas de Atuação */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Áreas de Atuação</h4>
            <ul className="space-y-2">
              {[
                'Direito Civil',
                'Direito Trabalhista',
                'Direito Empresarial',
                'Direito Penal',
                'Direito de Família',
                'Direito Tributário',
              ].map((area) => (
                <li key={area}>
                  <span className="text-muted-foreground text-sm">{area}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <p>Rua das Flores, 123</p>
                  <p>Centro - São Paulo/SP</p>
                  <p>CEP: 01234-567</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">(11) 9999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">contato@salesadvocacia.com.br</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <p>Segunda a Sexta</p>
                  <p>8h às 18h</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-border py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {currentYear} Sales Advocacia. Todos os direitos reservados.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link
                to="/politica-privacidade"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Política de Privacidade
              </Link>
              <Link
                to="/termos-uso"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

