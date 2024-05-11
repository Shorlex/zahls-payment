import { Zilla_Slab } from "next/font/google";
import "./globals.css";

const zilla_slab_init = Zilla_Slab({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-zilla_slab",
});

export const metadata = {
  title: "Zahls Payments | Recieve Payment Digitally",
  description:
    "With zahls.ch recieving payment is easy. Integrate various payment options such as credit cards, PostFinance or TWINT into your online shope with zahls.ch",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={zilla_slab_init.variable}>{children}</body>
    </html>
  );
}
