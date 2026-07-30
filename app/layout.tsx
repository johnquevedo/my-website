import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://johnfquevedo.com"),
  title: {
    default: "John Quevedo | Software Engineer",
    template: "%s | John Quevedo",
  },
  description:
    "John Quevedo studies Computer Science and Mathematics at Yale University, focusing on backend engineering, distributed systems, and machine learning.",
  openGraph: {
    title: "John Quevedo | Software Engineer",
    description:
      "Backend systems, distributed systems, and machine learning.",
    url: "https://johnfquevedo.com",
    siteName: "John Quevedo",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "John Quevedo, Software Engineer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "John Quevedo | Software Engineer",
    description:
      "Backend systems, distributed systems, and machine learning.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
