import { Loader } from "lucide-react";

import { Button, IButtonProps } from "../ui/button";

interface Props extends IButtonProps {
  isLoading: boolean;
}

export const LoadingButton = ({ isLoading, children, ...props }: Props) => {
  return (
    <Button disabled={props.disabled || isLoading} {...props}>
      {isLoading ? <Loader /> : children}
    </Button>
  );
};
