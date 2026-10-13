import "./globals.css";
import ShapeDefs from "@/components/ShapeDefs";

export const metadata = {
  title: "روحانی و علمی ورثہ",
  description: "تعارف، شخصیات، کتب، مضامین اور تقاریب کی ویب سائٹ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ur" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400;500;600;700&family=Noto+Naskh+Arabic:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ShapeDefs />
        {children}
      </body>
    </html>
  );
}
