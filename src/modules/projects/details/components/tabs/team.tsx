import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CheckCircle, Mail, Plus, X } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import { TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { teamMembers } from '../../constants';

export const Team = () => {
  return (
    <TabsContent value="team" className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member) => (
          <Card key={member.id} className="group transition-shadow hover:shadow-md">
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={member.avatar || '/placeholder.svg'} alt={member.name} />
                    <AvatarFallback>
                      {member.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h3 className="font-medium">{member.name}</h3>
                    <Badge variant="secondary" className="text-xs">
                      {member.role}
                    </Badge>
                    <div className="text-muted-foreground flex items-center gap-1 text-sm">
                      <Mail className="h-3 w-3" />
                      <span className="text-xs">{member.email}</span>
                    </div>
                    <div className="text-muted-foreground flex items-center gap-1 text-sm">
                      <CheckCircle className="h-3 w-3" />
                      <span className="text-xs">{member.tasksCount} tasks assigned</span>
                    </div>
                  </div>
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-muted-foreground hover:text-destructive h-8 w-8 p-0 opacity-0 transition-opacity group-hover:opacity-100"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Add Team Member Card */}
        <Card className="hover:border-primary/50 cursor-pointer border-2 border-dashed transition-colors">
          <CardContent className="flex h-full min-h-[140px] items-center justify-center p-4">
            <div className="space-y-2 text-center">
              <div className="bg-primary/10 mx-auto flex h-10 w-10 items-center justify-center rounded-full">
                <Plus className="text-primary h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium">Add Team Member</h3>
                <p className="text-muted-foreground text-sm">Invite someone to join</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </TabsContent>
  );
};
