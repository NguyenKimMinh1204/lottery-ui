import "./globals.css";
import MainLayout from "../components/layout/MainLayout";

export const metadata = {
  title: "Lottery UI - VNSKY",
  description: "Hệ thống quản lý số điện thoại và gói cước",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body className="antialiased">
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}
