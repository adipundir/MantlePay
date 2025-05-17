import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Search, Download, Filter, CheckCircle, XCircle } from "lucide-react"
import Link from "next/link"

export default function WebhooksPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Webhook Logs</h1>
          <p className="text-muted-foreground">Monitor and debug your webhook deliveries.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Plus className="h-4 w-4" />
            Add Endpoint
          </Button>
          <Button className="gap-2">Configure Webhooks</Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Webhook Endpoints</CardTitle>
          <CardDescription>Your configured webhook endpoints.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto rounded-md border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/50">
                  <th className="whitespace-nowrap px-4 py-3 text-left font-medium">URL</th>
                  <th className="whitespace-nowrap px-4 py-3 text-left font-medium">Events</th>
                  <th className="whitespace-nowrap px-4 py-3 text-left font-medium">Status</th>
                  <th className="whitespace-nowrap px-4 py-3 text-left font-medium">Last Delivery</th>
                  <th className="whitespace-nowrap px-4 py-3 text-left font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    url: "https://example.com/webhooks/mantlepay",
                    events: "payment.created, payment.completed",
                    status: "active",
                    lastDelivery: "2025-05-11 14:32:10",
                  },
                  {
                    url: "https://api.myapp.com/payments/webhook",
                    events: "payment.*",
                    status: "active",
                    lastDelivery: "2025-05-11 14:30:05",
                  },
                  {
                    url: "https://backup-server.example.com/hooks",
                    events: "payment.completed",
                    status: "inactive",
                    lastDelivery: "2025-05-10 09:15:22",
                  },
                ].map((endpoint, i) => (
                  <tr key={i} className="border-t">
                    <td className="whitespace-nowrap px-4 py-3 font-mono text-xs">{endpoint.url}</td>
                    <td className="whitespace-nowrap px-4 py-3 font-mono text-xs">{endpoint.events}</td>
                    <td className="whitespace-nowrap px-4 py-3">
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          endpoint.status === "active"
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                            : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                        }`}
                      >
                        {endpoint.status}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-4 py-3 text-xs">{endpoint.lastDelivery}</td>
                    <td className="whitespace-nowrap px-4 py-3">
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                        <Button variant="ghost" size="sm">
                          Test
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Webhook Delivery Logs</CardTitle>
          <CardDescription>Recent webhook delivery attempts and their status.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Search webhook logs..." className="pl-8" />
                </div>
              </div>
              <div className="flex gap-2">
                <Select defaultValue="all">
                  <SelectTrigger className="w-[160px]">
                    <Filter className="mr-2 h-4 w-4" />
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="success">Success</SelectItem>
                    <SelectItem value="failed">Failed</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="icon">
                  <Download className="h-4 w-4" />
                  <span className="sr-only">Download</span>
                </Button>
              </div>
            </div>

            <div className="overflow-x-auto rounded-md border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="whitespace-nowrap px-4 py-3 text-left font-medium">ID</th>
                    <th className="whitespace-nowrap px-4 py-3 text-left font-medium">Event</th>
                    <th className="whitespace-nowrap px-4 py-3 text-left font-medium">URL</th>
                    <th className="whitespace-nowrap px-4 py-3 text-left font-medium">Status</th>
                    <th className="whitespace-nowrap px-4 py-3 text-left font-medium">Response</th>
                    <th className="whitespace-nowrap px-4 py-3 text-left font-medium">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      id: "evt_123456789",
                      event: "payment.completed",
                      url: "https://example.com/webhooks/mantlepay",
                      status: "success",
                      response: "200 OK",
                      time: "2025-05-11 14:32:10",
                    },
                    {
                      id: "evt_123456788",
                      event: "payment.created",
                      url: "https://example.com/webhooks/mantlepay",
                      status: "success",
                      response: "200 OK",
                      time: "2025-05-11 14:30:05",
                    },
                    {
                      id: "evt_123456787",
                      event: "payment.created",
                      url: "https://api.myapp.com/payments/webhook",
                      status: "success",
                      response: "200 OK",
                      time: "2025-05-11 14:30:05",
                    },
                    {
                      id: "evt_123456786",
                      event: "payment.failed",
                      url: "https://api.myapp.com/payments/webhook",
                      status: "success",
                      response: "200 OK",
                      time: "2025-05-11 13:45:22",
                    },
                    {
                      id: "evt_123456785",
                      event: "payment.completed",
                      url: "https://backup-server.example.com/hooks",
                      status: "failed",
                      response: "Connection timeout",
                      time: "2025-05-10 09:15:22",
                    },
                    {
                      id: "evt_123456784",
                      event: "payment.completed",
                      url: "https://api.myapp.com/payments/webhook",
                      status: "failed",
                      response: "500 Internal Server Error",
                      time: "2025-05-10 08:32:15",
                    },
                    {
                      id: "evt_123456783",
                      event: "payment.created",
                      url: "https://example.com/webhooks/mantlepay",
                      status: "success",
                      response: "200 OK",
                      time: "2025-05-10 07:12:33",
                    },
                  ].map((log) => (
                    <tr key={log.id} className="border-t">
                      <td className="whitespace-nowrap px-4 py-3">
                        <Link href={`/console/webhooks/${log.id}`} className="text-primary hover:underline">
                          {log.id}
                        </Link>
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 font-mono text-xs">{log.event}</td>
                      <td className="whitespace-nowrap px-4 py-3 font-mono text-xs max-w-[200px] truncate">
                        {log.url}
                      </td>
                      <td className="whitespace-nowrap px-4 py-3">
                        {log.status === "success" ? (
                          <div className="flex items-center gap-1 text-green-600 dark:text-green-400">
                            <CheckCircle className="h-4 w-4" />
                            <span>Success</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-1 text-red-600 dark:text-red-400">
                            <XCircle className="h-4 w-4" />
                            <span>Failed</span>
                          </div>
                        )}
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 font-mono text-xs">{log.response}</td>
                      <td className="whitespace-nowrap px-4 py-3 text-xs">{log.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            Showing <strong>1-7</strong> of <strong>124</strong> webhook logs
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" disabled>
              Previous
            </Button>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
