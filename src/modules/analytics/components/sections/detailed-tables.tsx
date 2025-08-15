import { Award } from 'lucide-react';

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';

const activeDevelopersData = [
  { name: 'Sarah Chen', avatar: '/placeholder.svg?height=32&width=32', resolved: 45, avgTime: 2.3, efficiency: 95 },
  { name: 'Mike Johnson', avatar: '/placeholder.svg?height=32&width=32', resolved: 38, avgTime: 3.1, efficiency: 89 },
  { name: 'Alex Kim', avatar: '/placeholder.svg?height=32&width=32', resolved: 29, avgTime: 2.8, efficiency: 92 },
  { name: 'Emma Davis', avatar: '/placeholder.svg?height=32&width=32', resolved: 33, avgTime: 2.5, efficiency: 88 },
  { name: 'John Doe', avatar: '/placeholder.svg?height=32&width=32', resolved: 52, avgTime: 1.9, efficiency: 97 },
];

const topReportersData = [
  { name: 'Alice Johnson', avatar: '/placeholder.svg?height=32&width=32', reports: 23, resolved: 18, accuracy: 78 },
  { name: 'Bob Smith', avatar: '/placeholder.svg?height=32&width=32', reports: 19, resolved: 16, accuracy: 84 },
  { name: 'Carol Davis', avatar: '/placeholder.svg?height=32&width=32', reports: 15, resolved: 14, accuracy: 93 },
  { name: 'David Wilson', avatar: '/placeholder.svg?height=32&width=32', reports: 12, resolved: 10, accuracy: 83 },
  { name: 'Eva Brown', avatar: '/placeholder.svg?height=32&width=32', reports: 11, resolved: 9, accuracy: 82 },
];

export const DetailedTables = () => {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Top Bug Reporters</CardTitle>
          <CardDescription>Most active bug reporters and their accuracy</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Reporter</TableHead>
                <TableHead>Reports</TableHead>
                <TableHead>Resolved</TableHead>
                <TableHead>Accuracy</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {topReportersData.map((reporter) => (
                <TableRow key={reporter.name}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={reporter.avatar || '/placeholder.svg'} />
                        <AvatarFallback>
                          {reporter.name
                            .split(' ')
                            .map((n) => n[0])
                            .join('')}
                        </AvatarFallback>
                      </Avatar>
                      <span className="font-medium">{reporter.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>{reporter.reports}</TableCell>
                  <TableCell>{reporter.resolved}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <span>{reporter.accuracy}%</span>
                      <Progress value={reporter.accuracy} className="h-1 w-12" />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Most Active Developers</CardTitle>
          <CardDescription>Top performing developers by bugs resolved</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Developer</TableHead>
                <TableHead>Resolved</TableHead>
                <TableHead>Avg Time</TableHead>
                <TableHead>Efficiency</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {activeDevelopersData.map((developer) => (
                <TableRow key={developer.name}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={developer.avatar || '/placeholder.svg'} />
                        <AvatarFallback>
                          {developer.name
                            .split(' ')
                            .map((n) => n[0])
                            .join('')}
                        </AvatarFallback>
                      </Avatar>
                      <span className="font-medium">{developer.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Award className="h-3 w-3 text-yellow-500" />
                      {developer.resolved}
                    </div>
                  </TableCell>
                  <TableCell>{developer.avgTime}d</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <span>{developer.efficiency}%</span>
                      <Progress value={developer.efficiency} className="h-1 w-12" />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};
