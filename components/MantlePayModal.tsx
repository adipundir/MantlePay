import { useState, useEffect } from "react"
import Image from "next/image"
import { Check, Loader2, QrCode, Wallet, X, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

type MantlePayModalProps = {
  isOpen: boolean
  onClose: () => void
  amount: string
  onSuccess?: () => void
}

export default function MantlePayModal({
  isOpen,
  onClose,
  amount,
  onSuccess,
}: MantlePayModalProps) {
  const [stage, setStage] = useState<"qr" | "loading" | "success">("qr")
  const [copied, setCopied] = useState(false)
  const [timeLeft, setTimeLeft] = useState(15 * 60) // 15 minutes in seconds
  
  const paymentAddress = "0x742d35Cc6634C0532925a3b844Bc454e4438f44e"
  const merchantId = "MERCHANT_12345"
  const orderId = "ORDER_98765"
  const contractAddress = "0x1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b"
  
  useEffect(() => {
    if (stage !== "qr" || !isOpen) return
    
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer)
          return 0
        }
        return prev - 1
      })
    }, 1000)
    
    return () => clearInterval(timer)
  }, [stage, isOpen])
  
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`
  }
  
  if (!isOpen) return null
  
  const handleCopyAddress = () => {
    navigator.clipboard.writeText(paymentAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  
  const handlePay = () => {
    setStage("loading")
    // Simulate payment confirmation
    setTimeout(() => {
      setStage("success")
      if (onSuccess) {
        onSuccess()
      }
    }, 2000)
  }
  
  const handleCloseModal = () => {
    onClose()
    // Redirect to waitlist section
    setTimeout(() => {
      const waitlistSection = document.getElementById('waitlist')
      if (waitlistSection) {
        waitlistSection.scrollIntoView({ behavior: 'smooth' })
      } else {
        window.location.href = '/#waitlist'
      }
    }, 100)
  }
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-6">
      <Card className="overflow-hidden w-full max-w-md relative">
        <Button 
          size="icon" 
          variant="ghost" 
          onClick={handleCloseModal} 
          className="absolute right-2 top-2 h-8 w-8 z-10"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </Button>

        {stage === "qr" && (
          <div className="p-6">
            <div className="space-y-6">
              <div className="text-center pt-2">
                <h2 className="text-xl font-bold">Scan with MantlePay Wallet</h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Scan this QR code or click on Pay below to pay using the browser MantlePay wallet
                </p>
              </div>
              
              <div className="flex justify-center">
                <div className="bg-white p-3 rounded-md">
                  <QrCode className="h-40 w-40" />
                </div>
              </div>
              
              <div className="flex items-center justify-center text-sm text-muted-foreground">
                <Clock className="h-4 w-4 mr-1" />
                <span>Expires in {formatTime(timeLeft)}</span>
              </div>
              
              <div className="rounded-md bg-muted/50 p-3 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Contract Address:</span>
                  <span className="font-mono truncate max-w-[180px]">{contractAddress.slice(0, 8)}...{contractAddress.slice(-6)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Merchant ID:</span>
                  <span>{merchantId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Order ID:</span>
                  <span>{orderId}</span>
                </div>
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between text-sm">
                <span>Amount to pay:</span>
                <span className="font-medium">{amount}</span>
              </div>
              
              {/* For demo purposes - this simulates payment from the wallet */}
              <Button className="w-full" onClick={handlePay}>
                <Wallet className="mr-2 h-4 w-4" />
                Simulate Payment with MantlePay
              </Button>
            </div>
          </div>
        )}
        
        {stage === "loading" && (
          <div className="p-6">
            <div className="space-y-6 py-4">
              <div className="text-center">
                <Loader2 className="h-12 w-12 animate-spin mx-auto text-primary" />
                <h2 className="text-xl font-bold mt-4">Processing Payment</h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Please wait while we confirm your transaction on the blockchain
                </p>
              </div>
            </div>
          </div>
        )}
        
        {stage === "success" && (
          <div className="p-6">
            <div className="space-y-6">
              <div className="text-center pt-2">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-xl font-bold mt-4">Payment Successful!</h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Thanks for your payment. Your transaction has been confirmed.
                </p>
              </div>
              
              <div className="rounded-md bg-muted/50 p-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Amount:</span>
                  <span className="font-medium">{amount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Transaction ID:</span>
                  <span className="font-mono">0x92e8...7f3b</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Merchant ID:</span>
                  <span>{merchantId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Order ID:</span>
                  <span>{orderId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Contract Address:</span>
                  <span className="font-mono truncate max-w-[180px]">{contractAddress.slice(0, 6)}...{contractAddress.slice(-4)}</span>
                </div>
              </div>
              
              <Button className="w-full" onClick={handleCloseModal}>
                Close
              </Button>
            </div>
          </div>
        )}
      </Card>
    </div>
  )
} 