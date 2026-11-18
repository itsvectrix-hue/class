import React, { useEffect, useRef, useState } from "react";
import {
  ArrowDown, ArrowRight, ArrowUpRight, Drum, Guitar, House,
  MessageCircle, Mail, Menu, Mic, Music2, Piano, Star, X
} from "lucide-react";
import {
  Accordion, FadeContent, Magnet, Ripple, ScrollProgress,
  ScrollReveal, SplitText, SpotlightCard, StaggeredMenu, Waveform
} from "./ReactBits.jsx";

const emailAddress = "tonexa.music.acadmy@gmail.com";
const emailUrl = "mailto:" + emailAddress;
const whatsappNumber = "919028671906";
const whatsappDisplay = "+91 90286 71906";
const whatsappUrl = (text = "Hello Tonexa Music Academy, I would like to ask about home music lessons.") =>
  "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(text);

const lessons = [
  { name: "Keyboard", description: "Melody, chords and musical foundations.", icon: Piano, tone: "keys" },
  { name: "Guitar", description: "Chords, rhythm and the songs you love.", icon: Guitar, tone: "guitar" },
  { name: "Drums", description: "Timing, coordination and groove.", icon: Drum, tone: "drums" },
  { name: "Conga", description: "Hand percussion, tone and Afro-Cuban rhythm.", icon: Drum, tone: "conga" },
  { name: "Vocals", description: "Pitch, breathing, control and expression.", icon: Mic, tone: "vocals" },
];

const faqs = [
  { question: "Where do the lessons take place?", answer: "Tonexa Music Academy offers home tuition only. Lessons are arranged at the student's home, subject to availability in the area." },
  { question: "Which instruments can I enquire about?", answer: "You can enquire about keyboard, guitar, drums, conga and vocals. Choose an instrument in the form and share your area." },
  { question: "How do I check availability?", answer: "Send an enquiry with your area, preferred instrument and any questions. The academy can reply by email with the next steps." },
];

function Brand({ footer = false }) {
  return (
    <a className={footer ? "brand brand-footer" : "brand"} href="#home" aria-label="Tonexa Music Academy home">
      <img src="/tonexa-logo.svg" alt="Tonexa Music Academy" />
    </a>
  );
}

function EntryLoader() {
  return (
    <div className="entry-loader" role="status" aria-label="Loading Tonexa Music Academy">
      <div className="entry-loader-inner">
        <img src="/tonexa-mark.svg" alt="" />
        <span>TONEXA</span>
        <small>MUSIC ACADEMY</small>
        <Waveform bars={25} className="loader-wave" />
      </div>
    </div>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef(null);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    document.body.classList.toggle("menu-open", menuOpen);
    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      document.body.classList.remove("menu-open");
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <Brand />
      <button ref={menuButton} className="menu-toggle" type="button"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen} aria-controls="primary-navigation"
        onClick={() => setMenuOpen((open) => !open)}>
        {menuOpen ? <X /> : <Menu />}
      </button>
      <StaggeredMenu id="primary-navigation" open={menuOpen} className="main-nav">
        <a className="active" href="#home" onClick={closeMenu}>Home</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#instruments" onClick={closeMenu}>Instruments</a>
        <a href="#home-tuition" onClick={closeMenu}>Home Tuition</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
        <a className="nav-cta" href="#contact" onClick={closeMenu}>Enquire Now <ArrowUpRight size={16} /></a>
      </StaggeredMenu>
    </header>
  );
}

function FeatureStrip() {
  const features = [
    { icon: House, title: "Home Tuition", sub: "Only" },
    { icon: Music2, title: "Five Instruments", sub: "To explore" },
    { icon: Star, title: "Your Music", sub: "Your journey" },
    { icon: Mail, title: "Direct Enquiry", sub: "By email" },
  ];
  return (
    <div className="feature-strip">
      {features.map(({ icon: Icon, title, sub }) => (
        <div className="feature-item" key={title}>
          <Icon aria-hidden="true" strokeWidth={1.65} />
          <span><strong>{title}</strong><small>{sub}</small></span>
        </div>
      ))}
    </div>
  );
}

function Instruments() {
  const [selected, setSelected] = useState("Keyboard");
  return (
    <section className="instruments-section" id="instruments">
      <div className="instruments-heading">
        <ScrollReveal>
          <p className="section-kicker">OUR INSTRUMENTS</p>
          <h2>Learn Your Favourite Instrument</h2>
          <p className="section-description">Find the sound you want to learn. Choose an instrument to start an enquiry about home tuition.</p>
          <a href="#contact" className="underlined-link">Explore lessons <ArrowUpRight size={16} /></a>
        </ScrollReveal>
      </div>
      <div className="instrument-cards">
        {lessons.map(({ name, description, icon: Icon, tone }) => (
          <button type="button" key={name}
            className={`instrument-card ${selected === name ? "is-selected" : ""}`}
            onClick={() => {
              setSelected(name);
              window.dispatchEvent(new CustomEvent("tonexa-select-lesson", { detail: name }));
            }}>
            <div className={`instrument-card-image ${tone}`}>
              <Icon size={43} strokeWidth={1.3} aria-hidden="true" />
              <span className="card-index">{String(lessons.findIndex((lesson) => lesson.name === name) + 1).padStart(2, "0")}</span>
            </div>
            <div className="instrument-card-copy">
              <strong>{name}</strong>
              <span>{description}</span>
              <small>{selected === name ? "Selected" : "Explore"} <ArrowUpRight size={13} /></small>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <Brand footer />
        <p>Learn. Play. Grow.</p>
        <div className="footer-contacts">
          <a href={emailUrl}><Mail size={16} /> {emailAddress}</a>
          <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer"><MessageCircle size={16} /> WhatsApp {whatsappDisplay}</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Tonexa Music Academy</span>
        <nav aria-label="Footer navigation">
          <a href="/terms">Terms of use</a>
          <a href="/privacy">Privacy policy</a>
          <a href="#home">Back to top</a>
        </nav>
      </div>
    </footer>
  );
}

function App() {
  const [showLoader, setShowLoader] = useState(true);
  const [form, setForm] = useState({ name: "", phone: "", lesson: "Keyboard", area: "", message: "" });
  const [preparedMessage, setPreparedMessage] = useState("");

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timer = window.setTimeout(() => setShowLoader(false), reducedMotion ? 100 : 950);
    const onLesson = (event) => setForm((current) => ({ ...current, lesson: event.detail }));
    window.addEventListener("tonexa-select-lesson", onLesson);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("tonexa-select-lesson", onLesson);
    };
  }, []);

  const updateField = (field) => (event) => {
    setForm((current) => ({ ...current, [field]: event.target.value }));
    setPreparedMessage("");
  };

  const sendWhatsApp = (event) => {
    const formEl = event.currentTarget.closest("form");
    if (formEl && !formEl.reportValidity()) return;
    const text = [
      "Hello Tonexa Music Academy,",
      "Name: " + form.name.trim(),
      "Interested in: " + form.lesson,
      "Home tuition area: " + (form.area.trim() || "Not provided"),
      "Phone: " + (form.phone.trim() || "Not provided"),
      "Message: " + (form.message.trim() || "Please share the lesson details."),
    ].join("\n");
    window.open(whatsappUrl(text), "_blank", "noopener,noreferrer");
  };

  const submitEnquiry = (event) => {
    event.preventDefault();
    const message = [
      "Hello Tonexa Music Academy,",
      "",
      "Name: " + form.name.trim(),
      "Phone: " + (form.phone.trim() || "Not provided"),
      "Interested in: " + form.lesson,
      "Home tuition area: " + (form.area.trim() || "Not provided"),
      "Message: " + (form.message.trim() || "Please share the lesson details."),
    ].join("\n");
    const subject = encodeURIComponent("Music lesson enquiry from " + form.name.trim());
    const url = emailUrl + "?subject=" + subject + "&body=" + encodeURIComponent(message);
    setPreparedMessage(url);
    window.location.href = url;
  };

  return (
    <>
      <ScrollProgress />
      <a className="whatsapp-float" href={whatsappUrl()} target="_blank" rel="noopener noreferrer" aria-label={"Chat on WhatsApp " + whatsappDisplay}>
        <MessageCircle size={26} aria-hidden="true" />
      </a>
      {showLoader && <EntryLoader />}
      <div className="site-shell">
        <a className="skip-link" href="#main-content">Skip to content</a>
        <div className="dark-stage">
          <Header />
          <main id="main-content">
            <section className="hero" id="home">
              <svg className="hero-notes" viewBox="0 0 1000 600" preserveAspectRatio="xMaxYMid meet" aria-hidden="true">
                <defs>
                  <linearGradient id="arcGold" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0" stopColor="#E5BC59" stopOpacity="0" />
                    <stop offset=".5" stopColor="#E5BC59" stopOpacity=".85" />
                    <stop offset="1" stopColor="#C9A227" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path className="hero-arc" d="M470 330 C500 120 760 40 930 150" fill="none" stroke="url(#arcGold)" strokeWidth="2.5" />
                <path d="M330 380 C560 250 800 280 1000 120" fill="none" stroke="url(#arcGold)" strokeWidth="1" opacity=".55" />
                <path d="M360 410 C600 290 820 320 1000 170" fill="none" stroke="url(#arcGold)" strokeWidth="1" opacity=".4" />
                <g fill="#E5BC59">
                  <text className="hero-note" x="900" y="105" fontSize="46" style={{ "--d": "0s" }}>&#9835;</text>
                  <text className="hero-note" x="955" y="190" fontSize="38" style={{ "--d": "-1.4s" }}>&#9834;</text>
                  <text className="hero-note" x="690" y="150" fontSize="34" style={{ "--d": "-2.6s" }}>&#9834;</text>
                  <text className="hero-note" x="560" y="250" fontSize="30" style={{ "--d": "-.8s" }}>&#9834;</text>
                  <text className="hero-note" x="470" y="300" fontSize="26" style={{ "--d": "-3.2s" }}>&#9834;</text>
                  <text className="hero-note" x="400" y="470" fontSize="34" style={{ "--d": "-2s" }}>&#9834;</text>
                </g>
              </svg>
              <div className="hero-inner">
                <ScrollReveal className="hero-copy">
                  <p className="hero-overline">LEARN <i /> PLAY <i /> GROW</p>
                  <h1><span className="gold-word">Tonexa</span> Music<br />Academy</h1>
                  <p className="hero-tagline">Learn. Play. Grow.</p>
                  <p className="hero-description">
                    Music lessons in the comfort of your home.
                    <br />Keyboard, Guitar, Drums, Conga and Vocals.
                  </p>
                  <div className="hero-actions">
                    <Magnet>
                      <Ripple as="a" href="#contact" className="hero-button">Enquire Now <ArrowRight size={17} /></Ripple>
                    </Magnet>
                    <a className="hero-email" href={emailUrl}><Mail size={22} /><span>{emailAddress}</span></a>
                    <a className="hero-email" href={whatsappUrl()} target="_blank" rel="noopener noreferrer"><MessageCircle size={22} /><span>{whatsappDisplay}</span></a>
                  </div>
                  <p className="home-only-note">HOME TUITION ONLY</p>
                </ScrollReveal>
                <div className="hero-image-caption">MUSIC, MADE PERSONAL</div>
              </div>
            </section>
            <FeatureStrip />
          </main>
          <svg className="hero-wave" viewBox="0 0 1600 95" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <linearGradient id="waveGold" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="#C9A227" stopOpacity="0" />
                <stop offset=".25" stopColor="#E5BC59" stopOpacity=".5" />
                <stop offset=".8" stopColor="#E5BC59" stopOpacity=".95" />
                <stop offset="1" stopColor="#C9A227" stopOpacity=".2" />
              </linearGradient>
              <filter id="waveGlow" x="-5%" y="-100%" width="110%" height="300%"><feGaussianBlur stdDeviation="3" /></filter>
            </defs>
            <path d="M0 8 C300 84 560 91 820 78 C1110 64 1350 79 1600 4" fill="none" stroke="url(#waveGold)" strokeWidth="5" vectorEffect="non-scaling-stroke" filter="url(#waveGlow)" />
            <path d="M0 8 C300 84 560 91 820 78 C1110 64 1350 79 1600 4" fill="none" stroke="url(#waveGold)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
            <path d="M0 8 C300 84 560 91 820 78 C1110 64 1350 79 1600 4 L1600 95 L0 95Z" fill="#F9F9F9" />
          </svg>
          <a className="scroll-cue" href="#instruments" aria-label="Scroll to instruments"><ArrowDown size={18} aria-hidden="true" /></a>
        </div>

        <Instruments />

        <section className="about-section" id="about">
          <div className="about-art">
            <div className="about-art-inner">
              <p>TONEXA</p>
              <div className="about-wave"><Waveform bars={37} /></div>
              <span>LEARN AT HOME</span>
            </div>
          </div>
          <div className="about-copy" id="home-tuition">
            <ScrollReveal>
              <p className="section-kicker">HOME TUITION ONLY</p>
              <h2>Your home is<br /><em>the classroom.</em></h2>
              <p>
                Tonexa Music Academy offers lessons at your home. Choose an
                instrument, share your area and ask about availability.
                We will reply by email with the next steps.
              </p>
              <a className="underlined-link" href="#contact">Ask about your area <ArrowUpRight size={16} /></a>
            </ScrollReveal>
          </div>
        </section>

        <section className="faq-section" id="questions">
          <div className="faq-heading">
            <p className="section-kicker">GOOD TO KNOW</p>
            <h2>Before you get started</h2>
            <p>Questions about the lessons and how to enquire.</p>
          </div>
          <Accordion items={faqs} className="faq-list" />
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-copy">
            <p className="section-kicker">START A CONVERSATION</p>
            <h2>Find your<br /><em>musical rhythm.</em></h2>
            <p>Tell us what you would like to learn and where you are based. Your email app will open a draft for you to review and send.</p>
            <a className="contact-email" href={emailUrl}><Mail size={20} /> {emailAddress}</a>
            <a className="contact-email" href={whatsappUrl()} target="_blank" rel="noopener noreferrer"><MessageCircle size={20} /> WhatsApp {whatsappDisplay}</a>
            <Waveform bars={34} className="contact-wave" />
          </div>
          <SpotlightCard className="form-panel">
            <form className="enquiry-form" onSubmit={submitEnquiry}>
              <label>Your name
                <input name="name" autoComplete="name" required value={form.name} onChange={updateField("name")} placeholder="Name" />
              </label>
              <label>Phone number <span>(optional)</span>
                <input name="phone" type="tel" autoComplete="tel" value={form.phone} onChange={updateField("phone")} placeholder="Your contact number" />
              </label>
              <label>Instrument
                <select name="lesson" value={form.lesson} onChange={updateField("lesson")}>
                  {lessons.map((lesson) => <option key={lesson.name}>{lesson.name}</option>)}
                  <option>Not sure yet</option>
                </select>
              </label>
              <label>Your area <span>(optional)</span>
                <input name="area" value={form.area} onChange={updateField("area")} placeholder="Your area or locality" />
              </label>
              <label className="message-field">Message <span>(optional)</span>
                <textarea name="message" rows="3" maxLength={600} value={form.message} onChange={updateField("message")} placeholder="Experience level, preferred days or questions" />
              </label>
              <Ripple as="button" className="submit-link" type="submit">Prepare email enquiry <ArrowUpRight size={17} /></Ripple>
              <button type="button" className="whatsapp-submit" onClick={sendWhatsApp}><MessageCircle size={17} /> Enquire on WhatsApp</button>
              <p className="form-note">Email opens a draft to {emailAddress}. WhatsApp opens a ready message to {whatsappDisplay}. Press Send when you are ready.</p>
              {preparedMessage && <p className="form-status" role="status">If your email app did not open, <a href={preparedMessage}>open the prepared enquiry here</a>.</p>}
            </form>
          </SpotlightCard>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default App;
