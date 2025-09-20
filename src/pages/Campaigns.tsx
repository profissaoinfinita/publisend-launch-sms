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
import { Plus, Search, MoreVertical, Play, Pause, Eye, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

const campaigns = [
  {
    id: 1,
    name: "Black Friday - Última Chamada",
    status: "completed",
    sent: 2847,
    delivered: 2801,
    clicks: 426,
    ctr: "15.2%",
    createdAt: "2024-01-15",
    scheduledFor: null,
  },
  {
    id: 2,
    name: "Carrinho Abandonado - Recuperação",
    status: "active",
    sent: 458,
    delivered: 451,
    clicks: 39,
    ctr: "8.7%",
    createdAt: "2024-01-14",
    scheduledFor: null,
  },
  {
    id: 3,
    name: "Pré-lançamento Curso Avançado",
    status: "scheduled",
    sent: 0,
    delivered: 0,
    clicks: 0,
    ctr: "0%",
    createdAt: "2024-01-13",
    scheduledFor: "2024-01-20 09:00",
  },
  {
    id: 4,
    name: "Boleto Vencendo D+1",
    status: "paused",
    sent: 126,
    delivered: 124,
    clicks: 11,
    ctr: "8.9%",
    createdAt: "2024-01-12",
    scheduledFor: null,
  },
];

const getStatusBadge = (status: string) => {
  const statusConfig = {
    completed: { label: "Concluída", className: "bg-success-light text-success" },
    active: { label: "Ativa", className: "bg-primary-light text-primary" },
    scheduled: { label: "Agendada", className: "bg-warning-light text-warning" },
    paused: { label: "Pausada", className: "bg-muted text-muted-foreground" },
  };

  const config = statusConfig[status as keyof typeof statusConfig];
  return <Badge className={config.className}>{config.label}</Badge>;
};

const Campaigns = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold">Campanhas SMS</h1>
            <p className="text-muted-foreground mt-1 text-sm sm:text-base">
              Gerencie todas as suas campanhas de SMS em um só lugar
            </p>
          </div>
          <Link to="/campaigns/new">
            <Button className="bg-gradient-primary hover:bg-primary-hover w-full sm:w-auto">
              <Plus className="w-4 h-4 mr-2" />
              Nova Campanha
            </Button>
          </Link>
        </div>

        {/* Filters */}
        <Card>
          <CardContent className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar campanhas..."
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2 sm:gap-4">
                <Button variant="outline" size="sm" className="flex-1 sm:flex-none">Todos os Status</Button>
                <Button variant="outline" size="sm" className="flex-1 sm:flex-none">Últimos 30 dias</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Campaigns Table */}
        <Card>
          <CardHeader>
            <CardTitle>Suas Campanhas</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Desktop Table */}
            <div className="hidden md:block">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nome da Campanha</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Enviados</TableHead>
                    <TableHead>Entregues</TableHead>
                    <TableHead>Cliques</TableHead>
                    <TableHead>CTR</TableHead>
                    <TableHead>Data</TableHead>
                    <TableHead className="w-12"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {campaigns.map((campaign) => (
                    <TableRow key={campaign.id} className="hover:bg-muted/50">
                      <TableCell>
                        <div>
                          <p className="font-medium">{campaign.name}</p>
                          {campaign.scheduledFor && (
                            <p className="text-sm text-muted-foreground">
                              Agendada para: {campaign.scheduledFor}
                            </p>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>{getStatusBadge(campaign.status)}</TableCell>
                      <TableCell className="font-mono">{campaign.sent.toLocaleString()}</TableCell>
                      <TableCell className="font-mono">{campaign.delivered.toLocaleString()}</TableCell>
                      <TableCell className="font-mono">{campaign.clicks.toLocaleString()}</TableCell>
                      <TableCell className="font-medium text-success">{campaign.ctr}</TableCell>
                      <TableCell className="text-muted-foreground">{campaign.createdAt}</TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreVertical className="w-4 h-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Eye className="w-4 h-4 mr-2" />
                              Ver Detalhes
                            </DropdownMenuItem>
                            {campaign.status === "scheduled" && (
                              <DropdownMenuItem>
                                <Play className="w-4 h-4 mr-2" />
                                Executar Agora
                              </DropdownMenuItem>
                            )}
                            {campaign.status === "active" && (
                              <DropdownMenuItem>
                                <Pause className="w-4 h-4 mr-2" />
                                Pausar
                              </DropdownMenuItem>
                            )}
                            <DropdownMenuItem className="text-destructive">
                              <Trash2 className="w-4 h-4 mr-2" />
                              Excluir
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-4">
              {campaigns.map((campaign) => (
                <Card key={campaign.id} className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-medium text-sm">{campaign.name}</h3>
                        {campaign.scheduledFor && (
                          <p className="text-xs text-muted-foreground mt-1">
                            Agendada para: {campaign.scheduledFor}
                          </p>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        {getStatusBadge(campaign.status)}
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MoreVertical className="w-4 h-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Eye className="w-4 h-4 mr-2" />
                              Ver Detalhes
                            </DropdownMenuItem>
                            {campaign.status === "scheduled" && (
                              <DropdownMenuItem>
                                <Play className="w-4 h-4 mr-2" />
                                Executar Agora
                              </DropdownMenuItem>
                            )}
                            {campaign.status === "active" && (
                              <DropdownMenuItem>
                                <Pause className="w-4 h-4 mr-2" />
                                Pausar
                              </DropdownMenuItem>
                            )}
                            <DropdownMenuItem className="text-destructive">
                              <Trash2 className="w-4 h-4 mr-2" />
                              Excluir
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div>
                        <p className="text-muted-foreground">Enviados</p>
                        <p className="font-mono font-medium">{campaign.sent.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Entregues</p>
                        <p className="font-mono font-medium">{campaign.delivered.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Cliques</p>
                        <p className="font-mono font-medium">{campaign.clicks.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">CTR</p>
                        <p className="font-medium text-success">{campaign.ctr}</p>
                      </div>
                    </div>
                    
                    <div className="text-xs text-muted-foreground">
                      Criada em: {campaign.createdAt}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Campaigns;