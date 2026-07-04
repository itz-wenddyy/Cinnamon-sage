export default function Contact() {
  return (
    <section id="contact" className="max-w-[900px] mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-center text-[#332211] mb-2">Get in Touch</h2>
      <p className="text-center mb-10 text-[#665544]">Have any book recommendations or want to collaborate on the dream? Drop a line below!</p>

      <div className="flex flex-wrap gap-10 justify-center">
        {/* Map box */}
        <div className="flex-1 min-w-[300px] max-w-[450px]">
          <h3 className="text-xl font-bold mb-4 text-[#332211]">Future Location</h3>
          <div className="rounded-lg overflow-hidden shadow-md h-[350px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m12m3!1d193595.25280821815!2d-74.11976374305885!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1718600000000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Message Form */}
        <div className="flex-1 min-w-[300px] max-w-[450px]">
          <h3 className="text-xl font-bold mb-4 text-[#332211]">Send a Message</h3>
          <form onSubmit={(e) => { e.preventDefault(); alert('Message sent!'); }} className="flex flex-col gap-4">
            <div>
              <label className="block mb-1 font-bold text-[#443322] text-sm">Name</label>
              <input type="text" placeholder="Your Name" required className="w-full p-2 border border-[#cbbba0] rounded focus:outline-[#708238]" />
            </div>
            <div>
              <label className="block mb-1 font-bold text-[#443322] text-sm">Email</label>
              <input type="email" placeholder="yourname@email.com" required className="w-full p-2 border border-[#cbbba0] rounded focus:outline-[#708238]" />
            </div>
            <div>
              <label className="block mb-1 font-bold text-[#443322] text-sm">Message</label>
              <textarea rows="4" placeholder="Tell us what meals or drinks we should feature..." required className="w-full p-2 border border-[#cbbba0] rounded focus:outline-[#708238] resize-vertical font-sans"></textarea>
            </div>
            <button type="submit" className="bg-[#708238] text-white font-bold py-3 rounded hover:bg-[#d2b48c] hover:text-[#2b241e] transition-colors">
              Submit Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}