import { ReactNode } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";

type PageLayoutProps = {
  children: ReactNode;
};

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <>
      {/* Accessibility skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-md z-50"
      >
        Skip to main content
      </a>

      <div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-700">
        <Navigation />

        {/* subtle border below nav */}
        <div className="border-b border-gray-300 dark:border-gray-700 fixed top-16 left-0 right-0 z-10"></div>

        <main
          id="main-content"
          className="flex-grow pt-24 px-4 md:px-8 max-w-7xl mx-auto w-full"
        >
          <PageTransition>{children}</PageTransition>
        </main>

        <Footer className="shadow-inner" />
      </div>
    </>
  );
}
