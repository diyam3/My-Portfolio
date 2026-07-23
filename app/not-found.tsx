import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-5">
      <div className="text-center glass rounded-3xl shadow-glass p-10 max-w-md">
        <p className="font-mono text-sm text-royal-600 dark:text-royal-300 mb-3">
          {"// 404"}
        </p>
        <h1 className="font-display text-4xl font-semibold text-ink dark:text-white mb-3">
          Page not found
        </h1>
        <p className="text-mist dark:text-royal-100/60 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full bg-royal-600 hover:bg-royal-700 text-white font-medium px-6 py-3 shadow-glow-royal transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
