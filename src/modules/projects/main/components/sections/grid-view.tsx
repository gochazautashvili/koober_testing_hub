import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { ActionsButton } from '../common/actions';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    id: 1,
    name: 'E-commerce Platform',
    description: 'Complete overhaul of the online shopping experience with new checkout flow',
    status: 'Active',
    priority: 'High',
    progress: 75,
    totalTasks: 24,
    openTasks: 6,
    totalBugs: 12,
    openBugs: 8,
    resolvedBugs: 4,
    dueDate: '2024-02-15',
    team: [
      { name: 'Sarah Chen', avatar: '/placeholder.svg?height=32&width=32', initials: 'SC' },
      { name: 'Mike Johnson', avatar: '/placeholder.svg?height=32&width=32', initials: 'MJ' },
      { name: 'Alex Kim', avatar: '/placeholder.svg?height=32&width=32', initials: 'AK' },
      { name: 'Emma Davis', avatar: '/placeholder.svg?height=32&width=32', initials: 'ED' },
    ],
    lastUpdated: '2 hours ago',
  },
  {
    id: 2,
    name: 'Mobile App Redesign',
    description: 'Modern UI/UX redesign for iOS and Android applications',
    status: 'Active',
    priority: 'Medium',
    progress: 45,
    totalTasks: 18,
    openTasks: 10,
    totalBugs: 8,
    openBugs: 6,
    resolvedBugs: 2,
    dueDate: '2024-03-01',
    team: [
      { name: 'John Doe', avatar: '/placeholder.svg?height=32&width=32', initials: 'JD' },
      { name: 'Lisa Wang', avatar: '/placeholder.svg?height=32&width=32', initials: 'LW' },
      { name: 'Tom Brown', avatar: '/placeholder.svg?height=32&width=32', initials: 'TB' },
    ],
    lastUpdated: '1 day ago',
  },
  {
    id: 3,
    name: 'API Integration',
    description: 'Third-party service integrations and API endpoint optimization',
    status: 'Active',
    priority: 'Critical',
    progress: 90,
    totalTasks: 12,
    openTasks: 1,
    totalBugs: 3,
    openBugs: 1,
    resolvedBugs: 2,
    dueDate: '2024-01-30',
    team: [
      { name: 'David Lee', avatar: '/placeholder.svg?height=32&width=32', initials: 'DL' },
      { name: 'Maria Garcia', avatar: '/placeholder.svg?height=32&width=32', initials: 'MG' },
      { name: 'James Wilson', avatar: '/placeholder.svg?height=32&width=32', initials: 'JW' },
      { name: 'Anna Taylor', avatar: '/placeholder.svg?height=32&width=32', initials: 'AT' },
    ],
    lastUpdated: '3 hours ago',
  },
  {
    id: 4,
    name: 'User Dashboard',
    description: 'Enhanced user dashboard with analytics and reporting features',
    status: 'Completed',
    priority: 'Low',
    progress: 100,
    totalTasks: 20,
    openTasks: 0,
    totalBugs: 15,
    openBugs: 0,
    resolvedBugs: 15,
    dueDate: '2024-04-15',
    team: [
      { name: 'Chris Anderson', avatar: '/placeholder.svg?height=32&width=32', initials: 'CA' },
      { name: 'Sophie Miller', avatar: '/placeholder.svg?height=32&width=32', initials: 'SM' },
    ],
    lastUpdated: '1 week ago',
  },
  {
    id: 5,
    name: 'Security Audit',
    description: 'Comprehensive security review and vulnerability assessment',
    status: 'Archived',
    priority: 'Critical',
    progress: 100,
    totalTasks: 8,
    openTasks: 0,
    totalBugs: 5,
    openBugs: 0,
    resolvedBugs: 5,
    dueDate: '2024-01-15',
    team: [
      { name: 'Robert Chen', avatar: '/placeholder.svg?height=32&width=32', initials: 'RC' },
      { name: 'Jennifer Liu', avatar: '/placeholder.svg?height=32&width=32', initials: 'JL' },
    ],
    lastUpdated: '2 weeks ago',
  },
];

function getStatusColor(status: string) {
  switch (status) {
    case 'Active':
      return 'default';
    case 'Completed':
      return 'secondary';
    case 'Archived':
      return 'outline';
    default:
      return 'secondary';
  }
}

export const GridView = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <Card
          key={project.id}
          className="cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
        >
          <CardHeader className="pb-3">
            <div className="flex items-start justify-between">
              <div className="flex-1 space-y-1">
                <CardTitle className="text-lg font-bold">{project.name}</CardTitle>
                <CardDescription className="line-clamp-2 text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
              </div>
              <ActionsButton />
            </div>
            <Badge variant={getStatusColor(project.status)} className="w-fit">
              {project.status}
            </Badge>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Progress</span>
                <span className="font-semibold">{project.progress}%</span>
              </div>
              <Progress value={project.progress} className="h-2" />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground text-sm">Team</span>
              </div>
              <div className="flex -space-x-2">
                {project.team.slice(0, 3).map((member, index) => (
                  <Avatar key={index} className="border-background h-8 w-8 border-2">
                    <AvatarImage src={member.avatar || '/placeholder.svg'} />
                    <AvatarFallback className="text-xs font-medium">{member.initials}</AvatarFallback>
                  </Avatar>
                ))}
                {project.team.length > 3 && (
                  <div className="bg-muted border-background flex h-8 w-8 items-center justify-center rounded-full border-2">
                    <span className="text-muted-foreground text-xs font-medium">+{project.team.length - 3}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="flex gap-2">
              <Badge variant="outline" className="text-xs">
                {project.openTasks} open tasks
              </Badge>
              <Badge variant="outline" className="text-xs">
                {project.openBugs} bugs
              </Badge>
            </div>

            <div className="text-muted-foreground flex items-center justify-between border-t pt-2 text-xs">
              <span>Updated {project.lastUpdated}</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
