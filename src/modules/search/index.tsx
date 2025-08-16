import { Filters } from './components/sections/filters';
import { Results } from './components/sections/results';

export const SearchView = () => {
  return (
    <div className="flex flex-col gap-5">
      <Filters />
      <Results />
    </div>
  );
};
