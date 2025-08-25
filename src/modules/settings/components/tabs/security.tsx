import { TabsContent } from '@/components/ui/tabs';

import { ChangePasswordForm } from '../forms/change-password-form';

export const Security = () => {
  return (
    <TabsContent value="security">
      <ChangePasswordForm />
    </TabsContent>
  );
};
