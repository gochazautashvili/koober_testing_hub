'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { Camera, Save } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { IProfileValues, profile_schema } from '../../services/validations';
import { Separator } from '@/components/ui/separator';
import { TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const defaultValues: IProfileValues = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  photo: '',
};

export const ProfileForm = () => {
  const form = useForm<IProfileValues>({
    resolver: zodResolver(profile_schema),
    defaultValues,
  });

  const onSubmit = async (data: IProfileValues) => {
    console.log(data);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast.success('Settings updated', { description: 'Your general settings have been saved successfully.' });
    } catch (_) {
      toast.error('Error', { description: 'Something went wrong. Please try again.' });
    }
  };

  return (
    <TabsContent value="general">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="photo"
            render={() => (
              <FormItem>
                <FormControl>
                  <div className="flex items-center gap-4">
                    <Avatar className="h-20 w-20">
                      <AvatarImage src="" />
                      <AvatarFallback>
                        {form.watch('firstName')?.[0]?.toUpperCase() || 'J'}
                        {form.watch('lastName')?.[0]?.toUpperCase() || 'D'}
                      </AvatarFallback>
                    </Avatar>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Button size="sm" type="button" variant="outline">
                          <Camera className="mr-2 h-4 w-4" />
                          Change Photo
                        </Button>
                      </div>

                      <p className="text-muted-foreground text-sm">JPG, PNG or GIF. Max size 2MB.</p>
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Separator />

          {/* Form Fields */}
          <div className="grid gap-4 md:grid-cols-2">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your first name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your last name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="your.email@company.com" {...field} />
                  </FormControl>
                  <FormDescription>We&apos;ll use this for important account notifications.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="phone"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="+1 (555) 123-4567" {...field} />
                  </FormControl>
                  <FormDescription>Optional - for SMS notifications.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-3">
            <Button type="button" variant="outline" onClick={() => form.reset()}>
              Cancel
            </Button>
            <Button type="submit">
              <Save className="mr-2 h-4 w-4" />
              Save Changes
            </Button>
          </div>
        </form>
      </Form>
    </TabsContent>
  );
};
