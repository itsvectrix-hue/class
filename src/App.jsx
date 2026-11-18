import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Drum, Guitar, Mail, Menu, Mic, Piano, X } from "lucide-react";
import {
  Accordion, AnimatedContent, AnimatedList, BlurText, CardSwap, ClickSpark,
  CountUp, CurvedLoop, FadeContent, HoverPreview, Magnet, Parallax, Ripple,
  RotatingText, ScrollFloat, ScrollProgress, ScrollReveal, ScrollVelocity,
  ShuffleText, SplitText, SpotlightCard, StaggeredMenu, TextPressure, TextScatter,
  TextType, TiltedCard, Waveform
} from "./ReactBits.jsx";

const emailAddress = "tonexa.music.acadmy@gmail.com";
const emailUrl = "mailto:" + emailAddress;

const lessons = [
  { name: "Keyboard", detail: "Melody, chords, timing and the foundations of playing.", preview: "Keys and melody", icon: Piano },
  { name: "Guitar", detail: "Chords, rhythm, technique and songs you want to learn.", preview: "Strings and rhythm", icon: Guitar },
  { name: "Drums", detail: "Coordination, timing and building a steady groove.", preview: "Kit and percussion", icon: Drum },
  { name: "Conga", detail: "Hand percussion, tone, rhythm and Afro-Cuban drum technique.", preview: "Hand-played drum", icon: Drum },
  { name: "Vocals", detail: "Pitch, breathing, control and expression.", preview: "Voice and technique", icon: Mic },
];

const faqs = [
  { question: "Do lessons take place at the academy?", answer: "Tonexa Music Academy offers home tuition only. Lessons are arranged at the student's home, subject to availability in the area." },
  { question: "Which instruments can I ask to learn?", answer: "You can enquire about keyboard, guitar, drums, conga and vocals. Select an instrument in the form and share your area." },
  { question: "How do I check lesson availability?", answer: "Send an enquiry by email with your area, chosen instrument and any questions. The academy can then reply with the details." },
];

function Brand({ footer = false }) {
  return (
    <a className={footer ? "brand brand-footer" : "brand"} href="#home" aria-label="Tonexa Music Academy home">
      <img src="/tonexa-mark.svg" alt="" className="brand-symbol" />
      <span className="brand-copy"><strong>Tonexa</strong><small>Music Academy</small></span>
    </a>
  );
}

function EntryLoader() {
  return (
    <div className="entry-loader" role="status" aria-label="Loading Tonexa Music Academy">
      <div className="entry-loader-content">
        <img src="/tonexa-mark.svg" alt="" className="loader-logo" />
        <span className="loader-name">Tonexa</span>
        <span className="loader-caption">Music Academy</span>
        <Waveform bars={31} className="loader-waveform" />
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
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <Brand />
      <button ref={menuButton} className="menu-toggle" type="button"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen} aria-controls="primary-navigation"
        onClick={() => setMenuOpen((open) => !open)}>
        {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>
      <StaggeredMenu open={menuOpen} className="main-nav" id="primary-navigation">
        <a href="#lessons" onClick={closeMenu}>Instruments</a>
        <a href="#home-tuition" onClick={closeMenu}>Home tuition</a>
        <a href="#questions" onClick={closeMenu}>Questions</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
        <a className="nav-contact" href="#contact" onClick={closeMenu}>Enquire now <ArrowUpRight size={16} aria-hidden="true" /></a>
      </StaggeredMenu>
    </header>
  );
}

function InstrumentStage() {
  return (
    <svg className="instrument-stage" viewBox="0 0 720 560" role="img" aria-label="Illustration of a keyboard, guitar, conga drums and microphone">
      <rect width="720" height="560" fill="#0A1F44" />
      <path d="M44 476 C150 430 255 438 360 470 S563 506 676 455" fill="none" stroke="#C9A227" strokeWidth="1.5" />
      <path d="M44 492 C160 455 250 462 360 491 S558 524 676 479" fill="none" stroke="#34486B" strokeWidth="1" />
      <g className="stage-keyboard">
        <path d="M38 392 L365 365 L397 422 L58 456Z" fill="#06152E" stroke="#C9A227" strokeWidth="2" />
        <path d="M58 402 L355 381 L377 418 L76 444Z" fill="#192D4D" />
        {Array.from({ length: 14 }, (_, index) => <path key={index} d={`M${75 + index * 20} 400 L${92 + index * 20} 441`} stroke="#F9F9F9" strokeWidth="2" />)}
        {Array.from({ length: 13 }, (_, index) => index % 7 !== 2 && index % 7 !== 6 ? <path key={`black-${index}`} d={`M${86 + index * 20} 395 L${97 + index * 20} 422`} stroke="#06152E" strokeWidth="7" /> : null)}
      </g>
      <g className="stage-guitar">
        <path d="M390 212 L425 95 L451 102 L423 224" fill="#8E5A31" stroke="#D7A76C" strokeWidth="3" />
        <path d="M425 95 L432 42 Q448 24 463 45 L459 112Z" fill="#9A6337" stroke="#D7A76C" strokeWidth="3" />
        <path d="M407 202 C376 177 343 195 339 238 C334 267 357 286 358 320 C360 356 391 392 428 376 C468 358 476 318 459 283 C446 255 446 224 427 208 C421 204 414 201 407 202Z" fill="#A66D3B" stroke="#D7A76C" strokeWidth="3" />
        <path d="M410 232 C394 229 382 244 386 261 C390 278 410 283 421 272 C435 260 427 238 410 232Z" fill="#0A1F44" stroke="#D7A76C" strokeWidth="3" />
        <path d="M435 98 L425 355 M442 99 L432 355 M449 101 L439 350" stroke="#E8D7B9" strokeWidth="1.5" />
        {Array.from({ length: 8 }, (_, index) => <path key={index} d={`M${420 - index * 1.6} ${125 + index * 24} L${459 - index * 1.6} ${128 + index * 24}`} stroke="#D6B786" strokeWidth="1" />)}
      </g>
      <g className="stage-congas">
        <path d="M492 218 Q500 198 537 198 Q574 198 583 218 L573 432 Q538 459 503 432Z" fill="#8C4F28" stroke="#D7A76C" strokeWidth="3" />
        <ellipse cx="537" cy="218" rx="45" ry="13" fill="#D9C4A3" stroke="#C9A227" strokeWidth="4" />
        <path d="M505 248 Q537 260 570 248 M503 322 Q537 335 574 322 M503 399 Q537 411 575 399" fill="none" stroke="#D7A76C" strokeWidth="3" />
        <path d="M602 252 Q609 231 640 231 Q670 231 676 252 L668 432 Q637 452 609 432Z" fill="#70401F" stroke="#D7A76C" strokeWidth="3" />
        <ellipse cx="639" cy="252" rx="37" ry="11" fill="#D9C4A3" stroke="#C9A227" strokeWidth="4" />
        <path d="M612 281 Q640 291 669 281 M610 350 Q639 361 670 350 M608 414 Q639 424 668 414" fill="none" stroke="#D7A76C" strokeWidth="3" />
        <path d="M521 220 L518 428 M553 220 L556 428 M625 253 L622 430 M650 253 L654 430" stroke="#C9A227" strokeWidth="2" />
      </g>
      <g className="stage-mic">
        <path d="M285 120 V245" stroke="#D3D8E0" strokeWidth="6" />
        <rect x="267" y="79" width="36" height="74" rx="18" fill="#D6D9DF" stroke="#C9A227" strokeWidth="3" />
        <path d="M275 97 H295 M275 109 H295 M275 121 H295 M285 245 L258 300 H311 L285 245" fill="none" stroke="#69788E" strokeWidth="3" />
        <path d="M285 300 V365 M246 365 H324" stroke="#D3D8E0" strokeWidth="4" />
      </g>
      <g className="stage-detail" fill="#C9A227">
        <circle cx="110" cy="104" r="3" /><circle cx="132" cy="92" r="2" /><circle cx="162" cy="118" r="2" /><circle cx="231" cy="81" r="3" />
      </g>
    </svg>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <Brand footer />
        <p className="footer-note"><TextScatter text="Music belongs at home." /></p>
        <a className="footer-email" href={emailUrl}><Mail size={17} aria-hidden="true" /> {emailAddress}</a>
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
  const [selectedLesson, setSelectedLesson] = useState("Keyboard");
  const [preparedMessage, setPreparedMessage] = useState("");

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timer = window.setTimeout(() => setShowLoader(false), reducedMotion ? 120 : 1050);
    return () => window.clearTimeout(timer);
  }, []);

  const updateField = (field) => (event) => {
    setForm((current) => ({ ...current, [field]: event.target.value }));
    setPreparedMessage("");
  };

  const selectLesson = (name) => {
    setSelectedLesson(name);
    setForm((current) => ({ ...current, lesson: name }));
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
      {showLoader && <EntryLoader />}
      <div className="site-shell">
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Header />
        <main id="main-content">
          <section className="hero" id="home">
            <div className="hero-copy">
              <p className="hero-location">Home tuition only</p>
              <h1><SplitText text="Learn music" /><br /><SplitText text="at home" className="hero-title-gold" /></h1>
              <BlurText className="hero-description">Personal music lessons arranged at your home. Choose an instrument, share your area and ask about availability.</BlurText>
              <p className="hero-instrument-line">Explore <TextType items={["keyboard", "guitar", "drums", "conga", "vocals"]} /></p>
              <div className="hero-actions">
                <Magnet><ClickSpark><Ripple as="a" className="primary-link" href="#contact"><ShuffleText text="Ask about lessons" /> <ArrowUpRight size={17} aria-hidden="true" /></Ripple></ClickSpark></Magnet>
                <a className="secondary-link" href="#lessons">View instruments</a>
              </div>
              <p className="hero-subnote"><RotatingText items={["Lessons at your place", "Choose what you want to play", "Ask about your area"]} /></p>
            </div>
            <AnimatedContent className="hero-art-wrap" delay={150}>
              <TiltedCard>
                <SpotlightCard className="hero-art">
                  <ScrollFloat><InstrumentStage /></ScrollFloat>
                  <span className="hero-art-caption">Instruments taught at home</span>
                </SpotlightCard>
              </TiltedCard>
            </AnimatedContent>
          </section>

          <ScrollVelocity className="instrument-ticker">
            <CurvedLoop text="Keyboard   /   Guitar   /   Drums   /   Conga   /   Vocals" />
          </ScrollVelocity>

          <section className="lessons-section" id="lessons">
            <ScrollReveal className="section-heading">
              <div><p className="section-kicker">Find your instrument</p><h2><TextPressure>What would you like to learn?</TextPressure></h2></div>
              <p>Choose an instrument to add it to your enquiry. Every lesson is arranged as home tuition.</p>
            </ScrollReveal>
            <AnimatedList className="lesson-list">
              {lessons.map(({ name, detail, preview, icon: Icon }) => (
                <Ripple as="button" type="button" className={`lesson-row ${selectedLesson === name ? "is-selected" : ""}`} key={name}
                  onClick={() => {
                    selectLesson(name);
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}>
                  <span className="lesson-icon"><Icon size={27} strokeWidth={1.5} aria-hidden="true" /></span>
                  <span className="lesson-copy"><TextPressure><strong>{name}</strong></TextPressure><span>{detail}</span></span>
                  <HoverPreview preview={preview} className="lesson-link">{selectedLesson === name ? "Selected" : "Choose"}<ArrowUpRight size={16} aria-hidden="true" /></HoverPreview>
                </Ripple>
              ))}
            </AnimatedList>
            <div className="instrument-count"><CountUp end={5} /><span>instruments to enquire about</span></div>
          </section>

          <section className="home-section" id="home-tuition">
            <div className="home-copy">
              <p className="section-kicker">Home tuition</p>
              <h2>Your home.<br /><span>Your next song.</span></h2>
              <FadeContent delay={100}>
                <p className="home-description">Tonexa Music Academy teaches at students' homes. Send your area and the instrument you are interested in. The academy can reply with availability and lesson details.</p>
              </FadeContent>
              <CardSwap
                front={<><strong>Home tuition only</strong><span>Lessons are arranged at the student's address.</span></>}
                back={<><strong>Check your area</strong><span>Send an enquiry to confirm availability.</span></>}
                className="home-card-swap"
              />
              <a className="text-link" href="#contact">Ask about home tuition <ArrowUpRight size={16} aria-hidden="true" /></a>
            </div>
            <div className="home-sound">
              <Parallax className="sound-mark" strength={22}>
                <span className="sound-ring" /><Waveform bars={43} /><span className="sound-caption">A sound that starts at home</span>
              </Parallax>
            </div>
          </section>

          <section className="questions-section" id="questions">
            <ScrollReveal className="questions-heading"><h2>Before you get started</h2><p>Details about lessons, instruments and availability.</p></ScrollReveal>
            <Accordion items={faqs} className="faq-list" />
          </section>

          <section className="contact-section" id="contact">
            <div className="contact-copy">
              <h2>Tell us what<br /><span>you want to play</span></h2>
              <FadeContent delay={80}><p>Send your details and your email app will open a draft addressed to Tonexa Music Academy. Review it before sending.</p></FadeContent>
              <a className="contact-detail" href={emailUrl}><Mail size={18} aria-hidden="true" /><span>{emailAddress}</span><ArrowUpRight size={15} aria-hidden="true" /></a>
              <Waveform bars={28} className="contact-waveform" />
            </div>

            <SpotlightCard className="contact-form-wrap">
              <form className="enquiry-form" onSubmit={submitEnquiry}>
                <label>Your name
                  <input name="name" autoComplete="name" required value={form.name} onChange={updateField("name")} placeholder="Name" />
                </label>
                <label>Phone number <span>(optional)</span>
                  <input name="phone" type="tel" autoComplete="tel" value={form.phone} onChange={updateField("phone")} placeholder="Your contact number" />
                </label>
                <label>Instrument
                  <select name="lesson" value={form.lesson} onChange={(event) => { updateField("lesson")(event); setSelectedLesson(event.target.value); }}>
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
                <Magnet className="submit-magnet">
                  <ClickSpark><Ripple as="button" className="submit-link" type="submit"><ShuffleText text="Prepare email enquiry" /><ArrowUpRight size={17} aria-hidden="true" /></Ripple></ClickSpark>
                </Magnet>
                <p className="form-note">Your email app opens a draft to {emailAddress}. Press Send when you are ready.</p>
                {preparedMessage && <p className="form-status" role="status">If your email app did not open, <a href={preparedMessage}>open the prepared enquiry here</a>.</p>}
              </form>
            </SpotlightCard>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
