import { Skeleton } from "@/components/ui/Skeleton";

export default function CoursesLoading() {
  return (
    <main className="flex flex-col">
      {/* Hero skeleton */}
      <div className="relative overflow-hidden">
        <section className="px-md py-4xl text-center max-w-wide mx-auto">
          <Skeleton className="mx-auto h-6 w-32 rounded-full" />
          <Skeleton className="mx-auto mt-md h-16 w-[60%] max-w-lg" />
          <Skeleton className="mx-auto mt-lg h-6 w-[80%] max-w-reading" />
        </section>
      </div>

      {/* Category sections skeleton */}
      {Array.from({ length: 3 }).map((_, i) => (
        <section key={i} className="px-md pb-2xl max-w-wide mx-auto w-full">
          <div className="flex items-center gap-sm mb-lg">
            <Skeleton className="size-12 rounded-icon" />
            <div>
              <Skeleton className="h-8 w-48" />
              <Skeleton className="h-4 w-72 mt-2" />
            </div>
          </div>
          <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-lg">
            {Array.from({ length: 3 }).map((_, j) => (
              <div
                key={j}
                className="rounded-card border border-border bg-surface overflow-hidden"
              >
                <Skeleton className="aspect-video w-full rounded-none" />
                <div className="p-lg space-y-sm">
                  <Skeleton className="h-6 w-[70%]" />
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-[85%]" />
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
