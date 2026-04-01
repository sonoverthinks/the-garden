import Image from "next/image";
import Link from "next/link";

export default function Page() {
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
          <div className="relative z-10 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-8 h-[2px] bg-secondary-fixed-dim"></span>
              <span className="font-label text-xs uppercase tracking-[0.2em] text-secondary-fixed-dim font-bold">
                Curator Profile
              </span>
            </div>
            <h1 className="font-headline text-5xl md:text-6xl text-white tracking-tight leading-tight max-w-lg">
              Elena <span className="italic text-secondary-fixed-dim">Vance</span>
            </h1>
            <p className="text-on-primary-container font-body text-lg max-w-md">
              A computational biologist and digital archivist exploring the symbiosis between organic systems and
              architectural algorithms. This garden is my laboratory.
            </p>
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
                🟢 Currently reading: <span className="text-primary font-bold">Designing Data-Intensive Apps</span>
              </h2>
            </div>
            <div className="pt-4 flex items-center justify-between">
              <span className="text-sm text-on-surface-variant font-medium">Chapter 4: Encoding &amp; Evolution</span>
              <span className="material-symbols-outlined text-secondary">auto_stories</span>
            </div>
          </div>

          {/* Small Callout Card */}
          <div className="bg-primary-container rounded-xl p-8 text-on-primary flex items-center justify-between group cursor-pointer hover:bg-primary transition-colors duration-300">
            <div>
              <p className="font-label text-xs text-on-primary-container uppercase tracking-widest mb-1">
                Upcoming Milestone
              </p>
              <h3 className="font-headline text-xl">The Winter Solstice Release</h3>
            </div>
            <span className="material-symbols-outlined text-secondary-fixed-dim group-hover:translate-x-1 transition-transform">
              arrow_forward_ios
            </span>
          </div>
        </div>

        {/* Recent Activity Feed: Side column */}
        <div className="md:col-span-4 bg-surface-container-low rounded-xl p-8 space-y-8">
          <div className="flex items-baseline justify-between">
            <h3 className="font-headline text-2xl">Chronicle</h3>
            <Link
              href="#"
              className="font-label text-xs font-bold text-secondary uppercase tracking-widest hover:text-primary transition-colors"
            >
              View All
            </Link>
          </div>
          <div className="space-y-6">
            {/* Activity Item */}
            <div className="flex gap-4 group">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">potted_plant</span>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-on-surface">
                  New specimen cataloged: <span className="italic">Monstera Adansonii</span>
                </p>
                <p className="text-xs text-on-surface-variant">2 hours ago in Private Garden</p>
              </div>
            </div>
            {/* Activity Item */}
            <div className="flex gap-4 group">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">edit_note</span>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-on-surface">Draft updated: &quot;The Ethics of Bio-Digital Twinning&quot;</p>
                <p className="text-xs text-on-surface-variant">Yesterday at 4:32 PM</p>
              </div>
            </div>
            {/* Activity Item */}
            <div className="flex gap-4 group">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">cloud_done</span>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-on-surface">Archive synchronized with Global Conservatory</p>
                <p className="text-xs text-on-surface-variant">Dec 14, 2023</p>
              </div>
            </div>
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
