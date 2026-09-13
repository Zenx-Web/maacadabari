import { Skeleton } from "@/components/ui/Skeleton";

export default function CourseDetailLoading() {
  return (
    <main className="flex flex-col">
      {/* Hero skeleton */}
      <div className="relative overflow-hidden">
        <section className="px-md py-4xl text-center max-w-wide mx-auto">
          <Skeleton className="mx-auto h-4 w-36" />
          <Skeleton className="mx-auto mt-sm h-16 w-[55%] max-w-lg" />
          <Skeleton className="mx-auto mt-sm h-4 w-48" />
        </section>
      </div>

      {/* Overview skeleton */}
      <section className="px-md pb-2xl max-w-reading mx-auto w-full space-y-md">
        <Skeleton className="h-5 w-full" />
        <Skeleton className="h-5 w-[95%]" />
        <Skeleton className="h-5 w-[88%]" />
        <Skeleton className="h-5 w-full" />
        <Skeleton className="h-5 w-[72%]" />
      </section>

      {/* Quick facts skeleton */}
      <section className="px-md pb-2xl max-w-default mx-auto w-full">
        <div className="rounded-card border border-border bg-surface p-lg grid grid-cols-2 tablet:grid-cols-4 gap-md">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i}>
              <Skeleton className="h-3 w-16" />
              <Skeleton className="h-5 w-24 mt-2" />
            </div>
          ))}
        </div>
      </section>

      {/* Curriculum skeleton */}
      <section className="px-md pb-2xl max-w-default mx-auto w-full">
        <Skeleton className="h-8 w-40 mb-lg" />
        <div className="flex flex-col gap-md">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="rounded-card border border-border bg-surface p-lg"
            >
              <Skeleton className="h-6 w-48 mb-sm" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[80%]" />
                <Skeleton className="h-4 w-[65%]" />
                <Skeleton className="h-4 w-[75%]" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
