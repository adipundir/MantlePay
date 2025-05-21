"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Lock, Shield, Wallet } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import MantlePayModal from "@/components/MantlePayModal"

export default function CheckoutPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isPaymentComplete, setIsPaymentComplete] = useState(false)

  const handlePaymentSuccess = () => {
    setIsModalOpen(false)
    setIsPaymentComplete(true)
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="border-b border-border/40 py-4">
        <div className="container">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold text-lg">MantlePay Checkout</span>
            </Link>
            <div className="flex items-center space-x-2">
              <Lock className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Secure Checkout</span>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 py-8 md:py-12">
        <div className="container">
          {isPaymentComplete ? (
            <div className="max-w-2xl mx-auto">
              <Card className="p-8">
                <div className="text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <div className="h-6 w-6 text-primary">✓</div>
                  </div>
                  <h1 className="mt-4 text-2xl font-bold tracking-tight text-foreground">Payment successful!</h1>
                  <p className="mt-2 text-base text-muted-foreground">
                    Your order has been confirmed and will be processed shortly.
                  </p>
                  <div className="mt-6">
                    <Link href="/">
                      <Button size="lg">
                        Return to Home
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <div className="order-2 md:order-1">
                <div className="mb-8">
                  <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors">
                    <ArrowLeft className="mr-1 h-4 w-4" />
                    Back to store
                  </Link>
                </div>

                <div className="space-y-6">
                  <div>
                    <h1 className="text-2xl font-bold tracking-tight md:text-3xl">Checkout</h1>
                    <p className="text-muted-foreground mt-1">Complete your purchase with MantlePay</p>
                  </div>

                  <Card className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">Payment method</span>
                        <Image 
                          src="/placeholder.svg?height=28&width=100"
                          width={100}
                          height={28}
                          alt="Supported crypto currencies"
                          className="h-7"
                        />
                      </div>
                      <Separator />
                      <div className="grid gap-4">
                        <div className="flex flex-col space-y-1.5">
                          <div className="flex items-center space-x-2">
                            <div className="p-1.5 rounded-md bg-primary/10">
                              <Wallet className="h-4 w-4 text-primary" />
                            </div>
                            <span className="font-medium">Pay with Crypto</span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Connect your crypto wallet to complete this payment
                          </p>
                        </div>
                        <Button 
                          className="w-full" 
                          size="lg"
                          onClick={() => setIsModalOpen(true)}
                        >
                          Pay with MantlePay
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </Card>

                  <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Lock className="mr-1.5 h-4 w-4" />
                      <span>Secure transaction</span>
                    </div>
                    <div className="flex items-center">
                      <Shield className="mr-1.5 h-4 w-4" />
                      <span>Encrypted data</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 md:order-2">
                <Card className="p-6">
                  <div className="space-y-4">
                    <h2 className="text-xl font-bold">Order Summary</h2>
                    
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="h-16 w-16 rounded-md bg-muted flex items-center justify-center">
                          <Image 
                            src="/placeholder.svg?height=64&width=64"
                            width={64}
                            height={64}
                            alt="Product thumbnail"
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium">Premium Subscription</h3>
                          <p className="text-sm text-muted-foreground">Annual plan</p>
                        </div>
                        <div className="text-right">
                          <span className="font-medium">$99.00</span>
                        </div>
                      </div>
                      
                      <Separator />
                      
                      <div className="flex justify-between text-sm">
                        <span>Subtotal</span>
                        <span>$99.00</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Tax</span>
                        <span>$0.00</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between font-medium">
                        <span>Total</span>
                        <div className="text-right">
                          <div>$99.00</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
                
                <div className="mt-6 text-sm text-muted-foreground">
                  <p className="mb-2">This is a demo checkout page. No actual payment will be processed.</p>
                  <p>MantlePay currently supports crypto payments only. Fiat payment support may be added in the future.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <footer className="border-t border-border/40 py-6">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} MantlePay. All rights reserved.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>

      <MantlePayModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        amount="$99.00"
        onSuccess={() => setIsPaymentComplete(true)}
      />
    </div>
  )
} 