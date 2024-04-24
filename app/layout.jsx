import "./globals.css";

export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <head />
        <body className="bg-[#041d3f] text-white">
          {children}
        </body>
      </html>
    );
}