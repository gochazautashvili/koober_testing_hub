'use client';
import { Bell, Check, MoreHorizontal, MessageSquare, UserPlus, AlertTriangle, Calendar, FileText } from 'lucide-react';
import { parseAsString, useQueryState } from 'nuqs';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const notifications = [
  {
    id: 1,
    type: 'mention',
    title: 'You were mentioned in a comment',
    message: '@john.doe mentioned you in task "Fix login bug"',
    time: '2 minutes ago',
    read: false,
    avatar: '/placeholder.svg?height=32&width=32',
    user: 'John Doe',
    project: 'Web App',
    icon: MessageSquare,
    color: 'bg-blue-500',
  },
  {
    id: 2,
    type: 'assignment',
    title: 'New task assigned to you',
    message: '"Update user dashboard" has been assigned to you by Sarah Wilson',
    time: '15 minutes ago',
    read: false,
    avatar: '/placeholder.svg?height=32&width=32',
    user: 'Sarah Wilson',
    project: 'Mobile App',
    icon: UserPlus,
    color: 'bg-green-500',
  },
  {
    id: 3,
    type: 'priority',
    title: 'High priority bug reported',
    message: 'Critical bug "Payment processing failure" requires immediate attention',
    time: '1 hour ago',
    read: true,
    avatar: '/placeholder.svg?height=32&width=32',
    user: 'System',
    project: 'E-commerce',
    icon: AlertTriangle,
    color: 'bg-red-500',
  },
  {
    id: 4,
    type: 'deadline',
    title: 'Task deadline approaching',
    message: '"API documentation" is due tomorrow',
    time: '2 hours ago',
    read: true,
    avatar: '/placeholder.svg?height=32&width=32',
    user: 'System',
    project: 'Backend',
    icon: Calendar,
    color: 'bg-orange-500',
  },
  {
    id: 5,
    type: 'comment',
    title: 'New comment on your task',
    message: 'Mike Johnson commented on "Database optimization"',
    time: '3 hours ago',
    read: true,
    avatar: '/placeholder.svg?height=32&width=32',
    user: 'Mike Johnson',
    project: 'Backend',
    icon: MessageSquare,
    color: 'bg-blue-500',
  },
  {
    id: 6,
    type: 'report',
    title: 'Weekly report generated',
    message: 'Your weekly productivity report is ready to view',
    time: '1 day ago',
    read: true,
    avatar: '/placeholder.svg?height=32&width=32',
    user: 'System',
    project: 'Analytics',
    icon: FileText,
    color: 'bg-purple-500',
  },
];

export const NotificationTabs = () => {
  const [filter, setFilter] = useQueryState('category', parseAsString.withDefault('all'));

  return (
    <Tabs value={filter} onValueChange={setFilter} className="w-full">
      <TabsList className="grid w-full grid-cols-6">
        <TabsTrigger value="all">All ({notifications.length})</TabsTrigger>
        <TabsTrigger value="unread">Unread (6)</TabsTrigger>
        <TabsTrigger value="mention">Mentions</TabsTrigger>
        <TabsTrigger value="assignment">Assignments</TabsTrigger>
        <TabsTrigger value="comment">Comments</TabsTrigger>
        <TabsTrigger value="priority">Priority</TabsTrigger>
      </TabsList>

      <TabsContent value={filter} className="mt-6">
        {notifications.length === 0 ? (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-12">
              <Bell className="text-muted-foreground mb-4 h-12 w-12" />
              <h3 className="mb-2 text-lg font-semibold">No notifications</h3>
              <p className="text-muted-foreground text-center">
                {filter === 'unread'
                  ? 'All caught up! No unread notifications.'
                  : `No ${filter === 'all' ? '' : filter} notifications found.`}
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-3">
            {notifications.map((notification) => {
              const IconComponent = notification.icon;
              return (
                <Card
                  key={notification.id}
                  className={`transition-all hover:shadow-md ${!notification.read ? 'border-l-primary bg-muted/30 border-l-4' : ''}`}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div className={`rounded-full p-2 ${notification.color} flex-shrink-0 text-white`}>
                        <IconComponent className="h-4 w-4" />
                      </div>

                      {/* Content */}
                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1">
                            <div className="mb-1 flex items-center gap-2">
                              <h4 className="text-sm font-semibold">{notification.title}</h4>
                              {!notification.read && <div className="bg-primary h-2 w-2 flex-shrink-0 rounded-full" />}
                            </div>
                            <p className="text-muted-foreground mb-2 text-sm">{notification.message}</p>
                            <div className="text-muted-foreground flex items-center gap-3 text-xs">
                              <div className="flex items-center gap-1">
                                <Avatar className="h-4 w-4">
                                  <AvatarImage src={notification.avatar || '/placeholder.svg'} />
                                  <AvatarFallback className="text-xs">
                                    {notification.user
                                      .split(' ')
                                      .map((n) => n[0])
                                      .join('')}
                                  </AvatarFallback>
                                </Avatar>
                                <span>{notification.user}</span>
                              </div>
                              <Badge variant="secondary" className="text-xs">
                                {notification.project}
                              </Badge>
                              <span>{notification.time}</span>
                            </div>
                          </div>

                          {/* Actions */}
                          <div className="flex flex-shrink-0 items-center gap-1">
                            {!notification.read && (
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                <Check className="h-4 w-4" />
                              </Button>
                            )}

                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                {!notification.read && (
                                  <DropdownMenuItem>
                                    <Check className="mr-2 h-4 w-4" />
                                    Mark as read
                                  </DropdownMenuItem>
                                )}
                                <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </TabsContent>
    </Tabs>
  );
};
