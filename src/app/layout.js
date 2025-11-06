import "./globals.css";
import TextReader from "@/components/TextReader";

export default function RootLayout({ children }) {
  return (
    <html data-theme="dark" lang="pt-br">
      <body className="bg-gray-200 dark:bg-[#0c0c13] text-black dark:text-white">
        {children}
        <TextReader/>
      </body>
    </html>
  );
}
