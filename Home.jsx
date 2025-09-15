import { Link } from 'react-router-dom';
import { ArrowRight, Scale, Shield, Users, Award, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import officeImage1 from '../assets/office_luxury_dark_1.jpg';
import officeImage2 from '../assets/office_luxury_dark_2.jpg';

const Home = () => {
  const features = [
    {
      icon: Scale,
      title: 'Excelência Jurídica',
      description: 'Soluções jurídicas personalizadas com base em anos de experiência e conhecimento especializado.',
    },
    {
      icon: Shield,
      title: 'Confiança e Transparência',
      description: 'Relacionamento baseado na transparência total, mantendo você informado em cada etapa do processo.',
    },
    {
      icon: Users,
      title: 'Atendimento Personalizado',
      description: 'Cada cliente recebe atenção individual e estratégias jurídicas adaptadas às suas necessidades específicas.',
    },
    {
      icon: Award,
      title: 'Resultados Comprovados',
      description: 'Histórico sólido de casos bem-sucedidos e clientes satisfeitos em diversas áreas do direito.',
    },
  ];

  const areas = [
    'Direito Civil',
    'Direito Trabalhista',
    'Direito Empresarial',
    'Direito Penal',
    'Direito de Família',
    'Direito Tributário',
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={officeImage1}
            alt="Escritório Sales Advocacia"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 fade-in">
              <span className="text-gradient-gold">Sales Advocacia</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 slide-up">
              Excelência jurídica com confiança e transparência
            </p>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto slide-up">
              Oferecemos soluções jurídicas personalizadas com mais de uma década de experiência, 
              garantindo resultados eficazes e atendimento de excelência.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center slide-up">
              <Button size="lg" className="btn-gold text-lg px-8 py-4">
                Agende sua Consulta
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="btn-outline-gold text-lg px-8 py-4"
                asChild
              >
                <Link to="/sobre">Conheça Nossa História</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4 text-gradient-gold">
              Por que escolher a Sales Advocacia?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Combinamos experiência, dedicação e inovação para oferecer o melhor serviço jurídico
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg hover-lift bg-background border border-border"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-6 text-gradient-gold">
                Tradição e Inovação em Advocacia
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Com mais de uma década de atuação no mercado jurídico, a Sales Advocacia 
                se consolidou como referência em excelência e confiabilidade.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  'Mais de 1000 casos resolvidos com sucesso',
                  'Equipe especializada e certificada',
                  'Atendimento 24/7 para emergências',
                  'Tecnologia de ponta para agilizar processos',
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <Button className="btn-gold" asChild>
                <Link to="/sobre">
                  Saiba Mais Sobre Nós
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src={officeImage2}
                alt="Escritório Sales Advocacia - Interior"
                className="rounded-lg shadow-2xl hover-lift"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Areas de Atuação Section */}
      <section className="py-20 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4 text-gradient-gold">
              Áreas de Atuação
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Oferecemos serviços especializados em diversas áreas do direito
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map((area, index) => (
              <div
                key={index}
                className="p-6 bg-background border border-border rounded-lg hover-lift group cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                    {area}
                  </h3>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="btn-outline-gold" asChild>
              <Link to="/areas">
                Ver Todas as Áreas
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-bold mb-6 text-gradient-gold">
            Precisa de Assessoria Jurídica?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Entre em contato conosco e agende uma consulta. Nossa equipe está pronta para ajudar você.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-gold text-lg px-8 py-4">
              Agendar Consulta
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="btn-outline-gold text-lg px-8 py-4"
              asChild
            >
              <Link to="/contato">Fale Conosco</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

