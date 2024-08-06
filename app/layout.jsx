import Footer from "./Footer";
import Navbar from "./Navbar";
import "./globals.css";

export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <head />
        <body className="">
          <Navbar/>
          {children}
          <Footer/>
        </body>
      </html>
    );
}