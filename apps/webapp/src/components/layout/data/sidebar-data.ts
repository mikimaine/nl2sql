import {
  IconChecklist,
  IconHelp,
  IconLayoutDashboard,
  IconMessages,
  IconPackages,
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
          url: "/",
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
      ],
    },
    {
      title: "Other",
      items: [
        {
          title: "Help Center",
          url: "/help-center",
          icon: IconHelp,
        },
      ],
    },
  ],
}
