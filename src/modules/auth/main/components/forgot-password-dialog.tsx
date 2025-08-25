'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Mail } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

import {
  Dialog,
  DialogTitle,
  DialogHeader,
  DialogContent,
  DialogTrigger,
  DialogDescription,
} from '@/components/ui/dialog';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

import { forgot_password_schema, IForgotPasswordValues } from '../services/validations';
import { LoadingButton } from '@/components/common/loading-button';
import { send_reset_password_link } from '../services/actions';

export const ForgotPasswordDialog = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<IForgotPasswordValues>({
    resolver: zodResolver(forgot_password_schema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = async (data: IForgotPasswordValues) => {
    const res = await send_reset_password_link(data);

    if (res.success) {
      setIsSuccess(true);
      form.reset();
    } else {
      toast.error(res.message);
    }
  };

  const isLoading = form.formState.isSubmitting;

  return (
    <Dialog onOpenChange={() => setIsSuccess(false)}>
      <DialogTrigger className="text-primary cursor-pointer text-sm hover:underline">Forgot password?</DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Reset your password</DialogTitle>
          <DialogDescription>
            Enter your email address and we&apos;ll send you a link to reset your password.
          </DialogDescription>
        </DialogHeader>

        <Card className="border-0 shadow-none">
          <CardContent className="pt-0">
            {isSuccess ? (
              <div className="py-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <Mail className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="mb-2 text-lg">Check your email</CardTitle>
                <CardDescription>We&apos;ve sent a password reset link to your email address.</CardDescription>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="mb-2">Email address</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="Enter your email address" disabled={isLoading} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <LoadingButton type="submit" isLoading={isLoading} className="w-full">
                    Send reset link
                  </LoadingButton>
                </form>
              </Form>
            )}
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
};
