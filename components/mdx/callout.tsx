import type { ReactNode } from "react";

interface CalloutProps {
  title?: string;
  children: ReactNode;
}

export function Callout({ title = "Note", children }: CalloutProps) {
  return (
    <aside className="my-6 rounded-lg border border-accent/40 bg-accent/10 p-4">
      <p className="text-sm font-semibold text-fg">{title}</p>
      <div className="mt-2 text-sm text-fg">{children}</div>
    </aside>
  );
}
