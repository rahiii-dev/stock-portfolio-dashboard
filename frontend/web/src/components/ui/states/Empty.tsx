const Empty = ({
    message = "No data available"
}: { message?: string }) => {
    return (
        <div className="text-center py-10">
            <p className="text-muted-foreground">{message}</p>
        </div>
    );
}

export default Empty;
