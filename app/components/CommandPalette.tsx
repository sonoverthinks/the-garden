"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const navigationItems = [
    { name: "Home", url: "/" },
    { name: "Digital Garden", url: "/garden" },
    { name: "Museum of Work (Projects)", url: "/projects" },
    { name: "Project Nexus (Featured)", url: "/projects#nexus" },
  ];

  // In a real app, you'd fetch posts dynamically or pass them as props.
  // We'll just hardcode some examples based on what's likely there.
  const allItems = [...navigationItems];
  const filteredItems = query === ""
    ? allItems
    : allItems.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()));

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((open) => !open);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
        setQuery("");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  const handleClose = () => {
      setIsOpen(false);
      setQuery("");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-32 sm:pt-40">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity"
        onClick={handleClose}
      ></div>

      <div className="relative w-full max-w-xl transform overflow-hidden rounded-2xl bg-white dark:bg-gray-900 shadow-2xl ring-1 ring-black/5 dark:ring-white/10 transition-all m-4">
        <div className="flex items-center border-b border-gray-200 dark:border-gray-800 px-4 py-3">
            <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              ref={inputRef}
              type="text"
              className="w-full bg-transparent border-0 px-3 py-2 text-gray-900 dark:text-white placeholder-gray-400 focus:ring-0 sm:text-lg focus:outline-none"
              placeholder="Search garden, projects, or commands..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
             <span className="text-xs text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">ESC</span>
        </div>

        {filteredItems.length > 0 && (
          <ul className="max-h-96 overflow-y-auto p-2 text-sm text-gray-700 dark:text-gray-300">
            {filteredItems.map((item, index) => (
              <li key={index}>
                <button
                  className="w-full flex items-center select-none rounded-xl px-4 py-3 hover:bg-blue-50 hover:text-blue-700 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 transition-colors text-left"
                  onClick={() => {
                    handleClose();
                    router.push(item.url);
                  }}
                >
                    {item.name}
                </button>
              </li>
            ))}
          </ul>
        )}

        {filteredItems.length === 0 && (
           <div className="py-14 px-6 text-center text-sm text-gray-500">
             No results found for &quot;{query}&quot;.
           </div>
        )}
      </div>
    </div>
  );
}
