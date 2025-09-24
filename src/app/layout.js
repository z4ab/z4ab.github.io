import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import NavBar from "../components/NavBar";
import PageTransition from "../components/PageTransition";
import SwipeHandler from "../components/SwipeHandler";
import { PageTransitionProvider } from "../context/PageTransitionContext";
import "./globals.css";

const convection = localFont({
  src: [
    {
      path: "./fonts/Conv.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Convb.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-convection",
});

export const metadata = {
  title: "Zaid Abdulameer",
  description: "Zaid Abdulameer's personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${convection.variable} font-convection`}>
        <PageTransitionProvider>
          <SwipeHandler>
            <div className="min-h-screen flex flex-col items-center justify-center graydient">
              <NavBar />
              <PageTransition>
                <div className="flex p-8 gap-2">{children}</div>
              </PageTransition>
            </div>
          </SwipeHandler>
        </PageTransitionProvider>
      </body>
    </html>
  );
}
