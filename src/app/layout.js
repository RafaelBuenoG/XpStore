import "./globals.css";
import TextReader from "@/components/TextReader";

export default function RootLayout({ children }) {
  return (
    <html data-theme="dark" lang="pt-br">
      <body className="bg-[#f5f5f5] dark:bg-black text-black dark:text-white">
        {children}
        <TextReader/>
      </body>
    </html>
  );
}
