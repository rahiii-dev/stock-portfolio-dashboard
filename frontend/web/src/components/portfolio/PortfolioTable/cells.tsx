import { cn } from "@/lib/utils";
import { formatCurrency, formatPercentage } from "@/utils/helpers";

interface BaseCellProps {
    value: number;
    className?: string;
}

export const GainLossCell = ({ value }: BaseCellProps) => (
  <span className={cn(
    'font-semibold',
    value >= 0 ? 'text-profit' : 'text-loss'
  )}>
    {value >= 0 ? '+' : ''}{formatPercentage(value)}
  </span>
);

export const CurrencyCell = ({ value, className }: BaseCellProps) => (
  <span className={cn(className)}>{formatCurrency(value)}</span>
);

export const PercentageCell = ({ value, className }: BaseCellProps) => (
  <span className={cn(className)}>{formatPercentage(value)}</span>
);