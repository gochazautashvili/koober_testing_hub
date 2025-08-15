import { AdditionalCharts } from './components/sections/additional-charts';
import { ProjectTimeline } from './components/sections/project-timeline';
import { DetailedTables } from './components/sections/detailed-tables';
import { Statistics } from './components/sections/statistics';
import { Metrics } from './components/sections/metrics';
import { Header } from './components/sections/header';
import { Charts } from './components/sections/charts';

export const AnalyticsView = () => {
  return (
    <div className="space-y-6">
      <Header />
      <Metrics />
      <Charts />
      <AdditionalCharts />
      <ProjectTimeline />
      <DetailedTables />
      <Statistics />
    </div>
  );
};
