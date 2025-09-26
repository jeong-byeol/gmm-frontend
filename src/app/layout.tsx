import type { Metadata } from "next";
import Header from "@/compnent/header";
// import "./globals.css"; // 일단은 css 사용 안함

export const metadata: Metadata = {
  title: "GMM",
  description: "Gym Membership Management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <hr/> {/* 헤더와 본문 사이에 구분 임시선 */}
        {children}
      </body>
    </html>
  );
}
