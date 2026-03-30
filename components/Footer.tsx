export default function Footer() {
  return (
    <footer className="w-full bg-[#fdfdfd] border-t border-black/5 py-16 px-6 mt-auto">
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center text-center space-y-8">
        <div>
          <h2 className="text-2xl font-semibold tracking-widest text-black uppercase mb-3">
            Bodhuboron
          </h2>
          <p className="text-sm text-neutral-500 font-light tracking-wide">
            Capturing your special moments
          </p>
        </div>
        
        <div className="flex gap-8">
          <a href="#" className="text-neutral-400 hover:text-black transition-colors duration-300">
            <span className="sr-only">Instagram</span>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
          <a href="#" className="text-neutral-400 hover:text-black transition-colors duration-300">
            <span className="sr-only">YouTube</span>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29.01 29.01 0 001 11.75a29.01 29.01 0 00.46 5.33 2.78 2.78 0 001.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2c.46-1.74.46-5.33.46-5.33s0-3.59-.46-5.33z" />
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
            </svg>
          </a>
        </div>
        
        <div className="text-xs text-neutral-400 tracking-wider">
          Bodhuboron &copy; 2026. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
