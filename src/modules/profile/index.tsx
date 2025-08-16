import { Contributions } from './components/sections/contributions';
import { Activity } from './components/sections/activity';
import { Header } from './components/sections/header';
import { Stats } from './components/sections/stats';

export const ProfileView = () => {
  return (
    <div className="space-y-6">
      <Header />
      <Stats />
      <Activity />
      <Contributions />
    </div>
  );
};
