export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <head />
        <body className="bg-[#a9d6e5] text-white">
          {children}
        </body>
      </html>
    );
  }