import { Montserrat } from "next/font/google";
import "./global.css";
import Sidebar from "@/components/sidebar/Sidebar";
import Container from "@/components/common/Container";
import Information from "@/components/common/InfoBox";
import { Toaster } from "@/components/ui/Toaster";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "ZuAi",
  description: "IB Coursework Evaluation Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      <body className={inter.className}>
        <main className="relative">
          <Sidebar />
          <div className="py-20 md:py-16">
            <Container>{children}
              <Toaster/>
            </Container>
          </div>
          <Information/>
        </main>
      </body>
    </html>
  );
}
