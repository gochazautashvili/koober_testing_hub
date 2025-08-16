import { Database, Save } from 'lucide-react';
import { Fragment } from 'react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const Integrations = () => {
  return (
    <TabsContent value="integrations">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-5 w-5" />
            API & Integrations
          </CardTitle>
          <CardDescription>Connect with external tools and manage API access</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">Connected Services</h4>
              <div className="space-y-3">
                {[
                  {
                    name: 'Slack',
                    description: 'Get notifications in your Slack channels',
                    connected: true,
                    icon: '💬',
                  },
                  {
                    name: 'GitHub',
                    description: 'Link bug reports to GitHub issues',
                    connected: true,
                    icon: '🐙',
                  },
                  {
                    name: 'Jira',
                    description: 'Sync with Jira for project management',
                    connected: false,
                    icon: '📋',
                  },
                  {
                    name: 'Discord',
                    description: 'Receive alerts in Discord servers',
                    connected: false,
                    icon: '🎮',
                  },
                  {
                    name: 'Microsoft Teams',
                    description: 'Collaborate with your team on Teams',
                    connected: false,
                    icon: '📊',
                  },
                ].map((integration, index) => (
                  <div key={index} className="flex items-center justify-between rounded-lg border p-4">
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">{integration.icon}</div>
                      <div>
                        <div className="font-medium">{integration.name}</div>
                        <p className="text-muted-foreground text-sm">{integration.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {integration.connected ? (
                        <Fragment>
                          <Badge variant="default">Connected</Badge>
                          <Button variant="outline" size="sm">
                            Configure
                          </Button>
                        </Fragment>
                      ) : (
                        <Button variant="outline" size="sm">
                          Connect
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <h4 className="font-medium">API Keys</h4>
              <p className="text-muted-foreground text-sm">Manage your API keys for programmatic access</p>
              <div className="space-y-3">
                <div className="flex items-center justify-between rounded-lg border p-3">
                  <div className="space-y-0.5">
                    <div className="text-sm font-medium">Production API Key</div>
                    <p className="text-muted-foreground font-mono text-xs">sk_live_...abc123</p>
                    <p className="text-muted-foreground text-xs">Created on Jan 15, 2025</p>
                  </div>
                  <Button variant="ghost" size="sm">
                    Revoke
                  </Button>
                </div>
                <Button variant="outline" className="w-full">
                  Generate New API Key
                </Button>
              </div>
            </div>

            <div className="flex justify-end">
              <Button>
                <Save className="mr-2 h-4 w-4" />
                Save Integration Settings
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </TabsContent>
  );
};
