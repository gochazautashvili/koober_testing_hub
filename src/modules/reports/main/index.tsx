import { Reports } from './components/sections/reports';
import { Filters } from './components/sections/filters';
import { Header } from './components/sections/header';
import { Stats } from './components/sections/stats';

export const ReportsView = () => {
  return (
    <div className="space-y-6">
      <Header />
      <Stats />
      <Filters />
      <Reports />
    </div>
  );
};
