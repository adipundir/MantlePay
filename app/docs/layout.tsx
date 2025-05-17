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
import { Book, Code, Webhook, Package, ChevronLeft } from "lucide-react"

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex min-h-screen flex-col bg-zinc-950 text-zinc-50">
        <header className="sticky top-0 z-50 flex h-14 items-center gap-4 border-b border-zinc-800 bg-zinc-950 px-4 sm:px-6">
          <Link href="/" className="flex items-center gap-2 lg:hidden">
            <ChevronLeft className="h-4 w-4" />
            <span className="text-sm font-medium">Back</span>
          </Link>
          <div className="hidden items-center gap-2 lg:flex">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
                <span className="text-lg font-bold text-primary-foreground">M</span>
              </div>
              <span className="text-lg font-semibold">MantlePay</span>
            </Link>
            <span className="text-sm text-muted-foreground">/</span>
            <span className="text-sm font-medium">Documentation</span>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <Link href="/console" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Console
            </Link>
          </div>
        </header>
        <div className="flex flex-1">
          <Sidebar className="border-r border-zinc-800">
            <SidebarHeader className="border-b border-zinc-800">
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
                      <SidebarMenuButton asChild isActive>
                        <Link href="/docs">
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
                        <Link href="/docs/create-payment">
                          <Code className="h-4 w-4" />
                          <span>Create Payment</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link href="/docs/handle-webhooks">
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
                        <Link href="/docs/sdk">
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
          <div className="flex-1 overflow-auto">
            <div className="container max-w-4xl py-8 px-4 md:py-12 lg:py-16 md:px-8">{children}</div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  )
}
