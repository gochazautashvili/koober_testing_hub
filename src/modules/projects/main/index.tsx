import { Projects } from './components/sections/projects';
import { Filter } from './components/sections/filter';
import { Header } from './components/sections/header';

export const ProjectsView = () => {
  return (
    <div className="space-y-6">
      <Header />
      <Filter />
      <Projects />
    </div>
  );
};
