import Image from "next/image";

const INSTAGRAM_POSTS = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCpNxdbpuL9ZCHmvWxm1wAXIfEPGboRdRcaED61j68RuQtjziMuaaAYw2nXMpgGQiob6WBsljXZcBBC2xu92K-cT6C_iwnq7aQoG_fMYCQjjkEuRYq-ILCoSru-5ZnMVvEd0Wp-HfPVQIu70g-MStI5sURqLxnDeJo1IqMN9MBGcrHXCvVxR3bYFla1yt0dKI2IfXU7ME8xoyGfg2mJeTHW8VGXWMIFqmwFQnYgTsFpOyEHskoS6QsxGAUv8Ba6iKHlz1qj5Bf-npR6",
    alt: "Digital Workspace",
    aspect: "aspect-4/5",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDqamtJLG5rFRV3Ac8K7bfkKuh2IE25Tk0xA0WWt6b0UDuYu4QxIP7Hw2HYS_QY_HqJPhdM274SzienSCjvl4xf7ZIHMMchM0ucaj-vK2azwWa2c-7BNPPcL_fLGEt4OPYKuYjdBLzrF6Ay0YhMF-6aoQf_OGjn6mqnaCa01ODEsQY2qvXMYva4ApL6jsx7Mi4Fsw4lfDl7iyT3F46FxKp-2GhClXn800RT5LP7ET7hEs392suPjYTUoJNC85UlZefRCtI2V85gqnFI",
    alt: "Industrial Machinery",
    aspect: "aspect-square",
    hasBorder: true,
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPBTf2NRQMfea5pwnsDD8JoXZ4Ga3zke9fj8Mnjjp7zhBoPeVsTEcDnNTeXWoKExWr92uEIUtDdBZXKKdra3ihEJLLBgk1yiAlxPra-BXsRsPhcqDaldRuvDBh4BxgrAi5LRnCv14JMCIvymyjMAGNWP8vklg-qyvop0cZv6Bi8pofy7qyl0kaMlTST8chTV3JIui6IUZObigblC37aqrmVWRh5aF0yi2DUgT9l6d_J074lg_Atqt658y5NaH5oY_QwZC6S4S6yjVs",
    alt: "Meal Prep Layout",
    aspect: "aspect-3/4",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDGiKwJ5UxxLKXYoOwkWonlUkvoGj7cgGtJi3_uBIwbtSpZvymu1ksA-MitSVyAnESzjWA1-tQ0px2Uk3PYJjXqj1qjFnGFEKZu6wekQf_xDoRig21YclhUr2CO3h_eXnrL8Ans5kbT6D8LeTtfx4FWbWCUSEXWlluz-WZLod4ATjBIBEQooqOq71HcYd-7ZsL3kn8NMoPZiWoAM9-gEn_UguFdgxDjA4rn2wmOwGY6npVESCz1ugCjAf_yebjZQk9rFwyEYcFVKy3h",
    alt: "Soil and Garden",
    aspect: "aspect-4/5",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAvhM6xoB_0HJtpG97oLeLKH14rkkKXJLPEFLkR8ffO7hrvJh9AxscWFit4L_4EZ7e86dStE1G33NBDhVPp32NKOtIfOsa6NZhjrmyotktriYZA7F6egzFZ3ES7d2nXaGdeOx-WwijNIymrmBiNMDtBoP76d-8KM7rAOM90ylJ-o4TWnYLuMJMmIXOEEwDDH1zcj9j9CDtu9E5qsZ0-8ylt5vM7OO-Z2nEt831GRrvGkshfGY39IrOlYVGmX217Yvw0GqouCWtp9CKU",
    alt: "Soccer Field",
    aspect: "aspect-video",
    hasBorder: true,
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDM9jQZ9tzZyMNhgUvB6yJ8mxUABDUSEIuZec4audLg3qs8KfznqBdLjOZe1D870crFfG9el5HtoQZ2ynWuJuwkbKw2-UYCxN4PWgrkJRd7b8hvMw_i6y_LXBS_9unrBK4MIFLEh4Y9seGMdwTnJSlE-iR7uLIKPJyvwP0ujkNHhlr7GMg7VcQSp3RnrqfrmQ18KpeNbaSRS0-iez6k0Cz7y1v6QpbsGvysS3DlZNzfOq3UxwZHP5PIO80fdsBydQGwq3IpL0DFU2Cy",
    alt: "Home Construction Detail",
    aspect: "aspect-3/4",
  },
];

export default function InstagramPage() {
  const cardBaseClasses = "glass-herbarium p-3 rounded-xl shadow-[0_12px_40px_rgba(25,28,26,0.06)] transition-all duration-500 hover:-translate-y-1";

  return (
    <main className="pt-16 pb-24 px-8 max-w-7xl mx-auto">
      {/* Masonry Gallery */}
      <div className="masonry-grid">
        {INSTAGRAM_POSTS.map((post, index) => (
          <div key={index} className="masonry-item group">
            <div className={`${cardBaseClasses} ${post.hasBorder ? 'border-t-2 border-secondary-fixed-dim' : ''}`}>
              <div className={`relative overflow-hidden rounded-lg ${post.aspect}`}>
                <Image
                  alt={post.alt}
                  className="object-cover w-full h-full transition-all duration-700"
                  fill
                  src={post.src}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
