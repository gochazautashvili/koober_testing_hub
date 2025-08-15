import { ArrowUpDown } from 'lucide-react';

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { getRoleColor, getStatusColor } from '@/helpers/utils';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
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

export const ListView = () => {
  return (
    <Card>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12"></TableHead>
            <TableHead>
              <Button variant="ghost" className="h-auto p-0 font-medium">
                Name <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead className="text-center">Projects</TableHead>
            <TableHead className="text-center">Tasks</TableHead>
            <TableHead>Last Active</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {teamMembers.map((member) => (
            <TableRow key={member.id} className="hover:bg-muted/50">
              <TableCell>
                <div className="relative">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={member.avatar || '/placeholder.svg'} />
                    <AvatarFallback className="text-xs">{member.initials}</AvatarFallback>
                  </Avatar>
                  <div
                    className={`border-background absolute -right-0.5 -bottom-0.5 h-3 w-3 rounded-full border ${
                      member.isOnline ? 'bg-green-500' : 'bg-gray-400'
                    }`}
                  />
                </div>
              </TableCell>

              <TableCell>
                <div>
                  <div className="font-medium">{member.name}</div>
                  <div className="text-muted-foreground text-sm">{member.department}</div>
                </div>
              </TableCell>

              <TableCell className="text-muted-foreground">{member.email}</TableCell>

              <TableCell>
                <div className="flex items-center gap-2">
                  <Badge variant={getRoleColor(member.role)} className="text-xs">
                    {member.role}
                  </Badge>
                  <Badge variant={getStatusColor(member.status)} className="text-xs">
                    {member.status}
                  </Badge>
                </div>
              </TableCell>

              <TableCell className="text-center">
                <span className="font-medium">{member.stats.projectsActive}</span>
              </TableCell>

              <TableCell className="text-center">
                <div className="text-sm">
                  <span className="font-medium">{member.stats.tasksCompleted}</span>
                  <span className="text-muted-foreground">/{member.stats.tasksAssigned}</span>
                </div>
              </TableCell>

              <TableCell className="text-muted-foreground text-sm">{member.lastActive}</TableCell>

              <TableCell className="text-right">
                <ActionsButton />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};
