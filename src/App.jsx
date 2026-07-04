import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import About from "./components/About";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [cart, setCart] = useState([]);

  // Adds an item to the cart, or increases its quantity if it already exists
  const addToCart = (name, price) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.name === name);
      if (existingItem) {
        return prevCart.map((item) =>
          item.name === name ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { name, price, quantity: 1 }];
    });
  };

  // Requirement: Removes items from the cart decrementally (one by one)
  const removeFromCart = (name) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.name === name);
      if (existingItem && existingItem.quantity > 1) {
        // Reduce quantity by 1
        return prevCart.map((item) =>
          item.name === name ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
      // If quantity is 1, remove it entirely from the list
      return prevCart.filter((item) => item.name !== name);
    });
  };

  // Clears the entire cart
  const clearCart = () => {
    setCart([]);
  };

  return (
    <div className="min-h-screen bg-[#fcfaf2] font-sans text-[#2b241e] antialiased">
      <Header cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} />
      <main>
        <Hero />
        <Menu addToCart={addToCart} />
        <About/>
        <Cart cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}