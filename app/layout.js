import MainHeader from "@/components/MainHeaders/main-header";
import "./globals.css";
import MainHeaderBackground from "@/components/MainHeaders/main-header-background";

export const metadata = {
  title: "Foodies' Haven",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeaderBackground />
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
