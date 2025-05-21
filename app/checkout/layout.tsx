import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Checkout Demo | MantlePay",
  description: "Demo checkout page showcasing MantlePay's crypto payment capabilities",
}

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  )
} 