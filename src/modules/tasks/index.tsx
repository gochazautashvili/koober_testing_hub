import { Filters } from './components/sections/filters';
import { Header } from './components/sections/header';
import { Tabs } from './components/tabs';

export const TasksView = () => {
  return (
    <div className="flex flex-col gap-6">
      <Header />
      <Filters />
      <Tabs />
    </div>
  );
};

// <Collapsible open={filtersOpen} onOpenChange={setFiltersOpen}>
//   <div className={`transition-all duration-300 ${filtersOpen ? 'w-80' : 'w-12'}`}>
//     <Card className="h-fit">
//       <CardHeader className="pb-3">
//         <div className="flex items-center justify-between">
//           <CardTitle className={`text-lg ${!filtersOpen && 'sr-only'}`}>Filters</CardTitle>
//           <CollapsibleTrigger asChild>
//             <Button variant="ghost" size="sm">
//               {filtersOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
//             </Button>
//           </CollapsibleTrigger>
//         </div>
//       </CardHeader>
//       <CollapsibleContent>
//         <CardContent className="space-y-4">
//           {/* My Tasks Toggle */}
//           <div className="flex items-center space-x-2">
//             <Checkbox
//               id="my-tasks"
//               checked={filters.myTasks}
//               onCheckedChange={(checked) => setFilters((prev) => ({ ...prev, myTasks: !!checked }))}
//             />
//             <label htmlFor="my-tasks" className="text-sm font-medium">
//               My Tasks Only
//             </label>
//           </div>

//           <Separator />

//           {/* Project Filter */}
//           <div className="space-y-2">
//             <label className="text-sm font-medium">Projects</label>
//             <Select>
//               <SelectTrigger>
//                 <SelectValue placeholder="Select projects..." />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="ecommerce">E-commerce Platform</SelectItem>
//                 <SelectItem value="mobile">Mobile App Redesign</SelectItem>
//                 <SelectItem value="api">API Integration</SelectItem>
//                 <SelectItem value="dashboard">User Dashboard</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>

//           {/* Assignee Filter */}
//           <div className="space-y-2">
//             <label className="text-sm font-medium">Assignees</label>
//             <Select>
//               <SelectTrigger>
//                 <SelectValue placeholder="Select assignees..." />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="sarah">Sarah Chen</SelectItem>
//                 <SelectItem value="mike">Mike Johnson</SelectItem>
//                 <SelectItem value="alex">Alex Kim</SelectItem>
//                 <SelectItem value="emma">Emma Davis</SelectItem>
//                 <SelectItem value="john">John Doe</SelectItem>
//                 <SelectItem value="lisa">Lisa Wang</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>

//           {/* Severity Filter */}
//           <div className="space-y-2">
//             <label className="text-sm font-medium">Severity</label>
//             <div className="space-y-2">
//               {['High', 'Medium', 'Low'].map((severity) => (
//                 <div key={severity} className="flex items-center space-x-2">
//                   <Checkbox id={`severity-${severity.toLowerCase()}`} />
//                   <label htmlFor={`severity-${severity.toLowerCase()}`} className="text-sm">
//                     {severity}
//                   </label>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <Separator />

//           {/* Clear Filters */}
//           <Button variant="outline" size="sm" className="w-full bg-transparent">
//             <RotateCcw className="mr-2 h-4 w-4" />
//             Clear Filters
//           </Button>
//         </CardContent>
//       </CollapsibleContent>
//     </Card>
//   </div>
// </Collapsible>;
