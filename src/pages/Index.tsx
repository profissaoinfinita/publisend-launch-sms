import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, Users, TrendingUp, Send, Plus, Eye } from "lucide-react";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Welcome Section */}
        <div className="bg-gradient-hero rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 text-white">
          <div className="max-w-2xl">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">Bem-vindo ao Publisend!</h1>
            <p className="text-white/90 mb-4 sm:mb-6 text-sm sm:text-base">
              Gerencie suas campanhas de SMS e maximize seus resultados com nossa plataforma.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Button variant="secondary" className="bg-white text-primary hover:bg-white/90 w-full sm:w-auto">
                <Plus className="w-4 h-4 mr-2" />
                Nova Campanha
              </Button>
              <Button variant="outline" className="border-white/20 text-white bg-transparent hover:bg-white/10 hover:text-white w-full sm:w-auto">
                <Eye className="w-4 h-4 mr-2" />
                Ver Tutorial
              </Button>
            </div>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            title="SMS Enviados (30d)"
            value="12.847"
            change="+12% vs mês anterior"
            changeType="positive"
            icon={<Send className="w-6 h-6 text-primary" />}
          />
          <MetricCard
            title="Taxa de Entrega"
            value="98.4%"
            change="+0.8% vs mês anterior"
            changeType="positive"
            icon={<TrendingUp className="w-6 h-6 text-success" />}
          />
          <MetricCard
            title="CTR Médio"
            value="12.3%"
            change="+2.1% vs mês anterior"
            changeType="positive"
            icon={<MessageSquare className="w-6 h-6 text-primary" />}
          />
          <MetricCard
            title="Contatos Ativos"
            value="4.298"
            change="+156 novos contatos"
            changeType="positive"
            icon={<Users className="w-6 h-6 text-primary" />}
          />
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Campanhas Recentes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    name: "Black Friday - Últimas Horas",
                    status: "Concluída",
                    sent: "2.847",
                    ctr: "15.2%",
                  },
                  {
                    name: "Lembrete Carrinho Abandonado",
                    status: "Em andamento",
                    sent: "458",
                    ctr: "8.7%",
                  },
                  {
                    name: "Pré-lançamento Curso",
                    status: "Agendada",
                    sent: "-",
                    ctr: "-",
                  },
                ].map((campaign, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div>
                      <p className="font-medium">{campaign.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {campaign.sent !== "-" ? `${campaign.sent} enviados` : "Não enviada"}
                      </p>
                    </div>
                    <div className="text-right">
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                          campaign.status === "Concluída"
                            ? "bg-success-light text-success"
                            : campaign.status === "Em andamento"
                            ? "bg-primary-light text-primary"
                            : "bg-warning-light text-warning"
                        }`}
                      >
                        {campaign.status}
                      </span>
                      {campaign.ctr !== "-" && (
                        <p className="text-sm text-muted-foreground mt-1">CTR: {campaign.ctr}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Performance por Template</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "Carrinho Abandonado", usage: "89%", ctr: "12.4%" },
                  { name: "Pré-live", usage: "76%", ctr: "18.7%" },
                  { name: "Boleto Vencendo", usage: "65%", ctr: "9.3%" },
                  { name: "Fechamento de Vendas", usage: "43%", ctr: "21.8%" },
                ].map((template, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{template.name}</span>
                      <span className="text-sm text-success font-medium">CTR: {template.ctr}</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div
                        className="bg-gradient-primary h-2 rounded-full"
                        style={{ width: template.usage }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
