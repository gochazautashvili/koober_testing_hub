import { ChevronDown, RotateCcw, Search } from 'lucide-react';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Separator } from '@/components/ui/separator';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const Filters = () => {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center">
      <div className="relative max-w-md flex-1">
        <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform" />
        <Input placeholder="Search tasks..." className="pl-10" />
      </div>

      <div className="flex gap-2">
        <Select defaultValue="all">
          <SelectTrigger className="w-32">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="todo">To Do</SelectItem>
            <SelectItem value="in-progress">In Progress</SelectItem>
            <SelectItem value="review">In Review</SelectItem>
            <SelectItem value="done">Done</SelectItem>
          </SelectContent>
        </Select>

        <Select defaultValue="all">
          <SelectTrigger className="w-32">
            <SelectValue placeholder="Priority" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Priority</SelectItem>
            <SelectItem value="critical">Critical</SelectItem>
            <SelectItem value="high">High</SelectItem>
            <SelectItem value="medium">Medium</SelectItem>
            <SelectItem value="low">Low</SelectItem>
          </SelectContent>
        </Select>

        <MoreFilters />
      </div>
    </div>
  );
};

const MoreFilters = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          <h1 className="font-normal">More Filters</h1>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="flex flex-col gap-4">
        <div className="flex items-center space-x-2">
          <Checkbox id="my-tasks" />
          <label htmlFor="my-tasks" className="text-sm font-medium">
            My Tasks Only
          </label>
        </div>

        <Separator />

        {/* Project Filter */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Projects</label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select projects..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ecommerce">E-commerce Platform</SelectItem>
              <SelectItem value="mobile">Mobile App Redesign</SelectItem>
              <SelectItem value="api">API Integration</SelectItem>
              <SelectItem value="dashboard">User Dashboard</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Assignee Filter */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Assignees</label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select assignees..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sarah">Sarah Chen</SelectItem>
              <SelectItem value="mike">Mike Johnson</SelectItem>
              <SelectItem value="alex">Alex Kim</SelectItem>
              <SelectItem value="emma">Emma Davis</SelectItem>
              <SelectItem value="john">John Doe</SelectItem>
              <SelectItem value="lisa">Lisa Wang</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Severity Filter */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Severity</label>
          <div className="space-y-2">
            {['High', 'Medium', 'Low'].map((severity) => (
              <div key={severity} className="flex items-center space-x-2">
                <Checkbox id={`severity-${severity.toLowerCase()}`} />
                <label htmlFor={`severity-${severity.toLowerCase()}`} className="text-sm">
                  {severity}
                </label>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        <Button variant="outline" size="sm" className="w-full bg-transparent">
          <RotateCcw className="mr-2 h-4 w-4" />
          Clear Filters
        </Button>
      </PopoverContent>
    </Popover>
  );
};
