import { CheckCircle, FileText, SettingsIcon, Users } from 'lucide-react';

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Settings } from './settings';
import { Overview } from './overview';
import { Files } from './files';
import { Tasks } from './tasks';
import { Team } from './team';

export const ProjectDetailsTabs = () => {
  return (
    <Tabs defaultValue="overview" className="space-y-6">
      <TabsList className="grid w-full grid-cols-5">
        <TabsTrigger value="overview" className="gap-2">
          <FileText className="h-4 w-4" />
          Overview
        </TabsTrigger>
        <TabsTrigger value="tasks" className="gap-2">
          <CheckCircle className="h-4 w-4" />
          Tasks
        </TabsTrigger>
        <TabsTrigger value="team" className="gap-2">
          <Users className="h-4 w-4" />
          Team
        </TabsTrigger>
        <TabsTrigger value="files" className="gap-2">
          <FileText className="h-4 w-4" />
          Files
        </TabsTrigger>
        <TabsTrigger value="settings" className="gap-2">
          <SettingsIcon className="h-4 w-4" />
          Settings
        </TabsTrigger>
      </TabsList>

      <Overview />
      <Tasks />
      <Team />
      <Files />
      <Settings />
    </Tabs>
  );
};
