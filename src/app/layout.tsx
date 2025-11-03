import { Nunito, Ubuntu} from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
// import { DOMTranslatorWrapper } from "@/i18n/dom-translator-wrapper"; // DÉSACTIVÉ : cause hydration errors + lent

import "./globals.css";
import {Metadata} from "next";


const ubuntu = Ubuntu({
    subsets: ["latin"],
    variable: "--font-ubuntu",
    weight: ["300", "400", "500", "700"],
    style: ["normal", "italic"],
});

// Police spéciale pour les paragraphes
const nunito = Nunito({
    subsets: ["latin"],
    variable: "--font-nunito",
    weight: ["300", "400", "600"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://admin-reservation-cee.vercel.app"), // À remplacer par votre URL

    // Métadonnées de base
    title: {
        default: "ESP Réservation - Système de réservation administration ",
        template: "%s | ESP Réservation"
    },
    description: "Plateforme de réservation des salles et espaces pour les étudiants de l'ESP. Réservez facilement vos salles pour vos événements et activités.",

    // Mots-clés
    keywords: [
        "réservation terrain basket ESP",
        "booking ESP",
        "réservation étudiants",
        "gestion salles",
        "réservation événements",
        "ESP",
        "espace étudiant"
    ],

    // Auteur et créateur
    authors: [{ name: "ESP" }],
    creator: "ESP",
    publisher: "ESP",
    generator: "Next.js",

    // Langue et région
    alternates: {
        canonical: "https://admin-reservation-cee.vercel.app",
        languages: {
            'fr-FR': 'https://admin-reservation-cee.vercel.app'
        }
    },

    // Robots
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },

    // OpenGraph
    openGraph: {
        type: "website",
        locale: "fr_FR",
        url: "https://admin-reservation-cee.vercel.app",
        siteName: "ESP Réservation",
        title: "ESP Réservation - Système de réservation des salles",
        description: "Plateforme de réservation des salles et espaces pour les étudiants de l'ESP. Réservez facilement vos salles pour vos événements et activités.",
        images: [
            {
                url: "/og-img.png",
                width: 1200,
                height: 630,
                alt: "ESP Réservation - Plateforme de réservation",
                type: "image/jpeg",
            }
        ],
    },

    // Twitter Cards
    twitter: {
        card: "summary_large_image",
        title: "ESP Réservation - Système de réservation des salles",
        description: "Plateforme de réservation des salles et espaces pour les étudiants de l'ESP.",
        images: {
            url: "/og-img.png",
            alt: "ESP Réservation",
        },
    },

    // Icônes
    icons: {
        icon: [
            { url: "/favicon.ico", sizes: "any" },
            { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
            { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        ],
        apple: [
            { url: "/apple-touch-icon.png", sizes: "180x180" },
        ],
        other: [
            { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
            { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
        ],
    },

    // Autres métadonnées
    category: "Education",
    classification: "Application Web",
    referrer: "origin-when-cross-origin",
    formatDetection: {
        telephone: false,
        date: true,
        address: false,
        email: true,
    },

    // Application Web
    applicationName: "ESP Réservation",
    appleWebApp: {
        capable: true,
        title: "ESP Réservation",
        statusBarStyle: "default",
    },
};


export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`dark scheme-only-dark ${ubuntu.variable} ${nunito.variable}`}
            suppressHydrationWarning
        >
        <body className="font-sans antialiased">
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange={false}
        >
            {children}
            <Toaster
                position="top-right"
                expand={true}
                richColors={true}
                closeButton={true}
                toastOptions={{
                    duration: 5000,
                    className: "toast-custom",
                }}
            />
        </ThemeProvider>
        </body>
        </html>
    );
}
