'use client';
import { Bar, BarChart, Cell, Pie, PieChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { BarChart3, PieChartIcon } from 'lucide-react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';

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

const taskChartData = teamMembers.map((member) => ({
  name: member.name.split(' ')[0],
  tasks: member.stats.tasksAssigned,
  completed: member.stats.tasksCompleted,
}));

const workloadData = [
  { name: 'Frontend', value: 35, color: '#8884d8' },
  { name: 'Backend', value: 30, color: '#82ca9d' },
  { name: 'DevOps', value: 20, color: '#ffc658' },
  { name: 'QA', value: 15, color: '#ff7c7c' },
];

export const Analytics = () => {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
      {/* Tasks per Member Chart */}
      <Card className="col-span-1 lg:col-span-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5" />
            Tasks per Member
          </CardTitle>
          <CardDescription>Task assignment and completion overview</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              tasks: {
                label: 'Assigned',
                color: 'hsl(var(--chart-1))',
              },
              completed: {
                label: 'Completed',
                color: 'hsl(var(--chart-2))',
              },
            }}
          >
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={taskChartData}>
                <XAxis dataKey="name" tick={{ fontSize: 11 }} angle={-45} textAnchor="end" height={60} />
                <YAxis tick={{ fontSize: 11 }} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="tasks" fill="var(--color-tasks)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="completed" fill="var(--color-completed)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Workload Distribution Chart */}
      <Card className="col-span-1">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <PieChartIcon className="h-5 w-5" />
            Workload Distribution
          </CardTitle>
          <CardDescription>Team workload by department</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              frontend: {
                label: 'Frontend',
                color: '#8884d8',
              },
              backend: {
                label: 'Backend',
                color: '#82ca9d',
              },
              devops: {
                label: 'DevOps',
                color: '#ffc658',
              },
              qa: {
                label: 'QA',
                color: '#ff7c7c',
              },
            }}
          >
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={workloadData}
                  outerRadius="80%"
                  innerRadius="40%"
                  paddingAngle={5}
                  dataKey="value"
                  cx="50%"
                  cy="50%"
                >
                  {workloadData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <ChartTooltip content={<ChartTooltipContent />} />
              </PieChart>
            </ResponsiveContainer>
          </ChartContainer>

          {/* Legend */}
          <div className="mt-4 space-y-2">
            {workloadData.map((item) => (
              <div key={item.name} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-muted-foreground">{item.name}</span>
                </div>
                <span className="font-medium">{item.value}%</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
