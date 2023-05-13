import Navbar from "@/components/Navbar"
import { ThemeProvider } from "@/components/Template/ThemeProvider"
import { Fira_Code } from "next/font/google"
import "./styles/globals.css"

export const metadata = {
  title: "Manuel Gudiño's Blog",
  description: "Manuel Gudiño Blog"
}
const fira = Fira_Code({ subsets: ["latin"] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`min-h-screen bg-[#FCFCFC] dark:bg-[#111111] text-black dark:text-white ${fira.className}`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="py-5">
            <Navbar />
            <main className="px-2.5 mt-5">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
