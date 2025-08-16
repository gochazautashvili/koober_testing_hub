import { FileText } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import { TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';

export const Files = () => {
  return (
    <TabsContent value="files" className="space-y-6">
      <Card>
        <CardContent className="p-8 text-center">
          <FileText className="text-muted-foreground mx-auto mb-4 h-12 w-12" />
          <h3 className="mb-2 text-lg font-medium">No files uploaded yet</h3>
          <p className="text-muted-foreground mb-4">Upload project files, documents, and assets here.</p>
          <Button>Upload Files</Button>
        </CardContent>
      </Card>
    </TabsContent>
  );
};
