import '@radix-ui/themes/styles.css';
import Footer from "./Footer";
import Navbar from "./Navbar";
import "./globals.css";
import { Theme } from '@radix-ui/themes';

export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <head />
        <body className="">
          <Theme>
            <Navbar/>
            {children}
            <Footer/>
          </Theme>
        </body>
      </html>
    );
}