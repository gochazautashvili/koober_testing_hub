import { AlertTriangle, ArrowDown, ArrowUp, Bug, CheckCircle2, Minus, XCircle } from 'lucide-react';
import { user_role } from '@/generated/prisma/prisma';

export function isOverdue(dueDate: string) {
  return new Date(dueDate) < new Date();
}

export function getSeverityColor(severity: string) {
  switch (severity) {
    case 'High':
      return 'destructive';
    case 'Medium':
      return 'default';
    case 'Low':
      return 'secondary';
    default:
      return 'secondary';
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

export function getRoleColor(role: user_role) {
  if (role === 'admin') return 'default';

  if (role === 'developer') return 'secondary';

  return 'outline';
}

export function getStatusIcon(status: string) {
  switch (status) {
    case 'Open':
      return <Bug className="h-4 w-4 text-red-500" />;
    case 'In Progress':
      return <AlertTriangle className="h-4 w-4 text-orange-500" />;
    case 'Resolved':
      return <CheckCircle2 className="h-4 w-4 text-green-500" />;
    case 'Closed':
      return <XCircle className="h-4 w-4 text-gray-500" />;
    default:
      return <Bug className="h-4 w-4 text-gray-500" />;
  }
}

export const getHealthColor = (health: string) => {
  switch (health) {
    case 'Good':
      return 'text-green-600 bg-green-50 border-green-200';
    case 'At Risk':
      return 'text-yellow-600 bg-yellow-50 border-yellow-200';
    case 'Critical':
      return 'text-red-600 bg-red-50 border-red-200';
    default:
      return 'text-gray-600 bg-gray-50 border-gray-200';
  }
};
