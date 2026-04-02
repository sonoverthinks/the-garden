import Image from "next/image";

export default function AnalogPage() {
  return (
    <main className="pt-16 pb-24 px-8 max-w-7xl mx-auto">
      {/* Header Section */}
      <header className="mb-20 max-w-3xl">
        <div className="inline-block px-3 py-1 mb-6 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold tracking-widest uppercase">
          Human Element
        </div>
        <h1 className="font-headline text-5xl md:text-7xl font-light italic leading-tight text-primary mb-6">
          The <span className="text-secondary">Analog</span> Scrapbook
        </h1>
        <p className="text-on-surface-variant text-lg md:text-xl leading-relaxed font-light">
          A visual cross-section of the digital and physical. Where the cold precision of logic meets the warm, messy reality of creation.
        </p>
      </header>

      {/* Masonry Gallery */}
      <div className="masonry-grid">
        {/* Item 1: React Setup */}
        <div className="masonry-item group">
          <div className="glass-herbarium p-3 rounded-xl shadow-[0_12px_40px_rgba(25,28,26,0.06)] transition-all duration-500 hover:translate-y-[-4px]">
            <div className="relative overflow-hidden rounded-lg aspect-[4/5]">
              <Image
                alt="Digital Workspace"
                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                fill
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpNxdbpuL9ZCHmvWxm1wAXIfEPGboRdRcaED61j68RuQtjziMuaaAYw2nXMpgGQiob6WBsljXZcBBC2xu92K-cT6C_iwnq7aQoG_fMYCQjjkEuRYq-ILCoSru-5ZnMVvEd0Wp-HfPVQIu70g-MStI5sURqLxnDeJo1IqMN9MBGcrHXCvVxR3bYFla1yt0dKI2IfXU7ME8xoyGfg2mJeTHW8VGXWMIFqmwFQnYgTsFpOyEHskoS6QsxGAUv8Ba6iKHlz1qj5Bf-npR6"
              />
            </div>
          </div>
        </div>

        {/* Item 2: Manufacturing Machinery */}
        <div className="masonry-item group">
          <div className="glass-herbarium p-3 rounded-xl shadow-[0_12px_40px_rgba(25,28,26,0.06)] transition-all duration-500 hover:translate-y-[-4px] border-t-2 border-secondary-fixed-dim">
            <div className="relative overflow-hidden rounded-lg aspect-square">
              <Image
                alt="Industrial Machinery"
                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                fill
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqamtJLG5rFRV3Ac8K7bfkKuh2IE25Tk0xA0WWt6b0UDuYu4QxIP7Hw2HYS_QY_HqJPhdM274SzienSCjvl4xf7ZIHMMchM0ucaj-vK2azwWa2c-7BNPPcL_fLGEt4OPYKuYjdBLzrF6Ay0YhMF-6aoQf_OGjn6mqnaCa01ODEsQY2qvXMYva4ApL6jsx7Mi4Fsw4lfDl7iyT3F46FxKp-2GhClXn800RT5LP7ET7hEs392suPjYTUoJNC85UlZefRCtI2V85gqnFI"
              />
            </div>
          </div>
        </div>

        {/* Item 3: Meal Prep */}
        <div className="masonry-item group">
          <div className="glass-herbarium p-3 rounded-xl shadow-[0_12px_40px_rgba(25,28,26,0.06)] transition-all duration-500 hover:translate-y-[-4px]">
            <div className="relative overflow-hidden rounded-lg aspect-[3/4]">
              <Image
                alt="Meal Prep Layout"
                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                fill
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPBTf2NRQMfea5pwnsDD8JoXZ4Ga3zke9fj8Mnjjp7zhBoPeVsTEcDnNTeXWoKExWr92uEIUtDdBZXKKdra3ihEJLLBgk1yiAlxPra-BXsRsPhcqDaldRuvDBh4BxgrAi5LRnCv14JMCIvymyjMAGNWP8vklg-qyvop0cZv6Bi8pofy7qyl0kaMlTST8chTV3JIui6IUZObigblC37aqrmVWRh5aF0yi2DUgT9l6d_J074lg_Atqt658y5NaH5oY_QwZC6S4S6yjVs"
              />
            </div>
          </div>
        </div>

        {/* Item 4: Home Build / Soil */}
        <div className="masonry-item group">
          <div className="glass-herbarium p-3 rounded-xl shadow-[0_12px_40px_rgba(25,28,26,0.06)] transition-all duration-500 hover:translate-y-[-4px]">
            <div className="relative overflow-hidden rounded-lg aspect-[4/5]">
              <Image
                alt="Soil and Garden"
                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                fill
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGiKwJ5UxxLKXYoOwkWonlUkvoGj7cgGtJi3_uBIwbtSpZvymu1ksA-MitSVyAnESzjWA1-tQ0px2Uk3PYJjXqj1qjFnGFEKZu6wekQf_xDoRig21YclhUr2CO3h_eXnrL8Ans5kbT6D8LeTtfx4FWbWCUSEXWlluz-WZLod4ATjBIBEQooqOq71HcYd-7ZsL3kn8NMoPZiWoAM9-gEn_UguFdgxDjA4rn2wmOwGY6npVESCz1ugCjAf_yebjZQk9rFwyEYcFVKy3h"
              />
            </div>
          </div>
        </div>

        {/* Item 5: Soccer Match */}
        <div className="masonry-item group">
          <div className="glass-herbarium p-3 rounded-xl shadow-[0_12px_40px_rgba(25,28,26,0.06)] transition-all duration-500 hover:translate-y-[-4px] border-t-2 border-secondary-fixed-dim">
            <div className="relative overflow-hidden rounded-lg aspect-video">
              <Image
                alt="Soccer Field"
                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                fill
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvhM6xoB_0HJtpG97oLeLKH14rkkKXJLPEFLkR8ffO7hrvJh9AxscWFit4L_4EZ7e86dStE1G33NBDhVPp32NKOtIfOsa6NZhjrmyotktriYZA7F6egzFZ3ES7d2nXaGdeOx-WwijNIymrmBiNMDtBoP76d-8KM7rAOM90ylJ-o4TWnYLuMJMmIXOEEwDDH1zcj9j9CDtu9E5qsZ0-8ylt5vM7OO-Z2nEt831GRrvGkshfGY39IrOlYVGmX217Yvw0GqouCWtp9CKU"
              />
            </div>
          </div>
        </div>

        {/* Item 6: Architectural Detail */}
        <div className="masonry-item group">
          <div className="glass-herbarium p-3 rounded-xl shadow-[0_12px_40px_rgba(25,28,26,0.06)] transition-all duration-500 hover:translate-y-[-4px]">
            <div className="relative overflow-hidden rounded-lg aspect-[3/4]">
              <Image
                alt="Home Construction Detail"
                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                fill
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDM9jQZ9tzZyMNhgUvB6yJ8mxUABDUSEIuZec4audLg3qs8KfznqBdLjOZe1D870crFfG9el5HtoQZ2ynWuJuwkbKw2-UYCxN4PWgrkJRd7b8hvMw_i6y_LXBS_9unrBK4MIFLEh4Y9seGMdwTnJSlE-iR7uLIKPJyvwP0ujkNHhlr7GMg7VcQSp3RnrqfrmQ18KpeNbaSRS0-iez6k0Cz7y1v6QpbsGvysS3DlZNzfOq3UxwZHP5PIO80fdsBydQGwq3IpL0DFU2Cy"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
