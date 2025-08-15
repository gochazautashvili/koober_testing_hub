import { Users } from 'lucide-react';

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

const projectStatsData = [
  { project: 'E-commerce', totalBugs: 45, resolved: 34, critical: 3, team: 5, health: 85 },
  { project: 'Mobile App', totalBugs: 28, resolved: 18, critical: 2, team: 3, health: 72 },
  { project: 'API Integration', totalBugs: 15, resolved: 14, critical: 0, team: 4, health: 95 },
  { project: 'User Dashboard', totalBugs: 32, resolved: 12, critical: 5, team: 6, health: 45 },
  { project: 'Security Audit', totalBugs: 8, resolved: 8, critical: 0, team: 2, health: 100 },
];

export const Statistics = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Project Statistics</CardTitle>
        <CardDescription>Comprehensive metrics for all active projects</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Project</TableHead>
              <TableHead>Total Bugs</TableHead>
              <TableHead>Resolved</TableHead>
              <TableHead>Critical</TableHead>
              <TableHead>Team Size</TableHead>
              <TableHead>Health Score</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projectStatsData.map((project) => (
              <TableRow key={project.project}>
                <TableCell className="font-medium">{project.project}</TableCell>
                <TableCell>{project.totalBugs}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <span>{project.resolved}</span>
                    <Progress value={(project.resolved / project.totalBugs) * 100} className="h-1 w-16" />
                  </div>
                </TableCell>
                <TableCell>
                  {project.critical > 0 ? (
                    <Badge variant="destructive">{project.critical}</Badge>
                  ) : (
                    <Badge variant="outline">0</Badge>
                  )}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    {project.team}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <span
                      className={
                        project.health >= 80
                          ? 'text-green-600'
                          : project.health >= 60
                            ? 'text-yellow-600'
                            : 'text-red-600'
                      }
                    >
                      {project.health}%
                    </span>
                    <Progress value={project.health} className="h-1 w-16" />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
