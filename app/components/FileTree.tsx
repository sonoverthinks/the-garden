"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { TreeNode } from "@/lib/mdx";

function FileTreeNode({ node }: { node: TreeNode }) {
  const pathname = usePathname();
  // Folders are now collapsed by default as requested.
  const [isOpen, setIsOpen] = useState(false);

  if (!node.children) {
    // It's a file
    const isActive = pathname === `/garden/${node.slug}`;
    const displayName = node.name.replace(/-/g, " ");
    return (
      <div className="pl-6">
        {isActive ? (
          <div className="px-3 py-1 text-sm text-primary font-semibold border-l-2 border-secondary-fixed-dim bg-secondary-container/10 hover:cursor-pointer">
            {displayName}
          </div>
        ) : (
          <Link
            href={`/garden/${node.slug}`}
            className="block px-3 py-1 text-sm text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
          >
            {displayName}
          </Link>
        )}
      </div>
    );
  }

  // It's a folder
  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex w-full items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-surface-container-low cursor-pointer transition-all focus:outline-none"
      >
        <span className="material-symbols-outlined text-primary/60 text-base">
          {isOpen ? "folder_open" : "folder"}
        </span>
        <span className="text-sm font-medium">{node.name}</span>
      </button>
      {isOpen && (
        <div className="ml-3 pl-3 border-l border-outline-variant/10">
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
