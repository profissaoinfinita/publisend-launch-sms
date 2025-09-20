import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  User, 
  Webhook, 
  Shield, 
  Bell, 
  CreditCard, 
  Key,
  ExternalLink,
  Copy,
  CheckCircle
} from "lucide-react";

const Settings = () => {
  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold">Configurações</h1>
          <p className="text-muted-foreground mt-1 text-sm sm:text-base">
            Gerencie sua conta, integrações e preferências
          </p>
        </div>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
            <TabsTrigger value="profile" className="text-xs sm:text-sm">Perfil</TabsTrigger>
            <TabsTrigger value="integrations" className="text-xs sm:text-sm">Integrações</TabsTrigger>
            <TabsTrigger value="notifications" className="text-xs sm:text-sm">Notificações</TabsTrigger>
            <TabsTrigger value="security" className="text-xs sm:text-sm">Segurança</TabsTrigger>
            <TabsTrigger value="billing" className="text-xs sm:text-sm">Cobrança</TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="flex items-center text-base sm:text-lg">
                  <User className="w-5 h-5 mr-2" />
                  Informações Pessoais
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 p-4 sm:p-6 pt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Nome Completo</Label>
                    <Input id="name" defaultValue="João Silva" />
                  </div>
                  <div>
                    <Label htmlFor="email">E-mail</Label>
                    <Input id="email" type="email" defaultValue="joao@exemplo.com" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Telefone</Label>
                    <Input id="phone" defaultValue="+55 11 99999-9999" />
                  </div>
                  <div>
                    <Label htmlFor="company">Empresa</Label>
                    <Input id="company" defaultValue="Minha Empresa LTDA" />
                  </div>
                </div>
                <Separator />
                <div className="flex justify-end">
                  <Button>Salvar Alterações</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Plano Atual</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="text-lg font-bold">Plano Professional</h3>
                      <Badge className="bg-primary-light text-primary">Ativo</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Faturamento mensal • Próxima cobrança em 15/02/2024
                    </p>
                  </div>
                  <Button variant="outline">Alterar Plano</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="integrations" className="space-y-6">
            <Card>
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="flex items-center text-base sm:text-lg">
                  <Webhook className="w-5 h-5 mr-2" />
                  Integrações de Checkout
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Hotmart */}
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <span className="text-orange-600 font-bold text-sm">HM</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Hotmart</h4>
                      <p className="text-sm text-muted-foreground">
                        Receba automaticamente compradores e carrinho abandonado
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className="bg-success-light text-success">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Conectado
                    </Badge>
                    <Button variant="outline" size="sm">Configurar</Button>
                  </div>
                </div>

                {/* Kiwify */}
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <span className="text-green-600 font-bold text-sm">KW</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Kiwify</h4>
                      <p className="text-sm text-muted-foreground">
                        Integre com seu checkout do Kiwify
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary">Não conectado</Badge>
                    <Button size="sm">Conectar</Button>
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="font-medium mb-2">Webhook URL</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Use esta URL nos seus checkouts para receber eventos automaticamente
                  </p>
                  <div className="flex items-center space-x-2">
                    <Input 
                      readOnly 
                      value="https://api.publisend.com/webhook/12345"
                      className="font-mono text-sm"
                    />
                    <Button size="icon" variant="outline">
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-6">
            <Card>
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="flex items-center text-base sm:text-lg">
                  <Bell className="w-5 h-5 mr-2" />
                  Preferências de Notificação
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">E-mail de Campanhas</h4>
                    <p className="text-sm text-muted-foreground">
                      Receba relatórios de campanhas concluídas
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Alertas de Crédito</h4>
                    <p className="text-sm text-muted-foreground">
                      Seja notificado quando os créditos estiverem baixos
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Relatórios Semanais</h4>
                    <p className="text-sm text-muted-foreground">
                      Resumo semanal de performance das campanhas
                    </p>
                  </div>
                  <Switch />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Atualizações do Sistema</h4>
                    <p className="text-sm text-muted-foreground">
                      Novidades, atualizações e manutenções
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security" className="space-y-6">
            <Card>
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="flex items-center text-base sm:text-lg">
                  <Shield className="w-5 h-5 mr-2" />
                  Segurança da Conta
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-medium mb-2">Alterar Senha</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="current-password">Senha Atual</Label>
                      <Input id="current-password" type="password" />
                    </div>
                    <div>
                      <Label htmlFor="new-password">Nova Senha</Label>
                      <Input id="new-password" type="password" />
                    </div>
                  </div>
                  <Button className="mt-4">Alterar Senha</Button>
                </div>

                <Separator />

                <div>
                  <h4 className="font-medium mb-2">Chaves de API</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Use estas chaves para integrar com a API do Publisend
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Key className="w-4 h-4 text-muted-foreground" />
                        <div>
                          <p className="font-medium text-sm">Chave Pública</p>
                          <p className="text-xs text-muted-foreground font-mono">pk_live_••••••••••••••••</p>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">
                        <Copy className="w-4 h-4 mr-2" />
                        Copiar
                      </Button>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Key className="w-4 h-4 text-muted-foreground" />
                        <div>
                          <p className="font-medium text-sm">Chave Secreta</p>
                          <p className="text-xs text-muted-foreground font-mono">sk_live_••••••••••••••••</p>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">
                        <Copy className="w-4 h-4 mr-2" />
                        Copiar
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="billing" className="space-y-6">
            <Card>
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="flex items-center text-base sm:text-lg">
                  <CreditCard className="w-5 h-5 mr-2" />
                  Informações de Cobrança
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-medium mb-4">Método de Pagamento</h4>
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-primary/20 rounded flex items-center justify-center">
                          <CreditCard className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">•••• •••• •••• 1234</p>
                          <p className="text-sm text-muted-foreground">Expira em 12/2025</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">Alterar</Button>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="font-medium mb-4">Dados de Faturamento</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="company-name">Razão Social</Label>
                      <Input id="company-name" defaultValue="Minha Empresa LTDA" />
                    </div>
                    <div>
                      <Label htmlFor="cnpj">CNPJ</Label>
                      <Input id="cnpj" defaultValue="12.345.678/0001-90" />
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor="address">Endereço</Label>
                      <Input id="address" defaultValue="Rua das Flores, 123 - Centro" />
                    </div>
                  </div>
                  <Button className="mt-4">Salvar Dados</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Settings;