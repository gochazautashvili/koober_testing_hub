'use client';
import { Shield, Edit, AlertCircle } from 'lucide-react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';

import { PasswordInput } from '@/components/common/password-input';
import { LoadingButton } from '@/components/common/loading-button';

import { change_password_schema, IChangePasswordValues } from '../../services/validations';
import { change_password } from '../../services/actions';

export const ChangePasswordForm = () => {
  const form = useForm<IChangePasswordValues>({
    resolver: zodResolver(change_password_schema),
    defaultValues: {
      password: '',
      oldPassword: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (data: IChangePasswordValues) => {
    const res = await change_password(data);

    if (res.success) {
      toast.success(res.message);
      form.reset();
    } else {
      toast.error(res.message);
    }
  };

  const isLoading = form.formState.isSubmitting;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="h-5 w-5" />
          უსაფრთხოების პარამეტრები
        </CardTitle>
        <CardDescription>მართეთ თქვენი ანგარიშის უსაფრთხოება და ავთენტიფიკაცია</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-6">
          <div className="space-y-4">
            <h4 className="font-medium">პაროლის შეცვლა</h4>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="oldPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>მიმდინარე პაროლი</FormLabel>
                      <FormControl>
                        <PasswordInput isLoading={isLoading} placeholder="შეიყვანეთ მიმდინარე პაროლი" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>ახალი პაროლი</FormLabel>
                      <FormControl>
                        <PasswordInput isLoading={isLoading} placeholder="შეიყვანეთ ახალი პაროლი" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>ახალი პაროლის დადასტურება</FormLabel>
                      <FormControl>
                        <PasswordInput isLoading={isLoading} placeholder="გაიმეორეთ ახალი პაროლი" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Alert>
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription className="text-sm">
                    <strong>პაროლის მოთხოვნები:</strong>
                    <ul className="mt-1 ml-4 list-disc space-y-1 text-xs">
                      <li>მინიმუმ 8 სიმბოლო</li>
                      <li>მინიმუმ ერთი დიდი ასო (A-Z)</li>
                      <li>მინიმუმ ერთი პატარა ასო (a-z)</li>
                      <li>მინიმუმ ერთი ციფრი (0-9)</li>
                      <li>მინიმუმ ერთი სპეციალური სიმბოლო (!@#$%^&*)</li>
                    </ul>
                  </AlertDescription>
                </Alert>

                <LoadingButton isLoading={isLoading} type="submit" className="w-full sm:w-auto">
                  <Edit className="mr-2 h-4 w-4" />
                  პაროლის განახლება
                </LoadingButton>
              </form>
            </Form>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
