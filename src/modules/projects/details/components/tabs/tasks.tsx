import { TaskTabs } from '@/modules/tasks/main/components/sections/tabs';
import { TabsContent } from '@/components/ui/tabs';

export const Tasks = () => {
  return (
    <TabsContent value="tasks" className="space-y-6">
      <TaskTabs />
    </TabsContent>
  );
};
