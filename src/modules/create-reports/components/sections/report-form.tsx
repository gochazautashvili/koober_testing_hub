'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Globe,
  Bug,
  Eye,
  Bold,
  Italic,
  Code,
  List,
  AlertTriangle,
  AlertCircle,
  Paperclip,
  Upload,
  X,
  FileText,
  ImageIcon,
  Search,
  Shield,
  Zap,
  Activity,
  Database,
  Palette,
  Settings,
  Lock,
} from 'lucide-react';
import { IReportValidations, report_schema } from '../../services/validations';

// Mock data
const projects = [
  { id: 'project-1', name: 'E-commerce Platform', icon: '🛒', team: ['Alice Johnson', 'Bob Smith', 'Carol Davis'] },
  { id: 'project-2', name: 'Mobile Banking App', icon: '📱', team: ['David Brown', 'Emma Wilson', 'Frank Miller'] },
  { id: 'project-3', name: 'Analytics Dashboard', icon: '📊', team: ['Grace Lee', 'Henry Chen', 'Isabel Garcia'] },
  {
    id: 'project-4',
    name: 'Content Management System',
    icon: '📝',
    team: ['Jack Thompson', 'Kate Anderson', 'Liam Martinez'],
  },
];

const severityLevels = [
  { id: 'low', label: 'Low', description: 'Minor issue', color: 'bg-green-500', icon: Shield },
  { id: 'medium', label: 'Medium', description: 'Moderate impact', color: 'bg-yellow-500', icon: AlertCircle },
  {
    id: 'high',
    label: 'High',
    description: 'Major functionality affected',
    color: 'bg-orange-500',
    icon: AlertTriangle,
  },
  { id: 'critical', label: 'Critical', description: 'System down', color: 'bg-red-500', icon: Zap },
];

const bugTypes = [
  { id: 'functional', label: 'Functional', icon: Activity },
  { id: 'ui', label: 'UI/UX', icon: Palette },
  { id: 'performance', label: 'Performance', icon: Zap },
  { id: 'compatibility', label: 'Compatibility', icon: Database },
  { id: 'security', label: 'Security', icon: Lock },
  { id: 'other', label: 'Other', icon: Settings },
];

const developers = [
  { id: 'dev-1', name: 'Alice Johnson', role: 'Senior Frontend Dev', tasks: 3, avatar: '' },
  { id: 'dev-2', name: 'Bob Smith', role: 'Backend Developer', tasks: 5, avatar: '' },
  { id: 'dev-3', name: 'Carol Davis', role: 'Full Stack Dev', tasks: 7, avatar: '' },
  { id: 'dev-4', name: 'David Brown', role: 'DevOps Engineer', tasks: 2, avatar: '' },
  { id: 'dev-5', name: 'Emma Wilson', role: 'QA Engineer', tasks: 4, avatar: '' },
];

const templates = [
  'UI Bug Template',
  'Performance Issue Template',
  'Security Vulnerability Template',
  'API Error Template',
];

export default function ReportForm() {
  const [showPreview, setShowPreview] = useState(false);
  const [searchDeveloper, setSearchDeveloper] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const form = useForm<IReportValidations>({
    resolver: zodResolver(report_schema),
    defaultValues: {
      project: '',
      title: '',
      description: '',
      severity: undefined,
      bugType: undefined,
      assignToSpecific: false,
      assignedDeveloper: '',
      template: '',
      files: [],
    },
  });

  const selectedProjectData = projects.find((p) => p.id === form.watch('project'));
  const assignToSpecific = form.watch('assignToSpecific');
  const selectedDeveloperData = developers.find((d) => d.id === form.watch('assignedDeveloper'));

  const filteredDevelopers = developers.filter(
    (dev) =>
      dev.name.toLowerCase().includes(searchDeveloper.toLowerCase()) ||
      dev.role.toLowerCase().includes(searchDeveloper.toLowerCase()),
  );

  const removeFile = (index: number) => {
    const newFiles = uploadedFiles.filter((_, i) => i !== index);
    setUploadedFiles(newFiles);
    form.setValue('files', newFiles);
  };

  const onSubmit = (data: IReportValidations) => {
    console.log('Form submitted:', data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex w-full flex-col gap-6">
        {/* Project Selection */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5" />
              Project Selection
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <FormField
                name="project"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Select Project</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Choose a project..." />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {projects.map((project) => (
                          <SelectItem key={project.id} value={project.id}>
                            <div className="flex items-center gap-2">
                              <span className="text-lg">{project.icon}</span>
                              {project.name}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                name="template"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Select Template</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Choose a template..." />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {templates.map((template) => (
                          <SelectItem key={template} value={template}>
                            {template}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {selectedProjectData && (
              <div className="rounded-lg bg-blue-50 p-4">
                <h4 className="mb-2 font-medium text-blue-900">Team Preview</h4>
                <div className="flex items-center gap-2">
                  {selectedProjectData.team.map((member, index) => (
                    <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-800">
                      {member}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Bug Details */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bug className="h-5 w-5" />
              Bug Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bug Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Brief description of the bug..." {...field} />
                  </FormControl>
                  <FormDescription>Provide a concise title for the bug (5-100 characters)</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <div className="mb-2 flex items-center justify-between">
                    <FormLabel>Description</FormLabel>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowPreview(!showPreview)}
                      className="flex items-center gap-1"
                    >
                      <Eye className="h-4 w-4" />
                      {showPreview ? 'Edit' : 'Preview'}
                    </Button>
                  </div>
                  <FormControl>
                    {!showPreview ? (
                      <div>
                        <div className="flex items-center gap-1 rounded-t-md border p-2">
                          <Button type="button" variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <Bold className="h-4 w-4" />
                          </Button>
                          <Button type="button" variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <Italic className="h-4 w-4" />
                          </Button>
                          <Button type="button" variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <Code className="h-4 w-4" />
                          </Button>
                          <Button type="button" variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <List className="h-4 w-4" />
                          </Button>
                        </div>
                        <Textarea
                          placeholder="Detailed description of the bug, steps to reproduce, expected vs actual behavior..."
                          className="min-h-32 rounded-t-none border-t-0"
                          {...field}
                        />
                      </div>
                    ) : (
                      <div className="min-h-32 rounded-md border bg-white p-4">
                        <div className="prose prose-sm max-w-none">
                          {field.value || <span className="text-gray-400">Preview will appear here...</span>}
                        </div>
                      </div>
                    )}
                  </FormControl>
                  <FormDescription>{field.value?.length || 0} characters (minimum 20 required)</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        {/* Classification */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" />
              Classification
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <FormField
              control={form.control}
              name="severity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Severity Level</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="grid grid-cols-2 gap-3"
                    >
                      {severityLevels.map((level) => {
                        const IconComponent = level.icon;
                        return (
                          <FormItem key={level.id}>
                            <FormControl>
                              <RadioGroupItem value={level.id} id={level.id} className="sr-only" />
                            </FormControl>
                            <FormLabel
                              htmlFor={level.id}
                              className={`cursor-pointer rounded-lg border-2 p-4 transition-all ${
                                field.value === level.id
                                  ? 'border-blue-500 bg-blue-50'
                                  : 'border-gray-200 hover:border-gray-300'
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <div className={`rounded-full p-2 ${level.color} text-white`}>
                                  <IconComponent className="h-4 w-4" />
                                </div>
                                <div>
                                  <div className="font-medium">{level.label}</div>
                                  <div className="text-sm text-gray-600">{level.description}</div>
                                </div>
                              </div>
                            </FormLabel>
                          </FormItem>
                        );
                      })}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="bugType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bug Type</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="grid grid-cols-2 gap-3"
                    >
                      {bugTypes.map((type) => {
                        const IconComponent = type.icon;
                        return (
                          <FormItem key={type.id} className="flex items-center space-x-2">
                            <FormControl>
                              <RadioGroupItem value={type.id} />
                            </FormControl>
                            <FormLabel htmlFor={type.id} className="flex cursor-pointer items-center gap-2 font-normal">
                              <IconComponent className="h-4 w-4" />
                              {type.label}
                            </FormLabel>
                          </FormItem>
                        );
                      })}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        {/* Assignment */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5" />
              Assignment
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="assignToSpecific"
              render={({ field }) => (
                <FormItem className="flex items-center justify-between">
                  <div className="space-y-1">
                    <FormLabel>Assignment Type</FormLabel>
                    <FormDescription>
                      {field.value ? 'Assign to specific developer' : 'Notify entire team'}
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                </FormItem>
              )}
            />

            {assignToSpecific && (
              <div className="space-y-3">
                <div className="relative">
                  <Search className="absolute top-3 left-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search developers..."
                    value={searchDeveloper}
                    onChange={(e) => setSearchDeveloper(e.target.value)}
                    className="pl-10"
                  />
                </div>

                <FormField
                  control={form.control}
                  name="assignedDeveloper"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="space-y-2">
                          {filteredDevelopers.map((developer) => (
                            <FormItem key={developer.id}>
                              <FormControl>
                                <RadioGroupItem value={developer.id} id={developer.id} className="sr-only" />
                              </FormControl>
                              <FormLabel
                                htmlFor={developer.id}
                                className={`block cursor-pointer rounded-lg border p-3 transition-all ${
                                  field.value === developer.id
                                    ? 'border-blue-500 bg-blue-50'
                                    : 'border-gray-200 hover:border-gray-300'
                                }`}
                              >
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-3">
                                    <Avatar className="h-8 w-8">
                                      <AvatarImage src={developer.avatar || '/placeholder.svg'} />
                                      <AvatarFallback>
                                        {developer.name
                                          .split(' ')
                                          .map((n) => n[0])
                                          .join('')}
                                      </AvatarFallback>
                                    </Avatar>
                                    <div>
                                      <div className="font-medium">{developer.name}</div>
                                      <div className="text-sm text-gray-600">{developer.role}</div>
                                    </div>
                                  </div>
                                  <Badge variant={developer.tasks > 5 ? 'destructive' : 'secondary'}>
                                    {developer.tasks} tasks
                                  </Badge>
                                </div>
                              </FormLabel>
                            </FormItem>
                          ))}
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {selectedDeveloperData && (
                  <div className="rounded-lg bg-green-50 p-3">
                    <div className="flex items-center gap-2 text-green-800">
                      <AlertCircle className="h-4 w-4" />
                      <span className="font-medium">Selected: {selectedDeveloperData.name}</span>
                    </div>
                    <p className="mt-1 text-sm text-green-700">
                      Current workload: {selectedDeveloperData.tasks} active tasks
                    </p>
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Attachments */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Paperclip className="h-5 w-5" />
              Attachments
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div
              className="cursor-pointer rounded-lg border-2 border-dashed border-gray-300 p-8 text-center transition-colors hover:border-gray-400"
              onClick={() => document.getElementById('file-upload')?.click()}
            >
              <Upload className="mx-auto mb-2 h-8 w-8 text-gray-400" />
              <p className="mb-1 text-gray-600">Drag & drop files here, or click to browse</p>
              <p className="text-sm text-gray-500">Supports images, documents, logs. Max 10MB per file.</p>
              <p className="mt-2 text-xs text-gray-400">
                💡 Tip: You can also paste screenshots from clipboard (Ctrl+V)
              </p>
            </div>

            {uploadedFiles.length > 0 && (
              <div className="space-y-2">
                <FormLabel>Uploaded Files ({uploadedFiles.length})</FormLabel>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {uploadedFiles.map((file, index) => (
                    <div key={index} className="flex items-center gap-3 rounded-lg border p-3">
                      <div className="flex-shrink-0">
                        {file.type.startsWith('image/') ? (
                          <ImageIcon className="h-8 w-8 text-blue-500" />
                        ) : (
                          <FileText className="h-8 w-8 text-gray-500" />
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate font-medium">{file.name}</p>
                        <p className="text-sm text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                      </div>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => removeFile(index)}
                        className="h-8 w-8 flex-shrink-0 p-0 text-red-500 hover:text-red-700"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Submit Button */}
        <div className="flex justify-end gap-3">
          <Button type="button" variant="outline">
            Save Draft
          </Button>
          <Button type="submit">Submit Bug Report</Button>
        </div>
      </form>
    </Form>
  );
}
