import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Plus, Search, Copy, Edit, Star } from "lucide-react";

const templates = [
  {
    id: 1,
    name: "Carrinho Abandonado",
    category: "E-commerce",
    usage: 89,
    ctr: "12.4%",
    message: "Olá {nome}! Você esqueceu alguns itens no seu carrinho. Finalize sua compra agora e ganhe 10% OFF! 🛒 {link}",
    isFavorite: true,
  },
  {
    id: 2,
    name: "Pré-live Lançamento",
    category: "Infoproduto",
    usage: 76,
    ctr: "18.7%",
    message: "🔴 AO VIVO em 30min! {nome}, não perca o lançamento exclusivo. Entre agora: {link}",
    isFavorite: true,
  },
  {
    id: 3,
    name: "Boleto Vencendo",
    category: "Cobrança",
    usage: 65,
    ctr: "9.3%",
    message: "Oi {nome}! Seu boleto vence hoje. Evite multas e juros, pague agora: {link}",
    isFavorite: false,
  },
  {
    id: 4,
    name: "Fechamento de Vendas",
    category: "Promoção",
    usage: 43,
    ctr: "21.8%",
    message: "⏰ ÚLTIMAS HORAS! {nome}, apenas hoje você garante 50% OFF. Não perca: {link}",
    isFavorite: false,
  },
  {
    id: 5,
    name: "Boas-vindas",
    category: "Onboarding",
    usage: 32,
    ctr: "8.1%",
    message: "Bem-vindo(a) {nome}! Obrigado por se cadastrar. Aqui está seu acesso: {link}",
    isFavorite: false,
  },
  {
    id: 6,
    name: "Reativação de Cliente",
    category: "Relacionamento",
    usage: 28,
    ctr: "15.6%",
    message: "Sentimos sua falta, {nome}! Volta especial com 30% OFF só para você: {link}",
    isFavorite: false,
  },
];

const Templates = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Templates SMS</h1>
            <p className="text-muted-foreground mt-1">
              Modelos prontos para suas campanhas de SMS
            </p>
          </div>
          <Button className="bg-gradient-primary hover:bg-primary-hover">
            <Plus className="w-4 h-4 mr-2" />
            Criar Template
          </Button>
        </div>

        {/* Filters */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar templates..."
                  className="pl-10"
                />
              </div>
              <Button variant="outline">Todas as Categorias</Button>
              <Button variant="outline">Mais Usados</Button>
            </div>
          </CardContent>
        </Card>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template) => (
            <Card key={template.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <CardTitle className="text-lg">{template.name}</CardTitle>
                    {template.isFavorite && (
                      <Star className="w-4 h-4 text-warning fill-current" />
                    )}
                  </div>
                  <Badge variant="secondary">{template.category}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Message Preview */}
                <div className="bg-muted/50 p-3 rounded-lg">
                  <p className="text-sm leading-relaxed">{template.message}</p>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-4">
                    <div>
                      <span className="text-muted-foreground">Uso: </span>
                      <span className="font-medium">{template.usage}%</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">CTR: </span>
                      <span className="font-medium text-success">{template.ctr}</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center space-x-2 pt-2">
                  <Button size="sm" className="flex-1">
                    <Copy className="w-4 h-4 mr-2" />
                    Usar Template
                  </Button>
                  <Button size="sm" variant="outline">
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button 
                    size="sm" 
                    variant="ghost"
                    className={template.isFavorite ? "text-warning" : ""}
                  >
                    <Star className={`w-4 h-4 ${template.isFavorite ? "fill-current" : ""}`} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tips Card */}
        <Card className="bg-gradient-card border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center">
              💡 Dicas para Templates Eficazes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-medium mb-2">Personalização</h4>
                <p className="text-muted-foreground">Use variáveis como {"{nome}"} para tornar a mensagem mais pessoal.</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Call-to-Action</h4>
                <p className="text-muted-foreground">Seja claro sobre a ação que você quer que o usuário faça.</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Urgência</h4>
                <p className="text-muted-foreground">Crie senso de urgência com frases como "últimas horas" ou "só hoje".</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Emojis</h4>
                <p className="text-muted-foreground">Use emojis para chamar atenção, mas sem exagerar.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Templates;