import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Calculator Varity",
  description:
    "เครื่องคำนวณหลากหลายรูปแบบ เช่น คำนวณดัชนีมวลกาย (BMI) คำนวณอัตราการเผาผลาญพลังงานพื้นฐาน (BMR) และคำนวณค่างวดรถยนต์",
  keywords: [
    "คำนวณ BMI",
    "คำนวณ BMR",
    "คำนวณค่างวดรถยนต์",
    "bmi",
    "bmr",
    "car installment",
    "calculator",
  ],
  icons: [
    {
      url: "/next.svg",
    },
  ],
  authors: [{ name: "Calculator Rapat37", url: "https://github.com/Bbolive" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={kanit.className}>{children}</body>
    </html>
  );
}
