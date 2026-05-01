export default function LoadingMonthPlan() {
  return (
    <main className="min-h-screen bg-[#f7fbff] px-5 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-5xl animate-pulse rounded-[2.5rem] border border-slate-200 bg-white/80 p-8 shadow-sm">
        <div className="h-10 w-40 rounded-full bg-slate-200" />
        <div className="mt-8 h-16 w-3/4 rounded-3xl bg-slate-200" />
        <div className="mt-8 space-y-4">
          <div className="h-5 rounded-full bg-slate-200" />
          <div className="h-5 w-5/6 rounded-full bg-slate-200" />
          <div className="h-5 w-2/3 rounded-full bg-slate-200" />
        </div>
      </div>
    </main>
  );
}
