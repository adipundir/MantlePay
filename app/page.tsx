import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Code, Globe, Webhook, LayoutDashboard, DollarSign, PiggyBank, CreditCard } from "lucide-react"

import { Button } from "@/components/ui/button"
import WaitlistForm from "@/components/WaitlistForm"

export default function LandingPage() {
  return (
    <main className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="w-full min-h-[calc(100vh-4rem)] flex items-center py-10 md:py-20 lg:py-0">
        <div className="container px-4 sm:px-6 md:px-8">
          <div className="grid gap-8 md:gap-12 lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_600px]">
            {/* Image - Shown first on mobile, second on desktop */}
            <div className="flex items-center order-1 md:order-2 lg:order-2">
              <div className="w-full overflow-hidden rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 p-2 shadow-lg">
                <Image
                  src="/placeholder.svg?height=550&width=800"
                  width={800}
                  height={550}
                  alt="MantlePay Dashboard Preview"
                  className="mx-auto aspect-video overflow-hidden rounded-lg object-cover object-center sm:w-full"
                  priority
                />
              </div>
            </div>
            
            {/* Text Content - Shown second on mobile, first on desktop */}
            <div className="flex flex-col justify-center space-y-6 order-2 md:order-1 lg:order-1">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl/none">
                  Accept crypto payments for your app or website — made dead simple.
                </h1>
                <p className="text-base text-muted-foreground md:text-xl max-w-[42rem]">
                  MantlePay provides a seamless way for Web2 apps to accept crypto payments with minimal integration
                  effort.
                </p>
              </div>
              <div className="flex flex-col w-full sm:flex-row gap-4">
                <a href="#waitlist" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full gap-1">
                    Join Waitlist <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </a>
                <Link href="/docs" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="w-full">
                    View Docs
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 sm:px-6 md:px-8">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-3">
              <h2 id="features" className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">Developer-First Features</h2>
              <p className="text-base text-muted-foreground max-w-[85%] mx-auto md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Everything you need to start accepting crypto payments in minutes, not days.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 sm:gap-8 py-10 lg:grid-cols-2 lg:gap-12">
            <div className="grid gap-6 sm:gap-8">
              <div className="bg-card p-6 rounded-lg shadow-sm border border-border/40">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-md bg-primary/10">
                    <Code className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">One-click Integration</h3>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Integrate with just a few lines of code. Our SDK handles the complexity so you don't have to.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-sm border border-border/40">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-md bg-primary/10">
                    <Globe className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Hosted Checkout Page</h3>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Fully customizable, secure checkout page that works across all devices and wallets.
                </p>
              </div>
            </div>
            <div className="grid gap-6 sm:gap-8">
              <div className="bg-card p-6 rounded-lg shadow-sm border border-border/40">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-md bg-primary/10">
                    <Webhook className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Real-time Webhooks</h3>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Get notified instantly when payments are initiated, confirmed, or completed.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-sm border border-border/40">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-md bg-primary/10">
                    <LayoutDashboard className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Developer Console & API Keys</h3>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Manage your integration, view transactions, and generate API keys from a single dashboard.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section  className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 sm:px-6 md:px-8">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div id="how-it-works" className="space-y-3">
              <h2  className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">How It Works</h2>
              <p className="text-base text-muted-foreground max-w-[85%] mx-auto md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Three simple steps to start accepting crypto payments.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-6 py-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
            <div className="flex flex-col items-center space-y-4 text-center bg-card p-6 rounded-lg shadow-sm border border-border/40">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <span className="text-xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-bold">Create Payment</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Generate a payment link or embed our checkout component in your app.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center bg-card p-6 rounded-lg shadow-sm border border-border/40">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <span className="text-xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-bold">User Pays via Wallet</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Your customer connects their wallet and completes the payment in seconds.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center bg-card p-6 rounded-lg shadow-sm border border-border/40">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <span className="text-xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-bold">You Get Webhook</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Receive real-time notifications when the payment is confirmed on-chain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section  className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 sm:px-6 md:px-8">
          <div id="pricing" className="flex flex-col items-center justify-center space-y-4 text-center">
            <div  className="space-y-3">
              <h2  className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">Simple, Transparent Pricing</h2>
              <p className="text-base text-muted-foreground max-w-[85%] mx-auto md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Industry-leading low fees to maximize your revenue
              </p>
            </div>
          </div>
          
          <div className="mx-auto max-w-3xl mt-10">
            <div className="bg-card border border-border/40 rounded-xl shadow-lg overflow-hidden">
              <div className="bg-primary/5 p-6 sm:p-8 border-b border-border/40">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-center sm:text-left">
                    <h3 className="text-2xl sm:text-3xl font-bold">Just 0.1% per Transaction</h3>
                    <p className="text-muted-foreground mt-2">Industry-low rate, capped at $1 per transaction</p>
                  </div>
                  <div className="flex items-center justify-center bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                    Up to 10x cheaper than competitors
                  </div>
                </div>
              </div>
              
              <div className="p-6 sm:p-8">
                <div className="grid gap-6 sm:grid-cols-3">
                  <div className="flex flex-col items-center sm:items-start space-y-3">
                    <div className="p-2 rounded-md bg-primary/10">
                      <DollarSign className="h-5 w-5 text-primary" />
                    </div>
                    <h4 className="font-semibold">0.1% Fee</h4>
                    <p className="text-sm text-muted-foreground text-center sm:text-left">
                      Industry-lowest transaction fee, 10x cheaper than typical crypto payment processors
                    </p>
                  </div>
                  
                  <div className="flex flex-col items-center sm:items-start space-y-3">
                    <div className="p-2 rounded-md bg-primary/10">
                      <PiggyBank className="h-5 w-5 text-primary" />
                    </div>
                    <h4 className="font-semibold">$1 Maximum Cap</h4>
                    <p className="text-sm text-muted-foreground text-center sm:text-left">
                      No matter the transaction size, you'll never pay more than $1 in fees
                    </p>
                  </div>
                  
                  <div className="flex flex-col items-center sm:items-start space-y-3">
                    <div className="p-2 rounded-md bg-primary/10">
                      <CreditCard className="h-5 w-5 text-primary" />
                    </div>
                    <h4 className="font-semibold">No Hidden Costs</h4>
                    <p className="text-sm text-muted-foreground text-center sm:text-left">
                      No monthly fees, no setup costs, no surprise charges - just the transaction fee
                    </p>
                  </div>
                </div>
                
                <div className="mt-8 flex justify-center">
                  <a href="#waitlist">
                    <Button size="lg" className="gap-1">
                      Get Started <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials/Logo Strip */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 sm:px-6 md:px-8">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-3">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">Trusted by Developers</h2>
              <p className="text-base text-muted-foreground max-w-[85%] mx-auto md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join the growing community of developers using MantlePay.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 sm:gap-8 py-10 md:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex items-center justify-center">
                <div className="h-16 w-full max-w-[160px] rounded-lg bg-card shadow-sm border border-border/40"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section 
        className="w-full min-h-[90vh] flex items-center justify-center py-20 md:py-28 lg:py-36 relative overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-primary/5"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
        <div className="absolute -bottom-8 -left-8 h-64 w-64 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute -top-8 -right-8 h-64 w-64 rounded-full bg-primary/5 blur-3xl"></div>
        
        <div className="container relative z-10 px-4 sm:px-6 md:px-8">
          <div className="flex flex-col items-center justify-center space-y-8 text-center max-w-3xl mx-auto">
            <div className="space-y-4">
              {/* <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium inline-block mb-2">
                Limited Early Access
              </div> */}
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
                Join Our Waitlist
              </h2>
              <p  id="waitlist" className="text-base text-muted-foreground md:text-xl/relaxed">
                MantlePay is currently in private beta. Sign up to get early access and be the first to know when we launch.
              </p>
            </div>
            <div className="w-full bg-card border border-border/60 rounded-xl shadow-lg p-4 sm:p-6 md:p-8">
              <WaitlistForm />
            </div>
            {/* <div  className="flex flex-col items-center justify-center space-y-4 text-center max-w-3xl mx-auto">
              <p className="text-base text-muted-foreground md:text-xl/relaxed">
                No spam, just updates that matter. Promise! ✨
              </p>
            </div> */}
          </div>
        </div>
      </section>
    </main>
  )
}
