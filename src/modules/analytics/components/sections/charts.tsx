'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import {
  Pie,
  Line,
  Cell,
  XAxis,
  YAxis,
  Legend,
  PieChart,
  LineChart,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';

const bugTrendData = [
  { month: 'Jan', opened: 45, resolved: 38, critical: 8 },
  { month: 'Feb', opened: 52, resolved: 41, critical: 12 },
  { month: 'Mar', opened: 38, resolved: 45, critical: 6 },
  { month: 'Apr', opened: 61, resolved: 52, critical: 15 },
  { month: 'May', opened: 43, resolved: 58, critical: 9 },
  { month: 'Jun', opened: 35, resolved: 47, critical: 5 },
];

const bugSeverityData = [
  { name: 'Critical', value: 15, color: '#ef4444' },
  { name: 'High', value: 28, color: '#f97316' },
  { name: 'Medium', value: 45, color: '#eab308' },
  { name: 'Low', value: 32, color: '#22c55e' },
];

export const Charts = () => {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Bug Trends</CardTitle>
          <CardDescription>Monthly bug creation and resolution trends</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              opened: { label: 'Opened', color: '#ef4444' },
              resolved: { label: 'Resolved', color: '#22c55e' },
              critical: { label: 'Critical', color: '#f97316' },
            }}
            className="h-80"
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={bugTrendData}>
                <YAxis />
                <Legend />
                <XAxis dataKey="month" />
                <CartesianGrid strokeDasharray="3 3" />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line type="monotone" dataKey="opened" stroke="#ef4444" strokeWidth={2} />
                <Line type="monotone" dataKey="resolved" stroke="#22c55e" strokeWidth={2} />
                <Line type="monotone" dataKey="critical" stroke="#f97316" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Bug Severity Distribution</CardTitle>
          <CardDescription>Current distribution of bugs by severity level</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              critical: { label: 'Critical', color: '#ef4444' },
              high: { label: 'High', color: '#f97316' },
              medium: { label: 'Medium', color: '#eab308' },
              low: { label: 'Low', color: '#22c55e' },
            }}
            className="h-80"
          >
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  cx="50%"
                  cy="50%"
                  fill="#8884d8"
                  dataKey="value"
                  outerRadius={100}
                  data={bugSeverityData}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {bugSeverityData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <ChartTooltip content={<ChartTooltipContent />} />
              </PieChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
};
