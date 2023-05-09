import "./styles/globals.css"
import { Fira_Code } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle"
import Navbar from "@/components/Navbar/index"

const fira = Fira_Code({ subsets: ["latin"] })

export const metadata = {
  title: "m4nute's blog",
  description: "m4nute's blog",
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`min-h-screen bg-[#FCFCFC] dark:bg-[#1c1c1c] text-black dark:text-white ${fira.className}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="max-w-[700px] mx-auto py-10 w-full">
            <Navbar />
            <main className="px-2.5 pt-10">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
