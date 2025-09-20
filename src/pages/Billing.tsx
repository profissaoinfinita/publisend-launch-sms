import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CreditCard, MessageSquare, TrendingUp, Calendar, Zap } from "lucide-react";

const packages = [
  {
    id: 1,
    name: "Starter",
    credits: 1000,
    price: 29.90,
    pricePerCredit: 0.0299,
    popular: false,
  },
  {
    id: 2,
    name: "Professional",
    credits: 5000,
    price: 129.90,
    pricePerCredit: 0.026,
    popular: true,
  },
  {
    id: 3,
    name: "Business",
    credits: 10000,
    price: 229.90,
    pricePerCredit: 0.023,
    popular: false,
  },
  {
    id: 4,
    name: "Enterprise",
    credits: 25000,
    price: 499.90,
    pricePerCredit: 0.02,
    popular: false,
  },
];

const history = [
  {
    id: 1,
    date: "2024-01-15",
    description: "Compra de créditos - Pacote Professional",
    credits: 5000,
    amount: 129.90,
    status: "completed",
  },
  {
    id: 2,
    date: "2024-01-10",
    description: "Compra de créditos - Pacote Starter",
    credits: 1000,
    amount: 29.90,
    status: "completed",
  },
  {
    id: 3,
    date: "2024-01-05",
    description: "Uso de créditos - Campanha Black Friday",
    credits: -2847,
    amount: 0,
    status: "used",
  },
];

const Billing = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Créditos SMS</h1>
            <p className="text-muted-foreground mt-1">
              Gerencie seus créditos e histórico de compras
            </p>
          </div>
        </div>

        {/* Current Balance */}
        <Card className="bg-gradient-hero text-white border-0">
          <CardContent className="p-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/80 text-lg">Saldo Atual</p>
                <p className="text-5xl font-bold mb-2">2.847</p>
                <p className="text-white/80">créditos SMS disponíveis</p>
              </div>
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="flex items-center mt-6 space-x-4">
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm">Uso médio: 1.2k/mês</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">Duração estimada: 2,3 meses</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Usage Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Últimos 30 dias</p>
                  <p className="text-2xl font-bold">3.247</p>
                  <p className="text-sm text-muted-foreground">SMS enviados</p>
                </div>
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Custo por SMS</p>
                  <p className="text-2xl font-bold">R$ 0,026</p>
                  <p className="text-sm text-success">-13% vs anterior</p>
                </div>
                <div className="w-10 h-10 bg-success/20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-success" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Investido</p>
                  <p className="text-2xl font-bold">R$ 489,70</p>
                  <p className="text-sm text-muted-foreground">Este mês</p>
                </div>
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Packages */}
        <Card>
          <CardHeader>
            <CardTitle>Comprar Créditos SMS</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {packages.map((pkg) => (
                <div
                  key={pkg.id}
                  className={`relative rounded-xl border-2 p-6 ${
                    pkg.popular
                      ? "border-primary bg-primary/5"
                      : "border-border bg-background"
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground">
                        <Zap className="w-3 h-3 mr-1" />
                        Mais Popular
                      </Badge>
                    </div>
                  )}
                  <div className="text-center space-y-4">
                    <div>
                      <h3 className="font-bold text-lg">{pkg.name}</h3>
                      <p className="text-3xl font-bold text-primary">
                        {pkg.credits.toLocaleString()}
                      </p>
                      <p className="text-sm text-muted-foreground">créditos SMS</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold">
                        R$ {pkg.price.toFixed(2).replace(".", ",")}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        R$ {pkg.pricePerCredit.toFixed(4).replace(".", ",")} por SMS
                      </p>
                    </div>
                    <Button
                      className={`w-full ${
                        pkg.popular
                          ? "bg-gradient-primary hover:bg-primary-hover"
                          : ""
                      }`}
                      variant={pkg.popular ? "default" : "outline"}
                    >
                      Comprar Agora
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Transaction History */}
        <Card>
          <CardHeader>
            <CardTitle>Histórico de Transações</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Data</TableHead>
                  <TableHead>Descrição</TableHead>
                  <TableHead>Créditos</TableHead>
                  <TableHead>Valor</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {history.map((transaction) => (
                  <TableRow key={transaction.id}>
                    <TableCell className="text-muted-foreground">
                      {transaction.date}
                    </TableCell>
                    <TableCell className="font-medium">
                      {transaction.description}
                    </TableCell>
                    <TableCell className="font-mono">
                      <span
                        className={
                          transaction.credits > 0
                            ? "text-success"
                            : transaction.credits < 0
                            ? "text-destructive"
                            : ""
                        }
                      >
                        {transaction.credits > 0 ? "+" : ""}
                        {transaction.credits.toLocaleString()}
                      </span>
                    </TableCell>
                    <TableCell className="font-mono">
                      {transaction.amount > 0
                        ? `R$ ${transaction.amount.toFixed(2).replace(".", ",")}`
                        : "-"}
                    </TableCell>
                    <TableCell>
                      <Badge
                        className={
                          transaction.status === "completed"
                            ? "bg-success-light text-success"
                            : "bg-muted text-muted-foreground"
                        }
                      >
                        {transaction.status === "completed" ? "Concluído" : "Usado"}
                      </Badge>
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

export default Billing;