import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { IndianRupee, RefreshCw, TrendingDown, TrendingUp } from "lucide-react";
import { formatCurrency, formatPercentage, formatTime } from '@/utils/helpers';
import type { PortfolioData } from '@/types/portfolio';
import { cn } from "@/lib/utils";
import { REFRESH_INTERVAL } from '@/utils/constants';

interface PortfolioHeaderProps {
    loading?: boolean;
    data: PortfolioData;
    lastUpdated: Date;
}


const PortfolioHeader = ({loading, data, lastUpdated}: PortfolioHeaderProps) => {
    const isGain = data.totalGainLoss >= 0;

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <Card className="bg-gradient-card border-border/50 p-6">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-muted-foreground text-sm">Total Portfolio Value</p>
                        <p className="text-2xl font-bold text-foreground">{formatCurrency(data.totalValue)}</p>
                    </div>
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <IndianRupee className="w-6 h-6" />
                    </div>
                </div>
            </Card>

            <Card className="bg-gradient-card border-border/50 p-6">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-muted-foreground text-sm">Total Gain/Loss</p>
                        <p className={cn(
                            'text-2xl font-bold',
                            isGain ? 'text-profit' : 'text-loss'
                        )}>
                            {isGain ? '+' : ''}{formatCurrency(data.totalGainLoss)}
                        </p>
                        <p className={cn(
                            'text-sm',
                            isGain ? 'text-profit' : 'text-loss'
                        )}>
                            {isGain ? '+' : ''}{formatPercentage(data.gainLossPercentage)}
                        </p>
                    </div>
                    <div className={cn(
                        'w-12 h-12 rounded-lg flex items-center justify-center',
                        isGain ? 'bg-profit/20' : 'bg-loss/20'
                    )}>
                        {isGain ? (
                            <TrendingUp className="w-6 h-6 text-profit" />
                        ) : (
                            <TrendingDown className="w-6 h-6 text-loss" />
                        )}
                    </div>
                </div>
            </Card>

            <Card className="bg-gradient-card border-border/50 p-6">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-muted-foreground text-sm">Last Updated</p>
                        <p className="text-lg font-semibold text-foreground">{formatTime(lastUpdated)}</p>
                        <div className="flex items-center space-x-2 mt-1">
                            <Badge variant={loading ? "secondary" : "outline"} className="text-xs">
                                <RefreshCw className={cn(
                                    'w-3 h-3 mr-1',
                                    loading && 'animate-spin'
                                )} />
                                {loading ? 'Updating...' : `Auto-refresh: ${REFRESH_INTERVAL / 1000}s`}
                            </Badge>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
}

export default PortfolioHeader;
