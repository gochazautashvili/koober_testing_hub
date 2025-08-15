import { ArrowDown, ArrowUp, Minus } from 'lucide-react';

export function isOverdue(dueDate: string) {
  return new Date(dueDate) < new Date();
}

export function getSeverityColor(severity: string) {
  switch (severity) {
    case 'High':
      return 'bg-red-100 text-red-800 border-red-200';
    case 'Medium':
      return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    case 'Low':
      return 'bg-green-100 text-green-800 border-green-200';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200';
  }
}

export function getStatusColor(status: string) {
  switch (status) {
    case 'Done':
      return 'default';
    case 'In Progress':
      return 'secondary';
    case 'In Review':
      return 'outline';
    case 'To Do':
      return 'destructive';
    default:
      return 'secondary';
  }
}

export function getPriorityIcon(priority: string) {
  switch (priority) {
    case 'Critical':
      return <ArrowUp className="h-4 w-4 text-red-500" />;
    case 'High':
      return <ArrowUp className="h-4 w-4 text-orange-500" />;
    case 'Medium':
      return <Minus className="h-4 w-4 text-yellow-500" />;
    case 'Low':
      return <ArrowDown className="h-4 w-4 text-green-500" />;
    default:
      return <Minus className="h-4 w-4 text-gray-500" />;
  }
}
