import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { ActionsButton } from '../common/actions';
import { Card } from '@/components/ui/card';

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

function getStatusDotColor(status: string) {
  switch (status) {
    case 'Active':
      return 'bg-green-500';
    case 'Completed':
      return 'bg-blue-500';
    case 'Archived':
      return 'bg-gray-400';
    default:
      return 'bg-gray-400';
  }
}

export const ListView = () => {
  return (
    <Card className="py-2">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Project</TableHead>
            <TableHead>Team</TableHead>
            <TableHead>Progress</TableHead>
            <TableHead>Tasks</TableHead>
            <TableHead>Last Activity</TableHead>
            <TableHead className="w-12"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.map((project) => (
            <TableRow key={project.id} className="hover:bg-muted/50">
              <TableCell>
                <div className="flex items-center gap-3">
                  <div className={`h-2 w-2 rounded-full ${getStatusDotColor(project.status)}`} />
                  <div>
                    <div className="font-medium">{project.name}</div>
                    <div className="text-muted-foreground line-clamp-1 text-sm">{project.description}</div>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex -space-x-2">
                  {project.team.slice(0, 3).map((member, index) => (
                    <Avatar key={index} className="border-background h-6 w-6 border-2">
                      <AvatarImage src={member.avatar || '/placeholder.svg'} />
                      <AvatarFallback className="text-xs">{member.initials}</AvatarFallback>
                    </Avatar>
                  ))}
                  {project.team.length > 3 && (
                    <div className="bg-muted border-background flex h-6 w-6 items-center justify-center rounded-full border-2">
                      <span className="text-muted-foreground text-xs">+{project.team.length - 3}</span>
                    </div>
                  )}
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Progress value={project.progress} className="h-2 w-16" />
                  <span className="w-10 text-sm font-medium">{project.progress}%</span>
                </div>
              </TableCell>
              <TableCell>
                <div className="text-sm">
                  <span className="font-medium">{project.openTasks}</span>
                  <span className="text-muted-foreground">/{project.totalTasks}</span>
                </div>
              </TableCell>
              <TableCell>
                <div className="text-muted-foreground text-sm">{project.lastUpdated}</div>
              </TableCell>
              <TableCell>
                <ActionsButton />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};
