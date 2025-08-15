import { Bug, CheckCircle, ArrowRight, GitCommit, MessageSquare, UserPlus } from 'lucide-react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const recentActivities = [
  {
    id: 1,
    user: { name: 'Sarah Chen', avatar: '/placeholder.svg?height=32&width=32' },
    action: 'reported a critical bug in',
    target: 'Login System',
    time: '2 minutes ago',
    type: 'bug',
    icon: Bug,
    color: 'text-red-500',
  },
  {
    id: 2,
    user: { name: 'Mike Johnson', avatar: '/placeholder.svg?height=32&width=32' },
    action: 'completed task',
    target: 'API Integration',
    time: '15 minutes ago',
    type: 'task',
    icon: CheckCircle,
    color: 'text-green-500',
  },
  {
    id: 3,
    user: { name: 'Emma Davis', avatar: '/placeholder.svg?height=32&width=32' },
    action: 'commented on',
    target: 'Dashboard Redesign',
    time: '1 hour ago',
    type: 'comment',
    icon: MessageSquare,
    color: 'text-blue-500',
  },
  {
    id: 4,
    user: { name: 'Alex Kim', avatar: '/placeholder.svg?height=32&width=32' },
    action: 'joined project',
    target: 'Mobile App',
    time: '2 hours ago',
    type: 'join',
    icon: UserPlus,
    color: 'text-purple-500',
  },
  {
    id: 5,
    user: { name: 'David Wilson', avatar: '/placeholder.svg?height=32&width=32' },
    action: 'pushed commits to',
    target: 'Feature Branch',
    time: '3 hours ago',
    type: 'commit',
    icon: GitCommit,
    color: 'text-orange-500',
  },
];

const kanbanColumns = [
  {
    title: 'To Do',
    count: 12,
    color: 'bg-gray-100 dark:bg-gray-800',
    tasks: [
      { id: 1, title: 'Fix login validation', priority: 'High' },
      { id: 2, title: 'Update documentation', priority: 'Low' },
      { id: 3, title: 'Review API endpoints', priority: 'Medium' },
    ],
  },
  {
    title: 'In Progress',
    count: 8,
    color: 'bg-blue-50 dark:bg-blue-900/20',
    tasks: [
      { id: 4, title: 'Dashboard performance', priority: 'Critical' },
      { id: 5, title: 'Mobile responsive fixes', priority: 'High' },
    ],
  },
  {
    title: 'Review',
    count: 5,
    color: 'bg-yellow-50 dark:bg-yellow-900/20',
    tasks: [
      { id: 6, title: 'Code review needed', priority: 'Medium' },
      { id: 7, title: 'Testing phase', priority: 'High' },
    ],
  },
  {
    title: 'Done',
    count: 23,
    color: 'bg-green-50 dark:bg-green-900/20',
    tasks: [
      { id: 8, title: 'User authentication', priority: 'High' },
      { id: 9, title: 'Database optimization', priority: 'Medium' },
    ],
  },
];

export const MainContent = () => {
  return (
    <div className="grid gap-6 2xl:grid-cols-3">
      {/* Recent Activity Feed */}
      <Card className="2xl:col-span-1">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Recent Activity</CardTitle>
            <Button variant="ghost" size="sm">
              View all
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {recentActivities.map((activity) => {
            const IconComponent = activity.icon;
            return (
              <div key={activity.id} className="flex items-start gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={activity.user.avatar || '/placeholder.svg'} />
                  <AvatarFallback>
                    {activity.user.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-2">
                    <IconComponent className={`h-4 w-4 ${activity.color}`} />
                    <p className="text-sm">
                      <span className="font-medium">{activity.user.name}</span> {activity.action}{' '}
                      <span className="font-medium">{activity.target}</span>
                    </p>
                  </div>
                  <p className="text-muted-foreground text-xs">{activity.time}</p>
                </div>
              </div>
            );
          })}
        </CardContent>
      </Card>

      {/* Task Overview - Mini Kanban */}
      <Card className="2xl:col-span-2">
        <CardHeader>
          <CardTitle>Task Overview</CardTitle>
          <CardDescription>Current task distribution across workflow stages</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {kanbanColumns.map((column) => (
              <div key={column.title} className={`${column.color} rounded-lg p-4`}>
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-sm font-medium">{column.title}</h3>
                  <Badge variant="secondary" className="text-xs">
                    {column.count}
                  </Badge>
                </div>
                <div className="space-y-2">
                  {column.tasks.slice(0, 2).map((task) => (
                    <div
                      key={task.id}
                      className="bg-background cursor-pointer rounded border p-2 shadow-sm transition-shadow hover:shadow-md"
                    >
                      <p className="mb-1 text-xs font-medium">{task.title}</p>
                      <Badge
                        variant={
                          task.priority === 'Critical'
                            ? 'destructive'
                            : task.priority === 'High'
                              ? 'default'
                              : task.priority === 'Medium'
                                ? 'secondary'
                                : 'outline'
                        }
                        className="text-xs"
                      >
                        {task.priority}
                      </Badge>
                    </div>
                  ))}
                  {column.tasks.length > 2 && (
                    <div className="text-muted-foreground py-1 text-center text-xs">
                      +{column.tasks.length - 2} more
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
