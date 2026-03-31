import { localFont } from "next/font/local";
import "./globals.css";
import NavBar from "./components/header/NavBar";
import FooterNav from "./components/footer/FooterNav";
import Providers from "./providers";

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
        <link
          rel="icon"
          href="/star-favicon.ico"
        />
      </head>
      <body>
        <Providers>
          <NavBar />
          {children}
          <FooterNav />
        </Providers>
      </body>
    </html>
  );
}
