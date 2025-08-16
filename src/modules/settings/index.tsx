import { Header } from './components/sections/header';
import { SettingTabs } from './components/tabs';

export const SettingsView = () => {
  return (
    <div className="space-y-6">
      <Header />
      <SettingTabs />
    </div>
  );
};
