import { TeamStats } from './components/sections/team-stats';
import { Analytics } from './components/sections/analytics';
import { Filters } from './components/sections/filters';
import { Members } from './components/sections/members';
import { Header } from './components/sections/header';

export const TeamView = () => {
  return (
    <div className="space-y-6">
      <Header />
      <TeamStats />
      <Filters />
      <Members />
      <Analytics />
    </div>
  );
};
