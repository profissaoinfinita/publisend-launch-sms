import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Search, Copy, Edit, Star, MessageSquare, FileText, Eye, Save } from "lucide-react";
import { useState } from "react";

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
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [templateData, setTemplateData] = useState({
    name: '',
    category: '',
    message: '',
    description: ''
  });

  const categories = [
    'E-commerce',
    'Infoproduto', 
    'Cobrança',
    'Promoção',
    'Onboarding',
    'Retenção',
    'Marketing',
    'Suporte'
  ];

  const handleInputChange = (field: string, value: string) => {
    setTemplateData(prev => ({ ...prev, [field]: value }));
  };

  const handleSaveTemplate = () => {
    // Simular salvamento do template
    console.log('Salvando template:', templateData);
    setIsCreateModalOpen(false);
    setTemplateData({
      name: '',
      category: '',
      message: '',
      description: ''
    });
  };

  const getCharacterCount = (text: string) => {
    return text.length;
  };

  const getSmsCount = (text: string) => {
    // SMS tem limite de 160 caracteres
    return Math.ceil(text.length / 160);
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold">Templates SMS</h1>
            <p className="text-muted-foreground mt-1 text-sm sm:text-base">
              Modelos prontos para suas campanhas de SMS
            </p>
          </div>
          <Dialog open={isCreateModalOpen} onOpenChange={setIsCreateModalOpen}>
            <DialogTrigger asChild>
              <Button className="bg-gradient-primary hover:bg-primary-hover w-full sm:w-auto">
                <Plus className="w-4 h-4 mr-2" />
                Criar Template
              </Button>
            </DialogTrigger>
            {isCreateModalOpen && (
              <DialogContent className="max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="flex items-center text-xl">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Criar Novo Template
                </DialogTitle>
              </DialogHeader>
              
              <Tabs defaultValue="basic" className="space-y-6">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="basic" className="flex items-center">
                    <FileText className="w-4 h-4 mr-2" />
                    Informações Básicas
                  </TabsTrigger>
                  <TabsTrigger value="preview" className="flex items-center">
                    <Eye className="w-4 h-4 mr-2" />
                    Prévia
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="basic" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="templateName">Nome do Template *</Label>
                        <Input
                          id="templateName"
                          value={templateData.name || ''}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Ex: Carrinho Abandonado"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="templateCategory">Categoria *</Label>
                        <Select value={templateData.category || ''} onValueChange={(value) => handleInputChange('category', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione uma categoria" />
                          </SelectTrigger>
                          <SelectContent>
                            {categories.map((category) => (
                              <SelectItem key={category} value={category}>
                                {category}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="templateDescription">Descrição (opcional)</Label>
                        <Input
                          id="templateDescription"
                          value={templateData.description || ''}
                          onChange={(e) => handleInputChange('description', e.target.value)}
                          placeholder="Breve descrição do template"
                        />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="templateMessage">Mensagem *</Label>
                        <Textarea
                          id="templateMessage"
                          value={templateData.message || ''}
                          onChange={(e) => handleInputChange('message', e.target.value)}
                          placeholder="Digite sua mensagem aqui..."
                          className="min-h-[200px] resize-none"
                        />
                        <div className="flex justify-between items-center mt-2 text-sm text-muted-foreground">
                          <span>{getCharacterCount(templateData.message)} caracteres</span>
                          <span>{getSmsCount(templateData.message)} SMS</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-muted/50 rounded-lg p-4">
                    <h4 className="font-medium mb-2">💡 Dicas para criar um bom template:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Use variáveis como {`{nome}`}, {`{link}`}, {`{produto}`} para personalização</li>
                      <li>• Seja direto e objetivo - SMS tem limite de 160 caracteres</li>
                      <li>• Inclua uma call-to-action clara</li>
                      <li>• Teste diferentes versões para otimizar o CTR</li>
                    </ul>
                  </div>
                </TabsContent>

                <TabsContent value="preview" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="font-semibold">Informações do Template</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Nome:</span>
                          <span className="font-medium">{templateData.name || 'Não informado'}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Categoria:</span>
                          <Badge variant="secondary">{templateData.category || 'Não selecionada'}</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Descrição:</span>
                          <span className="font-medium">{templateData.description || 'Não informada'}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Caracteres:</span>
                          <span className="font-medium">{getCharacterCount(templateData.message)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">SMS:</span>
                          <span className="font-medium">{getSmsCount(templateData.message)}</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="font-semibold">Prévia da Mensagem</h3>
                      <div className="bg-muted/50 rounded-lg p-4 border-2 border-dashed border-muted-foreground/25">
                        <div className="flex items-center space-x-2 mb-3">
                          <div className="w-3 h-3 bg-success rounded-full"></div>
                          <span className="text-sm text-muted-foreground">SMS</span>
                        </div>
                        <div className="bg-background rounded-lg p-3 border">
                          <p className="text-sm whitespace-pre-wrap">
                            {templateData.message || 'Digite sua mensagem na aba anterior para ver a prévia aqui...'}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>

              <div className="flex justify-end space-x-3 pt-6 border-t">
                <Button
                  variant="outline"
                  onClick={() => setIsCreateModalOpen(false)}
                >
                  Cancelar
                </Button>
                <Button
                  onClick={handleSaveTemplate}
                  disabled={!templateData.name || !templateData.category || !templateData.message}
                  className="bg-gradient-primary hover:bg-primary-hover"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Salvar Template
                </Button>
              </div>
              </DialogContent>
            )}
          </Dialog>
        </div>

        {/* Filters */}
        <Card>
          <CardContent className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar templates..."
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2 sm:gap-4">
                <Button variant="outline" size="sm" className="flex-1 sm:flex-none">Todas as Categorias</Button>
                <Button variant="outline" size="sm" className="flex-1 sm:flex-none">Mais Usados</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {templates.map((template) => (
            <Card key={template.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3 p-4 sm:p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 min-w-0 flex-1">
                    <CardTitle className="text-base sm:text-lg truncate">{template.name}</CardTitle>
                    {template.isFavorite && (
                      <Star className="w-4 h-4 text-warning fill-current flex-shrink-0" />
                    )}
                  </div>
                  <Badge variant="secondary" className="text-xs flex-shrink-0">{template.category}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 p-4 sm:p-6 pt-0">
                {/* Message Preview */}
                <div className="bg-muted/50 p-3 rounded-lg">
                  <p className="text-xs sm:text-sm leading-relaxed">{template.message}</p>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <div className="flex items-center space-x-3 sm:space-x-4">
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
                  <Button size="sm" className="flex-1 text-xs sm:text-sm">
                    <Copy className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    <span className="hidden sm:inline">Usar Template</span>
                    <span className="sm:hidden">Usar</span>
                  </Button>
                  <Button size="sm" variant="outline" className="px-2 sm:px-3">
                    <Edit className="w-3 h-3 sm:w-4 sm:h-4" />
                  </Button>
                  <Button 
                    size="sm" 
                    variant="ghost"
                    className={`px-2 sm:px-3 ${template.isFavorite ? "text-warning" : ""}`}
                  >
                    <Star className={`w-3 h-3 sm:w-4 sm:h-4 ${template.isFavorite ? "fill-current" : ""}`} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tips Card */}
        <Card className="bg-gradient-card border-primary/20">
          <CardHeader className="p-4 sm:p-6">
            <CardTitle className="flex items-center text-base sm:text-lg">
              💡 Dicas para Templates Eficazes
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 sm:p-6 pt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
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