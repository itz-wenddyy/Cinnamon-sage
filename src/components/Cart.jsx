export default function Cart({ cart, removeFromCart, clearCart }) {
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <section id="cart-section" className="max-w-[600px] mx-auto my-10 p-6 border border-[#cbbba0] rounded-lg bg-[#fcfaf2] scroll-mt-24">
      <h2 className="text-2xl font-bold text-[#332211] border-b-2 border-[#708238] pb-2 mb-4">Your Shopping Cart</h2>
      
      <ul className="divide-y divide-[#cbbba0] min-h-[50px]">
        {cart.length === 0 ? (
          <li className="text-[#887766] italic py-3">Your cart is currently empty. Pick some pastries or brews!</li>
        ) : (
          cart.map((item, idx) => (
            <li key={idx} className="flex justify-between items-center py-3">
              <div>
                <span className="font-semibold text-gray-800">{item.name}</span>
                <span className="text-gray-500 text-sm ml-2">(x{item.quantity})</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-700 font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                <button 
                  onClick={() => removeFromCart(item.name)}
                  className="bg-amber-600 text-white px-2 py-0.5 rounded text-xs font-bold hover:bg-amber-700"
                  title="Remove one"
                >
                  ➖
                </button>
              </div>
            </li>
          ))
        )}
      </ul>
      
      <div className="flex justify-between items-center border-t border-[#cbbba0] pt-4 mt-4 font-bold text-lg text-[#443322]">
        <div>Total: ${total.toFixed(2)}</div>
        <div className="flex gap-2">
          <button onClick={clearCart} className="bg-[#ba4a4a] text-white py-2 px-4 rounded font-bold text-sm hover:bg-red-700">Clear Cart</button>
          <button 
            onClick={() => { alert('Order received! Thank you for supporting the dream.'); clearCart(); }} 
            className="bg-[#708238] text-white py-2 px-4 rounded font-bold text-sm hover:bg-brand-hover"
          >
            Checkout
          </button>
        </div>
      </div>
    </section>
  );
}