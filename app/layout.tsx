import "@/app/global.css";
import { Metadata } from "next";
import Header from "@/components/header";
import filmDisplay from "@/components/filmDisplay";
import Sidebar from "@/components/sidebar";

export const metadata: Metadata = {
  title: "Cinema Guru | Atlas School",
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={`antialiased  bg-[#00003c] text-white min-h-screen`}>
        <Header />
        <div className="flex md:flex-row flex-col justify-between min-h-screen">
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
