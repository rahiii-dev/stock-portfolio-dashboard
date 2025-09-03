import { AlertTriangle } from "lucide-react";
import { Alert, AlertDescription } from "../alert";

const Error = ({ message }: { message?: string }) => (
  <div className="min-h-screen bg-background flex items-center justify-center p-4">
    <Alert className="max-w-md bg-gradient-card border-destructive/50">
      <AlertTriangle className="w-4 h-4 shrink-0" />
      <AlertDescription className="text-foreground">{message}</AlertDescription>
    </Alert>
  </div>
);

export default Error;
