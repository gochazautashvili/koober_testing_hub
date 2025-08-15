import { Plus } from 'lucide-react';
import Link from 'next/link';

import { buttonVariants } from '@/components/ui/button';

export const Header = () => {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Bug Reports</h1>
        <p className="text-muted-foreground">Track and manage bug reports across all projects</p>
      </div>
      <Link href="/dashboard/reports/new" className={buttonVariants()}>
        <Plus className="mr-2 h-4 w-4" />
        New Bug Report
      </Link>
    </div>
  );
};
