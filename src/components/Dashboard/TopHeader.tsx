import React from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { CalendarDays, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

type TabName = 'sales' | 'leads';

const TopHeader: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<TabName>('leads');

  const TabButton = ({ label, tabName }: { label: string; tabName: TabName }) => (
    <button
      onClick={() => setActiveTab(tabName)}
      className={cn(
        'px-3 py-1.5 text-sm font-medium relative transition-colors',
        activeTab === tabName
          ? 'text-primary'
          : 'text-muted-foreground hover:text-foreground'
      )}
      style={{ paddingBottom: '10px' }} // To align with the border
    >
      {label}
      {activeTab === tabName && (
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary" />
      )}
    </button>
  );

  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center h-full">
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <div className="ml-10 border-b border-border flex items-end h-full">
          <TabButton label="Sales" tabName="sales" />
          <TabButton label="Leads" tabName="leads" />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center space-x-2">
              <CalendarDays className="h-4 w-4 text-muted-foreground" />
              <span>last 6 months</span>
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Last 30 days</DropdownMenuItem>
            <DropdownMenuItem>Last 3 months</DropdownMenuItem>
            <DropdownMenuItem>Last 6 months</DropdownMenuItem>
            <DropdownMenuItem>Last 12 months</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button>
              Create
              <ChevronDown className="h-4 w-4 ml-2" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>New Lead</DropdownMenuItem>
            <DropdownMenuItem>New Proposal</DropdownMenuItem>
            <DropdownMenuItem>New Invoice</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default TopHeader;
