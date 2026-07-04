export default function Footer() {
  return (
    <footer className="bg-[#2b241e] text-[#ebdcb9] py-10 px-4 text-center">
      <div className="mb-5 text-sm">
        <p className="mb-2 font-bold text-white text-base">Follow Our Journey</p>
        <div className="flex justify-center gap-4">
          <a href="https://www.facebook.com/login/" className="hover:text-[#708238]">Facebook</a>
          <a href="https://www.instagram.com/accounts/login/?hl=en" className="hover:text-[#708238]">Instagram</a>
          <a href="https://www.tiktok.com/login" className="hover:text-[#708238]">TikTok</a>
        </div>
      </div>

      <div className="mb-5 text-sm leading-relaxed">
        <p className="font-bold text-white text-base mb-1">Hours</p>
        <p>Weekdays: 7:00 AM – 12:00 AM</p>
        <p>Weekends: 7:00 AM – 2:00 AM</p>
      </div>

      <div className="text-xs opacity-80 border-t border-gray-700 pt-5 max-w-[400px] mx-auto leading-normal">
        <p>Email: info@cinnamonandsage.com</p>
        <p className="mb-3">Phone: (123) 456-7890</p>
        <p>© 2026 Cinnamon & Sage Café</p>
      </div>
    </footer>
  );
}