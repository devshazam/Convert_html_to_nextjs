// "use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Yandex } from "@/components/yandex";
import Script from "next/script";
import { Popup } from "@/components/popup";
import { Whatsapp } from "@/components/whatsapp";
import { MobileMenu } from "@/components/mobileMenu";
import { FooterMenu } from "@/components/footerMenu";
import { HeaderMenu } from "@/components/headerMenu";
import type { Viewport } from "next";

import ReactDOM from "react-dom";
import './javascript';

export function PreloadResources() {
    ReactDOM.preload(
        "/fonts/OpenSansRegular/OpenSans-Regular-with-ruble.woff2",
        { as: "font", crossOrigin: "anonymous" }
    );
    ReactDOM.preload("/fonts/Raleway/RalewayRegular/Raleway-Regular.woff2", {
        as: "font",
        crossOrigin: "anonymous",
    });
    ReactDOM.preload("/fonts/OpenSansBold/OpenSans-Bold-with-ruble.woff2", {
        as: "font",
        crossOrigin: "anonymous",
    });
    ReactDOM.preload("/fonts/Raleway/RalewayBold/Raleway-Bold.woff2", {
        as: "font",
        crossOrigin: "anonymous",
    });

    return null;
}

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    //   maximumScale: 1,
    //   userScalable: false,
    //   shrinkToFit: 'no',
};

export const metadata: Metadata = {
    title: "Разработка сайтов в Волгограде | 'SEO-FiRST'",
    description:
        "Разрабатываем все виды сайтов с Гарантией результата или возвращаем деньги! Веб-студия в Волгограде",
    metadataBase: new URL("https://seo-cy.ru"),
    robots: {
        index: true,
        follow: true,
        nocache: true,
    },
    verification: {
        yandex: "982329bf8d2378f1",
    },
    openGraph: {
        title: "Разработка сайтов в Волгограде | 'SEO-FiRST'",
        description:
            "Разрабатываем все виды сайтов с Гарантией результата или возвращаем деньги! Веб-студия в Волгограде",
        url: "https://seo-cy.ru",
        siteName: "SEO-First digital-агентство: сайты, продвижение, реклама!",
        type: "website",
    },
    icons: {
        icon: "/favicon.ico",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className + " g-main"}>
                <div className="l-site_wrap js-body">
                    <div className="l-site js-site">
                        <div className="b-scrolltop js-scrolltop"></div>
                        <HeaderMenu />
                        {children}

                        <FooterMenu />
                    </div>
                    <MobileMenu />
                </div>
                <Whatsapp />
                <Popup />
                {/* <Script
                    id="jqueryr"
                    src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.4/jquery.min.js"
                    integrity="sha512-pumBsjNRGGqkPzKHndZMaAG+bir374sORyzM3uulLV14lN5LyykqNk8eEeUlUkB3U0M4FApyaHraT65ihJhDpQ=="
                    crossOrigin="anonymous"
                    referrerPolicy="no-referrer"
                ></Script> */}
                {/* <Script id="mainScript" src="/javascript.js"></Script> */}
                <Yandex />
            </body>
        </html>
    );
}
