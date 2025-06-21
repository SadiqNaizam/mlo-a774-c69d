import React from 'react';
import { Menu } from 'lucide-react';
import SidebarNav from '../Dashboard/SidebarNav';
import { cn } from '@/lib/utils';

interface SidebarProps {
  isCollapsed: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, toggleSidebar }) => {
  return (
    <div className="hidden border-r bg-background md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div
          className={cn(
            'flex h-16 items-center',
            isCollapsed ? 'justify-center px-2' : 'px-6'
          )}
        >
          <button
            onClick={toggleSidebar}
            className="p-1 text-foreground/70 hover:text-foreground"
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle Sidebar</span>
          </button>
          {!isCollapsed && (
            <a href="/" className="ml-4 flex items-center" aria-label="Dashboard Home">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-foreground text-background">
                <span className="text-base font-bold">bo</span>
              </div>
            </a>
          )}
        </div>
        <div
          className={cn(
            'flex-1 overflow-y-auto',
            isCollapsed ? 'px-2' : 'px-4'
          )}
        >
          <SidebarNav isCollapsed={isCollapsed} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;