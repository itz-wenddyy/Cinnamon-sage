import { useRef } from "react";

export default function AboutSlider() {
  const sliderRef = useRef(null);
  
  // Added "./" to the front of each string so GitHub Pages can locate them inside your public folder
  const images = [
    "./cute cafe.jpg", 
    "./matcha.webp", 
    "./green egg.jfif", 
    "./Ham and Cheese.avif", 
    "./toast.jfif", 
    "./cheese-danish-served.jpg", 
    "./muffin.jfif"
  ];

  const scroll = (offset) => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <>
      <section id="about" className="text-center py-12 px-4 bg-white">
        <h2 className="text-3xl font-bold text-[#332211] mb-8">Take a Look Inside</h2>
        <div className="max-w-[580px] margin-0 mx-auto relative px-12">
          <div 
            ref={sliderRef}
            className="flex overflow-x-hidden scroll-smooth gap-[15px] w-full max-w-[480px] h-[375px] mx-auto"
          >
            {images.map((img, idx) => (
              <img key={idx} src={img} alt="Cafe Feature" className="w-[480px] h-[375px] object-cover flex-shrink-0" />
            ))}
          </div>
          <button 
            onClick={() => scroll(-495)}
            className="absolute top-1/2 -translate-y-1/2 left-0 bg-brand-primary text-white w-9 h-9 rounded-full flex items-center justify-center font-bold text-xl hover:bg-opacity-90"
          >
            ❮
          </button>
          <button 
            onClick={() => scroll(495)}
            className="absolute top-1/2 -translate-y-1/2 right-0 bg-brand-primary text-white w-9 h-9 rounded-full flex items-center justify-center font-bold text-xl hover:bg-opacity-90"
          >
            ❯
          </button>
        </div>
      </section>

      <section className="max-w-2xl mx-auto text-center py-12 px-4">
        <h2 className="text-3xl font-bold text-[#332211] mb-5">The Big Dream</h2>
        <p className="text-[1.1rem] leading-relaxed text-[#443322]">
          Okay, so full disclosure: Cinnamon & Sage doesn’t actually exist yet. This website is basically a mood board for a huge dream of mine. I want to open a low-key, book-themed coffee shop that flips into a cozy bar at night. The goal is to build a space filled with bookshelves where you can study with a matcha latte and a pastry during the day, and then wind down with a drink and good music later on. I'm using this site to map out exactly what that vibe will look like one day, and I'm so excited to eventually make it happen.
        </p>
      </section>
    </>
  );
}