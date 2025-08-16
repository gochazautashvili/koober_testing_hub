import { Filters } from './components/sections/filters';
import { Header } from './components/sections/header';
import { TaskTabs } from '@/components/tabs';

export const TasksView = () => {
  return (
    <div className="flex flex-col gap-6">
      <Header />
      <Filters />
      <TaskTabs />
    </div>
  );
};
