import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "筑邦銀行 DX提案 | デジタル革新で地域金融の未来を創る",
  description: "筑邦銀行様向けのデジタルトランスフォーメーション提案。地域密着の強みを活かしたデジタル金融サービスの実現をサポートします。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Noto+Sans+JP:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}