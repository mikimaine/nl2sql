import {
  IconBrandCloudflare,
  IconBrandDatabricks,
  IconBrandFirebase,
  IconBrandGoogleBigQuery,
  IconBrandMysql,
  IconBrandSnowflake,
  IconBrandSupabase,
} from "@tabler/icons-react"

export const apps = [
  {
    name: "BigQuery",
    logo: <IconBrandGoogleBigQuery />,
    connected: false,
    desc: "Connect with BigQuery for real-time communication.",
  },
  {
    name: "MySQL",
    logo: <IconBrandMysql />,
    connected: false,
    desc: "Effortlessly sync Notion pages for seamless collaboration.",
  },
  {
    name: "Databricks",
    logo: <IconBrandDatabricks />,
    connected: false,
    desc: "View and collaborate on Figma designs in one place.",
  },
  {
    name: "Cloudflare D1",
    logo: <IconBrandCloudflare />,
    connected: false,
    desc: "Sync Trello cards for streamlined project management.",
  },
  {
    name: "Supabase",
    logo: <IconBrandSupabase />,
    connected: false,
    desc: "Integrate Supabase for efficient data communication",
  },
  {
    name: "Snowflake",
    logo: <IconBrandSnowflake />,
    connected: false,
    desc: "Connect to Snowflake directly from the dashboard.",
  },
  {
    name: "Firebase",
    logo: <IconBrandFirebase />,
    connected: false,
    desc: "Connect to Firebase firestore.",
  },
]
