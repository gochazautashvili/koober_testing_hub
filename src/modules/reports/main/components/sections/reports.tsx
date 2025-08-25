import { Calendar, MoreHorizontal, Eye } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

import { getSeverityColor, getStatusColor, getStatusIcon } from '@/helpers/utils';

const bugReports = [
  {
    id: 'BUG-001',
    title: 'Login form validation error',
    description: 'Users cannot login when password contains special characters',
    severity: 'High',
    status: 'Open',
    priority: 'Critical',
    project: 'E-commerce Platform',
    reporter: {
      name: 'Sarah Chen',
      avatar: '/placeholder.svg?height=32&width=32',
      initials: 'SC',
    },
    assignee: {
      name: 'Mike Johnson',
      avatar: '/placeholder.svg?height=32&width=32',
      initials: 'MJ',
    },
    createdDate: '2024-01-20',
    updatedDate: '2024-01-22',
    environment: 'Production',
    browser: 'Chrome 120',
    stepsToReproduce: [
      'Navigate to login page',
      'Enter valid email address',
      'Enter password with special characters (!@#$%)',
      'Click login button',
      "Error message appears: 'Invalid credentials'",
    ],
    expectedResult: 'User should be able to login successfully',
    actualResult: 'Login fails with error message',
    attachments: ['screenshot.png', 'console-log.txt'],
  },
  {
    id: 'BUG-002',
    title: 'Dashboard loading performance issue',
    description: 'Dashboard takes more than 10 seconds to load with large datasets',
    severity: 'Medium',
    status: 'In Progress',
    priority: 'High',
    project: 'User Dashboard',
    reporter: {
      name: 'Alex Kim',
      avatar: '/placeholder.svg?height=32&width=32',
      initials: 'AK',
    },
    assignee: {
      name: 'Emma Davis',
      avatar: '/placeholder.svg?height=32&width=32',
      initials: 'ED',
    },
    createdDate: '2024-01-18',
    updatedDate: '2024-01-21',
    environment: 'Production',
    browser: 'Firefox 121',
    stepsToReproduce: [
      'Login as admin user',
      'Navigate to dashboard',
      'Wait for page to load completely',
      'Observe loading time',
    ],
    expectedResult: 'Dashboard should load within 3 seconds',
    actualResult: 'Dashboard takes 10+ seconds to load',
    attachments: ['performance-report.pdf'],
  },
  {
    id: 'BUG-003',
    title: 'Mobile responsive layout broken',
    description: 'Checkout form elements overlap on mobile devices',
    severity: 'Medium',
    status: 'Resolved',
    priority: 'Medium',
    project: 'E-commerce Platform',
    reporter: {
      name: 'John Doe',
      avatar: '/placeholder.svg?height=32&width=32',
      initials: 'JD',
    },
    assignee: {
      name: 'Lisa Wang',
      avatar: '/placeholder.svg?height=32&width=32',
      initials: 'LW',
    },
    createdDate: '2024-01-15',
    updatedDate: '2024-01-19',
    environment: 'Production',
    browser: 'Safari Mobile',
    stepsToReproduce: ['Open checkout page on mobile device', 'Scroll through form fields', 'Observe layout issues'],
    expectedResult: 'Form should display properly on mobile',
    actualResult: 'Form elements overlap and are unusable',
    attachments: ['mobile-screenshot.png'],
  },
  {
    id: 'BUG-004',
    title: 'API timeout on large data requests',
    description: 'API endpoints timeout when processing requests with large datasets',
    severity: 'Critical',
    status: 'Open',
    priority: 'Critical',
    project: 'API Integration',
    reporter: {
      name: 'Tom Brown',
      avatar: '/placeholder.svg?height=32&width=32',
      initials: 'TB',
    },
    assignee: {
      name: 'David Lee',
      avatar: '/placeholder.svg?height=32&width=32',
      initials: 'DL',
    },
    createdDate: '2024-01-19',
    updatedDate: '2024-01-20',
    environment: 'Production',
    browser: 'N/A',
    stepsToReproduce: [
      'Make API request to /api/reports with large dataset',
      'Wait for response',
      'Request times out after 30 seconds',
    ],
    expectedResult: 'API should return data within reasonable time',
    actualResult: 'Request times out with 504 error',
    attachments: ['api-logs.txt', 'error-trace.json'],
  },
  {
    id: 'BUG-005',
    title: 'Dark mode toggle not working',
    description: "Theme toggle button doesn't switch between light and dark modes",
    severity: 'Low',
    status: 'Closed',
    priority: 'Low',
    project: 'Mobile App Redesign',
    reporter: {
      name: 'Maria Garcia',
      avatar: '/placeholder.svg?height=32&width=32',
      initials: 'MG',
    },
    assignee: {
      name: 'Chris Anderson',
      avatar: '/placeholder.svg?height=32&width=32',
      initials: 'CA',
    },
    createdDate: '2024-01-16',
    updatedDate: '2024-01-18',
    environment: 'Staging',
    browser: 'Chrome 120',
    stepsToReproduce: [
      'Click on theme toggle button in header',
      'Observe if theme changes',
      'Button click has no effect',
    ],
    expectedResult: 'Theme should toggle between light and dark',
    actualResult: 'No visual change occurs',
    attachments: [],
  },
];

export const Reports = () => {
  return (
    <Card className="overflow-hidden pt-4 pb-0">
      <CardHeader>
        <CardTitle>All Bug Reports</CardTitle>
        <CardDescription>6 active reports, 5 closed</CardDescription>
      </CardHeader>

      <CardContent className="scrollbar p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Bug ID</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Severity</TableHead>
              <TableHead>Project</TableHead>
              <TableHead>Reporter</TableHead>
              <TableHead>Assignee</TableHead>
              <TableHead>Created</TableHead>
              <TableHead className="w-12"></TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {bugReports.map((bug) => (
              <TableRow key={bug.id}>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {getStatusIcon(bug.status)}
                    <span className="font-mono text-sm">{bug.id}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="space-y-1">
                    <span className="font-medium">{bug.title}</span>
                    <p className="text-muted-foreground line-clamp-1 text-sm">{bug.description}</p>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant={getStatusColor(bug.status)}>{bug.status}</Badge>
                </TableCell>
                <TableCell>
                  <Badge variant={getSeverityColor(bug.severity)}>{bug.severity}</Badge>
                </TableCell>
                <TableCell>
                  <span className="text-muted-foreground text-sm">{bug.project}</span>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={bug.reporter.avatar || '/placeholder.svg'} />
                      <AvatarFallback className="text-xs">{bug.reporter.initials}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm">{bug.reporter.name}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={bug.assignee.avatar || '/placeholder.svg'} />
                      <AvatarFallback className="text-xs">{bug.assignee.initials}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm">{bug.assignee.name}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="text-muted-foreground flex items-center gap-1 text-sm">
                    <Calendar className="h-3 w-3" />
                    {bug.createdDate}
                  </div>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Eye className="mr-2 h-4 w-4" />
                        View Details
                      </DropdownMenuItem>
                      <DropdownMenuItem>Edit Report</DropdownMenuItem>
                      <DropdownMenuItem>Assign to</DropdownMenuItem>
                      <DropdownMenuItem>Change Status</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
