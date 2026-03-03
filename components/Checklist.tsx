import { IconCircleCheck, IconCircleX } from "@tabler/icons-react";

interface ChecklistProps {
  do?: string[];
  dont?: string[];
}

export function Checklist({
  do: doItems = [],
  dont: dontItems = [],
}: ChecklistProps) {
  return (
    <div className="my-6 grid gap-4 sm:grid-cols-2">
      {doItems.length > 0 && (
        <div className="rounded-lg border border-green-600 bg-green-400/10 p-4 dark:border-emerald-800 dark:bg-emerald-950/30">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-emerald-400 dark:text-emerald-400">
            Do
          </p>
          <ul className="space-y-2">
            {doItems.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-foreground/80"
              >
                <IconCircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400 dark:text-emerald-400" />
                <span className="text-white">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      {dontItems.length > 0 && (
        <div className="rounded-lg border border-red-400 bg-red-500/10 p-4 dark:border-red-800 dark:bg-red-950/30">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-red-400 dark:text-red-400">
            Do Not
          </p>
          <ul className="space-y-2">
            {dontItems.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-foreground/80"
              >
                <IconCircleX className="mt-0.5 h-4 w-4 shrink-0 text-red-400 dark:text-red-400" />
                <span className="text-white">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
