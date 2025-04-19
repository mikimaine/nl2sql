"use client"
import { OrganizationSwitcher } from "@clerk/nextjs"
import { NavGroup } from "@webapp/components/layout/nav-group"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@webapp/components/ui/sidebar"
import { sidebarData } from "./data/sidebar-data"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" variant="floating" {...props}>
      <SidebarHeader>
        <OrganizationSwitcher />
      </SidebarHeader>
      <SidebarContent>
        {sidebarData.navGroups.map((props) => (
          <NavGroup key={props.title} {...props} />
        ))}
      </SidebarContent>
      <SidebarFooter>{/* <UserButton  showName  /> */}</SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
