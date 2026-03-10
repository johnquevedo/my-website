import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-start justify-center px-4 py-16 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-wide text-accent">404</p>
      <h1 className="mt-2 text-3xl font-bold">Page not found</h1>
      <p className="mt-3 text-sm text-muted">
        The page you requested does not exist or may have moved.
      </p>
      <Link className="mt-6 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-contrast" href="/">
        Back home
      </Link>
    </div>
  );
}
