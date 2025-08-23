'use client';
import { Search } from 'lucide-react';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { filter_member_status } from '@/app/api/team/members/services/validations';
import { ProfessionsSelector } from '@/components/data/profession-selectors';
import { useMemberFilters } from '../../hooks/search/use-member-filters';
import { Input } from '@/components/ui/input';

export const Filters = () => {
  const { search, setSearch } = useMemberFilters();

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

        <Select onValueChange={(e) => setSearch({ status: e })} defaultValue={filter_member_status.ALL}>
          <SelectTrigger className="w-32">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={filter_member_status.ALL}>All Status</SelectItem>
            <SelectItem value={filter_member_status.ACTIVE}>Active</SelectItem>
            <SelectItem value={filter_member_status.INACTIVE}>Inactive</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
