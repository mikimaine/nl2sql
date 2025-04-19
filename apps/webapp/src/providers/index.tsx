"use client"

import { ClerkProvider } from "@clerk/nextjs"
import { dark } from "@clerk/themes"

import { useTheme } from "next-themes"
import { ReactNode, useEffect } from "react"

export function Providers({ children }: { children: ReactNode }) {
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    const actualTheme = localStorage.getItem("vite-ui-theme")
    setTheme(actualTheme || "system")
  }, [setTheme])

  return (
    <ClerkProvider
      appearance={{
        baseTheme: resolvedTheme === "dark" ? dark : undefined,
      }}
      afterSignOutUrl="/"
    >
      {children}
    </ClerkProvider>
  )
}
