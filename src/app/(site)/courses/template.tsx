import { PageTransition } from "@/components/motion/PageTransition";

export default function CoursesTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PageTransition />
      <div className="page-reveal">{children}</div>
    </>
  );
}
