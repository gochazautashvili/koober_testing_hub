import { AlertCircle, RefreshCw } from 'lucide-react';

import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import { Button } from '../ui/button';
import { cn } from '@/library/utils';

interface IProps {
  error?: Error;
  title?: string;
  message?: string;
  className?: string;
  onRetry?: () => void;
}

export const ErrorAlert = ({
  error,
  onRetry,
  className,
  title = 'Failed to load data',
  message = 'Something went wrong while fetching the data. Please try again.',
}: IProps) => {
  return (
    <Alert variant="destructive" className={cn('w-full', className)}>
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription className="mt-2 space-y-3">
        <p>{error?.message || message}</p>

        {onRetry && (
          <Button variant="outline" size="sm" onClick={onRetry} className="mt-2">
            <RefreshCw className="mr-2 h-4 w-4" />
            Try Again
          </Button>
        )}
      </AlertDescription>
    </Alert>
  );
};
