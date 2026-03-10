"use client";

import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-start justify-center px-4 py-16 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-wide text-accent">Error</p>
      <h1 className="mt-2 text-3xl font-bold">Something went wrong</h1>
      <p className="mt-3 text-sm text-muted">
        Please try again. If this keeps happening, contact me directly.
      </p>
      <button
        className="mt-6 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-contrast"
        type="button"
        onClick={reset}
      >
        Try again
      </button>
    </div>
  );
}
