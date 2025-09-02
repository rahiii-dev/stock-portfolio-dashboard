import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from "@/lib/utils";
import { DollarSign, RefreshCw, TrendingDown, TrendingUp } from "lucide-react";

interface PortfolioHeaderProps {
    loading?: boolean;
}

const PortfolioHeader = ({loading}: PortfolioHeaderProps) => {
    const data = {
        totalGainLoss: 15000
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <Card className="bg-gradient-card border-border/50 p-6">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-muted-foreground text-sm">Total Portfolio Value</p>
                        <p className="text-2xl font-bold text-foreground">Rs. 120000</p>
                    </div>
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <DollarSign className="w-6 h-6" />
                    </div>
                </div>
            </Card>

            <Card className="bg-gradient-card border-border/50 p-6">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-muted-foreground text-sm">Total Gain/Loss</p>
                        <p className={cn(
                            'text-2xl font-bold',
                            data.totalGainLoss >= 0 ? 'text-profit' : 'text-loss'
                        )}>
                            {data.totalGainLoss >= 0 ? '+' : ''}{data.totalGainLoss}
                        </p>
                        <p className={cn(
                            'text-sm',
                            data.totalGainLoss >= 0 ? 'text-profit' : 'text-loss'
                        )}>
                            {data.totalGainLoss >= 0 ? '+' : ''}{10.3}%
                        </p>
                    </div>
                    <div className={cn(
                        'w-12 h-12 rounded-lg flex items-center justify-center',
                        data.totalGainLoss >= 0 ? 'bg-profit/20' : 'bg-loss/20'
                    )}>
                        {data.totalGainLoss >= 0 ? (
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
                        <p className="text-lg font-semibold text-foreground">1 min ago</p>
                        <div className="flex items-center space-x-2 mt-1">
                            <Badge variant={loading ? "secondary" : "outline"} className="text-xs">
                                <RefreshCw className={cn(
                                    'w-3 h-3 mr-1',
                                    loading && 'animate-spin'
                                )} />
                                {loading ? 'Updating...' : 'Auto-refresh: 15s'}
                            </Badge>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
}

export default PortfolioHeader;
