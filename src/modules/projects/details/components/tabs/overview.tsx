import { AlertTriangle, CheckCircle } from 'lucide-react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { activities, project, stats, teamMembers } from '../../constants';
import { TabsContent } from '@/components/ui/tabs';
import { getHealthColor } from '@/helpers/utils';

export const Overview = () => {
  return (
    <TabsContent value="overview" className="space-y-6">
      {/* Statistics Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p
                className={`text-xs ${stat.trend === 'up' ? 'text-green-600' : stat.trend === 'down' ? 'text-red-600' : 'text-muted-foreground'}`}
              >
                {stat.change} from last week
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Activity Timeline */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest project updates and changes</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {activities.map((activity) => (
              <div key={activity.id} className="flex items-start gap-3">
                <div
                  className={`mt-2 h-2 w-2 rounded-full ${
                    activity.type === 'completed'
                      ? 'bg-green-500'
                      : activity.type === 'bug'
                        ? 'bg-red-500'
                        : activity.type === 'updated'
                          ? 'bg-blue-500'
                          : 'bg-gray-500'
                  }`}
                />
                <div className="flex-1 space-y-1">
                  <p className="text-sm">
                    <span className="font-medium">{activity.user}</span> {activity.action}
                    {activity.target && <span className="font-medium"> {activity.target}</span>}
                  </p>
                  <p className="text-muted-foreground text-xs">{activity.time}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Project Health & Team */}
        <div className="space-y-6">
          {/* Project Health */}
          <Card>
            <CardHeader>
              <CardTitle>Project Health</CardTitle>
            </CardHeader>
            <CardContent>
              <div
                className={`inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium ${getHealthColor(project.health)}`}
              >
                {project.health === 'Good' && <CheckCircle className="mr-2 h-4 w-4" />}
                {project.health === 'At Risk' && <AlertTriangle className="mr-2 h-4 w-4" />}
                {project.health === 'Critical' && <AlertTriangle className="mr-2 h-4 w-4" />}
                {project.health}
              </div>
              <p className="text-muted-foreground mt-2 text-sm">
                Project is on track with good progress and team collaboration.
              </p>
            </CardContent>
          </Card>

          {/* Team Members Preview */}
          <Card>
            <CardHeader>
              <CardTitle>Team Members</CardTitle>
              <CardDescription>{teamMembers.length} members</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex -space-x-2">
                {teamMembers.slice(0, 6).map((member) => (
                  <Avatar key={member.id} className="border-background border-2">
                    <AvatarImage src={member.avatar || '/placeholder.svg'} alt={member.name} />
                    <AvatarFallback>
                      {member.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </AvatarFallback>
                  </Avatar>
                ))}
                {teamMembers.length > 6 && (
                  <div className="bg-muted border-background flex h-10 w-10 items-center justify-center rounded-full border-2 text-xs font-medium">
                    +{teamMembers.length - 6}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </TabsContent>
  );
};
