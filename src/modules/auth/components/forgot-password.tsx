import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

export const ForgotPassword = () => {
  return (
    <Tooltip>
      <TooltipTrigger className='className="text-primary hover:underline" text-sm'>Forgot password?</TooltipTrigger>
      <TooltipContent className="max-w-40">
        <p className="text-base tracking-wider text-white">პაროლოს დავიწყების შემთხვევაში დაუკავშირდით კომპანიას!</p>
      </TooltipContent>
    </Tooltip>
  );
};
