"use client";

export default function GardenStatusTag({ dateStr }: { dateStr: string }) {
  const date = new Date(dateStr);
  const now = new Date();
  const diffDays = Math.max(
    0,
    Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24)),
  );

  let label = "";
  let styles = "";

  if (diffDays <= 7) {
    label = "Recently Pruned 🍃";
    styles = "bg-primary text-on-primary shadow-sm shadow-primary/20";
  } else if (diffDays <= 30) {
    label = "Lush Growth 🌿";
    styles = "bg-primary-container text-on-primary-container";
  } else if (diffDays <= 90) {
    label = "Overgrown 🕸️";
    styles = "bg-tertiary-fixed-dim text-on-tertiary-fixed-variant";
  } else {
    label = "Wintering 🍂";
    styles =
      "bg-tertiary/10 text-tertiary font-medium border border-tertiary/20";
  }

  return (
    <div className="flex items-center gap-4">
      <div
        className={`px-4 py-1.5 rounded-full flex items-center gap-2 transition-all duration-500 ${styles}`}
      >
        <span className="text-xs font-bold uppercase tracking-widest">
          {label}
        </span>
      </div>
      <span className="text-xs text-on-surface-variant font-medium italic">
        Last tended: {date.toLocaleDateString()}
      </span>
    </div>
  );
}
