import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table';

import { Card } from '@/components/ui/card';
import { TableData } from '../common';

export const ListView = () => {
  return (
    <Card className="py-2">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Project</TableHead>
            <TableHead>Team</TableHead>
            <TableHead>Tasks</TableHead>
            <TableHead>Last Activity</TableHead>
            <TableHead className="w-12"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableData />
        </TableBody>
      </Table>
    </Card>
  );
};
