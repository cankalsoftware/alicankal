import React from "react";
import "../index.css";
import "../App.css";
import Script from "next/script";

export const metadata = {
  title: "Ali Cankal Portfolio",
  description: "Ali Cankal - Portfolio Website created with NextJS",
};

export const viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  shrinkToFit: "no",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/css/default.css" />
        <link rel="stylesheet" href="/css/layout.css" />
        <link rel="stylesheet" href="/css/media-queries.css" />
        <link rel="stylesheet" href="/css/magnific-popup.css" />
      </head>
      <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root">{children}</div>

        {/* Load jQuery and dependencies sequentially in beforeInteractive strategy */}
        <Script
          src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"
          strategy="beforeInteractive"
        />
        <Script src="/js/jquery-migrate-1.2.1.min.js" strategy="beforeInteractive" />
        <Script src="/js/jquery.flexslider.js" strategy="beforeInteractive" />
        <Script src="/js/waypoints.js" strategy="beforeInteractive" />
        <Script src="/js/jquery.fittext.js" strategy="beforeInteractive" />
        <Script src="/js/magnific-popup.js" strategy="beforeInteractive" />
        <Script src="/js/init.js" strategy="beforeInteractive" />
      </body>
    </html>
  );
}
