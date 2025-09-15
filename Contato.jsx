import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    area: '',
    mensagem: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (value, name) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui seria implementada a lógica de envio do formulário
    console.log('Dados do formulário:', formData);
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    
    // Reset do formulário
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      assunto: '',
      area: '',
      mensagem: '',
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Endereço',
      details: ['Rua das Flores, 123', 'Centro - São Paulo/SP', 'CEP: 01234-567'],
    },
    {
      icon: Phone,
      title: 'Telefone',
      details: ['(11) 9999-9999', '(11) 3333-3333'],
    },
    {
      icon: Mail,
      title: 'E-mail',
      details: ['contato@salesadvocacia.com.br', 'atendimento@salesadvocacia.com.br'],
    },
    {
      icon: Clock,
      title: 'Horário de Atendimento',
      details: ['Segunda a Sexta: 8h às 18h', 'Sábado: 8h às 12h', 'Emergências: 24h'],
    },
  ];

  const areas = [
    'Direito Civil',
    'Direito Empresarial',
    'Direito Trabalhista',
    'Direito Penal',
    'Direito de Família',
    'Direito Tributário',
    'Outros',
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-gradient-gold fade-in">
              Entre em Contato
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 slide-up">
              Estamos prontos para ajudar você com suas questões jurídicas
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto slide-up">
              Nossa equipe está disponível para esclarecer suas dúvidas e oferecer 
              a melhor solução jurídica para seu caso. Entre em contato conosco 
              através dos canais abaixo ou agende uma consulta.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="text-center p-6 bg-card border border-border rounded-lg hover-lift"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <info.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-muted-foreground text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6 text-gradient-gold">
                Envie sua Mensagem
              </h2>
              <p className="text-muted-foreground mb-8">
                Preencha o formulário abaixo e nossa equipe entrará em contato 
                em até 24 horas para agendar sua consulta.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="nome" className="block text-sm font-medium mb-2">
                      Nome Completo *
                    </label>
                    <Input
                      id="nome"
                      name="nome"
                      type="text"
                      required
                      value={formData.nome}
                      onChange={handleInputChange}
                      className="bg-background border-border"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      E-mail *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-background border-border"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="telefone" className="block text-sm font-medium mb-2">
                      Telefone *
                    </label>
                    <Input
                      id="telefone"
                      name="telefone"
                      type="tel"
                      required
                      value={formData.telefone}
                      onChange={handleInputChange}
                      className="bg-background border-border"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                  <div>
                    <label htmlFor="area" className="block text-sm font-medium mb-2">
                      Área de Interesse
                    </label>
                    <Select onValueChange={(value) => handleSelectChange(value, 'area')}>
                      <SelectTrigger className="bg-background border-border">
                        <SelectValue placeholder="Selecione uma área" />
                      </SelectTrigger>
                      <SelectContent>
                        {areas.map((area) => (
                          <SelectItem key={area} value={area}>
                            {area}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label htmlFor="assunto" className="block text-sm font-medium mb-2">
                    Assunto *
                  </label>
                  <Input
                    id="assunto"
                    name="assunto"
                    type="text"
                    required
                    value={formData.assunto}
                    onChange={handleInputChange}
                    className="bg-background border-border"
                    placeholder="Resumo do seu caso"
                  />
                </div>

                <div>
                  <label htmlFor="mensagem" className="block text-sm font-medium mb-2">
                    Mensagem *
                  </label>
                  <Textarea
                    id="mensagem"
                    name="mensagem"
                    required
                    rows={6}
                    value={formData.mensagem}
                    onChange={handleInputChange}
                    className="bg-background border-border resize-none"
                    placeholder="Descreva detalhadamente sua situação..."
                  />
                </div>

                <Button type="submit" className="btn-gold w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Enviar Mensagem
                </Button>
              </form>
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-serif font-bold mb-6 text-gradient-gold">
                  Nossa Localização
                </h2>
                <div className="bg-background border border-border rounded-lg p-6 mb-6">
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                      <p className="text-muted-foreground">
                        Mapa interativo será integrado aqui
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Rua das Flores, 123 - Centro, São Paulo/SP
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-background border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Atendimento Imediato</h3>
                <p className="text-muted-foreground mb-4">
                  Para casos urgentes, entre em contato diretamente via WhatsApp 
                  ou telefone. Nossa equipe está disponível 24h para emergências.
                </p>
                <div className="space-y-3">
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp: (11) 99999-9999
                  </Button>
                  <Button variant="outline" className="w-full btn-outline-gold">
                    <Phone className="mr-2 h-4 w-4" />
                    Ligar: (11) 3333-3333
                  </Button>
                </div>
              </div>

              <div className="bg-background border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Primeira Consulta</h3>
                <p className="text-muted-foreground mb-4">
                  A primeira consulta é gratuita e pode ser realizada presencialmente 
                  ou por videoconferência, conforme sua preferência.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Análise inicial do caso</li>
                  <li>• Orientação sobre direitos</li>
                  <li>• Estratégia jurídica</li>
                  <li>• Orçamento transparente</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4 text-gradient-gold">
              Perguntas Frequentes
            </h2>
            <p className="text-muted-foreground">
              Respostas para as dúvidas mais comuns sobre nossos serviços
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: 'Como funciona a primeira consulta?',
                answer: 'A primeira consulta é gratuita e tem duração de até 30 minutos. Durante este tempo, analisamos seu caso, esclarecemos suas dúvidas e apresentamos as possíveis estratégias jurídicas.',
              },
              {
                question: 'Quais são as formas de pagamento?',
                answer: 'Aceitamos diversas formas de pagamento: dinheiro, cartão de crédito/débito, PIX, transferência bancária e parcelamento. Também oferecemos planos de pagamento personalizados.',
              },
              {
                question: 'Vocês atendem em outras cidades?',
                answer: 'Sim, atendemos clientes em todo o estado de São Paulo e, em casos específicos, em outros estados. Oferecemos atendimento presencial, por videoconferência ou telefone.',
              },
              {
                question: 'Quanto tempo demora um processo?',
                answer: 'O tempo varia conforme a complexidade do caso e a área do direito. Durante a consulta inicial, fornecemos uma estimativa baseada em nossa experiência com casos similares.',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contato;

