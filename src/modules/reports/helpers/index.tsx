import { AlertTriangle, Bug, CheckCircle2, XCircle } from 'lucide-react';

export function getSeverityColor(severity: string) {
  switch (severity) {
    case 'Critical':
      return 'destructive';
    case 'High':
      return 'default';
    case 'Medium':
      return 'secondary';
    case 'Low':
      return 'outline';
    default:
      return 'secondary';
  }
}

export function getStatusColor(status: string) {
  switch (status) {
    case 'Open':
      return 'destructive';
    case 'In Progress':
      return 'default';
    case 'Resolved':
      return 'secondary';
    case 'Closed':
      return 'outline';
    default:
      return 'secondary';
  }
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
