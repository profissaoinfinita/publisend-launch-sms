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
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Campanhas SMS</h1>
            <p className="text-muted-foreground mt-1">
              Gerencie todas as suas campanhas de SMS em um só lugar
            </p>
          </div>
          <Link to="/campaigns/new">
            <Button className="bg-gradient-primary hover:bg-primary-hover">
              <Plus className="w-4 h-4 mr-2" />
              Nova Campanha
            </Button>
          </Link>
        </div>

        {/* Filters */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar campanhas..."
                  className="pl-10"
                />
              </div>
              <Button variant="outline">Todos os Status</Button>
              <Button variant="outline">Últimos 30 dias</Button>
            </div>
          </CardContent>
        </Card>

        {/* Campaigns Table */}
        <Card>
          <CardHeader>
            <CardTitle>Suas Campanhas</CardTitle>
          </CardHeader>
          <CardContent>
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
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Campaigns;