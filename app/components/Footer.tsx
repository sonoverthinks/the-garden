import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-emerald-900/5 bg-stone-50">
      <div className="flex flex-col md:flex-row justify-between items-center px-12 py-10 w-full max-w-7xl mx-auto">
        <div className="flex flex-col items-center md:items-start gap-2 mb-6 md:mb-0">
          <span className="font-headline italic text-emerald-900 text-lg">
            The Botanical Archive
          </span>
          <span className="font-body text-sm tracking-wide text-emerald-800/60 flex items-center gap-2">
            © 2026 The Botanical Archive —
            <a
              href="https://x.com/sonoverthinks"
              target="_blank"
              rel="noopener noreferrer"
              className="italic hover:text-emerald-950 transition-colors"
            >
              @sonoverthinks
            </a>
          </span>
        </div>
        <div className="flex gap-8">
        </div>
      </div>
    </footer>
  );
}
