import { CheckCircle, MessageSquare, Clock } from 'lucide-react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const Activity = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {/* Recent Tasks */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5" />
            Recent Tasks
          </CardTitle>
          <CardDescription>Your latest task activity</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            {
              title: 'Fix login authentication bug',
              project: 'Auth System',
              status: 'completed',
              time: '2 hours ago',
            },
            {
              title: 'Update user dashboard design',
              project: 'UI Redesign',
              status: 'in-progress',
              time: '4 hours ago',
            },
            {
              title: 'Review API documentation',
              project: 'Documentation',
              status: 'completed',
              time: '1 day ago',
            },
            {
              title: 'Implement search functionality',
              project: 'Core Features',
              status: 'in-progress',
              time: '2 days ago',
            },
          ].map((task, index) => (
            <div key={index} className="flex items-center justify-between rounded-lg border p-3">
              <div className="space-y-1">
                <p className="font-medium">{task.title}</p>
                <div className="text-muted-foreground flex items-center gap-2 text-sm">
                  <span>{task.project}</span>
                  <Badge variant={task.status === 'completed' ? 'default' : 'secondary'} className="text-xs">
                    {task.status === 'completed' ? 'Completed' : 'In Progress'}
                  </Badge>
                </div>
              </div>
              <div className="text-muted-foreground flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4" />
                {task.time}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Recent Comments */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5" />
            Recent Comments
          </CardTitle>
          <CardDescription>Your latest comments and discussions</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            {
              comment: 'Great work on the new feature! The implementation looks solid.',
              task: 'User Authentication',
              time: '3 hours ago',
            },
            {
              comment: 'I think we should consider adding validation for edge cases.',
              task: 'Form Validation',
              time: '6 hours ago',
            },
            {
              comment: 'The performance improvements are significant. Nice optimization!',
              task: 'Database Query Optimization',
              time: '1 day ago',
            },
            {
              comment: 'Could we add some unit tests for this functionality?',
              task: 'Payment Integration',
              time: '2 days ago',
            },
          ].map((item, index) => (
            <div key={index} className="space-y-2 rounded-lg border p-3">
              <p className="text-sm">{item.comment}</p>
              <div className="text-muted-foreground flex items-center justify-between text-xs">
                <span className="font-medium">{item.task}</span>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {item.time}
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};
