type AboutData = {
  about_heading?: string | null;
  bio?: string | null;
  about_card_one_title?: string | null;
  about_card_one_text?: string | null;
  about_card_two_title?: string | null;
  about_card_two_text?: string | null;
  about_card_three_title?: string | null;
  about_card_three_text?: string | null;
};

export default function AboutSection({ about }: { about?: AboutData | null }) {
  return (
    <section id="about" className="py-16 border-b border-slate-800/80">
      <div className="space-y-3 mb-6">
        <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
          About Me
        </span>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-700 tracking-tight">
          {about?.about_heading || "I design and build products that balance performance and user experience."}
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-3xl">
          {about?.bio || "I'm Abdullah Al Habib, a full-stack developer focused on creating scalable web experiences for SaaS, ERP, eCommerce, and business platforms. I combine product thinking, clean frontend architecture, and reliable backend systems to ship solutions that feel smooth and perform at scale."}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: about?.about_card_one_title || "Product-first thinking",
            text: about?.about_card_one_text || "I translate business needs into clear, usable interfaces and workflows that are easy to extend.",
          },
          {
            title: about?.about_card_two_title || "Clean engineering",
            text: about?.about_card_two_text || "I build structured, maintainable code with reusable patterns and scalable application architecture.",
          },
          {
            title: about?.about_card_three_title || "Business impact",
            text: about?.about_card_three_text || "The aim is always practical value: speed, clarity, conversion, and long-term maintainability.",
          },
        ].map((item) => (
          <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-700 mb-3">{item.title}</h3>
            <p className="text-sm leading-relaxed text-slate-600">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
