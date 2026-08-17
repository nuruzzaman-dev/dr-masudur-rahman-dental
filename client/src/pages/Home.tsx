/*
  Quiet Editorial Modernism: this page treats Dr. Elena Morgan as the product.
  Use warm ivory fields, eucalyptus ink, champagne calibration lines, asymmetric
  magazine composition, and restrained motion. Avoid generic card grids.
*/
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowDownRight,
  ArrowUpRight,
  CalendarDays,
  Check,
  ChevronDown,
  Clock3,
  Instagram,
  Linkedin,
  MapPin,
  Menu,
  MoveHorizontal,
  Phone,
  Plus,
  X,
} from "lucide-react";
import { toast } from "sonner";

gsap.registerPlugin(ScrollTrigger);

const heroImage = "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1800&q=85";
const clinicImage = "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1400&q=85";
const detailImage = "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1400&q=85";
const doctorImage = "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1000&q=85";

const expertise = [
  { number: "01", title: "Cosmetic dentistry", copy: "Subtle changes, thoughtfully planned around facial proportion, function, and the way you want to feel." },
  { number: "02", title: "Restorative dentistry", copy: "Rebuilding strength and comfort while preserving as much natural tooth structure as possible." },
  { number: "03", title: "Smile design", copy: "A collaborative process combining digital planning, proportion, shade, and your own point of view." },
  { number: "04", title: "Dental implants", copy: "Long-term tooth replacement with a focus on natural integration, clear planning, and confidence." },
];

const steps = [
  { title: "Listen first", copy: "We begin with what matters to you—not a treatment list." },
  { title: "Plan precisely", copy: "Diagnostics and digital planning make the path considered and clear." },
  { title: "Treat conservatively", copy: "The least invasive option is often the most enduring one." },
  { title: "Follow through", copy: "Your care continues after the procedure, with room for questions." },
];

function Monogram({ light = false }: { light?: boolean }) {
  return (
    <div className={`monogram ${light ? "monogram-light" : ""}`} aria-label="EM monogram">
      <svg viewBox="0 0 48 48" role="img" aria-hidden="true">
        <path d="M11 10v28M11 10h20M11 24h16M11 38h20M37 10v28M37 10L24 24l13 14" />
      </svg>
    </div>
  );
}

function SectionLabel({ number, children, light = false }: { number: string; children: React.ReactNode; light?: boolean }) {
  return <div className={`section-label ${light ? "section-label-light" : ""}`}><span>{number}</span><i /><b className="calibration-mark" aria-hidden="true" />{children}</div>;
}

function Home() {
  const [activeExpertise, setActiveExpertise] = useState(0);
  const [beforePosition, setBeforePosition] = useState(52);
  const [mobileOpen, setMobileOpen] = useState(false);
  const page = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".hero-reveal", { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: 1.05, stagger: 0.1, ease: "power3.out", delay: 0.15 });
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
        gsap.fromTo(el, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.85, ease: "power2.out", scrollTrigger: { trigger: el, start: "top 84%", once: true } });
      });
      gsap.to(".hero-photo", { yPercent: 5, ease: "none", scrollTrigger: { trigger: ".hero", scrub: true, start: "top top", end: "bottom top" } });
      gsap.to(".hero-word", { xPercent: -8, ease: "none", scrollTrigger: { trigger: ".hero", scrub: true, start: "top top", end: "bottom top" } });
    }, page);
    return () => ctx.revert();
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div ref={page} className="site-shell">
      <header className="site-nav">
        <button className="brand-lockup" onClick={() => scrollTo("top")} aria-label="Back to top"><Monogram /><span><strong>Elena Morgan</strong><small>Cosmetic & Restorative Dentistry</small></span></button>
        <nav className={mobileOpen ? "nav-links nav-open" : "nav-links"} aria-label="Primary navigation">
          {["About", "Expertise", "Treatments", "Results", "Experience", "Contact"].map((item) => <button key={item} onClick={() => scrollTo(item.toLowerCase())}>{item}</button>)}
          <button className="nav-book" onClick={() => scrollTo("appointment")}>Book a consultation <ArrowUpRight size={14} /></button>
        </nav>
        <button className="mobile-menu" onClick={() => setMobileOpen(!mobileOpen)} aria-label={mobileOpen ? "Close menu" : "Open menu"}>{mobileOpen ? <X size={22} /> : <Menu size={22} />}</button>
      </header>

      <aside className="practice-rail" aria-label="Practice index"><span className="rail-title">EM / Practice index</span><span className="rail-line" /><button onClick={() => scrollTo("about")}>02 — Doctor</button><button onClick={() => scrollTo("expertise")}>03 — Expertise</button><button onClick={() => scrollTo("results")}>05 — Results</button><button onClick={() => scrollTo("appointment")}>09 — Contact</button></aside>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-grid" />
          <div className="hero-copy">
            <div className="hero-kicker hero-reveal"><span className="eyebrow-dot" /> Consultant Cosmetic & Restorative Dentist <span className="hero-location">London · UK</span></div>
            <h1 id="hero-title" className="hero-word hero-reveal">Dentistry with<br /><em>intention.</em></h1>
            <p className="hero-intro hero-reveal">A more considered approach to cosmetic and restorative dentistry—shaped around your health, your features, and the life you want to live.</p>
            <div className="hero-actions hero-reveal"><button className="button button-dark" onClick={() => scrollTo("appointment")}>Book a consultation <ArrowUpRight size={16} /></button><button className="text-link" onClick={() => scrollTo("expertise")}>Explore expertise <ArrowDownRight size={16} /></button></div>
          </div>
          <div className="hero-visual hero-reveal"><img className="hero-photo" src={heroImage} alt="Dr. Elena Morgan in her dental studio" /><div className="hero-photo-wash" /><div className="hero-caption"><span>01 / 08</span><span>Portrait study · 2026</span></div><div className="hero-seal"><Monogram light /><span className="seal-rule">—</span><small>Practice mark</small></div></div>
          <div className="hero-meta hero-reveal"><span>12+ years</span><span>6 clinical disciplines</span><span>By appointment</span></div>
          <div className="scroll-cue"><span>Scroll to explore</span><i /></div>
        </section>

        <section id="about" className="intro section-pad">
          <SectionLabel number="02">The doctor behind the work</SectionLabel>
          <div className="intro-layout"><h2 className="display-heading reveal">The best treatment is the one that still feels like <em>you.</em></h2><div className="intro-side reveal"><p>Dr. Elena Morgan is a consultant cosmetic and restorative dentist known for careful planning, natural results, and an unhurried chairside manner.</p><button className="text-link" onClick={() => scrollTo("experience")}>Meet Elena <ArrowDownRight size={16} /></button></div></div>
          <div className="portrait-story"><div className="portrait-frame reveal"><img src={doctorImage} alt="Portrait of fictional dentist Dr. Elena Morgan" /><span className="portrait-note">A quieter kind of expertise</span></div><div className="story-copy reveal"><span className="story-index">BDS · MSc Restorative Dentistry</span><p>“Dentistry is not only about changing a smile. It is about restoring confidence in the way people experience themselves.”</p><span className="signature">Elena Morgan</span></div></div>
        </section>

        <section className="stats-strip"><div><strong>12<sup>+</sup></strong><span>Years of clinical experience</span></div><div><strong>3,500<sup>+</sup></strong><span>Completed treatments</span></div><div><strong>18</strong><span>Advanced certifications</span></div><div><strong>6</strong><span>Areas of expertise</span></div></section>

        <section id="expertise" className="expertise section-pad dark-section">
          <div className="expertise-top"><SectionLabel number="03" light>Clinical expertise</SectionLabel><p className="eyebrow-copy">Where precision meets a point of view.</p></div>
          <div className="expertise-layout"><div className="expertise-list">{expertise.map((item, index) => <button key={item.number} className={activeExpertise === index ? "expertise-item active" : "expertise-item"} onMouseEnter={() => setActiveExpertise(index)} onFocus={() => setActiveExpertise(index)} onClick={() => setActiveExpertise(index)}><span>{item.number}</span><strong>{item.title}</strong><ArrowUpRight size={17} /></button>)}</div><div className="expertise-detail"><div className="detail-image"><div className="image-frame-mark" aria-hidden="true" /><img src={detailImage} alt="Natural smile detail for the selected expertise" /><span>Selected focus / {expertise[activeExpertise].number}</span></div><div className="detail-copy"><h3>{expertise[activeExpertise].title}</h3><p>{expertise[activeExpertise].copy}</p><button className="light-link" onClick={() => scrollTo("treatments")}>View treatments <ArrowUpRight size={15} /></button></div></div></div>
        </section>

        <section id="treatments" className="treatments section-pad">
          <SectionLabel number="04">A considered menu of care</SectionLabel>
          <div className="treatments-heading"><h2 className="display-heading reveal">Treatment, without the <em>template.</em></h2><p className="reveal">Every plan begins with listening. The treatments below are starting points for a conversation, not a one-size-fits-all menu.</p></div>
          <div className="treatment-list">{["Smile design", "Porcelain veneers", "Dental implants", "Full mouth rehabilitation"].map((item, index) => <button className="treatment-row reveal" key={item} onClick={() => toast(`${item} — details will be shared during your consultation.`)}><span>0{index + 1}</span><strong>{item}</strong><small>{["Proportion · shade · function", "Natural-looking ceramic restorations", "Long-term tooth replacement", "A complete, phased approach"][index]}</small><ArrowUpRight size={18} /></button>)}</div>
        </section>

        <section id="results" className="case-study section-pad blush-section">
          <SectionLabel number="05">Signature case study</SectionLabel>
          <div className="case-heading"><span className="eyebrow-copy">The Morgan method / 01</span><h2 className="display-heading reveal">A smile that returns<br />the room to <em>you.</em></h2></div>
          <div className="before-after-wrap reveal"><div className="before-after"><img src={detailImage} alt="Fictional demo smile case, after treatment" /><div className="before-image" style={{ width: `${beforePosition}%` }}><img src={heroImage} alt="Fictional demo smile case, before treatment" /></div><div className="slider-line" style={{ left: `${beforePosition}%` }}><span><MoveHorizontal size={16} /></span></div><input aria-label="Compare before and after demo images" type="range" min="8" max="92" value={beforePosition} onChange={(e) => setBeforePosition(Number(e.target.value))} /></div><div className="case-meta"><span><b>Demo case visual</b><br />Fictional composite, not a real patient</span><span><b>Treatment</b><br />Conservative smile design</span><span><b>Timeline</b><br />Approximately 10–12 weeks</span><span><b>Outcome</b><br />A balanced, natural result</span></div></div>
        </section>

        <section id="experience" className="experience section-pad"><SectionLabel number="06">Experience & education</SectionLabel><div className="experience-layout"><h2 className="display-heading reveal">A practice built on <em>curiosity.</em></h2><div className="timeline reveal">{[["2012", "BDS, University of Bristol", "Foundations in restorative and general dentistry"], ["2016", "MSc Restorative Dentistry", "Advanced training in occlusion and complex care"], ["2020", "Digital Smile Design", "Continuing education in digital planning"], ["2024", "Member, BACD", "Ongoing peer learning and clinical exchange"]].map((row) => <div className="timeline-row" key={row[0]}><span>{row[0]}</span><div><strong>{row[1]}</strong><p>{row[2]}</p></div><Check size={15} /></div>)}</div></div></section>

        <section className="approach dark-section section-pad"><SectionLabel number="07" light>Clinical approach</SectionLabel><div className="approach-heading"><h2 className="display-heading light-heading reveal">Less intervention.<br /><em>More consideration.</em></h2><p className="approach-intro reveal">Good dentistry should be technically excellent and emotionally intelligent. The process matters as much as the result.</p></div><div className="approach-steps">{steps.map((step, i) => <div className="approach-step reveal" key={step.title}><span>0{i + 1}</span><h3>{step.title}</h3><p>{step.copy}</p></div>)}</div></section>

        <section className="clinic section-pad"><SectionLabel number="08">The studio</SectionLabel><div className="clinic-layout"><div className="clinic-image reveal"><div className="image-frame-mark" aria-hidden="true" /><img src={clinicImage} alt="Quiet contemporary dental studio interior" /><span>Fitzrovia · London</span></div><div className="clinic-copy reveal"><h2 className="display-heading">A space designed to make time for <em>you.</em></h2><p>Our studio is intentionally small, calm, and private. Every appointment is paced to leave room for questions and clear decisions.</p><div className="clinic-details"><span><MapPin size={16} /> 14 Wimpole Street, London W1G</span><span><Clock3 size={16} /> Monday–Friday, 8:30–18:00</span><span><Phone size={16} /> +44 (0)20 7946 0821</span></div><button className="button button-outline" onClick={() => toast("Directions will open after a clinic address is confirmed.")}>Plan your visit <ArrowUpRight size={16} /></button></div></div></section>

        <section id="appointment" className="appointment dark-section section-pad"><div className="appointment-layout"><div><SectionLabel number="09" light>Start with a conversation</SectionLabel><h2 className="display-heading light-heading reveal">Your next step can be<br /><em>simple.</em></h2><p className="appointment-copy reveal">Tell us a little about what brings you in. We’ll reply within one working day to arrange a private consultation.</p></div><form className="appointment-form reveal" onSubmit={(e) => { e.preventDefault(); toast("Thank you. This demo form is ready to connect to your booking flow."); }}><label>Name<input required placeholder="Your name" /></label><label>Email or phone<input required placeholder="How should we reach you?" /></label><label>What would you like to explore?<select defaultValue=""><option value="" disabled>Select an area</option><option>Smile design</option><option>Restorative dentistry</option><option>Dental implants</option><option>Not sure yet</option></select></label><label>Message<textarea rows={3} placeholder="A few words about what you have in mind" /></label><button className="button button-champagne" type="submit">Request a consultation <ArrowUpRight size={16} /></button><small><CalendarDays size={13} /> Consultations are 60 minutes and always begin with listening.</small></form></div></section>
      </main>

      <footer className="site-footer"><div className="footer-brand"><div className="footer-mark-wrap"><Monogram light /><span>EM / 09</span></div><div><strong>Dr. Elena Morgan</strong><span>Cosmetic & Restorative Dentistry</span></div></div><div className="footer-links"><button onClick={() => scrollTo("about")}>About</button><button onClick={() => scrollTo("expertise")}>Expertise</button><button onClick={() => scrollTo("appointment")}>Appointments</button></div><div className="footer-social"><a href="#instagram" aria-label="Instagram"><Instagram size={17} /></a><a href="#linkedin" aria-label="LinkedIn"><Linkedin size={17} /></a><span>© 2026 Elena Morgan</span></div></footer>
    </div>
  );
}

export default Home;
