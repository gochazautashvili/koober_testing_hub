import { TrendingUp, TrendingDown, Bug, Clock, Target, Zap } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export const Metrics = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Bugs</CardTitle>
          <Bug className="text-muted-foreground h-4 w-4" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">127</div>
          <div className="text-muted-foreground flex items-center text-xs">
            <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
            +12% from last month
          </div>
          <Progress value={78} className="mt-2 h-1" />
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Avg Resolution Time</CardTitle>
          <Clock className="text-muted-foreground h-4 w-4" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">4.2d</div>
          <div className="text-muted-foreground flex items-center text-xs">
            <TrendingDown className="mr-1 h-3 w-3 text-green-500" />
            -8% from last month
          </div>
          <Progress value={65} className="mt-2 h-1" />
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Team Velocity</CardTitle>
          <Zap className="text-muted-foreground h-4 w-4" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">8.5</div>
          <div className="text-muted-foreground flex items-center text-xs">
            <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
            +15% from last month
          </div>
          <Progress value={85} className="mt-2 h-1" />
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Project Health</CardTitle>
          <Target className="text-muted-foreground h-4 w-4" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">82%</div>
          <div className="text-muted-foreground flex items-center text-xs">
            <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
            +3% from last month
          </div>
          <Progress value={82} className="mt-2 h-1" />
        </CardContent>
      </Card>
    </div>
  );
};
