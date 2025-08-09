import { Poppins } from "next/font/google";
import "./globals.css";
import 'remixicon/fonts/remixicon.css';

import NavBar from "./components/navbar";
import NotFound from "./not-found";
import ThemeProviders from "./themeprovider";

import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import SideBar from "./components/sidebar";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const theme:string = "light";

  return (
    <html lang="en" className={`${theme} scroll-bar-hidden`} suppressHydrationWarning>
      <body className={`${poppins.className} antialiased flex justify-center overflow-x-hidden overflow-y-scroll`}>
        <ThemeProviders>
          <ErrorBoundary fallback={<NotFound />}>
            <div className={`max-w-[1920px] min-h-screen w-screen`}> 
              {/* <SideBar>
                {children}
              </SideBar> */}
              {children}
            </div>
          </ErrorBoundary>  
        </ThemeProviders>
      </body>
    </html>
  );
}
