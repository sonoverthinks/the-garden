import Image from "next/image";
import Link from "next/link";

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
          <div className="absolute top-6 left-6">
            <span className="glass-panel px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-white bg-white/10 backdrop-blur-md">Prime Specimen</span>
          </div>
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <div className="text-center p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="font-headline text-3xl text-white font-bold mb-4 italic">Vascular Dynamics</h3>
              <div className="flex justify-center gap-2">
                <span className="glass-panel px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-white border-white/20">Case 004</span>
              </div>
              <div className="mt-4 flex justify-center gap-3 opacity-70 text-white/80"><span className="text-[9px] font-bold uppercase tracking-tighter">Unity</span><span className="text-[9px] font-bold uppercase tracking-tighter">C#</span><span className="text-[9px] font-bold uppercase tracking-tighter">Shaders</span></div>
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

        {/* Project 5: Small Square (Flora: Minor Experiments) */}
        <div className="md:col-span-4 md:row-span-2 bg-surface-container-low rounded-xl p-8 space-y-8 flex flex-col relative h-[480px]">
          <div className="flex items-baseline justify-between border-b border-surface-variant/30 pb-4">
            <h3 className="font-headline text-2xl text-primary font-bold italic">Flora: Minor Experiments</h3>
          </div>
          
          <div className="space-y-6 flex-1 overflow-y-auto pr-2 custom-scrollbar">
            {/* Activity Item 1 */}
            <div className="flex gap-4 group/item cursor-pointer items-center">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center group-hover/item:bg-primary transition-colors duration-300">
                <span className="material-symbols-outlined text-primary group-hover/item:text-white transition-colors text-xl">hub</span>
              </div>
              <div className="space-y-0">
                <p className="text-base font-medium text-on-surface group-hover/item:text-primary transition-colors">
                  Neural Roots <span className="text-[10px] opacity-40 ml-1 uppercase tracking-tighter font-bold">P5.js</span>
                </p>
              </div>
            </div>

            {/* Activity Item 2 */}
            <div className="flex gap-4 group/item cursor-pointer items-center">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center group-hover/item:bg-primary transition-colors duration-300">
                <span className="material-symbols-outlined text-primary group-hover/item:text-white transition-colors text-xl">gradient</span>
              </div>
              <div className="space-y-0">
                <p className="text-base font-medium text-on-surface group-hover/item:text-primary transition-colors">
                  Petal Shaders <span className="text-[10px] opacity-40 ml-1 uppercase tracking-tighter font-bold">GLSL</span>
                </p>
              </div>
            </div>

            {/* Activity Item 3 */}
            <div className="flex gap-4 group/item cursor-pointer items-center">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center group-hover/item:bg-primary transition-colors duration-300">
                <span className="material-symbols-outlined text-primary group-hover/item:text-white transition-colors text-xl">terminal</span>
              </div>
              <div className="space-y-0">
                <p className="text-base font-medium text-on-surface group-hover/item:text-primary transition-colors">
                  Seedling CLI <span className="text-[10px] opacity-40 ml-1 uppercase tracking-tighter font-bold">Go</span>
                </p>
              </div>
            </div>

            {/* Activity Item 4 */}
            <div className="flex gap-4 group/item cursor-pointer items-center">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center group-hover/item:bg-primary transition-colors duration-300">
                <span className="material-symbols-outlined text-primary group-hover/item:text-white transition-colors text-xl">insights</span>
              </div>
              <div className="space-y-0">
                <p className="text-base font-medium text-on-surface group-hover/item:text-primary transition-colors">
                  Pollen Data Viz <span className="text-[10px] opacity-40 ml-1 uppercase tracking-tighter font-bold">D3.js</span>
                </p>
              </div>
            </div>

            {/* Activity Item 5 */}
            <div className="flex gap-4 group/item cursor-pointer items-center">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center group-hover/item:bg-primary transition-colors duration-300">
                <span className="material-symbols-outlined text-primary group-hover/item:text-white transition-colors text-xl">database</span>
              </div>
              <div className="space-y-0">
                <p className="text-base font-medium text-on-surface group-hover/item:text-primary transition-colors">
                  Chlorophyll API <span className="text-[10px] opacity-40 ml-1 uppercase tracking-tighter font-bold">Rust</span>
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

    </main>
  );
}