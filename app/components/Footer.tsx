import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-emerald-900/5 bg-stone-50">
      <div className="flex flex-col md:flex-row justify-between items-center px-12 py-10 w-full max-w-7xl mx-auto">
        <div className="flex flex-col items-center md:items-start gap-2 mb-6 md:mb-0">
          <span className="font-headline italic text-emerald-900 text-lg">The Botanical Archive</span>
          <span className="font-body text-sm tracking-wide text-emerald-800/60">
            © 2024 The Botanical Archive. All rights reserved.
          </span>
        </div>
        <div className="flex gap-8">
          <Link
            href="#"
            className="text-emerald-800/60 hover:text-yellow-500 transition-colors font-body text-sm tracking-wide"
          >
            Archive
          </Link>
          <Link
            href="#"
            className="text-emerald-800/60 hover:text-yellow-500 transition-colors font-body text-sm tracking-wide"
          >
            Privacy
          </Link>
          <Link
            href="#"
            className="text-emerald-800/60 hover:text-yellow-500 transition-colors font-body text-sm tracking-wide"
          >
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
