export const mockTask = {
    id: 'TASK-001',
    title: 'Fix login form validation',
    description: `## Problem Description
  
  The current login form validation has several issues that need to be addressed:
  
  1. **Email validation** - Not properly handling edge cases like international domains
  2. **Password strength** - Missing requirements feedback
  3. **Error messages** - Generic messages that don't help users understand the issue
  
  ## Acceptance Criteria
  
  - [ ] Implement proper email validation with international domain support
  - [ ] Add real-time password strength indicator
  - [ ] Provide specific, actionable error messages
  - [ ] Add proper ARIA labels for accessibility
  
  ## Technical Notes
  
  The validation logic is currently in \`components/auth/LoginForm.tsx\`. We should extract this into a reusable validation utility.`,
    status: 'In Progress',
    priority: 'High',
    severity: 'Medium',
    project: {
      id: 'proj-1',
      name: 'E-commerce Platform',
      color: 'blue',
    },
    assignee: {
      id: 'user-1',
      name: 'Sarah Chen',
      avatar: '/placeholder.svg?height=32&width=32',
      initials: 'SC',
      email: 'sarah@company.com',
    },
    reporter: {
      id: 'user-2',
      name: 'Mike Johnson',
      avatar: '/placeholder.svg?height=32&width=32',
      initials: 'MJ',
    },
    dueDate: new Date('2024-01-25'),
    createdDate: new Date('2024-01-20'),
    updatedDate: new Date('2024-01-23'),
    estimatedHours: 8,
    loggedHours: 3.5,
    tags: ['Frontend', 'Validation', 'UX'],
    watchers: [
      { id: 'user-3', name: 'Alex Kim', initials: 'AK' },
      { id: 'user-4', name: 'Emma Davis', initials: 'ED' },
    ],
    attachments: [
      {
        id: 'att-1',
        name: 'login-form-mockup.png',
        size: '2.4 MB',
        type: 'image',
        url: '/placeholder.svg?height=200&width=300',
      },
      {
        id: 'att-2',
        name: 'validation-requirements.pdf',
        size: '156 KB',
        type: 'document',
      },
    ],
    subtasks: [
      { id: 'sub-1', title: 'Research email validation libraries', completed: true },
      { id: 'sub-2', title: 'Implement password strength meter', completed: false },
      { id: 'sub-3', title: 'Update error message copy', completed: false },
      { id: 'sub-4', title: 'Add accessibility improvements', completed: false },
    ],
    relatedTasks: [
      { id: 'TASK-002', title: 'Update registration form validation', status: 'To Do' },
      { id: 'TASK-015', title: 'Implement forgot password flow', status: 'In Review' },
    ],
    activity: [
      {
        id: 'act-1',
        type: 'comment',
        user: { name: 'Sarah Chen', initials: 'SC', avatar: '/placeholder.svg?height=32&width=32' },
        timestamp: new Date('2024-01-23T14:30:00'),
        content:
          "I've started working on the email validation. Found a good library that supports international domains.",
      },
      {
        id: 'act-2',
        type: 'status_change',
        user: { name: 'Mike Johnson', initials: 'MJ', avatar: '/placeholder.svg?height=32&width=32' },
        timestamp: new Date('2024-01-23T10:15:00'),
        content: 'Status changed from To Do to In Progress',
        oldValue: 'To Do',
        newValue: 'In Progress',
      },
      {
        id: 'act-3',
        type: 'assignment',
        user: { name: 'Mike Johnson', initials: 'MJ', avatar: '/placeholder.svg?height=32&width=32' },
        timestamp: new Date('2024-01-22T16:45:00'),
        content: 'Assigned to Sarah Chen',
      },
      {
        id: 'act-4',
        type: 'time_entry',
        user: { name: 'Sarah Chen', initials: 'SC', avatar: '/placeholder.svg?height=32&width=32' },
        timestamp: new Date('2024-01-22T11:20:00'),
        content: 'Logged 2.5 hours - Initial research and planning',
      },
    ],
    comments: [
      {
        id: 'comm-1',
        user: { name: 'Mike Johnson', initials: 'MJ', avatar: '/placeholder.svg?height=32&width=32' },
        timestamp: new Date('2024-01-21T09:30:00'),
        content:
          "This is a high priority item for the next release. Let's make sure we cover all the edge cases mentioned in the requirements.",
        replies: [
          {
            id: 'reply-1',
            user: { name: 'Sarah Chen', initials: 'SC', avatar: '/placeholder.svg?height=32&width=32' },
            timestamp: new Date('2024-01-21T10:15:00'),
            content: "Agreed! I'll start with the email validation research today.",
          },
        ],
      },
    ],
  };