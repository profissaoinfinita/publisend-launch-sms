import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  CheckCircle, 
  Smartphone, 
  Mic, 
  Phone, 
  Plug, 
  Users, 
  TrendingUp, 
  Clock,
  Star,
  MessageSquare,
  Zap,
  Target,
  Shield,
  Award
} from "lucide-react";
import { Link } from "react-router-dom";

const Landing = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirecionar para login após preenchimento
    window.location.href = "/login";
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background/95 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <MessageSquare className="w-4 h-4 text-white" />
              </div>
              <h1 className="text-xl font-bold text-primary">Publisend</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <Link to="/login">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  Já sou cliente
                </Button>
              </Link>
              <Link to="/login">
                <Button className="bg-gradient-primary hover:bg-primary-hover">
                  Teste Grátis
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  📈 Diga adeus ao <span className="font-extrabold">desperdício</span> de leads. <span className="font-extrabold">Aumente</span> suas <span className="font-extrabold">vendas</span> com comunicação automatizada que <span className="font-extrabold">conecta</span>, <span className="font-extrabold">emociona</span> e <span className="font-extrabold">converte</span>!
                </h1>
                <p className="text-xl text-white/90 leading-relaxed">
                  Com a Publisend, suas mensagens chegam no momento exato em que o cliente decide. SMS, Voz e URA personalizados que transformam interessados em compradores fiéis.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/login">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4">
                    🟢 Teste Grátis por 7 Dias
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <p className="text-white/80 text-sm self-center">
                  Sem compromisso. Comece a vender mais já na primeira semana.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10">
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <MessageSquare className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold">SMS Recebido</p>
                        <p className="text-white/80 text-sm">Publisend</p>
                      </div>
                    </div>
                    <div className="bg-white/20 rounded-2xl p-4">
                      <p className="text-white">🔥 Oferta especial para você! 50% OFF por tempo limitado. Clique aqui: bit.ly/oferta123</p>
                    </div>
                    <div className="flex items-center justify-between text-white/80 text-sm">
                      <span>Há 2 minutos</span>
                      <div className="flex items-center space-x-1">
                        <CheckCircle className="w-4 h-4" />
                        <span>Entregue</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/20 rounded-full flex items-center justify-center animate-bounce">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
                <Mic className="w-6 h-6 text-white" />
              </div>
              <div className="absolute top-1/2 -right-8 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center animate-ping">
                <Phone className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                🔥 O que você <span className="font-extrabold">ganha</span> com a <span className="font-extrabold">Publisend</span>?
              </h2>
            </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-xl transition-shadow">
              <CardContent className="space-y-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Mais vendas, menos abandono</h3>
                <p className="text-muted-foreground text-lg">
                  Converta até 40% das vendas abandonadas com mensagens automáticas que lembram seu cliente no momento certo.
                </p>
                <div className="bg-success/10 border border-success/20 rounded-lg p-4">
                  <p className="text-success font-semibold">+40% Conversões</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 hover:shadow-xl transition-shadow">
              <CardContent className="space-y-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Atendimento sem filas</h3>
                <p className="text-muted-foreground text-lg">
                  Diminua em até 70% o tempo de espera do seu suporte com URA inteligente que direciona cada cliente para a solução ideal.
                </p>
                <div className="bg-success/10 border border-success/20 rounded-lg p-4">
                  <p className="text-success font-semibold">-70% Tempo de Espera</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 hover:shadow-xl transition-shadow">
              <CardContent className="space-y-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Engajamento que converte</h3>
                <p className="text-muted-foreground text-lg">
                  Mensagens lidas em segundos: até 95% dos SMS são abertos em menos de 3 minutos. Sua marca sempre no topo da atenção do cliente.
                </p>
                <div className="bg-success/10 border border-success/20 rounded-lg p-4">
                  <p className="text-success font-semibold">95% Taxa de Abertura</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Visual Demo Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold">
                  📲 Veja como sua <span className="font-extrabold">mensagem</span> chega <span className="font-extrabold">antes</span> da concorrência
                </h2>
                <p className="text-xl text-muted-foreground">
                  Com a Publisend, sua comunicação não fica perdida em e-mails ou redes sociais. Ela chega direto no bolso do cliente, na hora da decisão.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-4 bg-muted/50 rounded-lg">
                  <div className="w-8 h-8 bg-destructive/20 rounded-full flex items-center justify-center">
                    <span className="text-destructive text-sm">✗</span>
                  </div>
                  <span className="text-muted-foreground">Email → ignorado</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-success/10 rounded-lg border border-success/20">
                  <div className="w-8 h-8 bg-success/20 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-success" />
                  </div>
                  <span className="text-success font-semibold">Notificação SMS → aberto imediatamente</span>
                </div>
              </div>
              
              <Button size="lg" className="bg-gradient-primary hover:bg-primary-hover">
                🟠 Agende uma Demonstração Gratuita
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl p-8">
                <div className="bg-white rounded-2xl p-6 shadow-xl">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                        <MessageSquare className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">Publisend</p>
                        <p className="text-sm text-muted-foreground">Agora</p>
                      </div>
                    </div>
                    <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
                      <p className="text-sm">
                        🔔 Seu pedido está pronto! Clique para confirmar ✅
                      </p>
                    </div>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>Há 30 segundos</span>
                      <div className="flex items-center space-x-1">
                        <CheckCircle className="w-3 h-3 text-success" />
                        <span>Entregue</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              🚀 Marcas <span className="font-extrabold">líderes</span> confiam na <span className="font-extrabold">Publisend</span> — e os <span className="font-extrabold">resultados</span> falam por si.
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="p-6">
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-warning text-warning" />
                  ))}
                </div>
                <p className="text-muted-foreground italic">
                  "Aumentamos 32% das conversões em apenas 30 dias. Simplesmente indispensável."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">LE</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Loja online de eletrônicos</p>
                    <p className="text-xs text-muted-foreground">E-commerce</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-warning text-warning" />
                  ))}
                </div>
                <p className="text-muted-foreground italic">
                  "Antes, nossa equipe de cobrança ligava manualmente. Hoje, 80% é automatizado e nossa taxa de retorno subiu 55%."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">RC</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Empresa de recuperação de crédito</p>
                    <p className="text-xs text-muted-foreground">Financeiro</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-warning text-warning" />
                  ))}
                </div>
                <p className="text-muted-foreground italic">
                  "Nosso suporte caiu pela metade em volume de chamadas, porque a URA resolveu o básico de forma automática."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">TC</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Operadora de telecom</p>
                    <p className="text-xs text-muted-foreground">Telecomunicações</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center">
            <p className="text-muted-foreground mb-8">Confiado por empresas como:</p>
            <div className="flex items-center justify-center space-x-8 opacity-60">
              <div className="text-2xl font-bold text-muted-foreground">Sky</div>
              <div className="text-2xl font-bold text-muted-foreground">Claro</div>
              <div className="text-2xl font-bold text-muted-foreground">Atento</div>
              <div className="text-2xl font-bold text-muted-foreground">+500</div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              📌 Nossas <span className="font-extrabold">soluções</span>, seu <span className="font-extrabold">crescimento</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover:shadow-xl transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <Smartphone className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">SMS Inteligente</h3>
                <p className="text-muted-foreground">
                  Entrega imediata e leitura em segundos. Envie links rastreáveis, promoções e alertas com precisão cirúrgica.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-xl transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <Mic className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Torpedo de Voz</h3>
                <p className="text-muted-foreground">
                  Sua marca falando diretamente com milhares de clientes ao mesmo tempo. Humanize sua comunicação sem perder escala.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-xl transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">URA Personalizada</h3>
                <p className="text-muted-foreground">
                  Atenda, direcione e resolva sem esforço humano. Um atendimento 24h, sempre pronto para seus clientes.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-xl transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <Plug className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">API Oficial</h3>
                <p className="text-muted-foreground">
                  Conecte sua loja, checkout ou CRM em minutos. Zero complicação para sua equipe de TI.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" className="bg-gradient-primary hover:bg-primary-hover">
              🟢 Quero escalar meu atendimento agora
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold">
                ⏳ Oferta <span className="font-extrabold">exclusiva</span>: cadastre-se hoje e <span className="font-extrabold">ganhe 2.000 SMS grátis</span>!
              </h2>
              <p className="text-xl text-white/90">
                Teste nossa plataforma sem risco. Experimente o poder da comunicação direta e veja seus resultados crescerem já na primeira semana.
              </p>
            </div>
            
            <div className="flex items-center justify-center space-x-4 mb-8">
              <Clock className="w-8 h-8 text-warning" />
              <span className="text-2xl font-bold">Oferta válida por tempo limitado!</span>
            </div>
            
            <Link to="/login">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4">
                🟠 Quero ativar meu bônus agora
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Conversion Form Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold">
                  📩 Pronto para <span className="font-extrabold">multiplicar</span> seus <span className="font-extrabold">resultados</span>?
                </h2>
                <p className="text-xl text-muted-foreground">
                  Preencha os dados abaixo e receba uma consultoria gratuita + seu bônus inicial de mensagens.
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Nome</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Seu nome completo"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="seu@email.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Telefone</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="(11) 99999-9999"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="company">Empresa</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      placeholder="Nome da sua empresa"
                      required
                    />
                  </div>
                </div>
                
                <Button type="submit" size="lg" className="w-full bg-gradient-primary hover:bg-primary-hover">
                  🟢 Quero minha demonstração gratuita
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                
                <p className="text-sm text-muted-foreground text-center">
                  Você receberá retorno em até 2h pelo WhatsApp.
                </p>
              </form>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl p-8">
                <div className="bg-white rounded-2xl p-8 text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Consultoria Gratuita</h3>
                  <p className="text-muted-foreground mb-6">
                    Nossa equipe de especialistas irá analisar seu negócio e criar uma estratégia personalizada para maximizar seus resultados.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-success" />
                      <span className="text-sm">Análise completa do seu negócio</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-success" />
                      <span className="text-sm">Estratégia personalizada</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-success" />
                      <span className="text-sm">2.000 SMS grátis para testar</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <MessageSquare className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Publisend</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Transforme sua comunicação em vendas. Teste grátis por 7 dias.
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
              <span>© 2024 Publisend. Todos os direitos reservados.</span>
              <span>•</span>
              <span>Termos de Uso</span>
              <span>•</span>
              <span>Política de Privacidade</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
