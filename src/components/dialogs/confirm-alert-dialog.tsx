import { Loader, TriangleAlertIcon } from 'lucide-react';
import { ReactNode } from 'react';

import {
  AlertDialog,
  AlertDialogTitle,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogDescription,
} from '@/components/ui/alert-dialog';

interface IProps {
  title?: string;
  isLoading: boolean;
  description?: string;
  children?: ReactNode;
  onConfirm: () => void;
  onOpenChange?: (open: boolean) => void;
}

export const ConfirmAlertDialog = ({
  children,
  onConfirm,
  isLoading,
  onOpenChange,
  title = 'Are you absolutely sure you want to delete?',
  description = 'This action cannot be undone. This will permanently delete your account and remove your data from our servers.',
}: IProps) => {
  return (
    <AlertDialog open={children ? isLoading || undefined : true}>
      {children && <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>}
      <AlertDialogContent>
        <AlertDialogHeader className="items-center">
          <div className="bg-destructive/10 mx-auto mb-2 flex size-12 items-center justify-center rounded-full">
            <TriangleAlertIcon className="text-destructive size-6" />
          </div>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription className="text-center">{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => onOpenChange?.(false)} disabled={isLoading}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            disabled={isLoading}
            onClick={onConfirm}
            className="bg-destructive dark:bg-destructive/60 hover:bg-destructive focus-visible:ring-destructive text-white"
          >
            {isLoading ? <Loader className="size-5 animate-spin" /> : 'Confirm'}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
