import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Content } from './components/sections/content';
import { Actions } from './components/sections/actions';
import { Header } from './components/sections/header';

export function TaskDetailsView() {
  return (
    <Dialog open>
      <DialogContent showCloseButton={false} className="max-h-[90dvh] w-full !max-w-[90%] overflow-y-auto p-0">
        <Header />
        <Content />
        <Actions />
      </DialogContent>
    </Dialog>
  );
}
