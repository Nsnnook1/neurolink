export default function InsightsLoading() {
  return (
    <main className="min-h-screen bg-[#F8FBF9]">
      <section className="bg-[#EAF3EE] px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-[1280px] animate-pulse">
          <div className="h-4 w-40 rounded-full bg-[#C8DED3]" />

          <div className="mt-6 h-12 w-full max-w-[520px] rounded-xl bg-[#C8DED3]" />
          <div className="mt-3 h-12 w-3/4 max-w-[400px] rounded-xl bg-[#C8DED3]" />

          <div className="mt-7 h-5 w-full max-w-[620px] rounded bg-[#D6E7DE]" />
          <div className="mt-3 h-5 w-2/3 max-w-[420px] rounded bg-[#D6E7DE]" />

          <div className="mt-12 grid overflow-hidden rounded-3xl border border-[#D7E4DC] bg-white lg:grid-cols-2">
            <div className="space-y-5 p-7 lg:p-12">
              <div className="h-4 w-32 rounded bg-[#D6E7DE]" />
              <div className="h-8 w-3/4 rounded bg-[#D6E7DE]" />
              <div className="h-5 w-full rounded bg-[#E5EEE9]" />
              <div className="h-5 w-2/3 rounded bg-[#E5EEE9]" />
            </div>

            <div className="min-h-[240px] bg-[#D6E7DE] lg:min-h-[390px]" />
          </div>
        </div>
      </section>

      <section className="px-5 py-14 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-[1280px] animate-pulse">
          <div className="h-8 w-52 rounded-lg bg-[#D6E7DE]" />

          <div className="mt-8 flex gap-3 overflow-hidden">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="h-11 w-28 shrink-0 rounded-full bg-[#E0EAE3]"
              />
            ))}
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="overflow-hidden rounded-2xl border border-[#E0EAE3] bg-white"
              >
                <div className="aspect-[16/10] bg-[#D6E7DE]" />

                <div className="space-y-4 p-6">
                  <div className="h-4 w-1/3 rounded bg-[#E0EAE3]" />
                  <div className="h-6 w-4/5 rounded bg-[#E0EAE3]" />
                  <div className="h-4 w-full rounded bg-[#EDF2EF]" />
                  <div className="h-4 w-2/3 rounded bg-[#EDF2EF]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
