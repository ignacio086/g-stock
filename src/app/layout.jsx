import { Exo_2 } from "next/font/google";
import "./globals.css";

const inter = Exo_2({ subsets: ["latin"] });

export const metadata = {
  title: "G-stock",
  description: "Tu programa de stock",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='overflow-x-hidden bg-slate-100' style={inter.style}>{children}</body>
    </html>
  );
}
