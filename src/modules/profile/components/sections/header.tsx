import { Camera, MapPin, Edit, Mail, Calendar } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const Header = () => {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex flex-col gap-6 md:flex-row">
          {/* Avatar Section */}
          <div className="flex flex-col items-center space-y-4">
            <div className="relative">
              <Avatar className="h-32 w-32">
                <AvatarImage src="/placeholder.svg?height=128&width=128" />
                <AvatarFallback className="text-2xl">JD</AvatarFallback>
              </Avatar>
              <Button
                size="sm"
                variant="outline"
                className="absolute -right-2 -bottom-2 h-10 w-10 rounded-full bg-transparent p-0"
              >
                <Camera className="h-4 w-4" />
              </Button>
            </div>
            <Button variant="outline" className="w-full bg-transparent">
              <Edit className="mr-2 h-4 w-4" />
              Edit Profile
            </Button>
          </div>

          {/* Profile Info */}
          <div className="flex-1 space-y-4">
            <div>
              <h1 className="text-3xl font-bold">John Doe</h1>
              <p className="text-muted-foreground text-xl">Senior Product Manager</p>
            </div>

            <div className="text-muted-foreground flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                john.doe@company.com
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                San Francisco, CA
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Member since March 2023
              </div>
            </div>

            <p className="text-muted-foreground">
              Experienced product manager with a passion for building user-centric solutions. Leading cross-functional
              teams to deliver high-quality software products.
            </p>

            <div className="flex gap-2">
              <Badge variant="secondary">Product Management</Badge>
              <Badge variant="secondary">Agile</Badge>
              <Badge variant="secondary">User Experience</Badge>
              <Badge variant="secondary">Team Leadership</Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
