import { Montserrat } from "next/font/google";
import "./global.css";
import Sidebar from "@/components/sidebar/Sidebar";
import Container from "@/components/common/Container";
import InfoBox from "@/components/common/InfoBox";
import { Toaster } from "@/components/ui/Toaster";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "ZuAi",
  description: "IB Coursework Evaluation Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-test-id="html-root">
      <body className={inter.className} data-test-id="body-root">
        <main className="relative" data-test-id="main-layout">
          <Sidebar data-test-id="sidebar" />
          <div className="py-20 md:py-16" data-test-id="content-wrapper">
            <Container data-test-id="content-container">
              {children}
              <Toaster data-test-id="toaster" />
            </Container>
          </div>
          <InfoBox data-test-id="info-box" />
        </main>
      </body>
    </html>
  );
}
