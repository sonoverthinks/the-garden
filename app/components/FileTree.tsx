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
      <li className="ml-4">
        <Link
          href={`/garden/${node.slug}`}
          className={`block py-1 transition-colors ${
            isActive
              ? "text-blue-600 dark:text-blue-400 font-medium"
              : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
          }`}
        >
          {node.name}
        </Link>
      </li>
    );
  }

  // It's a folder
  return (
    <li className="mt-1">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center w-full text-left font-medium text-gray-900 dark:text-gray-100 py-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded px-2"
      >
        <span className="mr-2 text-xs opacity-50 transform transition-transform duration-200" style={{ transform: isOpen ? 'rotate(0deg)' : 'rotate(-90deg)' }}>
          ▼
        </span>
        {node.name}
      </button>
      {isOpen && (
        <ul className="ml-2 pl-2 border-l border-gray-200 dark:border-gray-700">
          {node.children.map((child) => (
            <FileTreeNode key={child.name} node={child} />
          ))}
        </ul>
      )}
    </li>
  );
}

export default function FileTree({ tree }: { tree: TreeNode[] }) {
  return (
    <ul className="space-y-1">
      {tree.map((node) => (
        <FileTreeNode key={node.name} node={node} />
      ))}
    </ul>
  );
}
