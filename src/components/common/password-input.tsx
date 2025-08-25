import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

import { Input, InputProps } from '../ui/input';
import { Button } from '../ui/button';

interface IProps extends InputProps {
  isLoading: boolean;
}

export const PasswordInput = ({ isLoading, ...props }: IProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <Input {...props} disabled={isLoading || props.disabled} type={showPassword ? 'text' : 'password'} />
      <Button
        size="sm"
        type="button"
        variant="ghost"
        className="absolute top-0 right-0 h-full px-3 py-2 hover:bg-transparent"
        disabled={isLoading}
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
      </Button>
    </div>
  );
};
