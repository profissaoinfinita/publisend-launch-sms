import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
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
import { Plus, Search, Upload, Download, MoreVertical, Users, Edit, Trash2 } from "lucide-react";

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
            <Button variant="outline" className="w-full sm:w-auto">
              <Upload className="w-4 h-4 mr-2" />
              Importar CSV
            </Button>
            <Button className="bg-gradient-primary hover:bg-primary-hover w-full sm:w-auto">
              <Plus className="w-4 h-4 mr-2" />
              Nova Lista
            </Button>
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