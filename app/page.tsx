import Image from "next/image";
import Link from "next/link";
import MusicCard from "./components/MusicCard";
import { getLastPlayed } from "@/lib/spotify";
import { getLatestActivity, getRelativeTime } from "@/lib/github";

import fs from "fs";
import path from "path";

export const dynamic = "force-dynamic";

export default async function Page() {
  const trackData = await getLastPlayed();
  const activities = await getLatestActivity("sonoverthinks", 5);
  
  // Fetch Reading Data from local file
  let readingData = {
    title: "Designing Data-Intensive Apps",
    author: "Martin Kleppmann",
    status: "Chapter 4: Encoding & Evolution"
  };

  try {
    const filePath = path.join(process.cwd(), "data", "reading.json");
    const fileContent = fs.readFileSync(filePath, "utf8");
    readingData = JSON.parse(fileContent);
  } catch (e) {
    console.error("Error reading reading.json", e);
  }

  const track = trackData || {
    title: "The Night We Met",
    artist: "Lord Huron",
    albumArt: "https://i.scdn.co/image/ab67616d0000b2730656d53823469a4734891b0c",
    songUrl: "https://open.spotify.com/track/09mEucvYmY3Uun52acvIgc",
    isPlaying: false,
  };

  return (
    <main className="max-w-7xl mx-auto px-8 py-12">
      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Hero Card: Large span */}
        <div className="md:col-span-8 relative overflow-hidden rounded-xl bg-primary shadow-lg min-h-[400px] flex flex-col justify-end p-10 group">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNsXqv0zyPjF-Q6wPi7J2MkstIOzARUHd9ttW_HOeWyrZ_JFN4OD4CBnTa5qIA2A-bjFWZmvB0lhFGXXJEcRzc62N7lKPTWvSEhTCZ0ShMNE1X23itgaq9OzZ1bEV5zyxT-PvqAZm_LEpaw4wJvUT44hzyaOOpt4AoIsWzW5AF6PcP4l6H7umVNdJl1eh6fAduO4AMwXRdEp9lx13kr-yx2yOYN_zjPon9KlY4Qh6NIsRKWilIegPmix_yL6jE7DoZqinmnqjRUL29"
              alt="Dreamy interior of a glass conservatory at dawn with mist and soft rays of morning sun filtering through tropical ferns"
              fill
              className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 66vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent"></div>
          </div>
          <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-8 h-[2px] bg-secondary-fixed-dim"></span>
                <span className="font-label text-xs uppercase tracking-[0.2em] text-secondary-fixed-dim font-bold">
                  Curator Profile
                </span>
              </div>
              <h1 className="font-headline text-5xl md:text-6xl text-white tracking-tight leading-tight max-w-lg">
                Son <span className="italic text-secondary-fixed-dim">Dao</span>
              </h1>
              <p className="text-on-primary-container font-body text-xl max-w-md">
                This garden is my laboratory.
              </p>
            </div>
            <Link
              href="#"
              className="font-headline italic text-secondary-fixed-dim hover:text-white transition-colors duration-300 text-xl pb-1 w-fit flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
              About me
            </Link>
          </div>
        </div>

        {/* 'Now' Box: Highlighted Status */}
        <div className="md:col-span-4 flex flex-col gap-8">
          <div className="bg-surface-container-lowest rounded-xl p-8 border-t-2 border-secondary-fixed-dim shadow-sm flex flex-col justify-between min-h-[180px]">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">
                  Current Focus
                </span>
                <span className="flex h-2 w-2 rounded-full bg-secondary-fixed-dim animate-pulse"></span>
              </div>
              <h2 className="font-headline text-2xl text-on-surface leading-snug">
                🟢 Currently reading: <span className="text-primary font-bold">{readingData.title}</span>
              </h2>
            </div>
            <div className="pt-4 flex items-center justify-between">
              <span className="text-sm text-on-surface-variant font-medium">{readingData.status}</span>
              <span className="material-symbols-outlined text-secondary">auto_stories</span>
            </div>
          </div>

          <MusicCard track={track} />
        </div>

        {/* Recent Activity Feed: Side column */}
        <div className="md:col-span-4 bg-surface-container-low rounded-xl p-8 space-y-8">
          <div className="flex items-baseline justify-between">
            <h3 className="font-headline text-2xl">Chronicle</h3>
            <Link
              href="https://github.com/sonoverthinks"
              target="_blank"
              className="font-label text-xs font-bold text-secondary uppercase tracking-widest hover:text-primary transition-colors"
            >
              GitHub
            </Link>
          </div>
          <div className="space-y-6">
            {activities.map((activity) => (
              <a
                key={activity.id}
                href={activity.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-4 group cursor-pointer"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                  <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors text-xl">
                    folder
                  </span>
                </div>
                <div className="space-y-1 min-w-0">
                  <p className="text-sm font-medium text-on-surface truncate group-hover:text-primary transition-colors">
                    {activity.repo}
                  </p>
                  <p className="text-xs text-on-surface-variant line-clamp-1 italic">
                    Pushed {getRelativeTime(activity.date)}
                  </p>
                  {activity.message && (
                    <p className="text-[10px] text-on-surface-variant/70 line-clamp-1 mt-1">
                      {activity.message}
                    </p>
                  )}
                </div>
              </a>
            ))}
            {activities.length === 0 && (
              <p className="text-sm text-on-surface-variant italic text-center py-4">
                No recent activity found.
              </p>
            )}
          </div>
        </div>

        {/* Large Portal Card: Garden */}
        <div className="md:col-span-8 bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm group relative">
          <div className="grid grid-cols-1 md:grid-cols-2 h-full">
            <div className="p-10 flex flex-col justify-center space-y-6">
              <div className="space-y-2">
                <span className="font-label text-xs font-bold text-secondary uppercase tracking-widest">
                  Digital Ecosystem
                </span>
                <h2 className="font-headline text-4xl leading-tight">Enter the Garden of Knowledge</h2>
                <p className="text-on-surface-variant leading-relaxed">
                  A nonlinear spatial database designed for long-term research and visual cross-pollination of ideas.
                </p>
              </div>
              <div>
                <Link
                  href="/garden"
                  className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-8 py-3 rounded-xl font-bold tracking-wide inline-flex items-center gap-3 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
                >
                  Explore Garden
                  <span className="material-symbols-outlined text-sm">park</span>
                </Link>
              </div>
            </div>
            <div className="relative min-h-[300px] overflow-hidden">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOyS-o0wOuAPkN-ue-uYS9zqtubP3i9h7xCnRcpKaLUJXldc-sTH-lZz5_1EtAazVet11z9HoakYFnh_HyPKGG57F_ZvLqQtBPqXIdBiT3KYUK7PxpJsB5QhABwJgqW1sNVr0ZwshkRwrKV58C2kYH1BDJ8FIL7qAioTCUB_X7kADj54f_CMC8xg9JdpLUoJ7T-LDcDboclnVk3z-f8PYbJaTEY-wo_nt8as-YubYttyrwKIdU-oTT5TM_TD4hW8oJRK5NJmbb0Bmh"
                alt="Abstract macro photography of complex leaf venation patterns with emerald and lime green hues and soft bokeh"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-1000"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-primary/10"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
