function HomePage() {
  return (
    <div className="flex h-full items-center justify-center bg-[var(--background)]">
      <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-10 shadow-xl">
        <h1 className="text-5xl font-bold text-blue-500">
          Interview Atlas
        </h1>

        <p className="mt-4 text-slate-400">
          Building the Ultimate Interview Preparation Platform
        </p>
      </div>
    </div>
  );
}

export default HomePage;