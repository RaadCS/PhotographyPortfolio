export default function Header() {
  return (
    <header className="sticky top-0 bg-primary/95 backdrop-blur-md border-b border-borderWarm z-50">
      <nav className="flex flex-col sm:flex-row justify-between items-center max-w-[1100px] mx-auto px-6 py-6 gap-4 sm:gap-0">
        <a href="#" className="font-body font-medium text-sm tracking-[2px] uppercase text-main">
          PORTFOLIO
        </a>
        
        <ul className="flex gap-6 sm:gap-8 list-none">
          <li>
            <a href="#gallery" className="text-muted text-xs sm:text-sm tracking-[1.5px] uppercase hover:text-accent transition-colors">
              Selected Work
            </a>
          </li>
          <li>
            <a href="#about" className="text-muted text-xs sm:text-sm tracking-[1.5px] uppercase hover:text-accent transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="text-muted text-xs sm:text-sm tracking-[1.5px] uppercase hover:text-accent transition-colors">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}