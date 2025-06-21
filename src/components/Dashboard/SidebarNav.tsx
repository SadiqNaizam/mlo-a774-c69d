import React from 'react';
import { cn } from '@/lib/utils';
import {
  LayoutGrid,
  Users,
  User,
  FileText,
  Receipt,
  ShoppingBasket,
  Mail,
  Archive,
  Calendar,
  HelpCircle,
  Settings,
} from 'lucide-react';

interface NavItem {
  href: string;
  icon: React.ElementType;
  label: string;
  active?: boolean;
}

const mainNavItems: NavItem[] = [
  { href: '#', icon: LayoutGrid, label: 'Dashboard', active: true },
  { href: '#', icon: Users, label: 'Leads' },
  { href: '#', icon: User, label: 'Customers' },
  { href: '#', icon: FileText, label: 'Proposals' },
  { href: '#', icon: Receipt, label: 'Invoices' },
  { href: '#', icon: ShoppingBasket, label: 'Items' },
  { href: '#', icon: Mail, label: 'Mail' },
  { href: '#', icon: Archive, label: 'Shoebox' },
  { href: '#', icon: Calendar, label: 'Calendar' },
];

const secondaryNavItems: NavItem[] = [
  { href: '#', icon: HelpCircle, label: 'Help' },
  { href: '#', icon: Settings, label: 'Settings' },
];

const NavLink: React.FC<NavItem> = ({ href, icon: Icon, label, active }) => {
  return (
    <a
      href={href}
      className={cn(
        'flex items-center px-3 py-2.5 text-sm font-medium rounded-md transition-colors',
        active
          ? 'bg-secondary text-foreground'
          : 'text-muted-foreground hover:bg-secondary/50 hover:text-foreground'
      )}
    >
      <Icon className="h-5 w-5 mr-3" />
      {label}
    </a>
  );
};

const SidebarNav: React.FC = () => {
  return (
    <div className="flex flex-col h-full justify-between">
      <nav className="space-y-1">
        {mainNavItems.map((item) => (
          <NavLink key={item.label} {...item} />
        ))}
      </nav>
      <nav className="space-y-1">
        {secondaryNavItems.map((item) => (
          <NavLink key={item.label} {...item} />
        ))}
      </nav>
    </div>
  );
};

export default SidebarNav;
