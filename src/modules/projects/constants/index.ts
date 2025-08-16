import { Folder, Globe, Lock, Users } from 'lucide-react';

export const projectTypes = [
  { value: 'web', label: 'Web Application', icon: Globe },
  { value: 'mobile', label: 'Mobile App', icon: Users },
  { value: 'desktop', label: 'Desktop App', icon: Folder },
  { value: 'api', label: 'API/Backend', icon: Globe },
  { value: 'other', label: 'Other', icon: Folder },
];

export const visibilityOptions = [
  { value: 'public', label: 'Public', description: 'Anyone can view this project', icon: Globe },
  { value: 'private', label: 'Private', description: 'Only you can access this project', icon: Lock },
  { value: 'team', label: 'Team', description: 'Only team members can access', icon: Users },
];

export const teamMembers = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    avatar: '/placeholder.svg?height=32&width=32',
    role: 'Developer',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    avatar: '/placeholder.svg?height=32&width=32',
    role: 'Designer',
  },
  {
    id: '3',
    name: 'Mike Johnson',
    email: 'mike@example.com',
    avatar: '/placeholder.svg?height=32&width=32',
    role: 'Manager',
  },
  {
    id: '4',
    name: 'Sarah Wilson',
    email: 'sarah@example.com',
    avatar: '/placeholder.svg?height=32&width=32',
    role: 'QA',
  },
  {
    id: '5',
    name: 'David Brown',
    email: 'david@example.com',
    avatar: '/placeholder.svg?height=32&width=32',
    role: 'Developer',
  },
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    avatar: '/placeholder.svg?height=32&width=32',
    role: 'Developer',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    avatar: '/placeholder.svg?height=32&width=32',
    role: 'Designer',
  },
  {
    id: '3',
    name: 'Mike Johnson',
    email: 'mike@example.com',
    avatar: '/placeholder.svg?height=32&width=32',
    role: 'Manager',
  },
  {
    id: '4',
    name: 'Sarah Wilson',
    email: 'sarah@example.com',
    avatar: '/placeholder.svg?height=32&width=32',
    role: 'QA',
  },
  {
    id: '5',
    name: 'David Brown',
    email: 'david@example.com',
    avatar: '/placeholder.svg?height=32&width=32',
    role: 'Developer',
  },
];

export const priorityConfig = {
  low: { label: 'Low', color: 'bg-gray-500' },
  medium: { label: 'Medium', color: 'bg-yellow-500' },
  high: { label: 'High', color: 'bg-orange-500' },
  critical: { label: 'Critical', color: 'bg-red-500' },
};
