import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Plus, Search, Upload, Download, MoreVertical, Users, Edit, Trash2, FileText, CheckCircle, AlertCircle, X, ArrowRight, ArrowLeft } from "lucide-react";
import { useState } from "react";

const lists = [
  {
    id: 1,
    name: "Compradores Black Friday",
    contacts: 2847,
    active: 2801,
    source: "Hotmart",
    createdAt: "2024-01-15",
    lastUpdated: "2024-01-15",
  },
  {
    id: 2,
    name: "Carrinho Abandonado",
    contacts: 1256,
    active: 1198,
    source: "Kiwify",
    createdAt: "2024-01-10",
    lastUpdated: "2024-01-14",
  },
  {
    id: 3,
    name: "Interessados Curso Avançado",
    contacts: 892,
    active: 876,
    source: "Import CSV",
    createdAt: "2024-01-08",
    lastUpdated: "2024-01-12",
  },
  {
    id: 4,
    name: "Boletos Pendentes",
    contacts: 456,
    active: 423,
    source: "Hotmart",
    createdAt: "2024-01-05",
    lastUpdated: "2024-01-13",
  },
];

const Lists = () => {
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);
  const [importStep, setImportStep] = useState(1);
  const [importData, setImportData] = useState({
    fileName: '',
    fileContent: null as any,
    columnMapping: {} as Record<string, string>,
    validatedContacts: [] as any[],
    errors: [] as string[],
    listName: '',
    description: ''
  });

  const steps = [
    { id: 1, name: 'Configuração', description: 'Nome e descrição' },
    { id: 2, name: 'Upload', description: 'Selecione o arquivo' },
    { id: 3, name: 'Mapeamento', description: 'Mapeie as colunas' },
    { id: 4, name: 'Validação', description: 'Revise os dados' },
    { id: 5, name: 'Confirmação', description: 'Finalize a importação' }
  ];

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImportData(prev => ({ ...prev, fileName: file.name }));
      // Simular leitura do arquivo
      const mockData = [
        { nome: 'João Silva', telefone: '11999999999', email: 'joao@email.com' },
        { nome: 'Maria Santos', telefone: '11888888888', email: 'maria@email.com' },
        { nome: 'Pedro Costa', telefone: '11777777777', email: 'pedro@email.com' }
      ];
      setImportData(prev => ({ ...prev, fileContent: mockData }));
      setImportStep(3);
    }
  };

  const handleColumnMapping = (column: string, field: string) => {
    setImportData(prev => ({
      ...prev,
      columnMapping: { ...prev.columnMapping, [column]: field }
    }));
  };

  const validateContacts = () => {
    // Verificar se há conteúdo para validar
    if (!importData.fileContent || !Array.isArray(importData.fileContent)) {
      // Se não há arquivo, criar dados de exemplo para demonstração
      const mockData = [
        { nome: 'João Silva', telefone: '11999999999', email: 'joao@email.com' },
        { nome: 'Maria Santos', telefone: '11888888888', email: 'maria@email.com' },
        { nome: 'Pedro Costa', telefone: '11777777777', email: 'pedro@email.com' }
      ];
      
      const validated = mockData.map((contact: any, index: number) => ({
        id: index + 1,
        nome: contact.nome || 'Nome não informado',
        telefone: contact.telefone || 'Telefone não informado',
        email: contact.email || 'Email não informado',
        status: contact.telefone && contact.email ? 'valid' : 'invalid',
        errors: []
      }));

      setImportData(prev => ({ 
        ...prev, 
        validatedContacts: validated,
        fileName: prev.fileName || 'dados_exemplo.csv'
      }));
    } else {
      // Simular validação com dados reais
      const validated = importData.fileContent.map((contact: any, index: number) => ({
        id: index + 1,
        nome: contact.nome || 'Nome não informado',
        telefone: contact.telefone || 'Telefone não informado',
        email: contact.email || 'Email não informado',
        status: contact.telefone && contact.email ? 'valid' : 'invalid',
        errors: []
      }));

      setImportData(prev => ({ ...prev, validatedContacts: validated }));
    }
    
    setImportStep(4);
  };

  const confirmImport = () => {
    // Simular importação
    console.log('Importando lista:', importData);
    setIsImportModalOpen(false);
    setImportStep(1);
    setImportData({
      fileName: '',
      fileContent: null,
      columnMapping: {},
      validatedContacts: [],
      errors: [],
      listName: '',
      description: ''
    });
  };

  const renderImportStep = () => {
    switch (importStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Configuração da Lista</h3>
              <p className="text-muted-foreground">Configure os detalhes da sua nova lista</p>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="listName">Nome da Lista *</Label>
                <Input
                  id="listName"
                  value={importData.listName || ''}
                  onChange={(e) => setImportData(prev => ({ ...prev, listName: e.target.value }))}
                  placeholder="Ex: Clientes VIP"
                />
              </div>
              
              <div>
                <Label htmlFor="description">Descrição (opcional)</Label>
                <Input
                  id="description"
                  value={importData.description || ''}
                  onChange={(e) => setImportData(prev => ({ ...prev, description: e.target.value }))}
                  placeholder="Descrição da lista"
                />
              </div>
            </div>

            <div className="bg-muted/50 rounded-lg p-4">
              <h4 className="font-medium mb-2">Dicas para nomear sua lista:</h4>
              <div className="text-sm text-muted-foreground space-y-1">
                <p>• Use nomes descritivos (ex: "Clientes VIP", "Leads Quentes")</p>
                <p>• Evite caracteres especiais</p>
                <p>• Seja específico para facilitar a organização</p>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Upload className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Upload do Arquivo</h3>
              <p className="text-muted-foreground">Selecione um arquivo CSV ou Excel com seus contatos</p>
            </div>

            <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
              <FileText className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
              <div className="space-y-2">
                <Label htmlFor="file-upload" className="cursor-pointer">
                  <span className="text-primary hover:underline">Clique para selecionar</span> ou arraste o arquivo aqui
                </Label>
                <Input
                  id="file-upload"
                  type="file"
                  accept=".csv,.xlsx,.xls"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <p className="text-sm text-muted-foreground">
                  Formatos suportados: CSV, Excel (.xlsx, .xls)
                </p>
              </div>
            </div>

            <div className="bg-muted/50 rounded-lg p-4">
              <h4 className="font-medium mb-2">Formato recomendado:</h4>
              <div className="text-sm text-muted-foreground space-y-1">
                <p>• Nome (obrigatório)</p>
                <p>• Telefone (obrigatório)</p>
                <p>• Email (opcional)</p>
                <p>• Primeira linha deve conter os cabeçalhos das colunas</p>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Mapeamento de Colunas</h3>
              <p className="text-muted-foreground">Mapeie as colunas do seu arquivo para os campos do sistema</p>
            </div>

            <div className="space-y-4">
              {importData.fileContent && Object.keys(importData.fileContent[0]).map((column) => (
                <div key={column} className="flex items-center space-x-4">
                  <div className="w-32 text-sm font-medium">{column}</div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground" />
                  <Select value={importData.columnMapping?.[column] || ''} onValueChange={(value) => handleColumnMapping(column, value)}>
                    <SelectTrigger className="w-48">
                      <SelectValue placeholder="Selecione o campo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="nome">Nome</SelectItem>
                      <SelectItem value="telefone">Telefone</SelectItem>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="ignore">Ignorar</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              ))}
            </div>

            <div className="bg-muted/50 rounded-lg p-4">
              <h4 className="font-medium mb-2">Prévia dos dados:</h4>
              <div className="text-sm text-muted-foreground">
                <p>Total de linhas: {importData.fileContent?.length || 0}</p>
                <p>Primeiras 3 linhas:</p>
                <pre className="mt-2 bg-background p-2 rounded text-xs overflow-x-auto">
                  {JSON.stringify(importData.fileContent?.slice(0, 3), null, 2)}
                </pre>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Validação dos Dados</h3>
              <p className="text-muted-foreground">Revise os contatos que serão importados</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-primary">{importData.validatedContacts.length}</div>
                  <div className="text-sm text-muted-foreground">Total de Contatos</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-success">{importData.validatedContacts.filter(c => c.status === 'valid').length}</div>
                  <div className="text-sm text-muted-foreground">Válidos</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-destructive">{importData.validatedContacts.filter(c => c.status === 'invalid').length}</div>
                  <div className="text-sm text-muted-foreground">Inválidos</div>
                </CardContent>
              </Card>
            </div>

            <div className="max-h-64 overflow-y-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nome</TableHead>
                    <TableHead>Telefone</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {importData.validatedContacts.map((contact) => (
                    <TableRow key={contact.id}>
                      <TableCell>{contact.nome}</TableCell>
                      <TableCell>{contact.telefone}</TableCell>
                      <TableCell>{contact.email}</TableCell>
                      <TableCell>
                        {contact.status === 'valid' ? (
                          <Badge variant="default" className="bg-success">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            Válido
                          </Badge>
                        ) : (
                          <Badge variant="destructive">
                            <AlertCircle className="w-3 h-3 mr-1" />
                            Inválido
                          </Badge>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-success" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Finalizar Importação</h3>
              <p className="text-muted-foreground">Confirme os dados e finalize a criação da lista</p>
            </div>

            <div className="bg-muted/50 rounded-lg p-6">
              <h4 className="font-medium mb-4">Resumo Final:</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Nome da Lista:</span>
                  <span className="font-medium">{importData.listName}</span>
                </div>
                {importData.description && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Descrição:</span>
                    <span className="font-medium">{importData.description}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Arquivo:</span>
                  <span className="font-medium">{importData.fileName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total de Contatos:</span>
                  <span className="font-medium">{importData.validatedContacts.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Contatos Válidos:</span>
                  <span className="font-medium text-success">{importData.validatedContacts.filter(c => c.status === 'valid').length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Contatos Inválidos:</span>
                  <span className="font-medium text-destructive">{importData.validatedContacts.filter(c => c.status === 'invalid').length}</span>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-medium text-primary">Pronto para importar!</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    A lista será criada com {importData.validatedContacts.filter(c => c.status === 'valid').length} contatos válidos.
                    {importData.validatedContacts.filter(c => c.status === 'invalid').length > 0 && 
                      ` ${importData.validatedContacts.filter(c => c.status === 'invalid').length} contatos inválidos serão ignorados.`
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold">Listas de Contatos</h1>
            <p className="text-muted-foreground mt-1 text-sm sm:text-base">
              Organize seus contatos em listas para campanhas segmentadas
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <Dialog open={isImportModalOpen} onOpenChange={setIsImportModalOpen}>
              <DialogTrigger asChild>
                <Button className="bg-gradient-primary hover:bg-primary-hover w-full sm:w-auto">
                  <Plus className="w-4 h-4 mr-2" />
                  Nova Lista
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-6xl w-full max-h-[95vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Criar Nova Lista de Contatos</DialogTitle>
                </DialogHeader>
                
                {/* Progress Steps */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    {steps.map((step, index) => (
                      <div key={step.id} className="flex items-center">
                        <button
                          onClick={() => setImportStep(step.id)}
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                            importStep >= step.id 
                              ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                              : 'bg-muted text-muted-foreground hover:bg-muted/80'
                          }`}
                        >
                          {importStep > step.id ? <CheckCircle className="w-4 h-4" /> : step.id}
                        </button>
                        <div className="ml-2 hidden sm:block">
                          <p className="text-sm font-medium">{step.name}</p>
                          <p className="text-xs text-muted-foreground">{step.description}</p>
                        </div>
                        {index < steps.length - 1 && (
                          <div className={`w-12 h-0.5 mx-4 ${
                            importStep > step.id ? 'bg-primary' : 'bg-muted'
                          }`} />
                        )}
                      </div>
                    ))}
                  </div>
                  <Progress value={(importStep / steps.length) * 100} className="h-2" />
                </div>

                {/* Step Content */}
                {renderImportStep()}

                {/* Navigation */}
                <div className="flex justify-between pt-6 border-t">
                  <Button
                    variant="outline"
                    onClick={() => setImportStep(Math.max(1, importStep - 1))}
                    disabled={importStep === 1}
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Anterior
                  </Button>
                  
                  <div className="flex gap-2">
                    {importStep < 5 ? (
                      <Button
                        onClick={() => {
                          if (importStep === 3) validateContacts();
                          else setImportStep(importStep + 1);
                        }}
                      >
                        {importStep === 3 ? 'Validar Dados' : 'Próximo'}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    ) : (
                      <Button
                        onClick={confirmImport}
                        disabled={!importData.listName}
                        className="bg-gradient-primary hover:bg-primary-hover"
                      >
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Finalizar Importação
                      </Button>
                    )}
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <Card>
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs sm:text-sm font-medium text-muted-foreground">Total de Listas</p>
                  <p className="text-xl sm:text-3xl font-bold">12</p>
                </div>
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Users className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs sm:text-sm font-medium text-muted-foreground">Total de Contatos</p>
                  <p className="text-xl sm:text-3xl font-bold">8.247</p>
                </div>
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-success/20 rounded-lg flex items-center justify-center">
                  <Users className="w-3 h-3 sm:w-4 sm:h-4 text-success" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs sm:text-sm font-medium text-muted-foreground">Contatos Ativos</p>
                  <p className="text-xl sm:text-3xl font-bold">7.893</p>
                </div>
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Users className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs sm:text-sm font-medium text-muted-foreground">Taxa Ativa</p>
                  <p className="text-xl sm:text-3xl font-bold">95.7%</p>
                </div>
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-success/20 rounded-lg flex items-center justify-center">
                  <Users className="w-3 h-3 sm:w-4 sm:h-4 text-success" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar listas..."
                  className="pl-10"
                />
              </div>
              <Button variant="outline">Todas as Fontes</Button>
              <Button variant="outline">Mais Recentes</Button>
            </div>
          </CardContent>
        </Card>

        {/* Lists Table */}
        <Card>
          <CardHeader>
            <CardTitle>Suas Listas</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nome da Lista</TableHead>
                  <TableHead>Contatos</TableHead>
                  <TableHead>Ativos</TableHead>
                  <TableHead>Taxa</TableHead>
                  <TableHead>Origem</TableHead>
                  <TableHead>Criada em</TableHead>
                  <TableHead>Atualizada</TableHead>
                  <TableHead className="w-12"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {lists.map((list) => (
                  <TableRow key={list.id} className="hover:bg-muted/50">
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                          <Users className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">{list.name}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="font-mono">{list.contacts.toLocaleString()}</TableCell>
                    <TableCell className="font-mono">{list.active.toLocaleString()}</TableCell>
                    <TableCell>
                      <span className="text-success font-medium">
                        {((list.active / list.contacts) * 100).toFixed(1)}%
                      </span>
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary">{list.source}</Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground">{list.createdAt}</TableCell>
                    <TableCell className="text-muted-foreground">{list.lastUpdated}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreVertical className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Edit className="w-4 h-4 mr-2" />
                            Editar Lista
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Download className="w-4 h-4 mr-2" />
                            Exportar CSV
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">
                            <Trash2 className="w-4 h-4 mr-2" />
                            Excluir Lista
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Integration Info */}
        <Card className="bg-gradient-card border-primary/20">
          <CardHeader>
            <CardTitle>🔗 Integrações Automáticas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-medium">Hotmart</h4>
                <p className="text-sm text-muted-foreground">
                  Conecte seu checkout do Hotmart para criar listas automaticamente de compradores,
                  carrinho abandonado e boletos pendentes.
                </p>
                <Button size="sm" variant="outline">
                  Configurar Webhook
                </Button>
              </div>
              <div className="space-y-3">
                <h4 className="font-medium">Kiwify</h4>
                <p className="text-sm text-muted-foreground">
                  Integre com o Kiwify para receber automaticamente leads e compradores
                  em tempo real nas suas listas.
                </p>
                <Button size="sm" variant="outline">
                  Configurar Webhook
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Lists;