import { Mail, MapPin, Activity } from 'lucide-react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

import { getRoleColor, getStatusColor } from '@/helpers/utils';
import { ActionsButton } from './actions';

const teamMembers = [
  {
    id: 1,
    name: 'Sarah Chen',
    email: 'sarah.chen@company.com',
    phone: '+1 (555) 123-4567',
    role: 'Senior Frontend Developer',
    department: 'Engineering',
    location: 'San Francisco, CA',
    avatar: '/placeholder.svg?height=64&width=64',
    initials: 'SC',
    status: 'Active',
    isOnline: true,
    joinDate: '2022-03-15',
    lastActive: '2 hours ago',
    projects: ['E-commerce Platform', 'Mobile App Redesign'],
    skills: ['React', 'TypeScript', 'CSS', 'UI/UX'],
    stats: {
      tasksCompleted: 45,
      tasksAssigned: 52,
      bugsResolved: 23,
      projectsActive: 2,
      performance: 92,
    },
  },
  {
    id: 2,
    name: 'Mike Johnson',
    email: 'mike.johnson@company.com',
    phone: '+1 (555) 234-5678',
    role: 'Backend Developer',
    department: 'Engineering',
    location: 'New York, NY',
    avatar: '/placeholder.svg?height=64&width=64',
    initials: 'MJ',
    status: 'Active',
    isOnline: true,
    joinDate: '2021-08-20',
    lastActive: '1 hour ago',
    projects: ['API Integration', 'User Dashboard'],
    skills: ['Node.js', 'Python', 'PostgreSQL', 'AWS'],
    stats: {
      tasksCompleted: 38,
      tasksAssigned: 45,
      bugsResolved: 31,
      projectsActive: 2,
      performance: 88,
    },
  },
  {
    id: 3,
    name: 'Alex Kim',
    email: 'alex.kim@company.com',
    phone: '+1 (555) 345-6789',
    role: 'Full Stack Developer',
    department: 'Engineering',
    location: 'Austin, TX',
    avatar: '/placeholder.svg?height=64&width=64',
    initials: 'AK',
    status: 'Active',
    isOnline: false,
    joinDate: '2023-01-10',
    lastActive: '30 minutes ago',
    projects: ['E-commerce Platform'],
    skills: ['React', 'Node.js', 'MongoDB', 'Docker'],
    stats: {
      tasksCompleted: 29,
      tasksAssigned: 35,
      bugsResolved: 18,
      projectsActive: 1,
      performance: 85,
    },
  },
  {
    id: 4,
    name: 'Emma Davis',
    email: 'emma.davis@company.com',
    phone: '+1 (555) 456-7890',
    role: 'DevOps Engineer',
    department: 'Engineering',
    location: 'Seattle, WA',
    avatar: '/placeholder.svg?height=64&width=64',
    initials: 'ED',
    status: 'Active',
    isOnline: true,
    joinDate: '2022-11-05',
    lastActive: '4 hours ago',
    projects: ['API Integration', 'Security Audit'],
    skills: ['AWS', 'Kubernetes', 'Terraform', 'CI/CD'],
    stats: {
      tasksCompleted: 33,
      tasksAssigned: 40,
      bugsResolved: 15,
      projectsActive: 2,
      performance: 90,
    },
  },
  {
    id: 5,
    name: 'John Doe',
    email: 'john.doe@company.com',
    phone: '+1 (555) 567-8901',
    role: 'Product Manager',
    department: 'Product',
    location: 'Los Angeles, CA',
    avatar: '/placeholder.svg?height=64&width=64',
    initials: 'JD',
    status: 'Active',
    isOnline: false,
    joinDate: '2021-05-12',
    lastActive: '1 day ago',
    projects: ['Mobile App Redesign', 'User Dashboard'],
    skills: ['Product Strategy', 'Analytics', 'Agile', 'Figma'],
    stats: {
      tasksCompleted: 52,
      tasksAssigned: 58,
      bugsResolved: 8,
      projectsActive: 2,
      performance: 94,
    },
  },
  {
    id: 6,
    name: 'Lisa Wang',
    email: 'lisa.wang@company.com',
    phone: '+1 (555) 678-9012',
    role: 'QA Engineer',
    department: 'Quality Assurance',
    location: 'Chicago, IL',
    avatar: '/placeholder.svg?height=64&width=64',
    initials: 'LW',
    status: 'On Leave',
    isOnline: false,
    joinDate: '2022-07-18',
    lastActive: '1 week ago',
    projects: ['E-commerce Platform'],
    skills: ['Manual Testing', 'Automation', 'Selenium', 'Jest'],
    stats: {
      tasksCompleted: 41,
      tasksAssigned: 48,
      bugsResolved: 67,
      projectsActive: 1,
      performance: 87,
    },
  },
];

export const GridView = () => {
  return (
    <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
      {teamMembers.map((member) => (
        <Card key={member.id} className="group transition-all duration-200 hover:shadow-lg">
          <CardHeader className="pb-3">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={member.avatar || '/placeholder.svg'} />
                    <AvatarFallback>{member.initials}</AvatarFallback>
                  </Avatar>
                  <div
                    className={`border-background absolute -right-1 -bottom-1 h-4 w-4 rounded-full border-2 ${
                      member.isOnline ? 'bg-green-500' : 'bg-gray-400'
                    }`}
                  />
                </div>
                <div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="text-sm">{member.role}</CardDescription>
                </div>
              </div>

              <ActionsButton />
            </div>

            <div className="mt-2 flex gap-2">
              <Badge variant={getStatusColor(member.status)}>{member.status}</Badge>
              <Badge variant={getRoleColor(member.role)}>{member.department}</Badge>
            </div>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="space-y-2 text-sm">
              <div className="text-muted-foreground flex items-center gap-2">
                <Mail className="h-3 w-3" />
                <span className="truncate">{member.email}</span>
              </div>
              <div className="text-muted-foreground flex items-center gap-2">
                <MapPin className="h-3 w-3" />
                <span>{member.location}</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Performance</span>
                <span className="font-medium">{member.stats.performance}%</span>
              </div>
              <Progress value={member.stats.performance} className="h-2" />
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="space-y-1">
                <div className="text-lg font-semibold">{member.stats.projectsActive}</div>
                <p className="text-muted-foreground text-xs">Projects</p>
              </div>
              <div className="space-y-1">
                <div className="text-lg font-semibold">{member.stats.tasksAssigned}</div>
                <p className="text-muted-foreground text-xs">Tasks</p>
              </div>
              <div className="space-y-1">
                <div className="text-lg font-semibold">{member.stats.bugsResolved}</div>
                <p className="text-muted-foreground text-xs">Bugs</p>
              </div>
            </div>

            <div className="text-muted-foreground flex items-center justify-between border-t pt-2 text-xs">
              <span>Last active {member.lastActive}</span>
              <div className="flex items-center gap-1">
                <Activity className="h-3 w-3" />
                <span>{member.isOnline ? 'Online' : 'Offline'}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
