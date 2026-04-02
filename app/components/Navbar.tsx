"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/garden", label: "Garden" },
  ];

  return (
    <nav className="w-full sticky top-0 z-50 bg-white/70 backdrop-blur-md shadow-sm shadow-emerald-900/5">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-8">
          <Link href="/">
            <span className="text-xl font-headline font-bold text-emerald-900">sonoverthinks</span>
          </Link>
          <div className="hidden md:flex gap-6 items-center">
            {links.map((link) => {
              const isActive =
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${
                    isActive ? "text-emerald-950 border-b-2 border-yellow-400" : "text-emerald-800/70"
                  } hover:text-emerald-950 pb-1 font-headline tracking-tight leading-relaxed transition-colors duration-300`}
                >
                  {link.label}
                </Link>
              );
            })}
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
