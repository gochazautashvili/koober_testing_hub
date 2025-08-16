import { TabsContent } from '@/components/ui/tabs';
import { TaskTabs } from '@/components/tabs';

export const Tasks = () => {
  return (
    <TabsContent value="tasks" className="space-y-6">
      <TaskTabs />
    </TabsContent>
  );
};
