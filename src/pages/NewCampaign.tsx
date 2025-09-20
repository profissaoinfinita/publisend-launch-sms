import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ChevronLeft, ChevronRight, MessageSquare, Users, CheckCircle, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  { id: 1, name: "Detalhes", icon: MessageSquare },
  { id: 2, name: "Mensagem", icon: MessageSquare },
  { id: 3, name: "Validação", icon: CheckCircle },
  { id: 4, name: "Programação", icon: Calendar },
];

const NewCampaign = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    objective: "",
    listId: "",
    message: "",
    sendNow: true,
    scheduledDate: "",
    scheduledTime: "",
  });

  const progress = (currentStep / steps.length) * 100;

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <Label htmlFor="name" className="text-base font-medium">
                Nome da Campanha
              </Label>
              <Input
                id="name"
                placeholder="Ex: Black Friday - Última Chamada"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="objective" className="text-base font-medium">
                Objetivo da Campanha
              </Label>
              <Select onValueChange={(value) => handleInputChange("objective", value)}>
                <SelectTrigger className="mt-2">
                  <SelectValue placeholder="Selecione o objetivo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="promotion">Promoção/Oferta</SelectItem>
                  <SelectItem value="cart-recovery">Recuperação de Carrinho</SelectItem>
                  <SelectItem value="pre-live">Pré-live/Lançamento</SelectItem>
                  <SelectItem value="payment-reminder">Lembrete de Pagamento</SelectItem>
                  <SelectItem value="announcement">Anúncio/Novidade</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="list" className="text-base font-medium">
                Lista de Contatos
              </Label>
              <Select onValueChange={(value) => handleInputChange("listId", value)}>
                <SelectTrigger className="mt-2">
                  <SelectValue placeholder="Selecione uma lista" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Compradores Black Friday (2.847 contatos)</SelectItem>
                  <SelectItem value="2">Carrinho Abandonado (1.256 contatos)</SelectItem>
                  <SelectItem value="3">Interessados Curso Avançado (892 contatos)</SelectItem>
                  <SelectItem value="4">Boletos Pendentes (456 contatos)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <Label htmlFor="message" className="text-base font-medium">
                Mensagem SMS
              </Label>
              <Textarea
                id="message"
                placeholder="Digite sua mensagem aqui... Use {nome} para personalizar e {link} para adicionar links."
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                className="mt-2 min-h-[120px]"
              />
              <div className="flex justify-between text-sm text-muted-foreground mt-2">
                <span>Caracteres: {formData.message.length}/160</span>
                <span>Estimativa: 1 SMS</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <Card className="bg-muted/30">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm">Templates Sugeridos</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start text-left h-auto p-2"
                    onClick={() => handleInputChange("message", "🔥 OFERTA ESPECIAL! {nome}, aproveite 50% OFF por tempo limitado! Clique: {link}")}
                  >
                    <div>
                      <p className="font-medium text-xs">Oferta Especial</p>
                      <p className="text-xs text-muted-foreground">🔥 OFERTA ESPECIAL! {"{nome}"}, aproveite...</p>
                    </div>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start text-left h-auto p-2"
                    onClick={() => handleInputChange("message", "Oi {nome}! Você esqueceu alguns itens no seu carrinho. Finalize agora: {link}")}
                  >
                    <div>
                      <p className="font-medium text-xs">Carrinho Abandonado</p>
                      <p className="text-xs text-muted-foreground">Oi {"{nome}"}! Você esqueceu alguns...</p>
                    </div>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-muted/30">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm">Variáveis Disponíveis</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="text-xs space-y-1">
                    <div className="flex justify-between">
                      <span className="font-mono bg-muted px-1 rounded">{"{nome}"}</span>
                      <span className="text-muted-foreground">Nome do contato</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-mono bg-muted px-1 rounded">{"{link}"}</span>
                      <span className="text-muted-foreground">Link de ação</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-mono bg-muted px-1 rounded">{"{produto}"}</span>
                      <span className="text-muted-foreground">Nome do produto</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
              <h4 className="font-medium text-primary mb-2">Prévia da Mensagem</h4>
              <div className="bg-white border rounded-lg p-3 text-sm">
                {formData.message.replace("{nome}", "João Silva").replace("{link}", "https://seu-link.com") || "Sua mensagem aparecerá aqui..."}
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    Audiência
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Lista Selecionada:</span>
                    <span className="text-sm font-medium">Compradores Black Friday</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Total de Contatos:</span>
                    <span className="text-sm font-medium">2.847</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Números Válidos:</span>
                    <span className="text-sm font-medium text-success">2.801 (98.4%)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Números Inválidos:</span>
                    <span className="text-sm font-medium text-destructive">46 (1.6%)</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm flex items-center">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Custo Estimado
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">SMS a Enviar:</span>
                    <span className="text-sm font-medium">2.801</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Custo por SMS:</span>
                    <span className="text-sm font-medium">R$ 0,026</span>
                  </div>
                  <div className="border-t pt-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Total Estimado:</span>
                      <span className="text-sm font-bold text-primary">R$ 72,83</span>
                    </div>
                  </div>
                  <div className="bg-success/10 border border-success/20 rounded p-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-success">Créditos Disponíveis:</span>
                      <span className="font-medium text-success">2.847</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-muted/30">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm">Revisão da Campanha</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Nome:</span>
                  <p className="font-medium">{formData.name || "Não definido"}</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Objetivo:</span>
                  <p className="font-medium">{formData.objective || "Não definido"}</p>
                </div>
                <div className="md:col-span-2">
                  <span className="text-muted-foreground">Mensagem:</span>
                  <p className="font-medium bg-white p-2 rounded border mt-1">
                    {formData.message || "Mensagem não definida"}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div>
              <Label className="text-base font-medium">Quando enviar?</Label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <Card 
                  className={`cursor-pointer transition-colors ${
                    formData.sendNow ? "border-primary bg-primary/5" : "border-border"
                  }`}
                  onClick={() => handleInputChange("sendNow", "true")}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded-full border-2 ${
                        formData.sendNow ? "border-primary bg-primary" : "border-muted-foreground"
                      }`} />
                      <div>
                        <p className="font-medium">Enviar Agora</p>
                        <p className="text-sm text-muted-foreground">
                          Campanha será executada imediatamente
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card 
                  className={`cursor-pointer transition-colors ${
                    !formData.sendNow ? "border-primary bg-primary/5" : "border-border"
                  }`}
                  onClick={() => handleInputChange("sendNow", "false")}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded-full border-2 ${
                        !formData.sendNow ? "border-primary bg-primary" : "border-muted-foreground"
                      }`} />
                      <div>
                        <p className="font-medium">Agendar Envio</p>
                        <p className="text-sm text-muted-foreground">
                          Escolha data e horário específicos
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {!formData.sendNow && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="date">Data do Envio</Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.scheduledDate}
                    onChange={(e) => handleInputChange("scheduledDate", e.target.value)}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="time">Horário do Envio</Label>
                  <Input
                    id="time"
                    type="time"
                    value={formData.scheduledTime}
                    onChange={(e) => handleInputChange("scheduledTime", e.target.value)}
                    className="mt-2"
                  />
                </div>
              </div>
            )}

            <Card className="bg-warning/5 border-warning/20">
              <CardContent className="p-4">
                <h4 className="font-medium text-warning mb-2">⚠️ Lembre-se</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• SMS são enviados apenas entre 08h00 e 21h59</li>
                  <li>• Campanhas agendadas podem ser canceladas até o horário de envio</li>
                  <li>• Verifique se você tem créditos suficientes antes do agendamento</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Link to="/campaigns">
              <Button variant="ghost" size="icon">
                <ChevronLeft className="w-4 h-4" />
              </Button>
            </Link>
            <div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">Nova Campanha SMS</h1>
              <p className="text-muted-foreground mt-1 text-sm sm:text-base">
                Crie uma nova campanha em 4 passos simples
              </p>
            </div>
          </div>
        </div>

        {/* Progress */}
        <Card>
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium">Progresso</span>
              <span className="text-sm text-muted-foreground">
                Passo {currentStep} de {steps.length}
              </span>
            </div>
            <Progress value={progress} className="mb-4 sm:mb-6" />
            
            <div className="flex items-center justify-between overflow-x-auto">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className={`flex items-center space-x-2 min-w-0 ${
                    step.id === currentStep
                      ? "text-primary"
                      : step.id < currentStep
                      ? "text-success"
                      : "text-muted-foreground"
                  }`}
                >
                  <div
                    className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center border-2 flex-shrink-0 ${
                      step.id === currentStep
                        ? "border-primary bg-primary/10"
                        : step.id < currentStep
                        ? "border-success bg-success text-success-foreground"
                        : "border-muted-foreground"
                    }`}
                  >
                    {step.id < currentStep ? (
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                    ) : (
                      <step.icon className="w-3 h-3 sm:w-4 sm:h-4" />
                    )}
                  </div>
                  <span className="text-xs sm:text-sm font-medium hidden sm:block whitespace-nowrap">{step.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Step Content */}
        <Card>
          <CardHeader className="p-4 sm:p-6">
            <CardTitle className="text-lg sm:text-xl">{steps[currentStep - 1].name}</CardTitle>
          </CardHeader>
          <CardContent className="p-4 sm:p-6">
            {renderStepContent()}
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-0">
          <Button
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 1}
            className="w-full sm:w-auto"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Anterior
          </Button>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3">
            {currentStep === steps.length ? (
              <>
                <Button variant="outline" className="w-full sm:w-auto">Salvar como Rascunho</Button>
                <Button className="bg-gradient-primary hover:bg-primary-hover w-full sm:w-auto">
                  {formData.sendNow ? "Enviar Campanha" : "Agendar Campanha"}
                </Button>
              </>
            ) : (
              <Button onClick={nextStep} className="w-full sm:w-auto">
                Próximo
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default NewCampaign;