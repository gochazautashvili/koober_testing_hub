import { Header } from './components/sections/header';
import { NotificationTabs } from './components/tabs';

export const NotificationsView = () => {
  return (
    <div className="space-y-6">
      <Header />
      <NotificationTabs />
    </div>
  );
};
