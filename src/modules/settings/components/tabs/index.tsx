import { Settings, Shield, Database } from 'lucide-react';

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { Integrations } from './integrations';
import { Security } from './security';
import { General } from './general';

export const SettingTabs = () => {
  return (
    <div className="mx-auto w-full max-w-6xl p-6">
      <Tabs defaultValue="general" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="general" className="flex items-center gap-2">
            <Settings className="h-4 w-4" />
            <span className="hidden sm:inline">General</span>
          </TabsTrigger>

          <TabsTrigger value="security" className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            <span className="hidden sm:inline">Security</span>
          </TabsTrigger>

          <TabsTrigger value="integrations" className="flex items-center gap-2">
            <Database className="h-4 w-4" />
            <span className="hidden sm:inline">API & Integrations</span>
          </TabsTrigger>
        </TabsList>

        <General />
        <Security />
        <Integrations />
      </Tabs>
    </div>
  );
};
