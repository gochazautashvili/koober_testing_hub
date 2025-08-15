'use client';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';

const severityData = [
  { name: 'Critical', value: 15, color: '#ef4444' },
  { name: 'High', value: 28, color: '#f97316' },
  { name: 'Medium', value: 45, color: '#eab308' },
  { name: 'Low', value: 39, color: '#22c55e' },
];

const weeklyTaskData = [
  { day: 'Mon', completed: 12 },
  { day: 'Tue', completed: 8 },
  { day: 'Wed', completed: 15 },
  { day: 'Thu', completed: 10 },
  { day: 'Fri', completed: 18 },
  { day: 'Sat', completed: 5 },
  { day: 'Sun', completed: 3 },
];

export const Charts = () => {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Bugs by Severity</CardTitle>
          <CardDescription>Distribution of bug severity levels</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              critical: { label: 'Critical', color: '#ef4444' },
              high: { label: 'High', color: '#f97316' },
              medium: { label: 'Medium', color: '#eab308' },
              low: { label: 'Low', color: '#22c55e' },
            }}
            className="h-[200px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  cx="50%"
                  cy="50%"
                  dataKey="value"
                  innerRadius={40}
                  outerRadius={80}
                  paddingAngle={2}
                  data={severityData}
                >
                  {severityData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <ChartTooltip content={<ChartTooltipContent />} />
              </PieChart>
            </ResponsiveContainer>
          </ChartContainer>
          <div className="mt-4 grid grid-cols-2 gap-2">
            {severityData.map((item) => (
              <div key={item.name} className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full" style={{ backgroundColor: item.color }} />
                <span className="text-sm">
                  {item.name}: {item.value}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Tasks Completed This Week</CardTitle>
          <CardDescription>Daily task completion progress</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              completed: { label: 'Completed', color: '#3b82f6' },
            }}
            className="h-[200px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyTaskData}>
                <XAxis dataKey="day" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="completed" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
          <div className="text-muted-foreground mt-4 flex items-center justify-between text-sm">
            <span>Total this week: 71 tasks</span>
            <span>Average: 10.1 tasks/day</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
