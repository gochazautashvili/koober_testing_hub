import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, useWatch } from 'react-hook-form';
import { Mail, X } from 'lucide-react';

import {
  Dialog,
  DialogTitle,
  DialogHeader,
  DialogContent,
  DialogTrigger,
  DialogDescription,
} from '@/components/ui/dialog';

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { LoadingButton } from '@/components/common/loading-button';
import { ProfessionsSelector } from '@/components/data';

import { IInviteMemberValues, invite_member_schema } from '../../services/validations';
import { useInviteMember } from '../../hooks/mutations/use-invite-member';

const projects = [
  { id: 1, name: 'E-commerce Platform' },
  { id: 2, name: 'Mobile App Redesign' },
  { id: 3, name: 'API Integration' },
  { id: 4, name: 'User Dashboard' },
  { id: 5, name: 'Security Audit' },
];

export const InviteMemberDialog = () => {
  const { mutate, isPending } = useInviteMember();

  const form = useForm<IInviteMemberValues>({
    resolver: zodResolver(invite_member_schema),
    defaultValues: {
      email: '',
      message: '',
      username: '',
      professions: [],
      role: 'developer',
      hasProject: false,
      projectId: undefined,
      member_role: undefined,
      member_professions: undefined,
    },
  });

  const onSubmit = (values: IInviteMemberValues) => {
    mutate(values, { onSuccess: () => form.reset() });
  };

  const handleProjectChange = (projectId: string | undefined) => {
    if (projectId) {
      // Enable project fields
      form.setValue('hasProject', true);
      form.setValue('projectId', projectId);
    } else {
      // Disable and clear project fields
      form.setValue('hasProject', false);
      form.setValue('projectId', undefined);
      form.setValue('member_role', undefined);
      form.setValue('member_professions', undefined);
    }
  };

  const isProjectSelected = useWatch({ control: form.control, name: 'hasProject' });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Mail className="mr-2 h-4 w-4" />
          Invite Member
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] max-w-3xl overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Add New Team Member</DialogTitle>
          <DialogDescription>Invite a new member to join your team</DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter full name" {...field} />
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
                      <Input type="email" placeholder="Enter email address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Role</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select role" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="admin">Admin</SelectItem>
                        <SelectItem value="developer">Developer</SelectItem>
                        <SelectItem value="tester">Tester</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                name="projectId"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Assignment</FormLabel>
                    <Select onValueChange={handleProjectChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select project" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {projects.map((item) => (
                          <SelectItem key={item.id} value={item.name}>
                            {item.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="professions"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Profession</FormLabel>
                  <SelectedProfessionView onChange={field.onChange} values={field.value || []} />
                  <Select onValueChange={(e) => field.onChange([...(field.value || []), e])} value="">
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select profession" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <ProfessionsSelector values={field.value} />
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Invitation Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Welcome to our team! We're excited to have you join us..."
                      className="min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>Personalize your invitation message (10-500 characters)</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {isProjectSelected && (
              <div className="grid grid-cols-1 gap-4">
                <FormField
                  name="member_professions"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Member profession in project</FormLabel>
                      <SelectedProfessionView onChange={field.onChange} values={field.value || []} />
                      <Select onValueChange={(e) => field.onChange([...(field.value || []), e])}>
                        <FormControl>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select profession" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <ProfessionsSelector values={field.value} />
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="member_role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Member role in project</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select role" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="lead">Team Lead</SelectItem>
                          <SelectItem value="member">Member</SelectItem>
                          <SelectItem value="viewer">Viewer</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}

            <div className="flex justify-end gap-2">
              <Button disabled={isPending} type="button" variant="outline" onClick={() => form.reset()}>
                Cancel
              </Button>

              <LoadingButton isLoading={isPending} type="submit">
                Send Invitation
              </LoadingButton>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

const SelectedProfessionView = (props: { onChange: (e: string[]) => void; values: string[] }) => {
  const { onChange, values } = props;

  return (
    <div className="flex flex-wrap gap-2">
      {values.map((item) => (
        <div
          key={item}
          className="border-primary bg-secondary flex min-w-fit flex-1 basis-[100px] items-center justify-between gap-3 rounded-md border px-3 py-1 text-sm dark:text-white [&>svg]:size-4 [&>svg]:cursor-pointer"
        >
          <span>{item}</span>
          <X onClick={() => onChange(values.filter((e) => e !== item))} />
        </div>
      ))}
    </div>
  );
};
