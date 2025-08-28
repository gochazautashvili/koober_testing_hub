'use client';
import { Search } from 'lucide-react';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';

import { useTeamMemberFilters } from '../../hooks/search/use-member-filters';
import { ProfessionsSelector } from '@/components/data';

export const Filters = () => {
  const { search, setSearch } = useTeamMemberFilters();

  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center">
      <div className="relative flex-1">
        <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform" />
        <Input
          onKeyDown={(e) => e.key === 'Enter' && setSearch({ query: e.currentTarget.value })}
          placeholder="Search team members..."
          defaultValue={search.query || ''}
          className="w-full pl-10"
        />
      </div>

      <div className="flex gap-2">
        <Select onValueChange={(e) => setSearch({ profession: e })} defaultValue={search.profession}>
          <SelectTrigger>
            <SelectValue placeholder="Profession" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All professions</SelectItem>
            <ProfessionsSelector />
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
