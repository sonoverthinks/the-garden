import Image from "next/image";

export default function ProjectsPage() {
  return (
    <main className="max-w-7xl mx-auto px-8 pt-16 pb-24">
      {/* Hero Header */}
      <header className="mb-20 max-w-3xl">
        <span className="font-label text-sm uppercase tracking-[0.2em] text-secondary font-bold mb-4 block">Case Studies</span>
        <h1 className="font-headline text-6xl md:text-7xl text-primary font-bold tracking-tight leading-[1.1] mb-6 italic">
          Projects - Sunlit Museum
        </h1>
        <p className="font-body text-xl text-on-surface-variant leading-relaxed opacity-80">
          A curated index of technical explorations where data visualization meets organic structural theory. Each study examines the tension between architecture and the living world.
        </p>
      </header>

      {/* Asymmetric Bento Grid for Projects */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">

        {/* Main Featured Project (Large Tile) */}
        <div className="md:col-span-8 group relative overflow-hidden bg-surface-container-lowest rounded-xl shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent pointer-events-none"></div>
          <div className="p-2">
            <div className="aspect-[16/9] w-full rounded-lg overflow-hidden relative">
              <Image
                alt="Abstract Neural Botanical Network"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                fill
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAn32jqzZ8NPv34GhNPRDM3HUYE6cdulUU0YkiTBesX9bbbGpoLo0DYhAim0fuoUoP-KJrW82oGL3vg59Vfi7pVLOF7s2d6bak88HJwLScaRoanszCDlZYpQ5KE-ZVp6jw0nd0OntbU-1j8BLNvzSg599EgnA4tiFhRTAs13grpHuhzuoXWPFMD8pZBb93zFKz4Lebb8IQuPCL_Ox5fzUhmlr73SjJd94Q1Q9_s4yeVeawhr1SRJDwWHwHtUtrGuH_-T6CoT8bGLjT0"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-transparent flex items-end p-12">
                <div className="max-w-md">
                  <div className="inline-flex items-center px-3 py-1 bg-secondary-fixed-dim/90 rounded-full mb-4">
                    <span className="material-symbols-outlined text-on-secondary-fixed text-sm mr-2">auto_graph</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-on-secondary-fixed">Technical Lead</span>
                  </div>
                  <h3 className="font-headline text-4xl text-white font-bold mb-4">The Mycelium Protocol</h3>
                  <p className="text-white/80 font-body text-sm leading-relaxed mb-6">
                    An analysis of subterranean communication networks modeled through decentralized architectural nodes.
                  </p>
                  <span className="text-secondary-fixed-dim font-bold tracking-widest uppercase text-xs">Examine Full Archive &rarr;</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Side Feature (Smaller Tile) */}
        <div className="md:col-span-4 space-y-8">
          <div className="bg-surface-container-low rounded-xl p-8 border-t-2 border-secondary-fixed-dim shadow-[0_0_30px_rgba(235,194,70,0.15)]">
            <span className="material-symbols-outlined text-secondary text-3xl mb-4">lightbulb</span>
            <h4 className="font-headline text-2xl text-primary font-bold mb-3">Lumen Index</h4>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
              Calculating photosynthetic efficiency across glass-domed structures using real-time atmospheric data.
            </p>
            <div className="flex items-center gap-2">
              <div className="h-1 flex-1 bg-surface-variant rounded-full overflow-hidden">
                <div className="h-full bg-secondary-fixed-dim w-3/4"></div>
              </div>
              <span className="text-xs font-bold text-secondary">75% Growth</span>
            </div>
          </div>

          <div className="bg-primary bg-[linear-gradient(135deg,#154212_0%,#2d5a27_100%)] rounded-xl p-8 text-white">
            <h4 className="font-headline text-2xl font-bold mb-4 italic">Director&apos;s Note</h4>
            <p className="font-body text-sm opacity-80 leading-loose italic">
              &quot;The intersection of sunlight and structure is not merely aesthetic&mdash;it is a functional necessity for the digital flora we cultivate.&quot;
            </p>
            <div className="mt-6 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full border border-white/20 p-1 relative overflow-hidden">
                <Image
                  className="rounded-full object-cover"
                  alt="Portrait of a sophisticated architect in a sunlit studio"
                  fill
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgCtHSB_pWjJIXL0ykTyhdCtbGM4zGAYeLkxryHkHbzaqA4r4Ah1etE8xzxhk_ug-ja22ZXEwfARpEFY1eXTPTY5EytABwnXMLTmypaf_dcMBlyuvx2o2utCwFwfGD9UjaHsJLbv1nFtm2vUxt-PkFdXxS7JCNwqPyoUabtw64H1bG8ZwXmf8ghKrBLLV1a8UjHEQkBQaRau6AGFk2BdmoSztN35Xs3QzEMs0s0HHU4hjz-v2pPK6F6LCE0lYu04lBQKQmq2dKkdDF"
                />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest">Elias Thorne</p>
                <p className="text-[10px] opacity-60">Chief Archivist</p>
              </div>
            </div>
          </div>
        </div>

        {/* Lower Grid Row */}
        <div className="md:col-span-4 group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
          <div className="h-48 relative overflow-hidden">
            <Image
              alt="Ferns under glass"
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              fill
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKiRQNtRjv2Fj4ApiIkDrbZIKlgz6IkBbpS-r5tnmyjFeGlZjmlXqzOIx3QMlyuVC9it55NNB3X8xTDQK4RSx8X6xwQN_gZWqNpqbkBNoJn4dpA9Lx7sEVMej6dHPa_I1Q15JwnLwUx1iZnpCi-JQjdNMUVJQvq-SqBCJJiENnNAFxLqa41VPfDuqI_6rUEw1wmj7gkwhcZPNCo9F8nHnKVTBc84M3J7VsA14NhqeTdBnmuVADzpkYervQlOiBdYhevgqxWA31WPKR"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-secondary-fixed-dim text-on-secondary-fixed px-2 py-1 rounded text-[10px] font-bold uppercase tracking-tighter">New Entry</span>
            </div>
          </div>
          <div className="p-8">
            <h5 className="font-headline text-xl text-primary font-bold mb-2">Vascular Dynamics</h5>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-6">Mapping fluid transport systems within vertical forest habitats.</p>
            <div className="flex justify-between items-center border-t border-surface-variant pt-4">
              <span className="text-[10px] font-bold text-on-surface-variant/50 uppercase tracking-widest">Case 004</span>
              <span className="material-symbols-outlined text-secondary text-lg">arrow_outward</span>
            </div>
          </div>
        </div>

        <div className="md:col-span-8 bg-surface-container-low rounded-xl p-10 flex flex-col md:flex-row gap-10 items-center">
          <div className="flex-1">
            <h5 className="font-headline text-3xl text-primary font-bold mb-4">Structural Photosynthesis</h5>
            <p className="font-body text-on-surface-variant leading-relaxed mb-8">
              A longitudinal study on how light-reactive materials can emulate the organic behavior of climbing ivy. Using 19th-century sketches as a blueprint for contemporary generative design.
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white/50 p-4 rounded-lg">
                <p className="text-[10px] font-bold uppercase text-secondary mb-1">Duration</p>
                <p className="font-headline text-lg text-primary">14 Mo.</p>
              </div>
              <div className="bg-white/50 p-4 rounded-lg">
                <p className="text-[10px] font-bold uppercase text-secondary mb-1">Status</p>
                <p className="font-headline text-lg text-primary">Bloom</p>
              </div>
              <div className="bg-white/50 p-4 rounded-lg">
                <p className="text-[10px] font-bold uppercase text-secondary mb-1">Impact</p>
                <p className="font-headline text-lg text-primary">High</p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-64 aspect-square bg-white rounded-xl shadow-inner p-4 relative overflow-hidden group">
            <Image
              alt="Technical Illustration"
              className="object-cover rounded-lg opacity-40 group-hover:opacity-100 transition-opacity duration-500"
              fill
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtpUdabCrSJkSQAGzU675g8L2mM6wbrGIinImn9CiKKM-PwAQSfPxrZSfZ4-GzarN2hYmVcyU7LkpggN-tIFZpBMcCbfJ23QyqeUNWIDpL_wuCRMsbPZrQjIyPBuAuBOj2niNHYyeEtgDxg8NTW4Y7xcmjRxfmta4wkPsoRp9bdFrwmLlmB-_F5luEBPpBnQoNBwyyFnAerawQyvm2wioUEvuU3fK7w18hOB7YeQXxO5-55nfj5FRUvAKTVpPHOPe5_tdQllbwG8FW"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-12 h-12 rounded-full bg-secondary-fixed-dim flex items-center justify-center shadow-lg relative z-10">
                <span className="material-symbols-outlined text-on-secondary-fixed">fullscreen</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Pagination/Navigation Section */}
      <section className="mt-24 border-t border-surface-variant pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex gap-4">
          <div className="w-12 h-12 rounded-full flex items-center justify-center border border-primary/10 text-primary hover:bg-primary hover:text-white transition-all cursor-pointer">
            <span className="material-symbols-outlined">chevron_left</span>
          </div>
          <div className="w-12 h-12 rounded-full flex items-center justify-center bg-secondary-fixed-dim text-on-secondary-fixed font-bold">1</div>
          <div className="w-12 h-12 rounded-full flex items-center justify-center border border-primary/10 text-primary hover:bg-primary hover:text-white transition-all cursor-pointer">2</div>
          <div className="w-12 h-12 rounded-full flex items-center justify-center border border-primary/10 text-primary hover:bg-primary hover:text-white transition-all cursor-pointer">3</div>
          <div className="w-12 h-12 rounded-full flex items-center justify-center border border-primary/10 text-primary hover:bg-primary hover:text-white transition-all cursor-pointer">
            <span className="material-symbols-outlined">chevron_right</span>
          </div>
        </div>
        <p className="font-body text-sm text-on-surface-variant">Showing 5 of 24 Archival Records</p>
      </section>
    </main>
  );
}