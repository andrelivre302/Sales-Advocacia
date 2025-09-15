import { ArrowRight, Scale, Building, Users, Shield, Heart, Calculator } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import officeImage from '../assets/office_luxury_dark_2.jpg';

const Areas = () => {
  const areas = [
    {
      icon: Scale,
      title: 'Direito Civil',
      description: 'Contratos, responsabilidade civil, direitos reais, sucessões e questões patrimoniais.',
      services: [
        'Elaboração e revisão de contratos',
        'Ações de cobrança e execução',
        'Inventários e partilhas',
        'Usucapião e questões imobiliárias',
        'Responsabilidade civil e danos morais',
      ],
      color: 'from-primary/20 to-primary/5',
    },
    {
      icon: Building,
      title: 'Direito Empresarial',
      description: 'Consultoria jurídica para empresas, contratos comerciais e governança corporativa.',
      services: [
        'Constituição de empresas',
        'Contratos comerciais e parcerias',
        'Compliance e governança corporativa',
        'Fusões e aquisições',
        'Recuperação judicial e falência',
      ],
      color: 'from-blue-500/20 to-blue-500/5',
    },
    {
      icon: Users,
      title: 'Direito Trabalhista',
      description: 'Defesa de direitos trabalhistas para empregados e consultoria para empregadores.',
      services: [
        'Ações trabalhistas e rescisões',
        'Consultoria em relações de trabalho',
        'Acordos e negociações coletivas',
        'Compliance trabalhista',
        'Defesa em auditorias fiscais',
      ],
      color: 'from-green-500/20 to-green-500/5',
    },
    {
      icon: Shield,
      title: 'Direito Penal',
      description: 'Defesa criminal, habeas corpus e acompanhamento em inquéritos policiais.',
      services: [
        'Defesa em processos criminais',
        'Habeas corpus e medidas cautelares',
        'Acompanhamento em inquéritos',
        'Recursos em tribunais superiores',
        'Direito penal empresarial',
      ],
      color: 'from-red-500/20 to-red-500/5',
    },
    {
      icon: Heart,
      title: 'Direito de Família',
      description: 'Divórcios, guarda de filhos, pensão alimentícia e questões familiares.',
      services: [
        'Divórcio e separação consensual',
        'Guarda e visitação de filhos',
        'Pensão alimentícia',
        'União estável e regime de bens',
        'Adoção e tutela',
      ],
      color: 'from-pink-500/20 to-pink-500/5',
    },
    {
      icon: Calculator,
      title: 'Direito Tributário',
      description: 'Planejamento tributário, defesa fiscal e consultoria em questões fiscais.',
      services: [
        'Planejamento tributário',
        'Defesa em autuações fiscais',
        'Parcelamentos e transações tributárias',
        'Consultoria em tributos',
        'Recursos administrativos',
      ],
      color: 'from-yellow-500/20 to-yellow-500/5',
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="absolute inset-0 z-0">
          <img
            src={officeImage}
            alt="Áreas de Atuação Sales Advocacia"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-gradient-gold fade-in">
              Áreas de Atuação
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 slide-up">
              Expertise especializada em diversas áreas do direito
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl slide-up">
              Nossa equipe possui conhecimento aprofundado e experiência comprovada 
              nas principais áreas do direito, oferecendo soluções jurídicas 
              personalizadas para cada necessidade.
            </p>
          </div>
        </div>
      </section>

      {/* Areas Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {areas.map((area, index) => (
              <div
                key={index}
                className="group bg-card border border-border rounded-lg p-8 hover-lift cursor-pointer"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 bg-gradient-to-br ${area.color}`}>
                  <area.icon className="h-8 w-8 text-primary" />
                </div>
                
                <h3 className="text-2xl font-serif font-bold mb-4 group-hover:text-primary transition-colors">
                  {area.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {area.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Principais serviços:</h4>
                  <ul className="space-y-2">
                    {area.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center text-primary group-hover:text-primary/80 transition-colors">
                  <span className="font-medium">Saiba mais</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processo de Trabalho */}
      <section className="py-20 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4 text-gradient-gold">
              Nosso Processo de Trabalho
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Uma metodologia estruturada para garantir os melhores resultados
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Análise Inicial',
                description: 'Avaliação detalhada do caso e identificação das melhores estratégias jurídicas.',
              },
              {
                step: '02',
                title: 'Planejamento',
                description: 'Desenvolvimento de um plano de ação personalizado com prazos e objetivos claros.',
              },
              {
                step: '03',
                title: 'Execução',
                description: 'Implementação das estratégias com acompanhamento constante e comunicação transparente.',
              },
              {
                step: '04',
                title: 'Resultados',
                description: 'Entrega dos resultados com relatório completo e orientações para o futuro.',
              },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full text-xl font-bold mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{process.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {process.description}
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
            <div>
              <h2 className="text-4xl font-serif font-bold mb-6 text-gradient-gold">
                Por que Escolher Nossos Serviços?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Expertise Comprovada',
                    description: 'Mais de 15 anos de experiência e centenas de casos bem-sucedidos em todas as áreas de atuação.',
                  },
                  {
                    title: 'Atendimento Personalizado',
                    description: 'Cada cliente recebe atenção individual e estratégias jurídicas adaptadas às suas necessidades específicas.',
                  },
                  {
                    title: 'Tecnologia Avançada',
                    description: 'Utilizamos as mais modernas ferramentas tecnológicas para otimizar processos e garantir agilidade.',
                  },
                  {
                    title: 'Transparência Total',
                    description: 'Comunicação clara e constante sobre o andamento dos processos, sem surpresas ou custos ocultos.',
                  },
                ].map((diferencial, index) => (
                  <div key={index} className="border-l-4 border-primary pl-6">
                    <h3 className="text-xl font-semibold mb-2">{diferencial.title}</h3>
                    <p className="text-muted-foreground">{diferencial.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src={officeImage}
                alt="Escritório Sales Advocacia"
                className="rounded-lg shadow-2xl hover-lift"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-lg" />
            </div>
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
            Nossa equipe está pronta para analisar seu caso e oferecer as melhores soluções jurídicas.
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
              <Link to="/contato">Entre em Contato</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Areas;

