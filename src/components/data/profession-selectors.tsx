'use client';
import { Fragment } from 'react';

import { SelectItem } from '../ui/select';
import { Skeleton } from '../ui/skeleton';

import { useProfessions } from '@/hooks/queries/use-professions';

interface IProps {
  values?: string[];
}

export const ProfessionsSelector = ({ values }: IProps) => {
  const { data, status } = useProfessions();

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
        const isSelected = values?.includes(item.name);

        if (isSelected) return null;

        return (
          <SelectItem key={item.id} value={item.name}>
            {item.name}
          </SelectItem>
        );
      })}
    </Fragment>
  );
};
