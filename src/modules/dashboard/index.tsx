import { MainContent } from './components/sections/main-Content';
import { Statistics } from './components/sections/statistics';
import { Welcome } from './components/sections/welcome';
import { Charts } from './components/sections/charts';

export const DashboardView = () => {
  return (
    <div className="space-y-6">
      <Welcome />
      <Statistics />
      <MainContent />
      <Charts />
    </div>
  );
};
