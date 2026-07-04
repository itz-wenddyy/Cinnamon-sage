import { useState } from 'react';

export default function Header({ cartCount }) {
  // Fix the ReferenceError by mapping totalItems to your cartCount prop (defaulting to 0 if undefined)
  const totalItems = cartCount || 0;

  // This state controls whether the mobile hamburger menu is open or closed
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between bg-white px-6 py-3 shadow-md">
      {/* Logo Area */}
      <div className="logo">
        <a href="#home">
          <img 
            src="logo.png" 
            alt="Cinnamon & Sage Logo" 
            className="h-12 w-auto object-contain block" 
          />
        </a>
      </div>

      {/* DESKTOP NAVIGATION (Hidden on mobile, flex on medium/large screens) */}
      <nav className="hidden md:flex items-center gap-6 font-medium text-gray-700">
        <a href="#home" className="hover:text-amber-700 transition">Home</a>
        <a href="#about" className="hover:text-amber-700 transition">About</a>
        <a href="#menu" className="hover:text-amber-700 transition">Menu</a>
        <a href="#contact" className="hover:text-amber-700 transition">Contact</a>
        
        {/* Shopping Cart Button with Dynamic Live Updates Badge */}
        <a 
          href="#cart-section" 
          className="bg-brand-primary text-white px-5 py-2 rounded-full font-bold shadow-md inline-flex items-center gap-2 hover:bg-[#5a6946]"
        >
          🛒 Shopping Cart <span className="bg-white text-[#6b7a57] text-xs px-2 py-0.5 rounded-full font-extrabold">{totalItems}</span>
        </a>
      </nav>

      {/* MOBILE HAMBURGER BUTTON (Visible only on small screens) */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="block md:hidden text-2xl text-gray-700 focus:outline-none"
        aria-label="Toggle menu"
      >
        {isOpen ? '✕' : '☰'}
      </button>

      {/* MOBILE DROPDOWN MENU (Only shows when hamburger is clicked) */}
      {isOpen && (
        <nav className="absolute top-full left-0 w-full bg-white border-t border-gray-100 flex flex-col p-5 gap-4 shadow-lg md:hidden font-medium text-gray-700 z-50">
          <a href="#home" onClick={() => setIsOpen(false)} className="hover:text-amber-700">Home</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-amber-700">About</a>
          <a href="#menu" onClick={() => setIsOpen(false)} className="hover:text-amber-700">Menu</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-amber-700">Contact</a>
          <a 
            href="#cart-section" 
            onClick={() => setIsOpen(false)} 
            className="inline-flex items-center justify-center gap-2 bg-[#6b7a57] text-white px-4 py-2 rounded-full text-sm font-bold shadow-md"
          >
            🛒 Shopping Cart ({totalItems})
          </a>
        </nav>
      )}
    </header>
  );
}