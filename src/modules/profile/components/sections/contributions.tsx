import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GitCommit } from 'lucide-react';

export const Contributions = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <GitCommit className="h-5 w-5" />
          Project Contributions
        </CardTitle>
        <CardDescription>Your contributions across different projects</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {[
            {
              project: 'Bug Tracking System',
              role: 'Product Manager',
              tasks: 45,
              bugs: 12,
              progress: 85,
            },
            {
              project: 'User Dashboard Redesign',
              role: 'Lead Designer',
              tasks: 23,
              bugs: 3,
              progress: 60,
            },
            {
              project: 'API Documentation',
              role: 'Technical Writer',
              tasks: 18,
              bugs: 1,
              progress: 90,
            },
            {
              project: 'Mobile App',
              role: 'Product Owner',
              tasks: 31,
              bugs: 8,
              progress: 40,
            },
          ].map((project, index) => (
            <div key={index} className="flex items-center justify-between rounded-lg border p-4">
              <div className="space-y-1">
                <h4 className="font-medium">{project.project}</h4>
                <p className="text-muted-foreground text-sm">{project.role}</p>
              </div>
              <div className="flex items-center gap-6 text-sm">
                <div className="text-center">
                  <p className="font-medium">{project.tasks}</p>
                  <p className="text-muted-foreground">Tasks</p>
                </div>
                <div className="text-center">
                  <p className="font-medium">{project.bugs}</p>
                  <p className="text-muted-foreground">Bugs</p>
                </div>
                <div className="text-center">
                  <p className="font-medium">{project.progress}%</p>
                  <p className="text-muted-foreground">Progress</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
