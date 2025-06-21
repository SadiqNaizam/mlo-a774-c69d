import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { cn } from '@/lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface SourceLegendItem {
  name: string;
  value: number;
  percentage: number;
  color: string;
}

const legendData: SourceLegendItem[] = [
  { name: 'Clutch', value: 3000, percentage: 50, color: 'bg-red-400' },
  { name: 'Behance', value: 1000, percentage: 40, color: 'bg-yellow-400' },
  { name: 'Instagram', value: 1000, percentage: 10, color: 'bg-teal-500' },
  { name: 'Dribbble', value: 1000, percentage: 10, color: 'bg-green-300' },
];

const pieChartData = [
  { name: 'Clutch', value: 50, color: '#f87171' },
  { name: 'Behance', value: 40, color: '#facc15' }, 
  { name: 'Instagram', value: 10, color: '#14b8a6' }, 
  { name: 'Dribbble', value: 10, color: '#86efac' }, 
  { name: 'Organic', value: 60, color: '#38bdf8' }, // Unlisted segment to match visual
];

const SourceChart: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sources</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-8 items-center">
        <div className="w-full h-48">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieChartData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                dataKey="value"
                strokeWidth={2}
                stroke="hsl(var(--card))"
              >
                {pieChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div>
            <ul className="space-y-4">
              {legendData.map((item) => (
                <li key={item.name} className="grid grid-cols-[1fr_auto_auto] gap-4 items-center text-sm">
                  <div className="flex items-center">
                    <span className={cn('w-2.5 h-2.5 rounded-full mr-3 shrink-0', item.color)} />
                    <span className="text-foreground">{item.name}</span>
                  </div>
                  <span className="text-muted-foreground font-medium">{`$ ${item.value}`}</span>
                  <span className="text-muted-foreground w-12 text-right font-medium">{`${item.percentage}%`}</span>
                </li>
              ))}
            </ul>
             <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                     <div className="mt-4 ml-auto w-fit">
                        <div className="text-xs text-white bg-slate-800 py-1 px-3 rounded-md cursor-help">
                            from leads total
                        </div>
                     </div>
                  </TooltipTrigger>
                  <TooltipContent className="bg-slate-800 text-white border-none">
                    <p>Percentage from total leads value</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
        </div>
      </CardContent>
    </Card>
  );
};

export default SourceChart;
