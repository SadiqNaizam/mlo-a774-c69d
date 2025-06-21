import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  DotProps,
} from 'recharts';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

type TrackingTab = 'came' | 'converted' | 'size';

const trackingData = [
  { name: 'March', won: 65, lost: 88 },
  { name: 'April', won: 52, lost: 45 },
  { name: 'May', won: 82, lost: 35 },
  { name: 'June', won: 75, lost: 8 },
  { name: 'July', won: 88, lost: 42 },
  { name: 'August', won: 30, lost: 95 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background p-2 border border-border rounded-md shadow-lg">
        <p className="font-bold mb-2">{label}</p>
        <p className="text-teal-500 flex items-center">
          <span className="w-2 h-2 rounded-full bg-teal-500 mr-2"></span>
          {`Closed won: ${payload[0].value}`}
        </p>
        <p className="text-rose-500 flex items-center mt-1">
           <span className="w-2 h-2 rounded-full bg-rose-500 mr-2"></span>
          {`Closed lost: ${payload[1].value}`}
        </p>
      </div>
    );
  }
  return null;
};

const CustomizedDot: React.FC<DotProps & {dotColor: string}> = (props) => {
    const { cx, cy, stroke, payload, value, dotColor } = props;
    if (cy && cy < 10) return null; // Avoid dots at extreme edges
    return <circle cx={cx} cy={cy} r={4} strokeWidth={2} fill={dotColor} stroke="hsl(var(--background))" />;
};

const LeadsTrackingChart: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<TrackingTab>('converted');

  const TabButton = ({ label, tabName }: { label: string; tabName: TrackingTab }) => (
    <Button
      variant={activeTab === tabName ? 'secondary' : 'ghost'}
      size="sm"
      onClick={() => setActiveTab(tabName)}
      className={cn(
        'transition-colors',
        activeTab === tabName && 'text-foreground font-semibold',
        activeTab !== tabName && 'text-muted-foreground'
      )}
    >
      {label}
    </Button>
  );

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>Leads tracking</CardTitle>
            <div className="flex items-baseline space-x-6 mt-2">
              <div className="flex items-baseline">
                <span className="text-4xl font-bold">680</span>
                <span className="ml-2 text-muted-foreground text-sm">total closed</span>
              </div>
              <div className="flex items-baseline">
                <span className="text-4xl font-bold">70</span>
                <span className="ml-2 text-muted-foreground text-sm">total lost</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end gap-2">
            <div className="flex items-center bg-muted p-1 rounded-lg">
              <TabButton label="Leads came" tabName="came" />
              <TabButton label="Leads Converted" tabName="converted" />
              <TabButton label="Total deals size" tabName="size" />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="flex items-center space-x-1 text-muted-foreground text-xs">
                  <span>last 6 months</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Last 30 days</DropdownMenuItem>
                <DropdownMenuItem>Last 3 months</DropdownMenuItem>
                <DropdownMenuItem>Last 6 months</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={trackingData} margin={{ top: 5, right: 20, left: 0, bottom: 40 }}>
              <defs>
                <linearGradient id="colorWon" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#14b8a6" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#14b8a6" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorLost" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#f43f5e" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
              <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} dy={10} />
              <YAxis tickLine={false} axisLine={false} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
              <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'hsl(var(--foreground))', strokeWidth: 1, strokeDasharray: '3 3' }} />
              <Area type="monotone" dataKey="won" stroke="#14b8a6" fillOpacity={1} fill="url(#colorWon)" strokeWidth={2.5} dot={<CustomizedDot dotColor="#14b8a6" />} activeDot={<CustomizedDot dotColor="#14b8a6" />} />
              <Area type="monotone" dataKey="lost" stroke="#f43f5e" fillOpacity={1} fill="url(#colorLost)" strokeWidth={2.5} dot={<CustomizedDot dotColor="#f43f5e" />} activeDot={<CustomizedDot dotColor="#f43f5e" />} />
              <Legend verticalAlign="bottom" content={
                <div className="flex justify-center items-center gap-6 mt-8">
                  <div className="flex items-center">
                    <span className="w-3 h-3 rounded-sm mr-2 bg-teal-500"></span>
                    <span className="text-sm text-muted-foreground">Closed won</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-3 h-3 rounded-sm mr-2 bg-rose-500"></span>
                    <span className="text-sm text-muted-foreground">Closed lost</span>
                  </div>
                </div>
              } />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default LeadsTrackingChart;
