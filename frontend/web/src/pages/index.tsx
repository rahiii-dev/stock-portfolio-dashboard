import PortfolioHeader from '@/components/portfolio/PortfolioHeader';
import PortfolioTable from '@/components/portfolio/PortfolioTable';

const Index = () => {
    return (
        <div className="min-h-screen bg-background">
            <div className="container mx-auto p-4 lg:p-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-foreground mb-2">Portfolio Dashboard</h1>
                    <p className="text-muted-foreground">
                        Real-time portfolio tracking with sector analysis
                    </p>
                </div>

                <PortfolioHeader loading={false}/>

                <div className="mb-6">
                    <PortfolioTable />
                </div>
            </div>
        </div>
    );
}

export default Index;
