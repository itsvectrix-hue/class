import React, { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Check,
  Drum,
  Guitar,
  House,
  Mail,
  Menu,
  Mic,
  Music2,
  X,
} from "lucide-react";

const academyName = "Tonexa Music Academy";
const emailAddress = "tonexa.music.acadmy@gmail.com";
const emailUrl = "mailto:" + emailAddress;

const lessons = [
  {
    name: "Keyboard",
    detail: "Melody, rhythm, coordination and musical foundations.",
    icon: Music2,
  },
  {
    name: "Guitar",
    detail: "Chords, strumming, technique and songs you enjoy.",
    icon: Guitar,
  },
  {
    name: "Drums",
    detail: "Timing, rhythm, coordination and groove.",
    icon: Drum,
  },
  {
    name: "Vocals",
    detail: "Pitch, breathing, expression and confidence.",
    icon: Mic,
  },
];

function EntryLoader() {
  return (
    <div className="entry-loader" role="status" aria-label="Loading Tonexa Music Academy">
      <div className="entry-loader-content">
        <span className="loader-mark">T<span>.</span></span>
        <p>{academyName}</p>
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

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Tonexa Music Academy home" onClick={closeMenu}>
        <span className="brand-mark">T<span>.</span></span>
        <span className="brand-name">TONEXA<br /><small>MUSIC ACADEMY</small></span>
      </a>

      <nav
        id="primary-navigation"
        className={menuOpen ? "main-nav is-open" : "main-nav"}
        aria-label="Main navigation"
      >
        <a href="#lessons" onClick={closeMenu}>Lessons</a>
        <a href="#home-tuition" onClick={closeMenu}>Home tuition</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
        <a className="nav-contact" href="#contact" onClick={closeMenu}>
          Enquire now <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </nav>

      <button
        ref={menuButton}
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <a className="footer-brand" href="#home" aria-label="Tonexa Music Academy home">
          <span className="brand-mark">T<span>.</span></span>
          <span>TONEXA / MUSIC ACADEMY</span>
        </a>
        <div className="footer-note">
          <span>HOME TUITION ONLY</span>
          <span>Learn music where you feel at home.</span>
        </div>
        <a className="footer-email" href={emailUrl}>
          <Mail size={16} aria-hidden="true" /> {emailAddress}
        </a>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} TONEXA MUSIC ACADEMY</span>
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
  const [form, setForm] = useState({
    name: "",
    phone: "",
    lesson: "Keyboard",
    area: "",
    message: "",
  });
  const [preparedMessage, setPreparedMessage] = useState("");

  useEffect(() => {
    const timer = window.setTimeout(() => setShowLoader(false), 650);
    return () => window.clearTimeout(timer);
  }, []);

  const updateField = (field) => (event) => {
    setForm((current) => ({ ...current, [field]: event.target.value }));
    setPreparedMessage("");
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
      "",
      "I understand that this is an enquiry only and does not confirm a lesson booking.",
    ].join("\n");

    const subject = encodeURIComponent("Music lesson enquiry — " + form.name.trim());
    const body = encodeURIComponent(message);
    const url = emailUrl + "?subject=" + subject + "&body=" + body;

    setPreparedMessage(url);
    window.location.href = url;
  };

  return (
    <>
      {showLoader && <EntryLoader />}

      <div className="site-shell">
        <a className="skip-link" href="#main-content">Skip to content</a>
        <div className="topline">
          <span><span className="topline-dot" /> MUSIC LESSONS IN PUNE</span>
          <span>HOME TUITION ONLY</span>
        </div>
        <Header />

        <main id="main-content">
          <section className="hero" id="home">
            <div className="hero-copy">
              <p className="eyebrow"><span className="eyebrow-rule" /> MUSIC, BROUGHT TO YOU</p>
              <h1>Find your rhythm.<br /><em>At your place.</em></h1>
              <p className="hero-description">
                Learn keyboard, guitar, drums or vocals with Tonexa Music Academy.
                We offer home tuition only, so you can learn in a familiar space.
              </p>
              <div className="hero-actions">
                <a className="primary-link" href="#contact">
                  ENQUIRE FOR HOME TUITION <ArrowUpRight size={16} aria-hidden="true" />
                </a>
                <a className="secondary-link" href="#lessons">Explore lessons</a>
              </div>
              <div className="hero-proof">
                <House size={17} aria-hidden="true" />
                <span>LESSONS AT YOUR HOME</span>
                <span className="proof-divider" />
                <span>PUNE</span>
              </div>
            </div>

            <div className="hero-art" aria-label="Music academy home tuition">
              <div className="art-orbit orbit-one" />
              <div className="art-orbit orbit-two" />
              <div className="art-center">
                <span className="art-note">♪</span>
                <span className="art-word">MAKE<br /><em>MUSIC.</em></span>
              </div>
              <div className="art-chip chip-keyboard"><Music2 size={18} /> KEYBOARD</div>
              <div className="art-chip chip-guitar"><Guitar size={18} /> GUITAR</div>
              <div className="art-chip chip-drums"><Drum size={18} /> DRUMS</div>
              <div className="art-chip chip-vocals"><Mic size={18} /> VOCALS</div>
              <div className="art-caption"><span>TONEXA</span><span>LEARN / PLAY / GROW</span></div>
            </div>
            <div className="hero-index">TMA — 01 / 04</div>
          </section>

          <section className="lessons-section" id="lessons">
            <div className="section-intro">
              <div>
                <p className="eyebrow"><span className="eyebrow-rule" /> CHOOSE YOUR SOUND</p>
                <h2>What would you<br /><em>like to play?</em></h2>
              </div>
              <p>Start with the instrument that interests you. Ask us about lesson availability in your area.</p>
            </div>

            <div className="lesson-list">
              {lessons.map(({ name, detail, icon: Icon }, index) => (
                <a
                  className="lesson-row"
                  href="#contact"
                  key={name}
                  onClick={() => setForm((current) => ({ ...current, lesson: name }))}
                >
                  <span className="lesson-number">0{index + 1}</span>
                  <span className="lesson-icon">
                    <Icon size={27} strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <span className="lesson-copy">
                    <strong>{name}</strong>
                    <span>{detail}</span>
                  </span>
                  <span className="lesson-link">
                    ENQUIRE <ArrowUpRight size={16} aria-hidden="true" />
                  </span>
                </a>
              ))}
            </div>
          </section>

          <section className="practice-section" id="home-tuition">
            <div className="practice-art">
              <div className="home-illustration">
                <div className="home-illustration-ring" />
                <House size={106} strokeWidth={1} aria-hidden="true" />
                <span className="home-illustration-label">YOUR HOME<br />YOUR MUSIC</span>
                <span className="home-illustration-note note-a">♪</span>
                <span className="home-illustration-note note-b">♫</span>
              </div>
            </div>
            <div className="practice-copy">
              <p className="eyebrow"><span className="eyebrow-rule" /> THE TONEXA WAY</p>
              <h2>Learn in your<br /><em>own space.</em></h2>
              <p>
                Tonexa Music Academy offers home tuition only. Lessons are arranged
                for students at their own homes — no academy visit or studio
                attendance is offered.
              </p>
              <div className="home-tuition-callout">
                <House size={20} aria-hidden="true" />
                <span><strong>HOME TUITION ONLY</strong><small>Share your area when you enquire so availability can be confirmed.</small></span>
              </div>
              <a className="text-link" href="#contact">
                ASK ABOUT YOUR AREA <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </section>

          <section className="contact-section" id="contact">
            <div className="contact-copy">
              <p className="eyebrow"><span className="eyebrow-rule" /> LET'S GET STARTED</p>
              <h2>Ready to make<br /><em>some music?</em></h2>
              <p>
                Tell us which instrument you're interested in and where you'd
                like home tuition. We'll reply by email with the next steps.
              </p>
              <a className="contact-detail" href={emailUrl}>
                <Mail size={18} aria-hidden="true" />
                <span>{emailAddress}</span>
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
              <div className="contact-note">
                <Check size={15} aria-hidden="true" />
                <span>Enquiries are not confirmed bookings. Lesson details are agreed directly by email.</span>
              </div>
            </div>

            <form className="enquiry-form" onSubmit={submitEnquiry}>
              <div className="form-heading">
                <span>LESSON ENQUIRY</span>
                <span>01 — 04 / YOUR DETAILS</span>
              </div>

              <label>
                Your name
                <input
                  name="name"
                  autoComplete="name"
                  required
                  value={form.name}
                  onChange={updateField("name")}
                  placeholder="Name"
                />
              </label>

              <label>
                Phone number <span className="optional-label">OPTIONAL</span>
                <input
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={updateField("phone")}
                  placeholder="Your contact number"
                />
              </label>

              <label>
                Instrument
                <select name="lesson" value={form.lesson} onChange={updateField("lesson")}>
                  {lessons.map((lesson) => <option key={lesson.name}>{lesson.name}</option>)}
                  <option>Not sure yet</option>
                </select>
              </label>

              <label>
                Your area / locality <span className="optional-label">OPTIONAL</span>
                <input
                  name="area"
                  value={form.area}
                  onChange={updateField("area")}
                  placeholder="Where would lessons take place?"
                />
              </label>

              <label className="message-field">
                Anything you'd like us to know? <span className="optional-label">OPTIONAL</span>
                <textarea
                  name="message"
                  rows="3"
                  maxLength={600}
                  value={form.message}
                  onChange={updateField("message")}
                  placeholder="Your experience level, preferred days, or any questions..."
                />
              </label>

              <button className="submit-link" type="submit">
                PREPARE EMAIL ENQUIRY <ArrowUpRight size={16} aria-hidden="true" />
              </button>

              <p className="form-note">
                This opens a new email draft addressed to Tonexa. Review it and press Send in your email app.
              </p>

              {preparedMessage && (
                <p className="form-status" role="status">
                  If your email app did not open,{" "}
                  <a href={preparedMessage}>open the prepared enquiry here</a>.
                </p>
              )}
            </form>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
