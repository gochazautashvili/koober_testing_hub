'use client';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';

const resolutionHistogramData = [
  { range: '0-1d', count: 45, percentage: 35 },
  { range: '1-3d', count: 38, percentage: 30 },
  { range: '3-7d', count: 25, percentage: 20 },
  { range: '7-14d', count: 12, percentage: 10 },
  { range: '14d+', count: 6, percentage: 5 },
];

const teamPerformanceData = [
  { member: 'Sarah Chen', tasks: 45, bugs: 23, performance: 92 },
  { member: 'Mike Johnson', tasks: 38, bugs: 31, performance: 88 },
  { member: 'Alex Kim', tasks: 29, bugs: 18, performance: 85 },
  { member: 'Emma Davis', tasks: 33, bugs: 15, performance: 90 },
  { member: 'John Doe', tasks: 52, bugs: 8, performance: 94 },
];

export const AdditionalCharts = () => {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Team Performance</CardTitle>
          <CardDescription>Individual team member performance metrics</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              tasks: { label: 'Tasks Completed', color: '#3b82f6' },
              bugs: { label: 'Bugs Resolved', color: '#22c55e' },
            }}
            className="h-80"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={teamPerformanceData} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="member" type="category" width={100} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Legend />
                <Bar dataKey="tasks" fill="#3b82f6" />
                <Bar dataKey="bugs" fill="#22c55e" />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Resolution Time Distribution</CardTitle>
          <CardDescription>Histogram showing distribution of bug resolution times</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              count: { label: 'Bug Count', color: '#8b5cf6' },
            }}
            className="h-80"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={resolutionHistogramData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="range" />
                <YAxis />
                <ChartTooltip
                  content={({ active, payload, label }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-background rounded-lg border p-2 shadow-md">
                          <p className="font-medium">{label}</p>
                          <p className="text-sm">
                            <span className="text-purple-500">●</span> Count: {payload[0].value}
                          </p>
                          <p className="text-muted-foreground text-sm">
                            {resolutionHistogramData.find((d) => d.range === label)?.percentage}% of total
                          </p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Bar dataKey="count" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
};
