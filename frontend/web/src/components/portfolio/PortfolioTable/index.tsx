import type { Stock } from "@/types/stock";
import {
    flexRender,
    getCoreRowModel,
    getGroupedRowModel,
    getExpandedRowModel,
    useReactTable,
} from "@tanstack/react-table";
import { Card } from "@/components/ui/card";
import { Fragment, useState } from "react";
import { cn } from "@/lib/utils";
import { columns, defaultColumn } from "./column";

interface PortfolioTableProps {
    stocks: Stock[];
}

const PortfolioTable = ({ stocks }: PortfolioTableProps) => {
    const [grouping, setGrouping] = useState(["sector"]);

    const table = useReactTable({
        data: stocks,
        columns,
        defaultColumn,
        state: {
            grouping,
            columnVisibility: { sector: false }
        },
        onGroupingChange: setGrouping,
        getCoreRowModel: getCoreRowModel(),
        getGroupedRowModel: getGroupedRowModel(),
        getExpandedRowModel: getExpandedRowModel(),
        getRowCanExpand: () => true,
    });

    return (
        <Card className="bg-gradient-card border-border/50">
            <div className="overflow-x-auto">
                <table className="w-full text-sm">
                    <thead>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <tr
                                key={headerGroup.id}
                                className="border-b border-border bg-gradient-surface"
                            >
                                {headerGroup.headers.map((header) => (
                                    <th
                                        key={header.id}
                                        className="px-4 py-4 text-left font-semibold"
                                    >
                                        {flexRender(header.column.columnDef.header, header.getContext())}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody>
                        {table.getRowModel().rows.map((row) => (
                            <Fragment key={row.id}>
                                {row.subRows.map((subRow, index) => (
                                    <tr key={subRow.id}
                                        className={cn(
                                            'hover:bg-muted/50 transition-colors',
                                            index % 2 === 0 ? 'bg-card/50' : 'bg-background/50'
                                        )}>
                                        {subRow.getVisibleCells().map((cell) => (
                                            <td key={cell.id} className="px-4 py-3">
                                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                            </td>
                                        ))}
                                    </tr>
                                ))}

                                <tr className="bg-gradient-surface border-t-2 border-primary/20">
                                    {row.getVisibleCells().map((cell) => (
                                        <td key={cell.id} className="px-4 py-2">
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </td>
                                    ))}
                                </tr>
                            </Fragment>
                        ))}
                    </tbody>
                </table>
            </div>
        </Card>
    );
};

export default PortfolioTable;
