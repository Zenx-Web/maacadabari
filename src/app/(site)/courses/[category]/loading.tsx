import { Skeleton } from "@/components/ui/Skeleton";

export default function CategoryLoading() {
  return (
    <main className="flex flex-col">
      {/* Hero skeleton */}
      <div className="relative overflow-hidden">
        <section className="px-md py-4xl text-center max-w-wide mx-auto">
          <Skeleton className="mx-auto h-12 w-[50%] max-w-md" />
          <Skeleton className="mx-auto mt-md h-6 w-[70%] max-w-reading" />
        </section>
      </div>

      {/* Course grid skeleton */}
      <section className="px-md pb-2xl max-w-default mx-auto w-full">
        <Skeleton className="h-8 w-48 mb-lg" />
        <div className="grid grid-cols-1 laptop:grid-cols-2 gap-lg">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="rounded-card border border-border bg-surface overflow-hidden"
            >
              <Skeleton className="aspect-video w-full rounded-none" />
              <div className="p-lg space-y-sm">
                <Skeleton className="h-6 w-[65%]" />
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-[90%]" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
