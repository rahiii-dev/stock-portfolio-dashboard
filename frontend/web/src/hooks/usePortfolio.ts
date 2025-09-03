import { getPortfolioStocks } from "@/services/portfolioMockService";
import type { PortfolioData } from "@/types/portfolio";
import type { Stock } from "@/types/stock";
import { REFRESH_INTERVAL } from "@/utils/constants";
import { useCallback, useEffect, useState } from "react";


export const usePortfolio = () => {
    const [data, setData] = useState<PortfolioData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [lastRefresh, setLastRefresh] = useState<Date>(new Date());

    const processStocks = useCallback((stocks: Stock[]): PortfolioData => {
        const totalValue = stocks.reduce((sum, stock) => sum + stock.presentValue, 0);
        const totalGainLoss = stocks.reduce((sum, stock) => sum + stock.gainLoss, 0);

        const gainLossPercentage = totalValue > 0 ? (totalGainLoss / (totalValue - totalGainLoss)) * 100 : 0;

        return {
            stocks,
            totalValue,
            totalGainLoss,
            gainLossPercentage,
        };
    }, []);

    const fetchPortfolio = useCallback(async () => {
        setLoading(true);
        try {
            const response = await getPortfolioStocks();
            setLastRefresh(new Date());
            setData(processStocks(response));
        } catch (error) {
            setError("Failed to fetch portfolio");
        } finally {
            setLoading(false);
        }
    }, []);


    useEffect(() => {
        fetchPortfolio();

        const interval = setInterval(fetchPortfolio, REFRESH_INTERVAL);

        return () => clearInterval(interval);
    }, []);

    return {
        data,
        loading,
        error,
        lastRefresh,
    };
}