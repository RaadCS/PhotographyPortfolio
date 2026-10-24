export default function Contact() {
  return (
    <section id="contact" className="max-w-[600px] mx-auto py-20 px-6">
      <div className="text-center mb-10">
        <h2 className="font-heading text-3xl sm:text-4xl mb-2 text-main">Inquiries & Bookings</h2>
        <p className="text-muted text-sm uppercase tracking-[1.5px]">Have a place, person, or project in mind? I’d love to hear about it.</p>
      </div>

      <form action="#" method="post" className="flex flex-col gap-6">
        <div className="flex flex-col gap-2 text-left">
          <label htmlFor="name" className="text-xs tracking-[1.5px] uppercase text-muted">Full Name</label>
          <input type="text" id="name" name="name" required placeholder="Name" className="bg-surface border border-borderWarm text-main p-3 font-body focus:outline-none focus:border-accent transition-colors" />
        </div>

        <div className="flex flex-col gap-2 text-left">
          <label htmlFor="email" className="text-xs tracking-[1.5px] uppercase text-muted">Email Address</label>
          <input type="email" id="email" name="email" required placeholder="name@example.com" className="bg-surface border border-borderWarm text-main p-3 font-body focus:outline-none focus:border-accent transition-colors" />
        </div>

        <div className="flex flex-col gap-2 text-left">
          <label htmlFor="session-type" className="text-xs tracking-[1.5px] uppercase text-muted">Session Type</label>
          <input type="text" id="session-type" name="session_type" placeholder="Editorial, Architecture, Lifestyle" className="bg-surface border border-borderWarm text-main p-3 font-body focus:outline-none focus:border-accent transition-colors" />
        </div>

        <div className="flex flex-col gap-2 text-left">
          <label htmlFor="preferred-date" className="text-xs tracking-[1.5px] uppercase text-muted">Preferred Month / Date</label>
          <input type="date" id="preferred-date" name="preferred_date" className="bg-surface border border-borderWarm text-main p-3 font-body focus:outline-none focus:border-accent transition-colors" />
        </div>

        <div className="flex flex-col gap-2 text-left">
          <label htmlFor="message" className="text-xs tracking-[1.5px] uppercase text-muted">Project Details</label>
          <textarea id="message" name="message" rows="5" required placeholder="Describe your vision, location, or scope..." className="bg-surface border border-borderWarm text-main p-3 font-body focus:outline-none focus:border-accent transition-colors"></textarea>
        </div>

        <button type="submit" className="bg-accent text-white py-4 text-xs font-medium tracking-[2px] uppercase hover:bg-[#85674a] transition-colors mt-2">
          Send Inquiry
        </button>
      </form>
    </section>
  );
}