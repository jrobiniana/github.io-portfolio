import Data from "../../_statics/user-data.json";

export default function Main() {
  let experience = Data["work-experience"];

  return (
    <div id="experience" className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
          Experience
        </h1>
        <ul className="mt-10 w-full space-y-6">
          {experience.map((exp) => (
            <li
              key={exp.company}
              className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 shadow-sm shadow-zinc-100 transition dark:border-zinc-800 dark:bg-zinc-950 dark:shadow-none"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-black dark:text-zinc-50">
                    {exp.position}
                  </h2>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    {exp.company}
                  </p>
                </div>
                <p className="text-sm font-medium text-zinc-500 dark:text-zinc-500">
                  {exp.duration}
                </p>
              </div>
              {exp.responsibilities?.length > 0 && (
                <div className="mt-4">
                  <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    Responsibilities
                  </p>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-600 dark:text-zinc-400">
                    {exp.responsibilities.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}