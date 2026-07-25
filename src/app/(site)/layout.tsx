import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { getAllCategories } from "@/lib/content";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const categories = getAllCategories();

  return (
    <>
      <Navbar categories={categories} />
      {children}
      <Footer categories={categories} />
    </>
  );
}
