import { ArrowUpDown } from 'lucide-react';

import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

import { TableData } from '../common/table-body';

export const ListView = () => {
  return (
    <Card className="py-2">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12"></TableHead>
            <TableHead>
              <Button variant="ghost" className="h-auto p-0 font-medium">
                Name <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead className="text-center">Projects</TableHead>
            <TableHead className="text-center">Tasks</TableHead>
            <TableHead>Last Active</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableData />
        </TableBody>
      </Table>
    </Card>
  );
};
