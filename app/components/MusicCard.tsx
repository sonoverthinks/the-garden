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
    <a
      href={track.songUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-primary-container rounded-xl p-6 shadow-sm flex flex-col justify-center min-h-[140px] group transition-all duration-300 hover:bg-primary cursor-pointer border border-primary/20"
    >
      <div className="flex items-center gap-6">
        <div className="relative w-20 h-20 shrink-0 rounded-lg overflow-hidden shadow-lg transition-transform duration-500 border border-white/10">
          <Image
            src={track.albumArt}
            alt={track.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />
        </div>
        <div className="space-y-1.5 flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="font-label text-[10px] uppercase tracking-widest text-on-primary-container/80 font-bold">
              {track.isPlaying ? "Now Playing" : "Recently Played"}
            </span>
            {track.isPlaying && (
              <span className="flex h-1.5 w-1.5 rounded-full bg-secondary-fixed-dim animate-pulse"></span>
            )}
          </div>
          <h3 className="font-headline text-xl text-white truncate group-hover:text-secondary-fixed-dim transition-colors">
            {track.title}
          </h3>
          <p className="text-sm text-on-primary-container/90 font-medium italic truncate">
            {track.artist}
          </p>
        </div>
      </div>
    </a>
  );
}
