import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html data-theme="dark" lang="pt-br">
      <body className="bg-gray-200 dark:bg-[#0c0c13] text-black dark:text-white">
        {children}
      </body>
    </html>
  );
}
