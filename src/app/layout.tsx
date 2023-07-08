import "./globals.css";
import { Public_Sans } from "next/font/google";
import Footer from "@/components/Footer";
import clsx from "clsx";
import Nav from "@/components/Nav";

const public_Sans = Public_Sans({ subsets: ["latin"], weight: ["500"] });

export const metadata = {
  title: "Innovative Solutions",
  description: "Lemonhive Frontend Assignment Task",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={clsx(
          public_Sans.className,
          "bg-neutral text-white font-weight-500"
        )}
      >
        <Nav />
        <main>
          <div className="container">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
