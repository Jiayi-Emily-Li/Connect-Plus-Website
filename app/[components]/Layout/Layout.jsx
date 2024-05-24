export default function Layout({ children, className }) {
    return (
      <main
        className={`flex flex-col  ${className}`}>
        {children}
      </main>
    );
  }