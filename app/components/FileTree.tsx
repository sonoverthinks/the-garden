"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { TreeNode } from "@/lib/mdx";

function FileTreeNode({ node }: { node: TreeNode }) {
  const pathname = usePathname();
  // Auto-expand if a child is active could be a nice enhancement, 
  // but for now default open is fine.
  const [isOpen, setIsOpen] = useState(true);

  if (!node.children) {
    // It's a file
    const isActive = pathname === `/garden/${node.slug}`;
    return (
      <div className="pl-8 space-y-1">
        {isActive ? (
          <div className="px-3 py-1.5 text-sm text-primary font-semibold border-l-2 border-secondary-fixed-dim bg-secondary-container/10">
            {node.name}
          </div>
        ) : (
          <Link
            href={`/garden/${node.slug}`}
            className="block px-3 py-1.5 text-sm text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
          >
            {node.name}
          </Link>
        )}
      </div>
    );
  }

  // It's a folder
  return (
    <div className="space-y-1">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex w-full items-center gap-3 px-3 py-2 rounded-xl hover:bg-surface-container-low cursor-pointer transition-all focus:outline-none"
      >
        <span className="material-symbols-outlined text-primary/60 text-lg">
          {isOpen ? "folder_open" : "folder"}
        </span>
        <span className="text-sm font-medium">{node.name}</span>
      </button>
      {isOpen && (
        <div className="space-y-1">
          {node.children.map((child) => (
            <FileTreeNode key={child.name} node={child} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function FileTree({ tree }: { tree: TreeNode[] }) {
  return (
    <div className="space-y-1">
      {tree.map((node) => (
        <FileTreeNode key={node.name} node={node} />
      ))}
    </div>
  );
}