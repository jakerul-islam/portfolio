import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Jakerul Islam — Frontend Developer",
  description:
    "Portfolio of Jakerul Islam, a Frontend Developer specializing in React, Next.js, and Node.js.",
  icons: {
    icon: '/profile.png',
    apple: '/profile.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable}`}>
      <body className="bg-slate-950 text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
