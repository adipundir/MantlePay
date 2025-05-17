import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container px-4 sm:px-6 md:px-8 flex flex-col gap-8 py-10 md:py-12">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          <div className="flex flex-col gap-4 col-span-1 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
                <span className="text-lg font-bold text-primary-foreground">M</span>
              </div>
              <span className="text-lg font-semibold">MantlePay</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-[95%] lg:max-w-[85%]">
              Accept crypto payments for your app or website — made dead simple.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-medium">Product</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="#features" className="text-sm text-muted-foreground hover:text-foreground">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-medium">Resources</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/docs" className="text-sm text-muted-foreground hover:text-foreground">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/docs/api" className="text-sm text-muted-foreground hover:text-foreground">
                  API Reference
                </Link>
              </li>
              <li>
                <Link href="/docs/sdk" className="text-sm text-muted-foreground hover:text-foreground">
                  SDK Guide
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-medium">Company</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-medium">Legal</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t py-6">
        <div className="container px-4 sm:px-6 md:px-8 flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © 2025 MantlePay. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="https://github.com/mantlepay" className="text-sm text-muted-foreground hover:text-foreground">
              GitHub
            </Link>
            <Link
              href="https://twitter.com/mantlepay"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Twitter
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 