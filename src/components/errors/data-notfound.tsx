import { RefreshCw, LucideIcon, FileX } from 'lucide-react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface IProps {
  title?: string;
  Icon?: LucideIcon;
  className?: string;
  description?: string;
  onRefresh?: () => void;
}

export const DataNotFoundCard = (props: IProps) => {
  const {
    onRefresh,
    className,
    Icon = FileX,
    title = 'განა რას ეძებ ისეთს რო ვერ მოიძებნა?',
    description = 'სამწუხაროდ ვერაფერი მოიძებნა, სცადეთ თავიდან ან შეეშვი რათგინდა.',
  } = props;

  return (
    <Card className={`mx-auto w-full text-center ${className}`}>
      <CardHeader>
        <div className="bg-muted mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
          <Icon className="text-muted-foreground h-8 w-8" />
        </div>
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
        <CardDescription className="text-muted-foreground text-sm">{description}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-3">
        {onRefresh && (
          <Button onClick={onRefresh} variant="outline" className="w-full">
            <RefreshCw className="mr-2 h-4 w-4" />
            Try Again
          </Button>
        )}
      </CardContent>
    </Card>
  );
};
