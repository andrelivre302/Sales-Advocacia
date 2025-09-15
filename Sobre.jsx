import { CheckCircle, Users, Award, Clock, Target, Eye, Heart } from 'lucide-react';
import meetingRoomImage from '../assets/meeting_room_dark.jpg';
import officeImage from '../assets/office_luxury_dark_1.jpg';

const Sobre = () => {
  const stats = [
    { number: '15+', label: 'Anos de Experiência' },
    { number: '1000+', label: 'Casos Resolvidos' },
    { number: '500+', label: 'Clientes Satisfeitos' },
    { number: '24/7', label: 'Atendimento Disponível' },
  ];

  const values = [
    {
      icon: Target,
      title: 'Missão',
      description: 'Oferecer soluções jurídicas de excelência, com transparência e dedicação, garantindo a proteção dos direitos e interesses de nossos clientes.',
    },
    {
      icon: Eye,
      title: 'Visão',
      description: 'Ser reconhecida como referência em advocacia, destacando-se pela qualidade técnica, ética profissional e inovação no atendimento jurídico.',
    },
    {
      icon: Heart,
      title: 'Valores',
      description: 'Ética, transparência, excelência, compromisso, inovação e respeito. Princípios que norteiam todas as nossas ações e relacionamentos.',
    },
  ];

  const achievements = [
    'Mais de 15 anos de atuação no mercado jurídico',
    'Equipe altamente qualificada e especializada',
    'Reconhecimento pela OAB por excelência profissional',
    'Parcerias estratégicas com escritórios internacionais',
    'Tecnologia de ponta para otimização de processos',
    'Atendimento personalizado e humanizado',
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="absolute inset-0 z-0">
          <img
            src={officeImage}
            alt="Escritório Sales Advocacia"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-gradient-gold fade-in">
              Sobre a Sales Advocacia
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 slide-up">
              Uma história de dedicação, excelência e compromisso com a justiça
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl slide-up">
              Fundada com o propósito de oferecer serviços jurídicos de alta qualidade, 
              a Sales Advocacia construiu uma sólida reputação baseada na confiança, 
              transparência e resultados excepcionais para nossos clientes.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gradient-gold mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-6 text-gradient-gold">
                Nossa História
              </h2>
              <div className="space-y-6 text-muted-foreground">
                <p className="text-lg">
                  A Sales Advocacia nasceu da visão de criar um escritório que combinasse 
                  tradição jurídica com inovação tecnológica, oferecendo aos clientes 
                  uma experiência diferenciada no atendimento legal.
                </p>
                <p>
                  Desde nossa fundação, temos nos dedicado a construir relacionamentos 
                  duradouros com nossos clientes, baseados na confiança mútua e na 
                  entrega de resultados consistentes. Nossa equipe cresceu organicamente, 
                  sempre priorizando a qualidade sobre a quantidade.
                </p>
                <p>
                  Hoje, somos reconhecidos como um dos escritórios mais respeitados 
                  da região, com uma carteira diversificada de clientes que inclui 
                  desde pessoas físicas até grandes corporações, todos recebendo 
                  o mesmo nível de excelência e dedicação.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={meetingRoomImage}
                alt="Sala de reunião Sales Advocacia"
                className="rounded-lg shadow-2xl hover-lift"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-20 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4 text-gradient-gold">
              Nossos Princípios
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Os valores que guiam nossa atuação e definem nossa identidade
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-8 bg-background border border-border rounded-lg hover-lift"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4 text-gradient-gold">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <img
                  src={officeImage}
                  alt="Escritório Sales Advocacia - Ambiente"
                  className="rounded-lg shadow-2xl hover-lift"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-lg" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-serif font-bold mb-6 text-gradient-gold">
                Nossos Diferenciais
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                O que nos torna únicos no mercado jurídico e por que nossos 
                clientes confiam em nossos serviços.
              </p>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compromisso */}
      <section className="py-20 section-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-bold mb-6 text-gradient-gold">
            Nosso Compromisso
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Estamos comprometidos em oferecer não apenas serviços jurídicos de excelência, 
            mas uma experiência completa que supere as expectativas de nossos clientes. 
            Cada caso é tratado com a dedicação e o cuidado que merece, sempre buscando 
            as melhores soluções e resultados.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col items-center">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Atendimento Humanizado</h3>
              <p className="text-muted-foreground text-sm">
                Cada cliente é único e recebe atenção personalizada
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Award className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Excelência Técnica</h3>
              <p className="text-muted-foreground text-sm">
                Conhecimento especializado e atualização constante
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Agilidade</h3>
              <p className="text-muted-foreground text-sm">
                Processos otimizados para resultados mais rápidos
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sobre;

