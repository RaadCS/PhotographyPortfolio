export default function Hero() {
  return (
    <section className="text-center px-6 pt-24 pb-20 max-w-[800px] mx-auto">
      <p className="text-xs tracking-[2.5px] uppercase text-accent mb-4">
        PORTFOLIO · SAUDI ARABIA
      </p>
      
      <h1 className="font-heading text-5xl sm:text-6xl font-normal leading-tight mb-5 text-main">
        Saudi Arabia, in a softer light
      </h1>
      
      <p className="text-muted text-lg mb-10">
        Photographs of the landscapes, architecture, and quiet details that hold a sense of home.
      </p>
      
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a href="#gallery" className="inline-block px-8 py-4 text-xs font-medium tracking-[2px] uppercase border border-main text-main hover:bg-main hover:text-white transition-all">
          View Work
        </a>
        <a href="#contact" className="inline-block px-8 py-4 text-xs font-medium tracking-[2px] uppercase border border-accent bg-accent text-white hover:bg-[#85674a] transition-all">
          Book a Shoot
        </a>
      </div>
    </section>
  );
}