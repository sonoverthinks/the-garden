import Image from "next/image";

export interface Track {
  title: string;
  artist: string;
  albumArt: string;
  songUrl: string;
  isPlaying: boolean;
}

export default function MusicCard({ track }: { track: Track }) {
  return (
    <div className="bg-surface-container-low rounded-xl p-8 space-y-8">
      <div className="flex items-baseline justify-between">
        <h3 className="font-headline text-2xl">Soundtrack</h3>
        <span className="font-label text-[10px] uppercase tracking-widest text-secondary font-bold">
          {track.isPlaying ? "Now Playing" : "Recently Played"}
        </span>
      </div>

      <a
        href={track.songUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex gap-4 group cursor-pointer"
      >
        <div className="shrink-0 w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center overflow-hidden border border-emerald-900/5">
          <Image
            src={track.albumArt}
            alt={track.title}
            width={48}
            height={48}
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />
        </div>
        <div className="space-y-1 min-w-0">
          <p className="text-sm font-medium text-on-surface truncate group-hover:text-primary transition-colors">
            {track.title}
          </p>
          <p className="text-xs text-on-surface-variant italic truncate">
            {track.artist}
          </p>
        </div>
      </a>
    </div>
  );
}
