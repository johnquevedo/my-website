import type { HTMLAttributes } from "react";

export function CodeBlock(props: HTMLAttributes<HTMLElement>) {
  return (
    <pre className="overflow-x-auto rounded-xl border border-border bg-slate-950 p-4 text-xs text-slate-100">
      <code {...props} />
    </pre>
  );
}
