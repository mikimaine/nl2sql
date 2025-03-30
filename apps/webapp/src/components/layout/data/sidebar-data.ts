import {
  IconBrowserCheck,
  IconChecklist,
  IconHelp,
  IconLayoutDashboard,
  IconMessages,
  IconNotification,
  IconPackages,
  IconPalette,
  IconSettings,
  IconTool,
  IconUserCog,
  IconUsers,
} from "@tabler/icons-react"
import { AudioWaveform, Command, GalleryVerticalEnd } from "lucide-react"
import { type SidebarData } from "../types"


export const sidebarData: SidebarData = {
  user: {
    name: "admin",
    email: "admin@parseit.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "ParseIt Admin",
      logo: Command,
      plan: "AI Powered BI",
    },
    {
      name: "KBI Inc.",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "ETM Software.",
      logo: AudioWaveform,
      plan: "Startup",
    },
  ],
  navGroups: [
    {
      title: "General",
      items: [
        {
          title: "Dashboard",
          url: "/home",
          icon: IconLayoutDashboard,
        },
        {
          title: "Models",
          url: "/models",
          icon: IconChecklist,
        },
        {
          title: "Datasources",
          url: "/datasource",
          icon: IconPackages,
        },
        {
          title: "Collections",
          url: "/collection",
          badge: "3",
          icon: IconMessages,
        },
        {
          title: "Users",
          url: "/users",
          icon: IconUsers,
        },
      ],
    },
    {
      title: "Other",
      items: [
        {
          title: "Settings",
          icon: IconSettings,
          items: [
            {
              title: "Profile",
              url: "/settings",
              icon: IconUserCog,
            },
            {
              title: "Account",
              url: "/settings/account",
              icon: IconTool,
            },
            {
              title: "Appearance",
              url: "/settings/appearance",
              icon: IconPalette,
            },
            {
              title: "Notifications",
              url: "/settings/notifications",
              icon: IconNotification,
            },
            {
              title: "Display",
              url: "/settings/display",
              icon: IconBrowserCheck,
            },
          ],
        },
        {
          title: "Help Center",
          url: "/help-center",
          icon: IconHelp,
        },
      ],
    },
  ],
}
