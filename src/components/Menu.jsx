export default function Menu({ addToCart }) {
  const eats = [
    { name: "Croissant Sandwich", price: 6.50, desc: "Smoked ham and mozzarella cheese on a flaky, plain croissant." },
    { name: "Green Omelette", price: 15.99, desc: "Open-faced omelette with scallions and parsley. Served with buttered toast, home fries, and a fresh house salad." },
    { name: "Chia Pudding", price: 5.00, desc: "Housemade organic chia pudding. Vegan-friendly, prepared with premium almond milk." },
    { name: "Avocado Toast", price: 12.99, desc: "Homemade guacamole topped with crumbled feta cheese and crunchy sunflower seeds on freshly baked multigrain Pullman toast. Served with a house salad." },
    { name: "Cheese Danish", price: 4.25, desc: "Flaky puff pastry with a sweet, creamy cream cheese filling center, dusted with powdered sugar." },
    { name: "Chocolate Croissant", price: 4.75, desc: "Classic buttery, golden Parisian pastry filled with rich, semi-sweet dark chocolate blocks." },
    { name: "Assorted Muffins", price: 3.75, desc: "Baked fresh daily. Choice of Wild Blueberry Crumble, Double Chocolate Chip, or Banana Nut." },
    { name: "Fudge Brownie", price: 4.00, desc: "Rich, dense chocolate fudge brownie with a crackly top crusted surface. Served warm." }
  ];

  const brews = [
    { name: "Single Origin Coffee", price: 3.50, desc: "Premium single-origin filter coffee with rotating bean options." },
    { name: "Americano", price: 3.75, desc: "Rich espresso shots extended with hot water for a smooth finish." },
    { name: "Espresso", price: 3.50, desc: "A concentrated, full-bodied double shot of our signature house blend." },
    { name: "Caffè Mocha", price: 5.50, desc: "Espresso mixed with artisanal dark chocolate and steamed milk." },
    { name: "Matcha Latte", price: 6.00, desc: "Pure, stone-ground Japanese matcha whisked and paired with velvety steamed milk." },
    { name: "Chai / Turmeric Latte", price: 5.00, desc: "Your choice of aromatic spiced black tea chai or warming anti-inflammatory turmeric milk blend." }
  ];

  const renderCard = (item, index) => (
    <div key={index} className="border border-[#cbbba0] rounded-lg p-5 bg-white shadow-sm flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start gap-4 mb-2">
          <h4 className="text-lg font-bold text-[#332211]">{item.name}</h4>
          <span className="text-[#708238] font-bold">${item.price.toFixed(2)}</span>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
      </div>
      <button 
        onClick={() => addToCart(item.name, item.price)}
       className="w-full mt-4 bg-brand-primary text-white font-medium py-2 px-4 rounded hover:bg-brand-hover transition"
      >
        Add to Cart
      </button>
    </div>
  );

  return (
    <section id="menu" className="py-16 px-4 bg-[#fcfaf2]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#332211] mb-12 border-b-2 border-[#708238] pb-2 max-w-xs mx-auto">Our Menu</h2>
        
        <h3 className="text-2xl font-bold text-[#443322] mb-6">Eats</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {eats.map(renderCard)}
        </div>

        <h3 className="text-2xl font-bold text-[#443322] mb-6">Brews</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {brews.map(renderCard)}
        </div>
      </div>
    </section>
  );
}