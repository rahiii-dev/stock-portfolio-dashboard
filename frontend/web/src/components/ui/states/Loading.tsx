import { Loader2 } from 'lucide-react';

const Loading = ({message="Loading..."}: {message?: string}) => {
    return (
        <div className="min-h-screen bg-background flex items-center justify-center">
            <div className="flex items-center space-x-3">
                <Loader2 className="w-6 h-6 animate-spin text-primary" />
                <span className="text-lg text-foreground">{message}</span>
            </div>
        </div>
    );
}

export default Loading;
