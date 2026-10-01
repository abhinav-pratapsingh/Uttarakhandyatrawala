import { useState } from "react";
import logo from "./assets/logo.jpeg";

const NUMBER = "918218590675";
const BRAND = "Uttarakhand Yatra Wala";
const wa = (text) => `https://wa.me/${NUMBER}?text=${encodeURIComponent(text)}`;

const LOGO = "https://lh3.googleusercontent.com/aida/AEtjO1VnPJfKTX1QLDp9GSWMcLZHWH8FS-MfWURMBsNgq-UqrL7Tw88qPUCyjwx0bZNCpJZ-qD4O2a4qTqnsWU66MXCYEWtKpJhDO35sPymjkgWaEGQB4UsvXQ7mJBj7VoerHMH22Afgzqcdm5-jLYMdOh6vTCQaetYizKAiMZcxv5dzPHw3_kt7YU8ZNoeryKJzyECwt1lkHlyTs9r_C-4VgstjSmorJgY9ADrAbz-wmki4rXwBzr75toocwK-B";
const HERO = "https://lh3.googleusercontent.com/aida-public/AB6AXuCj9nn5WVohMvYsCgw2fP1cRSGilB8knufECp2pJbikMTWvZz7Tv5FmXARYauMl7_VSxqQeW2C6Y7k4ZnH8wI1lIQu59sAEf7QjxoRvEcrCC6kZtIIp55vAlQnPyVGGGPE1QtguY8u8XEWYpeywflR1t5d6q8tgLkTC8jgULQOs5U0ZSag9xJowkIYjRoXnarj2cs7wzepG48cIHTTjTjhxJHzrxEzYQwu_mkhPuT2EDegpqoeyNVt8MQ";

const PACKAGES = [
  {
    title: "Complete Char Dham Yatra", duration: "10N / 11D", short: "Complete Char Dham Yatra (10N/11D)",
    badge: "Most Sacred", badgeCls: "bg-[#ea580c] text-white",
    places: "Yamunotri • Gangotri • Kedarnath • Badrinath", price: "₹24,999",
    icon: "hotel", note: "Stays + Meals + Cab Included",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwP5qPirf_F6YfKefBrxu0JQ7Sz7P2m7fbAv4Vmy6usL1kY3keO-Lw7sbSJfbtuSLDTX9uXojUPwcAn5prz4zb3Hl6EdUR6E9Q7qgSxGPSt363gV80LiIeL145130-Vq_ZYDerMq02bnGP287vioUMLiazfO3HSh-rDKTj1L9maYPsNcY0u_aPugLNs7xs5pGBmFflkevULJTm3wqlFtRx6Ol061GlSIeeV4LxxBjRXwOOy3vzOlBfeQ",
  },
  {
    title: "Kedarnath & Do Dham Yatra", duration: "6N / 7D", short: "Kedarnath & Do Dham Yatra (6N/7D)",
    badge: "Popular Choice", badgeCls: "bg-primary-container text-primary-fixed",
    places: "Kedarnath • Badrinath • Joshimath", price: "₹16,499",
    icon: "schedule", note: "Express Darshan & Permits",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCp-7mCOac4rz5nZOSFshciU36eiuctz5FdJ844Aaorab6gbvGqgZv09ycaiPL70lK7jUsQSWiZI-dNNUhkZkeSPbAniKAlNlKkvM3iyLAriNo5IwME_QaGGRVKxCmxoBUM433B_btrTzOYeBmxDfeXfnENSw8xmXHWLZ8QLtPjgRn1-xaO9ZjMfp8h2bHxHxcWx35G1PR0BHOhc1KUg9MJvsmYmMai1F8KUB54lc0ils1ZN4nm5uhWig",
  },
  {
    title: "Kedarnath Ek Dham & Helicopter", duration: "3N / 4D", short: "Kedarnath Ek Dham & Helicopter (3N/4D)",
    badge: "Heli Available", badgeCls: "bg-[#0284c7] text-white",
    places: "Phata / Sersi Helipad • Kedarnath Mandir", price: "₹11,999",
    icon: "flight", note: "Heli Ticket Assistance Included",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBvM-xUE3GmaaJdAnlArIjAlEZ6-vbozE9MY7aZj_cv8edpOtx3Q1DE-ugTZRY0rjEP4RxXinydlkrsReD0vq2tpP7_aFDvacvW2_SjSSbw5pOqFv3aKeba4dmqomeXtjBg8dwo5KMZk8P1MUivABf5G4gKSqyq1E0QFGfosPzjWxn4Y-SQAbpDUVNVxmNa7h8BiSZh_j2cF2OOixHDOL8rq7yX6H31by8rZXE-4fLHIIdDfj9b4_IX7Q",
  },
  {
    title: "Auli & Chopta Tungnath Trek", duration: "4N / 5D", short: "Auli & Chopta Tungnath Trek (4N/5D)",
    badge: "Scenic Trek", badgeCls: "bg-[#10b981] text-white",
    places: "Chopta • Tungnath Mandir • Auli Ropeway", price: "₹8,999",
    icon: "cabin", note: "Swiss Camps & Mountain Stays",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYDe4sfgXqGE7tNP3usPq8WukmIBpCFZ94EwbdI2CbWaVr0fhZvPZavHkuVHcQ4x71Rl4sGIv5P8x_2YQWietnew-PaL6PoS9QEY3WxBlVhuwMfXzL9nfwAmFQdc3zdvXOzBWtO34t1Ovqg7x0N-1ZvPQN4sM2Ia0Htvr1ISy7uJeuMZNNst2uQRZt-DHFIBpeKMngWpcS1GZQNZCMtkibedi7MYcCeMsG7OUc3trC3FyBaChzaC5C2Q",
  },
];

const TRUST = [
  { icon: "verified_user", cls: "text-secondary", t: "Hill-Expert Drivers", s: "Mountain Safe" },
  { icon: "support_agent", cls: "text-[#25D366]", t: "24/7 WhatsApp", s: "Instant Help" },
  { icon: "payments", cls: "text-secondary", t: "Direct Local Rates", s: "No Middleman" },
];

const WHY = [
  { icon: "verified", t: "Govt. Registered", d: "Authorized Devbhoomi yatra operator with verified credentials." },
  { icon: "minor_crash", t: "Hill-Expert Drivers", d: "8+ years of mountain navigation experience for your safety." },
  { icon: "restaurant", t: "Clean Stays & Meals", d: "Sanitized hot-water rooms and pure Satvik vegetarian food." },
  { icon: "chat", t: "100% WhatsApp Support", d: "Live coordinator on chat for traffic, weather, and Darshan assistance.", wa: true },
];

const YATRAS = [
  "Complete Char Dham Yatra (Yamunotri, Gangotri, Kedarnath, Badrinath)",
  "Kedarnath Ek Dham Only (Helicopter / Trek)",
  "Do Dham Yatra (Kedarnath & Badrinath)",
  "Auli & Chopta Tungnath Trek",
  "Rishikesh & Haridwar Tour",
  "Custom Route / Other Destination",
];
const VEHICLES = ["Toyota Innova Crysta", "Swift Dzire / Sedan", "Tempo Traveller (12-17 Seater)", "Maruti Ertiga"];

const Icon = ({ n, cls = "", filled }) => (
  <span className={`material-symbols-outlined ${cls}`} style={filled ? { fontVariationSettings: "'FILL' 1" } : undefined}>{n}</span>
);

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 pt-[env(safe-area-inset-top,0px)] bg-surface/95 backdrop-blur-xl shadow-sm border-b border-outline-variant/20">
      <div className="h-14 sm:h-16 flex items-center justify-between px-3 sm:px-margin gap-2">

        {/* Logo + Brand */}
        <a
          className="flex items-center gap-2 min-w-0 shrink"
          href="#"
        >
          <img
            alt={`${BRAND} Logo`}
            className="h-8 sm:h-9 w-auto max-w-[42px] sm:max-w-none object-contain shrink-0"
            src={logo}
          />

          {/* Brand text - hidden on very small screens */}
          <div className="hidden xs:flex sm:flex flex-col min-w-0">
            <span className="font-headline-sm text-[0.95rem] sm:text-[1.05rem] text-primary leading-tight font-bold truncate">
              {BRAND}
            </span>

            <span className="text-[10px] sm:text-[11px] text-on-surface-variant font-medium truncate">
              uttarakhandyatrawala.in
            </span>
          </div>
        </a>

        {/* Actions */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">

          {/* Call */}
          <a
            aria-label="Call Helpline"
            href="tel:+918218590675"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-surface-container text-primary hover:bg-surface-container-high active:scale-95 transition-all"
          >
            <Icon n="call" cls="text-[18px] sm:text-[19px]" />
          </a>

          {/* WhatsApp */}
          <a
            aria-label="WhatsApp Instant Chat"
            href={`https://wa.me/${NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="h-9 w-9 sm:h-10 sm:w-auto sm:px-3 rounded-full flex items-center justify-center sm:gap-1.5 bg-[#25D366] text-white text-xs font-semibold shadow-sm hover:brightness-105 active:scale-95 transition-all"
          >
            <Icon n="chat" cls="text-[18px]" />

            {/* Text only on tablet/desktop */}
            <span className="hidden sm:inline">
              WhatsApp
            </span>
          </a>

        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative px-margin pt-4 pb-2 flex flex-col gap-3">
      <div className="relative w-full rounded-2xl overflow-hidden shadow-lg bg-cover bg-center" style={{ backgroundImage: `url('${HERO}')` }}>
        <div className="absolute inset-0 bg-gradient-to-t from-[#000f22] via-[#000f22]/70 to-[#000f22]/30" />
        <div className="relative z-10 p-5 pt-20 flex flex-col gap-3">
          <div className="inline-flex items-center gap-1.5 self-start px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[11px] font-bold border border-white/20">
            <Icon n="verified" cls="text-[15px] text-[#ffddb8]" filled />
            <span>Official Devbhoomi Partner • 2025 Booking Open</span>
          </div>
          <h1 className="font-headline-lg-mobile text-[1.75rem] text-white leading-tight font-extrabold tracking-tight">
            Explore Sacred Himalayas with {BRAND}
          </h1>
          <p className="text-sm text-surface-container-low max-w-sm">Char Dham Yatra • Kedarnath • Badrinath • Custom Cab &amp; Camp Bookings</p>
          <div className="flex flex-col gap-2 pt-1">
            <a href={wa(`Hi ${BRAND}, I want to enquire about a Himalayan tour package.`)} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#25D366] text-white text-sm font-bold shadow-lg hover:brightness-105 active:scale-[0.98] transition-all">
              <Icon n="chat" cls="text-[20px]" />
              <span>Instant Booking on WhatsApp (+91 82185 90675)</span>
            </a>
            <a href="#enquiry-form" className="w-full flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-white/10 text-white backdrop-blur-md text-xs font-semibold border border-white/20 hover:bg-white/20 active:scale-[0.98] transition-all">
              <Icon n="edit_calendar" cls="text-[18px]" />
              <span>Fill Quick Enquiry Form</span>
            </a>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 bg-surface-container-lowest p-3 rounded-xl shadow-sm border border-outline-variant/20 text-center">
        {TRUST.map((x, i) => (
          <div key={x.t} className={`flex flex-col items-center gap-0.5 ${i === 1 ? "border-x border-outline-variant/30 px-1" : ""}`}>
            <Icon n={x.icon} cls={`text-[20px] ${x.cls}`} />
            <span className="text-[11px] font-bold text-primary">{x.t}</span>
            <span className="text-[10px] text-on-surface-variant">{x.s}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function PackageCard({ p }) {
  return (
    <article className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm border border-outline-variant/20 flex flex-col">
      <div className="relative h-44 w-full bg-cover bg-center" style={{ backgroundImage: `url('${p.img}')` }}>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-black/20" />
        <span className="absolute top-2.5 left-2.5 bg-secondary px-2.5 py-0.5 rounded-full text-white text-[11px] font-semibold">{p.duration}</span>
        <span className={`absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold ${p.badgeCls}`}>{p.badge}</span>
        <div className="absolute bottom-2.5 left-3 right-3 flex items-end justify-between text-white">
          <div>
            <p className="text-xs text-secondary-fixed">{p.places}</p>
            <h3 className="font-headline-sm text-base text-white font-bold leading-tight">{p.title}</h3>
          </div>
          <div className="text-right">
            <span className="text-xs text-surface-container-high block">Starting from</span>
            <span className="font-headline-sm text-lg font-bold text-white">{p.price}</span>
          </div>
        </div>
      </div>
      <div className="p-3 flex items-center justify-between gap-2 bg-surface-container-low/50">
        <span className="text-xs text-on-surface-variant flex items-center gap-1">
          <Icon n={p.icon} cls="text-[15px] text-secondary" /> {p.note}
        </span>
        <a href={wa(`Hi ${BRAND}, I am interested in ${p.short} package. Please share details and price.`)} target="_blank" rel="noopener noreferrer" className="py-2 px-3.5 rounded-xl bg-[#25D366] text-white flex items-center gap-1.5 text-xs font-bold shadow-sm hover:brightness-105 active:scale-95 transition-all">
          <Icon n="chat" cls="text-[16px]" />
          <span>Enquire on WhatsApp</span>
        </a>
      </div>
    </article>
  );
}

function Packages() {
  return (
    <section id="packages" className="px-margin pt-6 flex flex-col gap-3.5">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-secondary text-[11px] font-bold uppercase tracking-wider flex items-center gap-1">
            <Icon n="temple_hindu" cls="text-[15px]" /> Popular Yatras
          </span>
          <h2 className="font-headline-sm text-xl text-primary font-bold">Featured Pilgrimage Packages</h2>
        </div>
        <span className="text-xs text-on-surface-variant bg-surface-container px-2.5 py-1 rounded-full font-semibold">2025 Season</span>
      </div>
      <div className="flex flex-col gap-3.5">
        {PACKAGES.map((p) => <PackageCard key={p.title} p={p} />)}
      </div>
    </section>
  );
}

const field = "w-full h-11 px-3.5 rounded-xl bg-surface-container-low border border-outline-variant/30 text-on-surface text-sm focus:bg-white focus:border-secondary outline-none transition-all";

function Field({ label, children }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs font-semibold text-primary">{label}</label>
      {children}
    </div>
  );
}

function EnquiryForm() {
  const [f, setF] = useState({ name: "", phone: "", yatra: YATRAS[0], date: "", travelers: "4 Persons", vehicle: VEHICLES[0] });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const msg = `Namaste ${BRAND}! 🙏
I want to enquire about booking a Yatra package:

• Name: ${f.name.trim() || "Pilgrim"}
• WhatsApp Phone: ${f.phone.trim() || "N/A"}
• Selected Package: ${f.yatra}
• Travel Date / Month: ${f.date.trim() || "Flexible"}
• Total Travelers: ${f.travelers.trim() || "4 Persons"}
• Preferred Vehicle: ${f.vehicle}

Please share the detailed itinerary, available dates, and best discounted quote. Thank you!`;
    window.open(wa(msg), "_blank");
  };

  return (
    <section id="enquiry-form" className="px-margin pt-8 pb-2">
      <div className="bg-surface-container-lowest p-5 rounded-2xl shadow-md border-2 border-secondary/20 flex flex-col gap-4">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
            <Icon n="calendar_month" cls="text-[22px]" />
          </div>
          <div>
            <h2 className="font-headline-sm text-[1.15rem] text-primary font-bold">Book Your Yatra / Get Instant WhatsApp Quote</h2>
            <p className="text-xs text-on-surface-variant">Instant response within 10 minutes on WhatsApp.</p>
          </div>
        </div>
        <form className="flex flex-col gap-3" onSubmit={submit}>
          <Field label="Full Name *">
            <input className={field} required type="text" placeholder="e.g. Ramesh Chandra" value={f.name} onChange={set("name")} />
          </Field>
          <Field label="WhatsApp Phone Number *">
            <input className={field} required type="tel" placeholder="e.g. 9876543210" value={f.phone} onChange={set("phone")} />
          </Field>
          <Field label="Select Yatra / Destination *">
            <select className={field} value={f.yatra} onChange={set("yatra")}>
              {YATRAS.map((y) => <option key={y} value={y}>{y}</option>)}
            </select>
          </Field>
          <div className="grid grid-cols-2 gap-2.5">
            <Field label="Travel Date / Month">
              <input className={field} type="text" placeholder="e.g. May 2025" value={f.date} onChange={set("date")} />
            </Field>
            <Field label="Total Travelers">
              <input className={field} type="text" placeholder="e.g. 4 Adults + 1 Child" value={f.travelers} onChange={set("travelers")} />
            </Field>
          </div>
          <Field label="Preferred Vehicle">
            <select className={field} value={f.vehicle} onChange={set("vehicle")}>
              {VEHICLES.map((v) => <option key={v} value={v}>{v}</option>)}
            </select>
          </Field>
          <button type="submit" className="w-full mt-2 py-3.5 px-4 rounded-xl bg-[#25D366] text-white flex items-center justify-center gap-2 text-sm font-bold shadow-md hover:brightness-105 active:scale-[0.98] transition-all">
            <Icon n="send" cls="text-[22px]" />
            <span>Send Booking Enquiry on WhatsApp</span>
          </button>
        </form>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section className="px-margin pt-6 flex flex-col gap-3">
      <div className="text-center">
        <span className="text-secondary text-[11px] font-bold uppercase tracking-wider">Reliable &amp; Safe</span>
        <h2 className="font-headline-sm text-xl text-primary font-bold">Why Book with {BRAND}?</h2>
      </div>
      <div className="grid grid-cols-2 gap-2.5">
        {WHY.map((w) => (
          <div key={w.t} className="bg-surface-container-lowest p-3.5 rounded-xl border border-outline-variant/20 shadow-sm flex flex-col gap-1">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-0.5 ${w.wa ? "bg-[#25D366]/10 text-[#25D366]" : "bg-secondary/10 text-secondary"}`}>
              <Icon n={w.icon} cls="text-[20px]" />
            </div>
            <span className="font-headline-sm text-sm text-primary font-bold">{w.t}</span>
            <p className="text-xs text-on-surface-variant">{w.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      id="contact"
      className="mt-8 bg-primary text-on-primary px-margin py-8 flex flex-col gap-5 border-t border-primary-container"
    >
      <div className="flex items-center gap-3">
        <img
          alt={`${BRAND} Logo`}
          className="h-9 sm:h-10 w-auto max-w-[180px] object-contain"
          src={logo}
        />

        <div className="flex flex-col">
          <span className="font-headline-sm text-base text-white font-bold">
            {BRAND}
          </span>

          <span className="text-xs text-primary-fixed-dim">
            uttarakhandyatrawala.in
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-2.5 text-xs text-primary-fixed-dim">
        <div className="flex items-start gap-2">
          <Icon n="location_on" cls="text-secondary-fixed text-[18px]" />
          <span><strong>Haridwar Office:</strong> Near Har Ki Pauri Ghat, Main Bypass Road, Haridwar, Uttarakhand - 249401</span>
        </div>
        <div className="flex items-start gap-2">
          <Icon n="location_on" cls="text-secondary-fixed text-[18px]" />
          <span><strong>Rishikesh Office:</strong> Tapovan Chowk, Badrinath Road, Rishikesh, Uttarakhand - 249192</span>
        </div>
        <div className="flex items-center gap-2 pt-1">
          <Icon n="call" cls="text-[#25D366] text-[18px]" />
          <a className="text-white hover:underline font-bold text-sm" href="tel:+918218590675">+91 82185 90675</a>
        </div>
      </div>
      <div className="pt-4 border-t border-white/10 flex flex-col items-center text-center gap-1 text-[11px] text-primary-fixed-dim/80">
        <p>© 2025 {BRAND}. All rights reserved.</p>
        <p>Direct WhatsApp Pilgrimage Booking &amp; Himalayan Expeditions</p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="bg-surface text-on-surface font-body-md flex flex-col min-h-screen relative">
      <Header />
      <main className="flex flex-col w-full pt-14 sm:pt-16 pb-12 bg-surface min-h-screen">
        <Hero />
        <Packages />
        <EnquiryForm />
        <WhyUs />
        <Footer />
      </main>
      <a aria-label="Chat on WhatsApp" href={wa(`Hi ${BRAND}, I am looking for a tour package.`)} target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-5 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_8px_20px_rgba(37,211,102,0.5)] hover:scale-110 active:scale-95 transition-all animate-pulse">
        <Icon n="chat" cls="text-[28px]" />
      </a>
    </div>
  );
}
