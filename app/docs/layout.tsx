import type React from "react"
import Link from "next/link"
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
} from "@/components/ui/sidebar"
import { Book, Code, Webhook, Package } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen min-w-screen flex-col text-zinc-900">
      {/* Custom Navbar for Docs */}
      <header className="fixed top-0 left-0 right-0 z-50 w-full flex h-14 items-center border-b border-zinc-200 bg-white px-4 sm:px-6">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
                <span className="text-lg font-bold text-primary-foreground">M</span>
              </div>
              <span className="text-lg font-semibold">MantlePay</span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/console">
              <Button variant="outline" size="sm">
                Console
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="flex flex-1 mt-14">
        <SidebarProvider defaultOpen={true}>
          <Sidebar className="border-r border-zinc-200 fixed left-0 top-14 h-[calc(100vh-3.5rem)]">
            <SidebarHeader className="border-b border-zinc-200">
              <Link href="/docs" className="flex items-center gap-2 px-2 py-1.5">
                <Book className="h-5 w-5" />
                <span className="text-sm font-medium">Documentation</span>
              </Link>
            </SidebarHeader>
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel>Getting Started</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link href="/docs#overview">
                          <Book className="h-4 w-4" />
                          <span>Overview</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
              <SidebarGroup>
                <SidebarGroupLabel>API Reference</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link href="/docs#create-payment">
                          <Code className="h-4 w-4" />
                          <span>Create Payment</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link href="/docs#handle-webhooks">
                          <Webhook className="h-4 w-4" />
                          <span>Handle Webhooks</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
              <SidebarGroup>
                <SidebarGroupLabel>SDK Integration</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link href="/docs#sdk-integration">
                          <Package className="h-4 w-4" />
                          <span>SDK Integration</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>
          <div className="flex-1">
            <div className="max-w-4xl px-10 py-8">
              {children}
            </div>
          </div>
        </SidebarProvider>
      </div>
    </div>
  )
}
