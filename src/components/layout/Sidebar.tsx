import { Link, useLocation } from "react-router-dom";
import {
  BarChart3,
  MessageSquare,
  Users,
  FileText,
  CreditCard,
  Settings,
  Send,
  PlusCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: BarChart3 },
  { name: "Campanhas", href: "/campaigns", icon: MessageSquare },
  { name: "Criar Campanha", href: "/campaigns/new", icon: PlusCircle },
  { name: "Listas", href: "/lists", icon: Users },
  { name: "Templates", href: "/templates", icon: FileText },
  { name: "Créditos", href: "/billing", icon: CreditCard },
  { name: "Configurações", href: "/settings", icon: Settings },
];

interface SidebarProps {
  onClose?: () => void;
}

export const Sidebar = ({ onClose }: SidebarProps) => {
  const location = useLocation();

  return (
    <div className="w-64 bg-sidebar border-r border-sidebar-border flex flex-col">
      {/* Logo */}
      <div className="h-16 flex items-center px-6 border-b border-sidebar-border">
        <div className="flex items-center space-x-3">
          <img 
            src="/logo.svg" 
            alt="Publisend Logo" 
            className="w-8 h-8"
          />
          <div>
            <h1 className="text-lg font-bold text-sidebar-foreground">Publisend</h1>
            <p className="text-xs text-sidebar-foreground/60">SMS Marketing</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navigation.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.name}
              to={item.href}
              onClick={onClose}
              className={cn(
                "flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                isActive
                  ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-md"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              )}
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Credits Status */}
      <div className="p-4 border-t border-sidebar-border">
        <div className="bg-sidebar-accent rounded-lg p-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-sidebar-foreground/60">Créditos SMS</p>
              <p className="text-lg font-bold text-sidebar-foreground">2.847</p>
            </div>
            <div className="w-8 h-8 bg-success/20 rounded-full flex items-center justify-center">
              <MessageSquare className="w-4 h-4 text-success" />
            </div>
          </div>
          <Link
            to="/billing"
            className="text-xs text-sidebar-primary hover:underline mt-1 inline-block"
          >
            Comprar mais créditos
          </Link>
        </div>
      </div>
    </div>
  );
};