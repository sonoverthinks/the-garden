import Image from "next/image";

export default function ProjectsPage() {
  return (
    <main className="max-w-7xl mx-auto px-8 py-16">
      {/* Pure Bento Grid Portfolio */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[240px]">

        {/* Project 1: Large Highlight */}
        <div className="md:col-span-8 md:row-span-2 bento-card relative overflow-hidden rounded-xl group cursor-pointer">
          <Image
            alt="The Mycelium Protocol"
            className="object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 duration-700"
            fill
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAn32jqzZ8NPv34GhNPRDM3HUYE6cdulUU0YkiTBesX9bbbGpoLo0DYhAim0fuoUoP-KJrW82oGL3vg59Vfi7pVLOF7s2d6bak88HJwLScaRoanszCDlZYpQ5KE-ZVp6jw0nd0OntbU-1j8BLNvzSg599EgnA4tiFhRTAs13grpHuhzuoXWPFMD8pZBb93zFKz4Lebb8IQuPCL_Ox5fzUhmlr73SjJd94Q1Q9_s4yeVeawhr1SRJDwWHwHtUtrGuH_-T6CoT8bGLjT0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-10 w-full">
            <div className="flex gap-2 mb-4">
              <span className="glass-panel px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-primary">Decentralized</span>
              <span className="glass-panel px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-primary">Technical Lead</span>
              <div className="flex gap-2 ml-4 border-l border-white/20 pl-4"><span className="text-[10px] font-medium uppercase tracking-widest text-white/60">React</span><span className="text-[10px] font-medium uppercase tracking-widest text-white/60">Three.js</span><span className="text-[10px] font-medium uppercase tracking-widest text-white/60">GLSL</span></div>
            </div>
            <h2 className="font-headline text-5xl text-white font-bold italic tracking-tight">The Mycelium Protocol</h2>
          </div>
        </div>

        {/* Project 2: Vertical Tall */}
        <div className="md:col-span-4 md:row-span-2 bento-card relative overflow-hidden rounded-xl group cursor-pointer">
          <Image
            alt="Vascular Dynamics"
            className="object-cover group-hover:scale-110 duration-700"
            fill
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKiRQNtRjv2Fj4ApiIkDrbZIKlgz6IkBbpS-r5tnmyjFeGlZjmlXqzOIx3QMlyuVC9it55NNB3X8xTDQK4RSx8X6xwQN_gZWqNpqbkBNoJn4dpA9Lx7sEVMej6dHPa_I1Q15JwnLwUx1iZnpCi-JQjdNMUVJQvq-SqBCJJiENnNAFxLqa41VPfDuqI_6rUEw1wmj7gkwhcZPNCo9F8nHnKVTBc84M3J7VsA14NhqeTdBnmuVADzpkYervQlOiBdYhevgqxWA31WPKR"
          />
          <div className="absolute inset-0 glass-panel opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <div className="text-center p-6">
              <h3 className="font-headline text-3xl text-primary font-bold mb-4">Vascular Dynamics</h3>
              <div className="flex justify-center gap-2">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-[10px] font-bold uppercase">Case 004</span>
              </div>
              <div className="mt-4 flex justify-center gap-3 opacity-70"><span className="text-[9px] font-bold uppercase tracking-tighter text-primary/80">Unity</span><span className="text-[9px] font-bold uppercase tracking-tighter text-primary/80">C#</span><span className="text-[9px] font-bold uppercase tracking-tighter text-primary/80">Shaders</span></div>
            </div>
          </div>
          <div className="absolute bottom-6 left-6 group-hover:opacity-0 transition-opacity">
            <h3 className="font-headline text-2xl text-white font-bold italic drop-shadow-md">Vascular Dynamics</h3>
          </div>
        </div>

        {/* Project 4: Large Square/Main Content */}
        <div className="md:col-span-8 md:row-span-2 bento-card bg-surface-container-low rounded-xl overflow-hidden group cursor-pointer flex flex-col relative h-[480px]">
          <div className="h-2/3 overflow-hidden relative w-full">
            <Image
              alt="Structural Photosynthesis"
              className="object-cover group-hover:scale-105 duration-700"
              fill
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAn32jqzZ8NPv34GhNPRDM3HUYE6cdulUU0YkiTBesX9bbbGpoLo0DYhAim0fuoUoP-KJrW82oGL3vg59Vfi7pVLOF7s2d6bak88HJwLScaRoanszCDlZYpQ5KE-ZVp6jw0nd0OntbU-1j8BLNvzSg599EgnA4tiFhRTAs13grpHuhzuoXWPFMD8pZBb93zFKz4Lebb8IQuPCL_Ox5fzUhmlr73SjJd94Q1Q9_s4yeVeawhr1SRJDwWHwHtUtrGuH_-T6CoT8bGLjT0"
            />
          </div>
          <div className="p-8 flex flex-1 items-center justify-between">
            <div>
              <h3 className="font-headline text-3xl text-primary font-bold italic mb-2">Structural Photosynthesis</h3>
              <div className="flex gap-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant border-r pr-4 border-surface-variant">Generative</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Archival Study</span>
                <div className="flex gap-4 border-l border-surface-variant pl-4"><span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/50">Python</span><span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/50">TensorFlow</span></div>
              </div>
            </div>
            <span className="material-symbols-outlined text-4xl text-primary group-hover:translate-x-2 transition-transform" data-icon="arrow_right_alt">arrow_right_alt</span>
          </div>
        </div>

        {/* Project 5: Small Square */}
        <div className="md:col-span-4 md:row-span-2 bento-card bg-primary botanical-gradient rounded-xl p-8 text-white flex flex-col justify-center items-center text-center group cursor-pointer relative h-[480px]">
          <div>
            <h3 className="font-headline text-2xl font-bold italic mb-2">Digital Flora</h3>
            <span className="text-[10px] font-bold uppercase tracking-widest opacity-70">Simulation • Unity</span>
            <div className="mt-2 flex gap-3 justify-center"><span className="text-[9px] font-medium uppercase tracking-widest text-white/40">C#</span><span className="text-[9px] font-medium uppercase tracking-widest text-white/40">OpenVR</span></div>
          </div>
          <span className="material-symbols-outlined text-secondary-fixed-dim text-3xl mt-4" data-icon="energy_savings_leaf">energy_savings_leaf</span>
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