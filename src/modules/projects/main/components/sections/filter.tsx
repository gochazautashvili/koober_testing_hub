'use client';
import { Search } from 'lucide-react';
import { parseAsString, useQueryStates } from 'nuqs';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';

import { project_status } from '@/generated/prisma/prisma';
import { MembersSelector } from '@/components/data';

const project_statuses = [
  project_status.active,
  project_status.on_hold,
  project_status.archived,
  project_status.completed,
];

export const Filter = () => {
  const [filter, setFilter] = useQueryStates({
    query: parseAsString.withDefault(''),
    status: parseAsString,
    member: parseAsString,
  });

  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center">
      <div className="relative flex-1">
        <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform" />
        <Input
          defaultValue={filter.query}
          onKeyDown={(e) => {
            if (e.key === 'Enter') setFilter({ query: e.currentTarget.value });
          }}
          placeholder="Search projects..."
          className="pl-10"
        />
      </div>

      <div className="flex gap-2">
        <Select
          defaultValue={filter.status || 'all'}
          onValueChange={(status) => setFilter({ status: status !== 'all' ? status : null })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Filter by status</SelectItem>
            {project_statuses.map((item) => (
              <SelectItem className="capitalize" key={item} value={item}>
                {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select
          defaultValue={filter.member || 'all'}
          onValueChange={(member) => setFilter({ member: member !== 'all' ? member : null })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Filter by members</SelectItem>
            <MembersSelector />
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
