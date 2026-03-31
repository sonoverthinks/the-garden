export default function ProjectsPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-12 space-y-16">
      <header className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Museum of Work
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
          A curated exhibit of technical capability. These are not just links to repositories, but detailed case studies of complex problems and their solutions.
        </p>
      </header>

      <div className="space-y-24">
        {/* Project 1: Nexus */}
        <article id="nexus" className="relative isolate flex flex-col md:flex-row gap-8 overflow-hidden rounded-3xl bg-gray-900 p-8 md:p-12 border border-white/10 shadow-[0_0_40px_rgba(59,130,246,0.15)]">
          {/* Abstract Background Visuals */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-900/40 to-transparent"></div>
          <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] mix-blend-screen transform translate-x-1/2 -translate-y-1/2"></div>

          {/* Visual Concept Placeholder */}
          <div className="md:w-1/3 flex-shrink-0 relative group">
            <div className="aspect-square rounded-2xl overflow-hidden bg-black/50 border border-white/10 backdrop-blur-md flex items-center justify-center p-6 shadow-inner relative">
                {/* Simulated abstract root system graphic */}
                <div className="absolute inset-0 opacity-50 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/30 via-transparent to-transparent"></div>
                <div className="w-full h-full border border-blue-500/30 rounded-full flex items-center justify-center animate-pulse">
                    <div className="w-3/4 h-3/4 border border-blue-400/50 rounded-full flex items-center justify-center">
                       <div className="w-1/2 h-1/2 bg-blue-500/80 rounded-full blur-sm"></div>
                    </div>
                </div>
            </div>
          </div>

          <div className="md:w-2/3 space-y-8 text-gray-300 relative z-10">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Project Nexus: Decentralized Root-System Protocol</h2>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs font-medium text-blue-300 border border-blue-500/30">Rust</span>
                <span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs font-medium text-blue-300 border border-blue-500/30">WebRTC</span>
                <span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs font-medium text-blue-300 border border-blue-500/30">React</span>
              </div>
            </div>

            <section className="space-y-4">
              <h3 className="text-xl font-semibold text-white border-b border-white/10 pb-2">The Problem</h3>
              <p>
                In decentralized, peer-to-peer networks, ensuring state synchronization without a central authority often leads to significant latency and complex conflict resolution mechanisms. The goal was to build a system that allowed real-time collaborative editing of unstructured data streams across fluctuating node connections.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-semibold text-white border-b border-white/10 pb-2">The Tech Stack & &quot;Why&quot;</h3>
              <ul className="list-disc list-inside space-y-2">
                <li><strong className="text-white">Rust:</strong> Chosen for its memory safety without garbage collection overhead, crucial for predictable performance in core networking components.</li>
                <li><strong className="text-white">WebRTC:</strong> Provided the lowest possible latency for peer-to-peer data channels directly between browsers.</li>
                <li><strong className="text-white">React:</strong> Used for the frontend client due to its robust ecosystem and efficient declarative UI updates responding to frequent state changes.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-semibold text-white border-b border-white/10 pb-2">The Hardest Part</h3>
              <p>
                Implementing the Conflict-free Replicated Data Type (CRDT) sequence. The challenge was ensuring that concurrent inserts at the exact same index by different peers didn&apos;t result in divergent states.
              </p>
              <div className="bg-black/60 rounded-xl p-4 border border-white/5 font-mono text-sm overflow-x-auto">
<pre className="text-blue-200">
{`// Simplified Rust snippet for CRDT Insert logic
fn local_insert(&mut self, index: usize, value: char) -> Operation {
    let id = self.generate_id(index);
    let op = Operation::Insert { id: id.clone(), value };
    self.apply(op.clone());
    self.broadcast(op.clone());
    op
}

fn apply_remote(&mut self, op: Operation) {
    // Crucial sorting logic to resolve simultaneous inserts
    // ...
}`}
</pre>
              </div>
              <p>
                We overcame this by implementing a unique fractional indexing system, ensuring that every element ID was globally unique and sortable, allowing peers to eventually converge on the same list order regardless of the order they received the operations.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-semibold text-white border-b border-white/10 pb-2">Retrospective</h3>
              <p>
                The CRDT approach was highly successful, achieving sub-10ms eventual consistency on local networks. However, the fractional indexing system led to ID bloat over time. If I were to rebuild it, I would implement a periodic &quot;tombstone&quot; garbage collection mechanism or switch to a slightly more complex, but more space-efficient, Tree-based CRDT like LSEQ.
              </p>
            </section>
          </div>
        </article>
      </div>
    </div>
  );
}
