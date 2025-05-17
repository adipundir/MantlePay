import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowUpRight, ArrowDownRight, Plus, ExternalLink, Key, Webhook } from "lucide-react"

export default function ConsolePage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's an overview of your payment activity.</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Create Payment
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Volume</CardTitle>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$12,345.67</div>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">98.2%</div>
            <p className="text-xs text-muted-foreground">+1.2% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Payments</CardTitle>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground">+15.3% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Avg. Payment</CardTitle>
            <ArrowDownRight className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$42.31</div>
            <p className="text-xs text-muted-foreground">-3.4% from last month</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="recent">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="recent">Recent Payments</TabsTrigger>
            <TabsTrigger value="popular">Popular Tokens</TabsTrigger>
          </TabsList>
          <Link href="/console/payments">
            <Button variant="ghost" size="sm" className="gap-1">
              View All
              <ExternalLink className="h-3 w-3" />
            </Button>
          </Link>
        </div>
        <TabsContent value="recent" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Payments</CardTitle>
              <CardDescription>Your most recent payment transactions.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="px-4 py-3 text-left font-medium">Transaction ID</th>
                      <th className="px-4 py-3 text-left font-medium">Amount</th>
                      <th className="px-4 py-3 text-left font-medium">Token</th>
                      <th className="px-4 py-3 text-left font-medium">Status</th>
                      <th className="px-4 py-3 text-left font-medium">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        id: "pay_123456789",
                        amount: "$100.00",
                        token: "ETH",
                        status: "completed",
                        date: "2025-05-11",
                      },
                      {
                        id: "pay_123456788",
                        amount: "$75.50",
                        token: "USDC",
                        status: "completed",
                        date: "2025-05-10",
                      },
                      {
                        id: "pay_123456787",
                        amount: "$200.00",
                        token: "BTC",
                        status: "pending",
                        date: "2025-05-10",
                      },
                      {
                        id: "pay_123456786",
                        amount: "$50.00",
                        token: "ETH",
                        status: "completed",
                        date: "2025-05-09",
                      },
                      {
                        id: "pay_123456785",
                        amount: "$150.00",
                        token: "USDC",
                        status: "failed",
                        date: "2025-05-09",
                      },
                    ].map((payment) => (
                      <tr key={payment.id} className="border-b">
                        <td className="px-4 py-3">
                          <Link href={`/console/payments/${payment.id}`} className="text-primary hover:underline">
                            {payment.id}
                          </Link>
                        </td>
                        <td className="px-4 py-3">{payment.amount}</td>
                        <td className="px-4 py-3">{payment.token}</td>
                        <td className="px-4 py-3">
                          <span
                            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                              payment.status === "completed"
                                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                                : payment.status === "pending"
                                  ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                                  : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                            }`}
                          >
                            {payment.status}
                          </span>
                        </td>
                        <td className="px-4 py-3">{payment.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm">
                Previous
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="popular" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Popular Tokens</CardTitle>
              <CardDescription>Most used tokens for payments.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="px-4 py-3 text-left font-medium">Token</th>
                      <th className="px-4 py-3 text-left font-medium">Volume</th>
                      <th className="px-4 py-3 text-left font-medium">Transactions</th>
                      <th className="px-4 py-3 text-left font-medium">Success Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        token: "ETH",
                        volume: "$5,432.10",
                        transactions: 432,
                        successRate: "99.1%",
                      },
                      {
                        token: "USDC",
                        volume: "$3,210.50",
                        transactions: 321,
                        successRate: "98.7%",
                      },
                      {
                        token: "BTC",
                        volume: "$2,100.00",
                        transactions: 87,
                        successRate: "97.5%",
                      },
                      {
                        token: "USDT",
                        volume: "$1,543.25",
                        transactions: 154,
                        successRate: "96.8%",
                      },
                      {
                        token: "DAI",
                        volume: "$987.50",
                        transactions: 98,
                        successRate: "99.0%",
                      },
                    ].map((token, i) => (
                      <tr key={i} className="border-b">
                        <td className="px-4 py-3">{token.token}</td>
                        <td className="px-4 py-3">{token.volume}</td>
                        <td className="px-4 py-3">{token.transactions}</td>
                        <td className="px-4 py-3">{token.successRate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks you might want to perform.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-2">
            <Button variant="outline" className="justify-start gap-2">
              <Plus className="h-4 w-4" />
              Create Payment Link
            </Button>
            <Button variant="outline" className="justify-start gap-2">
              <Key className="h-4 w-4" />
              Generate API Key
            </Button>
            <Button variant="outline" className="justify-start gap-2">
              <Webhook className="h-4 w-4" />
              Configure Webhook
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Resources</CardTitle>
            <CardDescription>Helpful resources to get the most out of MantlePay.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-2">
            <Link href="/docs" className="flex items-center gap-2 rounded-md border p-3 hover:bg-muted">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10">
                <ExternalLink className="h-4 w-4 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium">Documentation</h3>
                <p className="text-sm text-muted-foreground">Learn how to integrate MantlePay</p>
              </div>
            </Link>
            <Link href="/docs/api" className="flex items-center gap-2 rounded-md border p-3 hover:bg-muted">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10">
                <ExternalLink className="h-4 w-4 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium">API Reference</h3>
                <p className="text-sm text-muted-foreground">Explore the API endpoints</p>
              </div>
            </Link>
            <Link href="/docs/sdk" className="flex items-center gap-2 rounded-md border p-3 hover:bg-muted">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10">
                <ExternalLink className="h-4 w-4 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium">SDK Guide</h3>
                <p className="text-sm text-muted-foreground">Integrate with our JavaScript SDK</p>
              </div>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
