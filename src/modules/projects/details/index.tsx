import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

import { ProjectDetailsTabs } from './components/tabs';
import { Header } from './components/sections/header';
import { Button } from '@/components/ui/button';

export const ProjectDetailsView = () => {
  return (
    <div className="flex-1 space-y-6 p-6">
      <div className="flex items-center gap-2">
        <Link href="/projects">
          <Button variant="ghost" size="sm" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Button>
        </Link>
      </div>

      <Header />
      <ProjectDetailsTabs />
    </div>
  );
};
