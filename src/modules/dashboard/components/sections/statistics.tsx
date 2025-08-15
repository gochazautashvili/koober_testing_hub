import { Bug, CheckCircle, Users, FolderOpen, TrendingUp, TrendingDown } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export const Statistics = () => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
          <FolderOpen className="text-muted-foreground h-4 w-4" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">12</div>
          <div className="flex items-center gap-1 text-xs">
            <TrendingUp className="h-3 w-3 text-green-500" />
            <span className="text-green-500">+2</span>
            <span className="text-muted-foreground">from last month</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Open Tasks</CardTitle>
          <CheckCircle className="text-muted-foreground h-4 w-4" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">48</div>
          <div className="mt-2 flex items-center gap-2">
            <div className="flex gap-1">
              <div className="h-2 w-2 rounded-full bg-red-500"></div>
              <div className="h-2 w-2 rounded-full bg-orange-500"></div>
              <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
            </div>
            <span className="text-muted-foreground text-xs">15 critical</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Bugs This Week</CardTitle>
          <Bug className="text-muted-foreground h-4 w-4" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">23</div>
          <div className="flex items-center gap-1 text-xs">
            <TrendingDown className="h-3 w-3 text-green-500" />
            <span className="text-green-500">-5</span>
            <span className="text-muted-foreground">from last week</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Team Members</CardTitle>
          <Users className="text-muted-foreground h-4 w-4" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">24</div>
          <div className="mt-2 flex items-center gap-2">
            <div className="flex -space-x-2">
              <Avatar className="border-background h-6 w-6 border-2">
                <AvatarImage src="/placeholder.svg?height=24&width=24" />
                <AvatarFallback>SC</AvatarFallback>
              </Avatar>
              <Avatar className="border-background h-6 w-6 border-2">
                <AvatarImage src="/placeholder.svg?height=24&width=24" />
                <AvatarFallback>MJ</AvatarFallback>
              </Avatar>
              <Avatar className="border-background h-6 w-6 border-2">
                <AvatarImage src="/placeholder.svg?height=24&width=24" />
                <AvatarFallback>ED</AvatarFallback>
              </Avatar>
              <div className="bg-muted border-background flex h-6 w-6 items-center justify-center rounded-full border-2 text-xs font-medium">
                +21
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
