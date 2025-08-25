'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import { LoadingButton } from '@/components/common/loading-button';

import { login_schema, ILoginSchema } from '../services/validations';
import { login } from '../services/actions';
import { ForgotPasswordDialog } from './forgot-password-dialog';
import { PasswordInput } from '@/components/common/password-input';

export const LoginForm = () => {
  const router = useRouter();

  const form = useForm<ILoginSchema>({
    resolver: zodResolver(login_schema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function onSubmit(data: ILoginSchema) {
    const res = await login(data);

    if (res.success) {
      toast.success('Welcome back!', { description: res.message });

      router.push('/dashboard');
    } else {
      toast.error('Error!', { description: res.message });
    }
  }

  const isLoading = form.formState.isSubmitting;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {/* Email Field */}
        <FormField
          name="email"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="name@company.com"
                  autoComplete="email"
                  disabled={isLoading}
                  type="email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Password Field */}
        <FormField
          name="password"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center justify-between">
                <FormLabel>Password</FormLabel>

                <ForgotPasswordDialog />
              </div>

              <FormControl>
                <PasswordInput
                  {...field}
                  isLoading={isLoading}
                  autoComplete="current-password"
                  placeholder="Enter your password"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <LoadingButton isLoading={isLoading} type="submit" className="w-full" disabled={isLoading}>
          შესვლა
        </LoadingButton>
      </form>
    </Form>
  );
};
