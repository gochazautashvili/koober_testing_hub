import { Fragment } from 'react';

import { DatePickerWithRange } from '../common/date-picker-with-range';

export const Header = () => {
  return (
    <Fragment>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Analytics Dashboard</h1>
          <p className="text-muted-foreground">
            Comprehensive insights and metrics for your bug tracking and project management
          </p>
        </div>

        <DatePickerWithRange />
      </div>
    </Fragment>
  );
};
