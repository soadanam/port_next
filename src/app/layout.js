import localFont from "next/font/local";
import "./globals.css";
import "@splidejs/react-splide/css";

const akhond = localFont({
  src: "../../public/fonts/AKHAND.woff2",
  variable: "--font-akhond",
});
const akhondBold = localFont({
  src: "../../public/fonts/AKHAND BOLD.woff2",
  variable: "--font-akhond-bold",
});
const akhondBlack = localFont({
  src: "../../public/fonts/AKHAND BLACK.woff2",
  variable: "--font-akhond-black",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${akhond.variable} ${akhondBold.variable} ${akhondBlack.variable}`}
      >
        {children}
      </body>
    </html>
  );
}