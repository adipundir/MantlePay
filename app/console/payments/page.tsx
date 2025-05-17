import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Search, Download, Filter } from "lucide-react"
import Link from "next/link"

export default function PaymentsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Payments</h1>
          <p className="text-muted-foreground">View and manage all your payment transactions.</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Create Payment
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Payment Transactions</CardTitle>
          <CardDescription>A list of all payment transactions processed through your account.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Search transactions..." className="pl-8" />
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
                    <SelectItem value="completed">Completed</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
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
                    <th className="whitespace-nowrap px-4 py-3 text-left font-medium">Transaction ID</th>
                    <th className="whitespace-nowrap px-4 py-3 text-left font-medium">Amount</th>
                    <th className="whitespace-nowrap px-4 py-3 text-left font-medium">Token</th>
                    <th className="whitespace-nowrap px-4 py-3 text-left font-medium">Status</th>
                    <th className="whitespace-nowrap px-4 py-3 text-left font-medium">Customer</th>
                    <th className="whitespace-nowrap px-4 py-3 text-left font-medium">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      id: "pay_123456789",
                      amount: "$100.00",
                      token: "ETH",
                      status: "completed",
                      customer: "john@example.com",
                      date: "2025-05-11",
                    },
                    {
                      id: "pay_123456788",
                      amount: "$75.50",
                      token: "USDC",
                      status: "completed",
                      customer: "sarah@example.com",
                      date: "2025-05-10",
                    },
                    {
                      id: "pay_123456787",
                      amount: "$200.00",
                      token: "BTC",
                      status: "pending",
                      customer: "mike@example.com",
                      date: "2025-05-10",
                    },
                    {
                      id: "pay_123456786",
                      amount: "$50.00",
                      token: "ETH",
                      status: "completed",
                      customer: "lisa@example.com",
                      date: "2025-05-09",
                    },
                    {
                      id: "pay_123456785",
                      amount: "$150.00",
                      token: "USDC",
                      status: "failed",
                      customer: "david@example.com",
                      date: "2025-05-09",
                    },
                    {
                      id: "pay_123456784",
                      amount: "$25.00",
                      token: "ETH",
                      status: "completed",
                      customer: "emma@example.com",
                      date: "2025-05-08",
                    },
                    {
                      id: "pay_123456783",
                      amount: "$300.00",
                      token: "BTC",
                      status: "completed",
                      customer: "alex@example.com",
                      date: "2025-05-08",
                    },
                    {
                      id: "pay_123456782",
                      amount: "$125.00",
                      token: "USDC",
                      status: "pending",
                      customer: "james@example.com",
                      date: "2025-05-07",
                    },
                    {
                      id: "pay_123456781",
                      amount: "$75.00",
                      token: "ETH",
                      status: "failed",
                      customer: "olivia@example.com",
                      date: "2025-05-07",
                    },
                    {
                      id: "pay_123456780",
                      amount: "$90.00",
                      token: "USDC",
                      status: "completed",
                      customer: "noah@example.com",
                      date: "2025-05-06",
                    },
                  ].map((payment) => (
                    <tr key={payment.id} className="border-t">
                      <td className="whitespace-nowrap px-4 py-3">
                        <Link href={`/console/payments/${payment.id}`} className="text-primary hover:underline">
                          {payment.id}
                        </Link>
                      </td>
                      <td className="whitespace-nowrap px-4 py-3">{payment.amount}</td>
                      <td className="whitespace-nowrap px-4 py-3">{payment.token}</td>
                      <td className="whitespace-nowrap px-4 py-3">
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
                      <td className="whitespace-nowrap px-4 py-3">{payment.customer}</td>
                      <td className="whitespace-nowrap px-4 py-3">{payment.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            Showing <strong>1-10</strong> of <strong>234</strong> transactions
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
