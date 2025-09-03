import type { Stock } from "@/types/stock"
import { createColumnHelper } from "@tanstack/react-table"
import { CurrencyCell, GainLossCell, PercentageCell } from "./cells";

const columnHelper = createColumnHelper<Stock>()

export const columns = [

    columnHelper.accessor("sector", {
        header: "Sector",
        enableGrouping: true,
        enableHiding: true,
        cell: () => null,
    }),

    columnHelper.display({
        id: 'particulars',
        header: "Particulars",
        cell: ({ row }) => {
            if (row.getIsGrouped()) {
                const groupingColId = row.groupingColumnId!;
                const sectorLabel = row.getValue<string>(groupingColId);
                return <span className="font-bold text-primary">{(`${sectorLabel} Sector`).toUpperCase()}</span>;
            }
            return row.original.name
        }
    }),

    columnHelper.accessor('quantity', { header: 'Quantity' }),
    columnHelper.accessor('purchasePrice', { header: 'Purchase Price' }),
    columnHelper.accessor('investment', {
        header: 'Investment',
        aggregationFn: 'sum'
    }),
    columnHelper.accessor('portfolioPercentage', { header: 'Portfolio (%)' }),
    columnHelper.accessor('exchange', { header: 'NSE/BSE' }),
    columnHelper.accessor('cmp', { header: 'CMP' }),
    columnHelper.accessor('presentValue', {
        header: 'Present Value',
        aggregationFn: 'sum'
    }),
    columnHelper.accessor('gainLoss', {
        header: 'Gain/Loss',
        aggregationFn: 'sum'
    }),
    columnHelper.accessor('peRatio', { header: 'P/E Ratio' }),
    columnHelper.accessor('latestEarnings', { header: 'Latest Earnings', })
]

const columnFormatters: Record<
  string,
  (value: any, isGrouped: boolean, isVisible: boolean) => React.ReactNode
> = {
  purchasePrice: (val, grouped, visible) =>
    grouped ? (visible ? <CurrencyCell value={val} className="font-bold" /> : null)
             : <CurrencyCell value={val} />,
  investment: (val, grouped, visible) =>
    grouped ? (visible ? <CurrencyCell value={val} className="font-bold" /> : null)
             : <CurrencyCell value={val} />,
  cmp: (val, grouped, visible) =>
    grouped ? (visible ? <CurrencyCell value={val} className="font-bold" /> : null)
             : <CurrencyCell value={val} />,
  presentValue: (val, grouped, visible) =>
    grouped ? (visible ? <CurrencyCell value={val} className="font-bold" /> : null)
             : <CurrencyCell value={val} />,
  latestEarnings: (val, grouped, visible) =>
    grouped ? (visible ? <CurrencyCell value={val} className="font-bold" /> : null)
             : <CurrencyCell value={val} />,

  portfolioPercentage: (val, grouped, visible) =>
    grouped ? (visible ? <PercentageCell value={val} className="font-bold" /> : null)
             : <PercentageCell value={val} />,

  gainLoss: (val, grouped, visible) =>
    grouped ? (visible ? <GainLossCell value={val} className="font-bold" /> : null)
             : <GainLossCell value={val} />,
};

const visibleGroupedRows = new Set(["investment", "presentValue", "gainLoss"]);

export const defaultColumn = {
  cell: ({ getValue, row, column }: any) => {
    const id = column.id;
    const val = getValue();
    const isGrouped = row.getIsGrouped();
    const isVisible = visibleGroupedRows.has(id);

    if (columnFormatters[id]) {
      return columnFormatters[id](val, isGrouped, isVisible);
    }

    if (isGrouped) {
      return isVisible ? <span className="font-bold">{val}</span> : null;
    }

    return val;
  },
};