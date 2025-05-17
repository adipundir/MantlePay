import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Copy, Eye, Plus, RefreshCw } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function ApiKeysPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">API Keys</h1>
          <p className="text-muted-foreground">Manage your API keys for integrating with MantlePay.</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Generate New Key
        </Button>
      </div>

      <Tabs defaultValue="live">
        <TabsList>
          <TabsTrigger value="live">Live Keys</TabsTrigger>
          <TabsTrigger value="test">Test Keys</TabsTrigger>
        </TabsList>
        <TabsContent value="live" className="mt-4 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Live API Keys</CardTitle>
              <CardDescription>
                Use these keys in production environments. Keep them secure and never share them publicly.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="live-publishable-key">Publishable Key</Label>
                  <div className="flex items-center gap-2">
                    <Input
                      id="live-publishable-key"
                      value="pk_live_51NxT8QJHRsn7WgYp2vQpJyZZG"
                      readOnly
                      className="font-mono"
                    />
                    <Button variant="outline" size="icon" className="shrink-0">
                      <Copy className="h-4 w-4" />
                      <span className="sr-only">Copy</span>
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Safe to use in public environments like your frontend code.
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="live-secret-key">Secret Key</Label>
                  <div className="flex items-center gap-2">
                    <Input
                      id="live-secret-key"
                      type="password"
                      value="sk_live_51NxT8QJHRsn7WgYp2vQpJyZZGLxfKATkUg"
                      readOnly
                      className="font-mono"
                    />
                    <Button variant="outline" size="icon" className="shrink-0">
                      <Eye className="h-4 w-4" />
                      <span className="sr-only">Show</span>
                    </Button>
                    <Button variant="outline" size="icon" className="shrink-0">
                      <Copy className="h-4 w-4" />
                      <span className="sr-only">Copy</span>
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Keep this secret. Use only in secure server-side environments.
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="live-webhook-key">Webhook Signing Secret</Label>
                  <div className="flex items-center gap-2">
                    <Input
                      id="live-webhook-key"
                      type="password"
                      value="whsec_8QJHRsn7WgYp2vQpJyZZGLxfKATkUg"
                      readOnly
                      className="font-mono"
                    />
                    <Button variant="outline" size="icon" className="shrink-0">
                      <Eye className="h-4 w-4" />
                      <span className="sr-only">Show</span>
                    </Button>
                    <Button variant="outline" size="icon" className="shrink-0">
                      <Copy className="h-4 w-4" />
                      <span className="sr-only">Copy</span>
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">Used to verify webhook requests from MantlePay.</p>
                </div>
              </div>

              <div className="flex items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <h3 className="font-medium">Rotate Keys</h3>
                  <p className="text-sm text-muted-foreground">Generate new API keys and invalidate old ones.</p>
                </div>
                <Button variant="destructive" size="sm" className="gap-2">
                  <RefreshCw className="h-4 w-4" />
                  Rotate Keys
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="test" className="mt-4 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Test API Keys</CardTitle>
              <CardDescription>
                Use these keys for development and testing. They don't affect live data.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="test-publishable-key">Publishable Key</Label>
                  <div className="flex items-center gap-2">
                    <Input
                      id="test-publishable-key"
                      value="pk_test_51NxT8QJHRsn7WgYp2vQpJyZZG"
                      readOnly
                      className="font-mono"
                    />
                    <Button variant="outline" size="icon" className="shrink-0">
                      <Copy className="h-4 w-4" />
                      <span className="sr-only">Copy</span>
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="test-secret-key">Secret Key</Label>
                  <div className="flex items-center gap-2">
                    <Input
                      id="test-secret-key"
                      value="sk_test_51NxT8QJHRsn7WgYp2vQpJyZZGLxfKATkUg"
                      readOnly
                      className="font-mono"
                    />
                    <Button variant="outline" size="icon" className="shrink-0">
                      <Copy className="h-4 w-4" />
                      <span className="sr-only">Copy</span>
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="test-webhook-key">Webhook Signing Secret</Label>
                  <div className="flex items-center gap-2">
                    <Input
                      id="test-webhook-key"
                      value="whsec_test_8QJHRsn7WgYp2vQpJyZZGLxfKATkUg"
                      readOnly
                      className="font-mono"
                    />
                    <Button variant="outline" size="icon" className="shrink-0">
                      <Copy className="h-4 w-4" />
                      <span className="sr-only">Copy</span>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="test-mode" />
                <Label htmlFor="test-mode">Enable test mode in production</Label>
              </div>
              <p className="text-sm text-muted-foreground">
                When enabled, you can use test keys in production by adding the{" "}
                <code className="text-xs bg-muted p-1 rounded">test=true</code> parameter to API requests.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>API Key Permissions</CardTitle>
          <CardDescription>Control what actions each API key can perform.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="permission-read">Read Payments</Label>
                <p className="text-xs text-muted-foreground">Allow API keys to read payment information.</p>
              </div>
              <Switch id="permission-read" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="permission-write">Create Payments</Label>
                <p className="text-xs text-muted-foreground">Allow API keys to create new payments.</p>
              </div>
              <Switch id="permission-write" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="permission-webhook">Manage Webhooks</Label>
                <p className="text-xs text-muted-foreground">Allow API keys to create and update webhook endpoints.</p>
              </div>
              <Switch id="permission-webhook" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="permission-settings">Modify Settings</Label>
                <p className="text-xs text-muted-foreground">Allow API keys to modify account settings.</p>
              </div>
              <Switch id="permission-settings" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>API Key Usage</CardTitle>
          <CardDescription>Monitor your API key usage and rate limits.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium">Current Usage</h3>
              <div className="mt-2 space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Requests (Last 24h)</span>
                  <span className="font-medium">1,234 / 10,000</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                  <div className="h-full w-[12%] rounded-full bg-primary"></div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium">Rate Limits</h3>
              <div className="mt-2 space-y-1 text-sm">
                <div className="flex items-center justify-between">
                  <span>Read operations</span>
                  <span>1,000 / minute</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Write operations</span>
                  <span>100 / minute</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Webhook deliveries</span>
                  <span>60 / minute</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
