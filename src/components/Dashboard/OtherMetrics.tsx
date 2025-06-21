import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Info } from 'lucide-react';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

interface Metric {
    value: string;
    label: string;
    hasInfo?: boolean;
    infoText?: string;
}

const otherMetricsData: Metric[] = [
    { value: '900', label: 'total leads count' },
    { value: '12', label: 'days in average to convert lead' },
    { value: '30', label: 'inactive leads', hasInfo: true, infoText: 'Leads with no activity in the last 30 days.' },
];

const OtherMetrics: React.FC = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Other data</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-3 gap-8">
                    {otherMetricsData.map((metric, index) => (
                        <div key={index}>
                            <p className="text-4xl font-bold text-foreground">{metric.value}</p>
                            <div className="flex items-center mt-1">
                                <p className="text-sm text-muted-foreground whitespace-nowrap">{metric.label}</p>
                                {metric.hasInfo && (
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Info className="h-4 w-4 ml-1.5 text-muted-foreground cursor-pointer shrink-0" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>{metric.infoText}</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};

export default OtherMetrics;
