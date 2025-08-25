import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const Settings = () => {
  return (
    <TabsContent value="settings" className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Project Settings</CardTitle>
          <CardDescription>Manage project configuration and permissions</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Project Name</label>
            <Input />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Description</label>
            <Textarea rows={3} />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Project Status</label>
            <Select defaultValue="planning">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="planning">Planning</SelectItem>
                <SelectItem value="in-progress">In Progress</SelectItem>
                <SelectItem value="on-hold">On Hold</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Separator />
          <div className="space-y-4">
            <h4 className="text-destructive text-sm font-medium">Danger Zone</h4>
            <div className="border-destructive/20 flex items-center justify-between rounded-lg border p-4">
              <div>
                <h5 className="font-medium">Delete Project</h5>
                <p className="text-muted-foreground text-sm">Permanently delete this project and all its data</p>
              </div>
              <Button variant="destructive" size="sm">
                Delete Project
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </TabsContent>
  );
};
