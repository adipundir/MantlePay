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
  SidebarGroupContent,
  SidebarFooter,
} from "@/components/ui/sidebar"
import { LayoutDashboard, CreditCard, Key, Webhook, Settings, User, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function ConsoleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex min-h-screen flex-col">
        <header className="sticky top-0 z-50 flex h-14 items-center gap-4 border-b bg-background px-4 sm:px-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
              <span className="text-lg font-bold text-primary-foreground">M</span>
            </div>
            <span className="text-lg font-semibold">MantlePay</span>
          </Link>
          <div className="ml-auto flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-muted">
                    <User className="h-3 w-3" />
                  </div>
                  <span className="hidden md:inline-flex">user@example.com</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Link href="/console/settings" className="flex w-full items-center">
                    Settings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/console/logout" className="flex w-full items-center">
                    Logout
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        <div className="flex flex-1">
          <Sidebar>
            <SidebarHeader>
              <div className="flex items-center gap-2 px-2 py-1.5">
                <span className="text-sm font-medium">Developer Console</span>
              </div>
            </SidebarHeader>
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild isActive>
                        <Link href="/console">
                          <LayoutDashboard className="h-4 w-4" />
                          <span>Overview</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link href="/console/payments">
                          <CreditCard className="h-4 w-4" />
                          <span>Payments</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link href="/console/api-keys">
                          <Key className="h-4 w-4" />
                          <span>API Keys</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link href="/console/webhooks">
                          <Webhook className="h-4 w-4" />
                          <span>Webhook Logs</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link href="/console/settings">
                          <Settings className="h-4 w-4" />
                          <span>Settings</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href="/docs">
                      <span>Documentation</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href="/console/logout">
                      <LogOut className="h-4 w-4" />
                      <span>Logout</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarFooter>
          </Sidebar>
          <div className="flex-1 overflow-auto">
            <div className="container py-6 px-4 md:py-8 lg:py-10 md:px-8">{children}</div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  )
}
