import { Search, FolderIcon, CheckSquare, Bug, User, ExternalLink, Copy, Eye } from 'lucide-react';

import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const searchResults = [
  {
    id: '1',
    type: 'bug',
    title: 'Login validation fails on mobile devices',
    description:
      'Users are unable to log in using their credentials on mobile browsers. The validation seems to fail silently without proper error messages.',
    project: 'E-commerce Platform',
    status: 'Open',
    priority: 'High',
    assignee: 'John Doe',
    created: '2 days ago',
    matches: ['login', 'validation', 'mobile'],
  },
  {
    id: '2',
    type: 'task',
    title: 'Implement mobile-responsive navigation',
    description:
      'Create a responsive navigation component that works well on both desktop and mobile devices with proper touch interactions.',
    project: 'Mobile App Redesign',
    status: 'In Progress',
    priority: 'Medium',
    assignee: 'Sarah Johnson',
    created: '1 week ago',
    matches: ['mobile', 'navigation'],
  },
  {
    id: '3',
    type: 'project',
    title: 'Mobile App Redesign',
    description: 'Complete redesign of the mobile application with improved UX and performance optimizations.',
    status: 'Active',
    team: '8 members',
    created: '2 weeks ago',
    matches: ['mobile', 'app'],
  },
];

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'project':
      return <FolderIcon className="h-4 w-4" />;
    case 'task':
      return <CheckSquare className="h-4 w-4" />;
    case 'bug':
      return <Bug className="h-4 w-4" />;
    case 'user':
      return <User className="h-4 w-4" />;
    default:
      return <Search className="h-4 w-4" />;
  }
};

const getTypeColor = (type: string) => {
  switch (type) {
    case 'project':
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
    case 'task':
      return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
    case 'bug':
      return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
    case 'user':
      return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
  }
};

const highlightMatches = (text: string, matches: string[]) => {
  let highlightedText = text;
  matches.forEach((match) => {
    const regex = new RegExp(`(${match})`, 'gi');
    highlightedText = highlightedText.replace(
      regex,
      '<mark class="bg-yellow-200 dark:bg-yellow-800 px-1 rounded">$1</mark>',
    );
  });
  return { __html: highlightedText };
};

export const Results = () => {
  return (
    <ScrollArea className="flex-1">
      <div className="space-y-4 p-6">
        {searchResults.map((result) => (
          <Card key={result.id} className="transition-shadow hover:shadow-md">
            <CardContent className="p-6">
              <div className="mb-3 flex items-start justify-between">
                <div className="flex items-center gap-3">
                  {getTypeIcon(result.type)}
                  <div>
                    <h3
                      className="text-lg font-semibold"
                      dangerouslySetInnerHTML={highlightMatches(result.title, result.matches)}
                    />
                    <div className="mt-1 flex items-center gap-2">
                      <Badge className={getTypeColor(result.type)}>{result.type}</Badge>
                      {result.status && <Badge variant="outline">{result.status}</Badge>}
                      {result.priority && (
                        <Badge
                          variant="outline"
                          className={
                            result.priority === 'High'
                              ? 'border-red-500 text-red-700'
                              : result.priority === 'Medium'
                                ? 'border-yellow-500 text-yellow-700'
                                : 'border-green-500 text-green-700'
                          }
                        >
                          {result.priority}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Copy className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <p
                className="text-muted-foreground mb-3"
                dangerouslySetInnerHTML={highlightMatches(result.description, result.matches)}
              />

              <div className="text-muted-foreground flex items-center justify-between text-sm">
                <div className="flex items-center gap-4">
                  {result.project && (
                    <span>
                      Project: <strong>{result.project}</strong>
                    </span>
                  )}
                  {result.assignee && (
                    <span>
                      Assignee: <strong>{result.assignee}</strong>
                    </span>
                  )}
                  {result.team && (
                    <span>
                      Team: <strong>{result.team}</strong>
                    </span>
                  )}
                </div>
                <span>Created {result.created}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </ScrollArea>
  );
};
