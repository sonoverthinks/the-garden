import Image from "next/image";

export const components = {
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <div className="relative w-full aspect-16/7 rounded-3xl overflow-hidden shadow-xl shadow-primary/5 my-8">
      <Image
        src={typeof props.src === "string" ? props.src : ""}
        fill
        className="object-cover"
        alt={props.alt || "MDX Image"}
      />
      <div className="absolute inset-0 bg-linear-to-t from-primary/20 to-transparent pointer-events-none"></div>
    </div>
  ),
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className="text-6xl font-headline font-extrabold tracking-tight text-primary leading-[1.1] mb-6"
      {...props}
    />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="text-3xl font-headline font-bold text-primary mt-12 mb-6"
      {...props}
    />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className="text-2xl font-headline font-bold text-primary mt-8 mb-4"
      {...props}
    />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <div
      className="font-body text-lg leading-relaxed text-on-surface-variant mb-6"
      {...props}
    />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="border-l-4 border-secondary-fixed-dim pl-8 py-4 my-10 italic font-headline text-2xl text-primary"
      {...props}
    />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre
      className="bg-[#0d1117] rounded-2xl border-t-4 border-secondary-fixed-dim shadow-sm mb-10 p-6 font-mono text-sm leading-relaxed overflow-x-auto"
      {...props}
    />
  ),
};
