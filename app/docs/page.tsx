"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { CopyIcon } from "lucide-react"

export default function DocsPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">MantlePay Documentation</h1>
        <p className="text-muted-foreground">
          Learn how to integrate MantlePay into your application to start accepting crypto payments.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">Getting Started</h2>
        <p>
          MantlePay provides a simple API and SDK to help you accept crypto payments in your application. Follow the
          steps below to get started.
        </p>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">1. Create an account</h3>
          <p>Sign up for a MantlePay account to get your API keys and access the developer console.</p>

          <h3 className="text-xl font-semibold">2. Install the SDK</h3>
          <div className="rounded-md bg-zinc-900 p-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Terminal</span>
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <CopyIcon className="h-4 w-4" />
                <span className="sr-only">Copy code</span>
              </Button>
            </div>
            <pre className="mt-2 text-sm">
              <code>npm install @mantlepay/sdk</code>
            </pre>
          </div>

          <h3 className="text-xl font-semibold">3. Initialize the SDK</h3>
          <Tabs defaultValue="react">
            <TabsList className="bg-zinc-900">
              <TabsTrigger value="react">React</TabsTrigger>
              <TabsTrigger value="nextjs">Next.js</TabsTrigger>
              <TabsTrigger value="vanilla">Vanilla JS</TabsTrigger>
            </TabsList>
            <TabsContent value="react" className="rounded-md border border-zinc-800 bg-zinc-900 p-4 mt-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">App.jsx</span>
                <Button variant="ghost" size="icon" className="h-6 w-6">
                  <CopyIcon className="h-4 w-4" />
                  <span className="sr-only">Copy code</span>
                </Button>
              </div>
              <pre className="mt-2 overflow-x-auto text-sm">
                <code>{`import { MantlePayProvider } from '@mantlepay/sdk';

function App() {
  return (
    <MantlePayProvider apiKey="YOUR_API_KEY">
      <YourApp />
    </MantlePayProvider>
  );
}`}</code>
              </pre>
            </TabsContent>
            <TabsContent value="nextjs" className="rounded-md border border-zinc-800 bg-zinc-900 p-4 mt-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">app/layout.js</span>
                <Button variant="ghost" size="icon" className="h-6 w-6">
                  <CopyIcon className="h-4 w-4" />
                  <span className="sr-only">Copy code</span>
                </Button>
              </div>
              <pre className="mt-2 overflow-x-auto text-sm">
                <code>{`import { MantlePayProvider } from '@mantlepay/sdk';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MantlePayProvider apiKey={process.env.MANTLEPAY_API_KEY}>
          {children}
        </MantlePayProvider>
      </body>
    </html>
  );
}`}</code>
              </pre>
            </TabsContent>
            <TabsContent value="vanilla" className="rounded-md border border-zinc-800 bg-zinc-900 p-4 mt-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">index.js</span>
                <Button variant="ghost" size="icon" className="h-6 w-6">
                  <CopyIcon className="h-4 w-4" />
                  <span className="sr-only">Copy code</span>
                </Button>
              </div>
              <pre className="mt-2 overflow-x-auto text-sm">
                <code>{`import { MantlePay } from '@mantlepay/sdk';

const mantlePay = new MantlePay('YOUR_API_KEY');

// Now you can use mantlePay to create payments
`}</code>
              </pre>
            </TabsContent>
          </Tabs>

          <h3 className="text-xl font-semibold">4. Create a payment</h3>
          <Tabs defaultValue="react">
            <TabsList className="bg-zinc-900">
              <TabsTrigger value="react">React</TabsTrigger>
              <TabsTrigger value="api">API</TabsTrigger>
            </TabsList>
            <TabsContent value="react" className="rounded-md border border-zinc-800 bg-zinc-900 p-4 mt-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">CheckoutButton.jsx</span>
                <Button variant="ghost" size="icon" className="h-6 w-6">
                  <CopyIcon className="h-4 w-4" />
                  <span className="sr-only">Copy code</span>
                </Button>
              </div>
              <pre className="mt-2 overflow-x-auto text-sm">
                <code>{`import { useMantlePay } from '@mantlepay/sdk';

function CheckoutButton() {
  const { createPayment } = useMantlePay();

  const handleClick = async () => {
    try {
      const payment = await createPayment({
        amount: '10.00',
        currency: 'USD',
        token: 'ETH',
        metadata: {
          orderId: '12345',
          customerEmail: 'user@example.com'
        }
      });
      
      // Redirect to the hosted checkout page
      window.location.href = payment.checkoutUrl;
    } catch (error) {
      console.error('Error creating payment:', error);
    }
  };

  return (
    <button onClick={handleClick}>
      Pay with Crypto
    </button>
  );
}`}</code>
              </pre>
            </TabsContent>
            <TabsContent value="api" className="rounded-md border border-zinc-800 bg-zinc-900 p-4 mt-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Request</span>
                <Button variant="ghost" size="icon" className="h-6 w-6">
                  <CopyIcon className="h-4 w-4" />
                  <span className="sr-only">Copy code</span>
                </Button>
              </div>
              <pre className="mt-2 overflow-x-auto text-sm">
                <code>{`POST https://api.mantlepay.com/v1/payments

{
  "amount": "10.00",
  "currency": "USD",
  "token": "ETH",
  "metadata": {
    "orderId": "12345",
    "customerEmail": "user@example.com"
  }
}`}</code>
              </pre>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Response</span>
                <Button variant="ghost" size="icon" className="h-6 w-6">
                  <CopyIcon className="h-4 w-4" />
                  <span className="sr-only">Copy code</span>
                </Button>
              </div>
              <pre className="mt-2 overflow-x-auto text-sm">
                <code>{`{
  "id": "pay_123456789",
  "amount": "10.00",
  "currency": "USD",
  "token": "ETH",
  "status": "pending",
  "checkoutUrl": "https://checkout.mantlepay.com/pay_123456789",
  "createdAt": "2025-05-11T21:59:49Z",
  "expiresAt": "2025-05-11T22:59:49Z"
}`}</code>
              </pre>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">Next Steps</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <a href="/docs/create-payment" className="text-primary hover:underline">
              Learn more about creating payments
            </a>
          </li>
          <li>
            <a href="/docs/handle-webhooks" className="text-primary hover:underline">
              Set up webhook handlers to receive payment notifications
            </a>
          </li>
          <li>
            <a href="/docs/sdk" className="text-primary hover:underline">
              Explore the SDK documentation for advanced integration options
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
