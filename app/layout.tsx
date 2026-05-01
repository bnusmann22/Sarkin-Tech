import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import GlobalShell from "@/components/GlobalShell";
import FloatingGDGoCButton from "@/components/FloatingGDGoCButton";

export const metadata: Metadata = {
  title: "Just Jamil",
  description:
    "Software Engineer passionate about creating impactful digital solutions that address real-world problems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Clash+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col font-cabinet-grotesk">
        <main className="flex-1">
          <GlobalShell>{children}</GlobalShell>
        </main>
        <Footer />
        <FloatingGDGoCButton />
      </body>
    </html>
  );
}
