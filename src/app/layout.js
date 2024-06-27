import { Inter } from "next/font/google";
import "./globals.css";
<link rel="icon" href="/favicon.ico" sizes="any" />;

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home Guard - Dashboard | ISEKAI",
  description:
    "Home Guard Admin Dashboard made using Next.js and Tailwind CSS by ISEKAI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
