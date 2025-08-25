import ReportForm from './components/sections/report-form';
import { Header } from './components/sections/header';

export const CreateReportsView = () => {
  return (
    <div className="space-y-5">
      <Header />
      <ReportForm />
    </div>
  );
};
