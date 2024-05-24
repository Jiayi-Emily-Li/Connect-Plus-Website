import "./globals.css";

export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <head />
        <body className="">
          {children}
        </body>
      </html>
    );
}