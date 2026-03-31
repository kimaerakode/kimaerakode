import { localFont } from "next/font/local";
import "./globals.css";
import NavBar from "./components/header/NavBar";
import FooterNav from "./components/footer/FooterNav";

const PPMont = localFont({
  src: "./fonts/PPNeueMontreal-Medium.woff2",
  weight: "500",
  style: "normal",
  variable: "--font-ppmont",
});

const Romantic = localFont({
  src: "./fonts/romantic.woff2",
  weight: "500",
  style: "normal",
  variable: "--font-romantic",
});
export const metadata = {
  title: "Kimaerakode",
  description: "Rosalina Hundahl Frey - Designer & Developer",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${PPMont.className} ${PPMont.variable} ${Romantic.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const saved = localStorage.getItem('theme');
                const theme = saved || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                document.documentElement.setAttribute('data-theme', theme);
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body>
        <NavBar />
        {children}
        <FooterNav />
      </body>
    </html>
  );
}
