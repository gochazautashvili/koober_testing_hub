import { AlertCircle, AlertTriangle, Bug, Database, Flame, Globe, Info, Smartphone } from 'lucide-react';

export const projects = [
  { id: '1', name: 'E-commerce Platform', icon: '🛒', team: ['John', 'Sarah', 'Mike'] },
  { id: '2', name: 'Mobile App', icon: '📱', team: ['Alice', 'Bob', 'Carol'] },
  { id: '3', name: 'Analytics Dashboard', icon: '📊', team: ['David', 'Emma', 'Frank'] },
];

export const developers = [
  { id: '1', name: 'John Doe', avatar: '/placeholder.svg?height=32&width=32', tasks: 5, role: 'Frontend' },
  { id: '2', name: 'Sarah Wilson', avatar: '/placeholder.svg?height=32&width=32', tasks: 3, role: 'Backend' },
  { id: '3', name: 'Mike Johnson', avatar: '/placeholder.svg?height=32&width=32', tasks: 7, role: 'Full Stack' },
  { id: '4', name: 'Alice Brown', avatar: '/placeholder.svg?height=32&width=32', tasks: 2, role: 'QA' },
];

export const bugTypes = [
  { id: 'ui', label: 'UI/UX Issue', icon: Smartphone },
  { id: 'functionality', label: 'Functionality', icon: Bug },
  { id: 'performance', label: 'Performance', icon: AlertTriangle },
  { id: 'security', label: 'Security', icon: AlertCircle },
  { id: 'api', label: 'API/Backend', icon: Database },
  { id: 'browser', label: 'Browser Compatibility', icon: Globe },
];

export const severityLevels = [
  { id: 'critical', label: 'Critical', color: 'bg-red-500', icon: Flame, description: 'System down, blocking' },
  {
    id: 'high',
    label: 'High',
    color: 'bg-orange-500',
    icon: AlertTriangle,
    description: 'Major functionality affected',
  },
  {
    id: 'medium',
    label: 'Medium',
    color: 'bg-yellow-500',
    icon: AlertCircle,
    description: 'Minor functionality affected',
  },
  { id: 'low', label: 'Low', color: 'bg-blue-500', icon: Info, description: 'Cosmetic or enhancement' },
];

export const templates = [
  'UI Bug Report',
  'Performance Issue',
  'Security Vulnerability',
  'API Error',
  'Browser Compatibility',
];

export const recentBugs = [
  { id: '1', title: 'Login button not responsive', severity: 'medium', project: 'E-commerce Platform' },
  { id: '2', title: 'Payment gateway timeout', severity: 'high', project: 'E-commerce Platform' },
  { id: '3', title: 'Dashboard loading slowly', severity: 'low', project: 'Analytics Dashboard' },
];
