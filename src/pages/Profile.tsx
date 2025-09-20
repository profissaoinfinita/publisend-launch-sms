import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  User, 
  Building2, 
  Mail, 
  Phone, 
  MapPin, 
  CreditCard,
  Shield,
  Save,
  Camera,
  FileText
} from "lucide-react";
import { useState } from "react";

const Profile = () => {
  const [userType, setUserType] = useState<'individual' | 'company'>('individual');
  const [formData, setFormData] = useState({
    // Dados pessoais/empresa
    name: "João Silva",
    email: "joao@empresa.com",
    phone: "(11) 99999-9999",
    document: "123.456.789-00", // CPF ou CNPJ
    documentType: "CPF",
    
    // Endereço
    address: "Rua das Flores, 123",
    city: "São Paulo",
    state: "SP",
    zipCode: "01234-567",
    
    // Dados da empresa (se aplicável)
    companyName: "Empresa Exemplo Ltda",
    tradeName: "Empresa Exemplo",
    stateRegistration: "123.456.789.012",
    municipalRegistration: "987.654.321.000",
    
    // Configurações
    notifications: {
      email: true,
      sms: true,
      marketing: false
    }
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNestedInputChange = (parent: string, field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [parent]: {
        ...prev[parent as keyof typeof prev],
        [field]: value
      }
    }));
  };

  const formatDocument = (value: string, type: string) => {
    if (type === 'CPF') {
      return value.replace(/\D/g, '').replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    } else if (type === 'CNPJ') {
      return value.replace(/\D/g, '').replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
    }
    return value;
  };

  const formatPhone = (value: string) => {
    return value.replace(/\D/g, '').replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  };

  const formatZipCode = (value: string) => {
    return value.replace(/\D/g, '').replace(/(\d{5})(\d{3})/, '$1-$2');
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold">Meu Perfil</h1>
            <p className="text-muted-foreground mt-1 text-sm sm:text-base">
              Gerencie suas informações pessoais e configurações da conta
            </p>
          </div>
          <Button className="bg-gradient-primary hover:bg-primary-hover w-full sm:w-auto">
            <Save className="w-4 h-4 mr-2" />
            Salvar Alterações
          </Button>
        </div>

        <Tabs defaultValue="personal" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
            <TabsTrigger value="personal" className="text-xs sm:text-sm">Dados Pessoais</TabsTrigger>
            <TabsTrigger value="address" className="text-xs sm:text-sm">Endereço</TabsTrigger>
            <TabsTrigger value="company" className="text-xs sm:text-sm">Empresa</TabsTrigger>
            <TabsTrigger value="settings" className="text-xs sm:text-sm">Configurações</TabsTrigger>
          </TabsList>

          {/* Dados Pessoais */}
          <TabsContent value="personal" className="space-y-6">
            <Card>
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="flex items-center text-base sm:text-lg">
                  <User className="w-5 h-5 mr-2" />
                  Informações Pessoais
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 p-4 sm:p-6 pt-0">
                {/* Avatar e Tipo de Usuário */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                  <div className="flex flex-col items-center space-y-3">
                    <Avatar className="w-20 h-20">
                      <AvatarImage src="/placeholder-avatar.jpg" />
                      <AvatarFallback className="text-lg">
                        {formData.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <Button variant="outline" size="sm" className="w-full">
                      <Camera className="w-4 h-4 mr-2" />
                      Alterar Foto
                    </Button>
                  </div>
                  
                  <div className="flex-1 space-y-4">
                    <div>
                      <Label htmlFor="userType">Tipo de Conta</Label>
                      <Select value={userType} onValueChange={(value: 'individual' | 'company') => setUserType(value)}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="individual">
                            <div className="flex items-center">
                              <User className="w-4 h-4 mr-2" />
                              Pessoa Física
                            </div>
                          </SelectItem>
                          <SelectItem value="company">
                            <div className="flex items-center">
                              <Building2 className="w-4 h-4 mr-2" />
                              Pessoa Jurídica
                            </div>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Badge variant={userType === 'individual' ? 'default' : 'secondary'}>
                        {userType === 'individual' ? 'CPF' : 'CNPJ'}
                      </Badge>
                      <span className="text-sm text-muted-foreground">
                        {userType === 'individual' ? 'Pessoa Física' : 'Pessoa Jurídica'}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">
                      {userType === 'individual' ? 'Nome Completo' : 'Nome da Empresa'}
                    </Label>
                    <Input
                      id="name"
                      value={userType === 'individual' ? formData.name : formData.companyName}
                      onChange={(e) => handleInputChange(userType === 'individual' ? 'name' : 'companyName', e.target.value)}
                      placeholder={userType === 'individual' ? 'Seu nome completo' : 'Nome da empresa'}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="seu@email.com"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Telefone</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', formatPhone(e.target.value))}
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="document">
                      {userType === 'individual' ? 'CPF' : 'CNPJ'}
                    </Label>
                    <Input
                      id="document"
                      value={formData.document}
                      onChange={(e) => handleInputChange('document', formatDocument(e.target.value, userType === 'individual' ? 'CPF' : 'CNPJ'))}
                      placeholder={userType === 'individual' ? '000.000.000-00' : '00.000.000/0000-00'}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Endereço */}
          <TabsContent value="address" className="space-y-6">
            <Card>
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="flex items-center text-base sm:text-lg">
                  <MapPin className="w-5 h-5 mr-2" />
                  Endereço
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 p-4 sm:p-6 pt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <Label htmlFor="address">Endereço</Label>
                    <Input
                      id="address"
                      value={formData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      placeholder="Rua, número, complemento"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="city">Cidade</Label>
                    <Input
                      id="city"
                      value={formData.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      placeholder="Sua cidade"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="state">Estado</Label>
                    <Input
                      id="state"
                      value={formData.state}
                      onChange={(e) => handleInputChange('state', e.target.value)}
                      placeholder="UF"
                      maxLength={2}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="zipCode">CEP</Label>
                    <Input
                      id="zipCode"
                      value={formData.zipCode}
                      onChange={(e) => handleInputChange('zipCode', formatZipCode(e.target.value))}
                      placeholder="00000-000"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Dados da Empresa */}
          <TabsContent value="company" className="space-y-6">
            {userType === 'company' ? (
              <Card>
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="flex items-center text-base sm:text-lg">
                    <Building2 className="w-5 h-5 mr-2" />
                    Dados da Empresa
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 p-4 sm:p-6 pt-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="tradeName">Nome Fantasia</Label>
                      <Input
                        id="tradeName"
                        value={formData.tradeName}
                        onChange={(e) => handleInputChange('tradeName', e.target.value)}
                        placeholder="Nome fantasia da empresa"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="stateRegistration">Inscrição Estadual</Label>
                      <Input
                        id="stateRegistration"
                        value={formData.stateRegistration}
                        onChange={(e) => handleInputChange('stateRegistration', e.target.value)}
                        placeholder="123.456.789.012"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="municipalRegistration">Inscrição Municipal</Label>
                      <Input
                        id="municipalRegistration"
                        value={formData.municipalRegistration}
                        onChange={(e) => handleInputChange('municipalRegistration', e.target.value)}
                        placeholder="987.654.321.000"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="p-8 text-center">
                  <Building2 className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Dados da Empresa</h3>
                  <p className="text-muted-foreground mb-4">
                    Para acessar os dados da empresa, altere o tipo de conta para "Pessoa Jurídica" na aba Dados Pessoais.
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={() => setUserType('company')}
                  >
                    Alterar para Pessoa Jurídica
                  </Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Configurações */}
          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="flex items-center text-base sm:text-lg">
                  <Shield className="w-5 h-5 mr-2" />
                  Configurações e Notificações
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 p-4 sm:p-6 pt-0">
                <div className="space-y-4">
                  <h4 className="font-medium">Notificações por E-mail</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Notificações de Sistema</p>
                        <p className="text-sm text-muted-foreground">Receber e-mails sobre campanhas e relatórios</p>
                      </div>
                      <Button
                        variant={formData.notifications.email ? "default" : "outline"}
                        size="sm"
                        onClick={() => handleNestedInputChange('notifications', 'email', !formData.notifications.email)}
                      >
                        {formData.notifications.email ? 'Ativo' : 'Inativo'}
                      </Button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Notificações SMS</p>
                        <p className="text-sm text-muted-foreground">Receber notificações por SMS</p>
                      </div>
                      <Button
                        variant={formData.notifications.sms ? "default" : "outline"}
                        size="sm"
                        onClick={() => handleNestedInputChange('notifications', 'sms', !formData.notifications.sms)}
                      >
                        {formData.notifications.sms ? 'Ativo' : 'Inativo'}
                      </Button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Marketing</p>
                        <p className="text-sm text-muted-foreground">Receber ofertas e novidades</p>
                      </div>
                      <Button
                        variant={formData.notifications.marketing ? "default" : "outline"}
                        size="sm"
                        onClick={() => handleNestedInputChange('notifications', 'marketing', !formData.notifications.marketing)}
                      >
                        {formData.notifications.marketing ? 'Ativo' : 'Inativo'}
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 border-t">
                  <h4 className="font-medium mb-4">Segurança</h4>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full sm:w-auto">
                      <Shield className="w-4 h-4 mr-2" />
                      Alterar Senha
                    </Button>
                    <Button variant="outline" className="w-full sm:w-auto">
                      <FileText className="w-4 h-4 mr-2" />
                      Baixar Dados
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
