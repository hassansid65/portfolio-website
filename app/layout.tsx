import type { Metadata, Viewport } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["300","400","500","600","700"] });

export const metadata: Metadata = {
  title: "Hassan Siddiqui | AI Developer",
  description: "Portfolio of Hassan Siddiqui — AI Developer specializing in production-grade LLM systems, RAG architectures, Voice AI, and scalable FastAPI microservices.",
  keywords: ["AI Developer", "LLM", "RAG", "FastAPI", "Hassan Siddiqui", "Voice AI", "LangChain", "Finance Automation", "Plainflow"],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000000",
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark snap-y snap-mandatory scroll-smooth">
      <body className={`${spaceGrotesk.className} bg-black text-white min-h-screen relative`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
