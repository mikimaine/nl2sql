import { AppSidebar } from "@webapp/components/layout/app-sidebar"
import { Header } from "@webapp/components/layout/header"
import { Main } from "@webapp/components/layout/main"
import { TopNav } from "@webapp/components/layout/top-nav"
import { ProfileDropdown } from "@webapp/components/profile-dropdown"
import { Search } from "@webapp/components/search"
import SkipToMain from "@webapp/components/skip-to-main"
import { ThemeSwitch } from "@webapp/components/theme-switch"
import { SidebarProvider } from "@webapp/components/ui/sidebar"
import { SearchProvider } from "@webapp/context/search-context"
import { cn } from "@webapp/lib/utils"
import Cookies from "js-cookie"
import { Fragment } from "react"

const topNav = [
  {
    title: "Overview",
    href: "dashboard/overview",
    isActive: true,
    disabled: false,
  },
  {
    title: "Customers",
    href: "dashboard/customers",
    isActive: false,
    disabled: true,
  },
  {
    title: "Products",
    href: "dashboard/products",
    isActive: false,
    disabled: true,
  },
  {
    title: "Settings",
    href: "dashboard/settings",
    isActive: false,
    disabled: true,
  },
]
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const defaultOpen = Cookies.get("sidebar:state") !== "false"
  return (
    <Fragment>
      <SearchProvider>
        <SidebarProvider defaultOpen={defaultOpen}>
          <SkipToMain />
          <AppSidebar />
          <div
            id="content"
            className={cn(
              "ml-auto w-full max-w-full",
              "peer-data-[state=collapsed]:w-[calc(100%-var(--sidebar-width-icon)-1rem)]",
              "peer-data-[state=expanded]:w-[calc(100%-var(--sidebar-width))]",
              "transition-[width] duration-200 ease-linear",
              "flex h-svh flex-col",
              "group-data-[scroll-locked=1]/body:h-full",
              "has-[main.fixed-main]:group-data-[scroll-locked=1]/body:h-svh",
            )}
          >
            <Header>
              <TopNav links={topNav} />
              <div className="ml-auto flex items-center space-x-4">
                <Search />
                <ThemeSwitch />
                <ProfileDropdown />
              </div>
            </Header>
            <Main>{children}</Main>
          </div>
        </SidebarProvider>
      </SearchProvider>
    </Fragment>
  )
}
