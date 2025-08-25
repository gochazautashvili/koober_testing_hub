export const teamMembers = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'Frontend Developer',
    email: 'sarah@company.com',
    avatar: '/placeholder.svg?height=40&width=40',
    tasksCount: 8,
  },
  {
    id: 2,
    name: 'Mike Johnson',
    role: 'Backend Developer',
    email: 'mike@company.com',
    avatar: '/placeholder.svg?height=40&width=40',
    tasksCount: 12,
  },
  {
    id: 3,
    name: 'Emily Davis',
    role: 'UI/UX Designer',
    email: 'emily@company.com',
    avatar: '/placeholder.svg?height=40&width=40',
    tasksCount: 6,
  },
  {
    id: 4,
    name: 'Alex Wilson',
    role: 'DevOps Engineer',
    email: 'alex@company.com',
    avatar: '/placeholder.svg?height=40&width=40',
    tasksCount: 4,
  },
  {
    id: 5,
    name: 'Lisa Park',
    role: 'QA Engineer',
    email: 'lisa@company.com',
    avatar: '/placeholder.svg?height=40&width=40',
    tasksCount: 9,
  },
  {
    id: 6,
    name: 'David Kim',
    role: 'Product Manager',
    email: 'david@company.com',
    avatar: '/placeholder.svg?height=40&width=40',
    tasksCount: 6,
  },
];

export const stats = [
  { title: 'Total Tasks', value: '45', change: '+3', trend: 'up' },
  { title: 'Completed', value: '31', change: '+5', trend: 'up' },
  { title: 'In Progress', value: '8', change: '-2', trend: 'down' },
  { title: 'Overdue', value: '2', change: '0', trend: 'neutral' },
];

export const activities = [
  {
    id: 1,
    user: 'Sarah Chen',
    action: 'completed task',
    target: 'User Authentication',
    time: '2 hours ago',
    type: 'completed',
  },
  {
    id: 2,
    user: 'Mike Johnson',
    action: 'created bug report',
    target: 'Payment Gateway Issue',
    time: '4 hours ago',
    type: 'bug',
  },
  {
    id: 3,
    user: 'Emily Davis',
    action: 'updated task',
    target: 'Database Migration',
    time: '6 hours ago',
    type: 'updated',
  },
  { id: 4, user: 'Alex Wilson', action: 'joined project', target: '', time: '1 day ago', type: 'joined' },
];
 
export const project = {
  id: 1,
  name: 'project',
  status: 'In Progress',
  description: 'njbiuyhoidbslihfojfi',
  startDate: '2024-01-15',
  endDate: '2024-06-30',
  progress: 68,
  health: 'Good', // Good, At Risk, Critical
  totalTasks: 45,
  completedTasks: 31,
  teamSize: 8,
};
