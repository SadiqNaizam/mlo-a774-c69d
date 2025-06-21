import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from '@/lib/utils';

interface FunnelStage {
  name: string;
  count: number;
  value: number;
  duration: string;
  color: string;
  tooltipText?: string;
}

const funnelData: FunnelStage[] = [
  { name: 'Discovery', count: 200, value: 200, duration: '2 days', color: 'bg-rose-500' },
  { name: 'Qualified', count: 100, value: 100, duration: '2 days', color: 'bg-amber-400' },
  { name: 'In conversation', count: 50, value: 100, duration: '2 days', color: 'bg-slate-700', tooltipText: 'average time on this stage' },
  { name: 'Negotiations', count: 20, value: 50, duration: '8 days', color: 'bg-emerald-500' },
  { name: 'Closed won', count: 20, value: 50, duration: '10 days', color: 'bg-purple-600' },
];

const totalCount = funnelData.reduce((sum, item) => sum + item.count, 0);

const FunnelMetrics: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Funnel count</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline mb-4">
          <span className="text-5xl font-bold">600</span>
          <span className="ml-2 text-muted-foreground">active leads</span>
        </div>
        
        <div className="flex w-full h-2 rounded-full overflow-hidden mb-6 bg-secondary">
          {funnelData.map((stage) => (
            <div
              key={stage.name}
              className={cn(stage.color)}
              style={{ width: `${(stage.count / totalCount) * 100}%` }}
            />
          ))}
        </div>

        <ul className="space-y-4 text-sm">
          {funnelData.map((stage) => (
            <li key={stage.name} className="grid grid-cols-[1fr_auto_auto_auto] gap-4 items-center">
              <div className="flex items-center">
                <span className={cn('w-2.5 h-2.5 rounded-full mr-3 shrink-0', stage.color)} />
                <span className="text-foreground">{stage.name}</span>
              </div>
              <span className="text-right text-muted-foreground w-12">{stage.count}</span>
              <span className="text-right text-muted-foreground w-16">{`$ ${stage.value}`}</span>
              {stage.tooltipText ? (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="text-right text-muted-foreground w-20 cursor-help">{stage.duration}</span>
                    </TooltipTrigger>
                    <TooltipContent className="bg-slate-800 text-white border-none">
                      <p>{stage.tooltipText}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ) : (
                <span className="text-right text-muted-foreground w-20">{stage.duration}</span>
              )}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default FunnelMetrics;
