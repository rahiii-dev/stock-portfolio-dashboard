import PortfolioHeader from '@/components/portfolio/PortfolioHeader';
import PortfolioTable from '@/components/portfolio/PortfolioTable';
import Empty from '@/components/ui/states/Empty';
import Error from '@/components/ui/states/Error';
import Loading from '@/components/ui/states/Loading';
import { usePortfolio } from '@/hooks/usePortfolio';

const Index = () => {
    const { data, loading, error, lastRefresh } = usePortfolio();

    if (loading && !data) return <Loading message='Loading portfolio data...' />

    if (error && !data) return <Error message={error} />

    return (
        <div className="min-h-screen bg-background">
            <div className="container mx-auto p-4 lg:p-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-foreground mb-2">Portfolio Dashboard</h1>
                    <p className="text-muted-foreground">
                        Real-time portfolio tracking with sector analysis
                    </p>
                </div>

                {!data ? (
                    <Empty message='No portfolio data available' />
                ) : (
                    <>
                        <PortfolioHeader loading={loading} data={data!} lastUpdated={lastRefresh} />

                        <div className="mb-6">
                            <PortfolioTable stocks={data.stocks} />
                        </div>
                    </>

                )}
            </div>
        </div>
    );
}

export default Index;
