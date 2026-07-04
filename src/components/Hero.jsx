export default function Hero() {
  return (
    <section 
      id="home" 
      className="hero-bg-image relative flex items-center justify-center h-[70vh] bg-cover bg-center text-center px-4 text-[#fcfaf2]"
    >
      {/* Dark overlay: ensures the text is always readable regardless of how bright the photo is */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      {/* Content wrapper: 'relative z-10' keeps your text sitting safely above the dark overlay */}
      <div className="relative z-10 max-w-2xl">
        <h1 className="text-5xl font-bold mb-4 drop-shadow-md">Cinnamon & Sage</h1>
        <p className="text-xl mb-6 opacity-90 drop-shadow-sm">Artisanal Coffee & Cozy Vibes</p>
        <a 
          href="#menu" 
          className="inline-block bg-brand-primary text-white font-bold px-6 py-3 rounded hover:bg-[#ebdcb9] hover:text-[#2b241e] transition-colors shadow-md"
        >
          Explore Menu
        </a>
      </div>
    </section>
  );
}