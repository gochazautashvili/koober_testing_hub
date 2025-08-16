import { Bug, CheckCircle, FolderOpen, Zap } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';

export const Stats = () => {
  return (
    <div className="grid gap-4 md:grid-cols-4">
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-8 w-8 text-green-600" />
            <div>
              <p className="text-2xl font-bold">127</p>
              <p className="text-muted-foreground text-sm">Tasks Completed</p>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center space-x-2">
            <Bug className="h-8 w-8 text-red-600" />
            <div>
              <p className="text-2xl font-bold">43</p>
              <p className="text-muted-foreground text-sm">Bugs Reported</p>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center space-x-2">
            <FolderOpen className="h-8 w-8 text-blue-600" />
            <div>
              <p className="text-2xl font-bold">8</p>
              <p className="text-muted-foreground text-sm">Active Projects</p>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center space-x-2">
            <Zap className="h-8 w-8 text-yellow-600" />
            <div>
              <p className="text-2xl font-bold">15</p>
              <p className="text-muted-foreground text-sm">Day Streak</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
