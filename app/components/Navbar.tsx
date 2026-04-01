import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full sticky top-0 z-50 bg-white/70 backdrop-blur-md shadow-sm shadow-emerald-900/5">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-8">
          <Link href="/">
            <span className="text-xl font-headline font-bold text-emerald-900">The Botanical Archive</span>
          </Link>
          <div className="hidden md:flex gap-6 items-center">
            <Link
              href="/"
              className="text-emerald-950 border-b-2 border-yellow-400 pb-1 font-headline tracking-tight leading-relaxed transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              href="/projects"
              className="text-emerald-800/70 hover:text-emerald-950 font-headline tracking-tight leading-relaxed transition-colors duration-300"
            >
              Projects
            </Link>
            <Link
              href="/garden"
              className="text-emerald-800/70 hover:text-emerald-950 font-headline tracking-tight leading-relaxed transition-colors duration-300"
            >
              Garden
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 text-emerald-900 hover:scale-95 duration-200 ease-out">
            <span className="material-symbols-outlined">search</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
