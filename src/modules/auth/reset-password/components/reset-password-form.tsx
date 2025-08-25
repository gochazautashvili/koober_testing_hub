'use client';
import { Lock, CheckCircle, AlertCircle, ArrowLeft, LogIn } from 'lucide-react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Link from 'next/link';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';

import { PasswordInput } from '@/components/common/password-input';
import { LoadingButton } from '@/components/common/loading-button';

import { IResetPasswordValues, reset_password_schema } from '@/services/validations';
import { reset_password } from '../services/actions';

export const ResetPasswordForm = () => {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const params = useParams();

  const token = params['token']?.toString();

  const form = useForm<IResetPasswordValues>({
    resolver: zodResolver(reset_password_schema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (data: IResetPasswordValues) => {
    if (!token) {
      setErrorMessage('აღდგენის ლინკი ან კოდი არასწორია');
      setStatus('error');
      return;
    }

    const res = await reset_password(data, token);

    if (res.success) {
      setStatus('success');
      form.reset();
    } else {
      setStatus('error');
      setErrorMessage(res.message);
    }
  };

  const isLoading = form.formState.isSubmitting;

  if (status === 'success') {
    return (
      <div className="flex min-h-screen items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <CardTitle className="text-2xl">პაროლი წარმატებით შეიცვალა</CardTitle>
            <CardDescription>
              თქვენი ახალი პაროლი აქტიურია. ახლა შეგიძლიათ ავტორიზაცია გაიაროთ ახალი პაროლით.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button asChild className="w-full" size="lg">
              <Link href="/auth">
                <LogIn className="mr-2 h-4 w-4" />
                ავტორიზაცია
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className="flex min-h-screen items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
              <AlertCircle className="h-8 w-8 text-red-600" />
            </div>
            <CardTitle className="text-2xl text-red-600">შეცდომა</CardTitle>
            <CardDescription className="text-red-600">{errorMessage}</CardDescription>
          </CardHeader>
          <CardFooter className="flex flex-col gap-2">
            <Button onClick={() => setStatus('idle')} variant="outline" className="w-full" size="lg">
              <ArrowLeft className="mr-2 h-4 w-4" />
              ხელახლა ცდა
            </Button>
            <Button asChild className="w-full" size="lg">
              <Link href="/auth">
                <LogIn className="mr-2 h-4 w-4" />
                ავტორიზაციაზე დაბრუნება
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
            <Lock className="h-8 w-8 text-blue-600" />
          </div>
          <CardTitle className="text-2xl">ახალი პაროლის დაყენება</CardTitle>
          <CardDescription>შეიყვანეთ ახალი პაროლი თქვენი ანგარიშისთვის</CardDescription>
        </CardHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="space-y-4">
              {/* Token/Code validation warning */}
              {!token && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>აღდგენის ლინკი არასწორია. გთხოვთ დაუბრუნდეთ ელ-ფოსტას.</AlertDescription>
                </Alert>
              )}

              {/* Password Field */}
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

              {/* Confirm Password Field */}
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>პაროლის დადასტურება</FormLabel>
                    <FormControl>
                      <PasswordInput isLoading={isLoading} placeholder="გაიმეორეთ ახალი პაროლი" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Password Requirements */}
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
            </CardContent>

            <CardFooter className="flex flex-col gap-2">
              <Button asChild type="button" variant="ghost" disabled={isLoading} className="w-full">
                <Link href="/auth">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  ავტორიზაციაზე დაბრუნება
                </Link>
              </Button>

              <LoadingButton type="submit" disabled={!token} isLoading={isLoading} className="w-full" size="lg">
                პაროლის შეცვლა
              </LoadingButton>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </div>
  );
};
