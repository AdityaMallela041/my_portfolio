import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "MSV Aditya Phani Kumar | AI/ML Developer & Full-Stack Engineer",
  description:
    "B.Tech Computer Science (AI & ML) student at VBIT. Full-stack developer with expertise in Python, FastAPI, React, and AI/ML. ServiceNow Hackathon 2025 Top 50 Finalist.",
  keywords: [
    "AI Developer",
    "Full-Stack Developer",
    "Computer Science",
    "VBIT",
    "Machine Learning",
    "NLP",
    "ServiceNow",
    "Python",
    "React",
    "FastAPI",
    "AI/ML Engineer",
  ],
  authors: [{ name: "MSV Aditya Phani Kumar" }],
  openGraph: {
    title: "MSV Aditya Phani Kumar | AI/ML Developer & Full-Stack Engineer",
    description:
      "B.Tech CSE (AI & ML) student at VBIT specializing in Full-stack Development and AI/ML solutions.",
    type: "website",
  },
  creator: "MSV Aditya Phani Kumar",
  publisher: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
