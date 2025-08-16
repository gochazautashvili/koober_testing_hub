import { CalendarIcon, Kanban, TableIcon } from 'lucide-react';

import { TabsList, Tabs as MainTabs, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { KanbanBoardView } from './kanban-board-view';
import { CalendarView } from './calendar-view';
import { TableView } from './table-view';

export const TaskTabs = () => {
  return (
    <MainTabs defaultValue="kanban">
      <TabsList>
        <TabsTrigger value="kanban" className="flex items-center gap-2">
          <Kanban className="h-4 w-4" />
          Kanban Board
        </TabsTrigger>
        <TabsTrigger value="table" className="flex items-center gap-2">
          <TableIcon className="h-4 w-4" />
          Table View
        </TabsTrigger>
        <TabsTrigger value="calendar" className="flex items-center gap-2">
          <CalendarIcon className="h-4 w-4" />
          Calendar View
        </TabsTrigger>
      </TabsList>

      <Content />
    </MainTabs>
  );
};

const Content = () => {
  return (
    <div className="mt-6">
      <TabsContent value="kanban">
        <KanbanBoardView />
      </TabsContent>
      <TabsContent value="table">
        <TableView />
      </TabsContent>
      <TabsContent value="calendar">
        <CalendarView />
      </TabsContent>
    </div>
  );
};
