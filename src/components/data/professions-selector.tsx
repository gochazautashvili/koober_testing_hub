'use client';
import { Fragment } from 'react';

import { SelectItem } from '../ui/select';
import { Skeleton } from '../ui/skeleton';

import { useMembers } from '@/hooks/queries/use-members';

interface IProps {
  values?: string[];
}

export const MembersSelector = ({ values }: IProps) => {
  const { data, status } = useMembers();

  if (status === 'pending') {
    return (
      <Fragment>
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton className="my-2 h-6 w-full" key={i} />
        ))}
      </Fragment>
    );
  }

  if (status === 'error') {
    return (
      <p className="text-destructive mt-2 w-full px-2 text-center">
        დაფიქსირდა პრობლემა! <br /> სცადეთ თავიდან.
      </p>
    );
  }

  return (
    <Fragment>
      {data.map((item) => {
        const isSelected = values?.includes(item.email);

        if (isSelected) return null;

        return (
          <SelectItem key={item.id} value={item.email}>
            {item.email}
          </SelectItem>
        );
      })}
    </Fragment>
  );
};
