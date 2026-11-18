import React, { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
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
    detail: "Learn melodies, chords, rhythm and the basics of playing.",
    icon: Music2,
  },
  {
    name: "Guitar",
    detail: "Work on chords, strumming, technique and songs.",
    icon: Guitar,
  },
  {
    name: "Drums",
    detail: "Build timing, coordination and a feel for rhythm.",
    icon: Drum,
  },
  {
    name: "Vocals",
    detail: "Practice pitch, breathing, control and expression.",
    icon: Mic,
  },
];

function EntryLoader() {
  return (
    <div className="entry-loader" role="status" aria-label="Loading Tonexa Music Academy">
      <div className="entry-loader-content">
        <span className="loader-wordmark">Tonexa<span>.</span></span>
        <div className="loader-staff" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
          <Music2 className="loader-note" strokeWidth={1.5} />
        </div>
        <p>Music lessons at home</p>
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
        <span className="brand-name">Tonexa<br /><small>Music Academy</small></span>
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
          Ask about lessons <ArrowUpRight size={15} aria-hidden="true" />
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
          <span>Tonexa Music Academy</span>
        </a>
        <p className="footer-note">Music lessons at your home.</p>
        <a className="footer-email" href={emailUrl}>
          <Mail size={16} aria-hidden="true" />
          {emailAddress}
        </a>
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
  const [form, setForm] = useState({
    name: "",
    phone: "",
    lesson: "Keyboard",
    area: "",
    message: "",
  });
  const [preparedMessage, setPreparedMessage] = useState("");

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const delay = reducedMotion ? 120 : 1120;
    const timer = window.setTimeout(() => setShowLoader(false), delay);
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
    ].join("\n");

    const subject = encodeURIComponent("Music lesson enquiry from " + form.name.trim());
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
        <Header />

        <main id="main-content">
          <section className="hero" id="home">
            <div className="hero-copy">
              <p className="eyebrow">Music lessons at home</p>
              <h1>Make music<br /><em>at your place</em></h1>
              <p className="hero-description">
                Learn keyboard, guitar, drums or vocals with lessons arranged at your home.
                Tell us what you want to play and where you live.
              </p>
              <div className="hero-actions">
                <a className="primary-link" href="#contact">
                  Enquire about home tuition <ArrowUpRight size={16} aria-hidden="true" />
                </a>
                <a className="secondary-link" href="#lessons">See the lessons</a>
              </div>
              <p className="hero-location">
                <House size={17} aria-hidden="true" />
                Home tuition only
              </p>
            </div>

            <div className="hero-art" aria-hidden="true">
              <div className="hero-art-title">Tonexa</div>
              <svg className="music-art" viewBox="0 0 520 360" role="presentation">
                <path d="M38 104 C154 70 293 71 475 105" />
                <path d="M38 132 C154 98 293 99 475 133" />
                <path d="M38 160 C154 126 293 127 475 161" />
                <path d="M38 188 C154 154 293 155 475 189" />
                <path d="M38 216 C154 182 293 183 475 217" />
                <path className="music-note-stem" d="M328 70 V198" />
                <path className="music-note-head" d="M328 196 C313 191 295 199 295 211 C295 223 315 224 328 215 C337 208 337 199 328 196Z" />
                <path className="music-note-flag" d="M328 72 C381 78 391 112 366 135" />
              </svg>
              <div className="hero-art-caption">
                <span>Learn</span>
                <span>Practice</span>
                <span>Play</span>
              </div>
            </div>
          </section>

          <section className="lessons-section" id="lessons">
            <div className="section-intro">
              <div>
                <p className="eyebrow">Choose an instrument</p>
                <h2>What would you<br /><em>like to learn?</em></h2>
              </div>
              <p>
                Pick an instrument to add it to your enquiry. Share your area and
                we can discuss home lesson availability by email.
              </p>
            </div>

            <div className="lesson-list">
              {lessons.map(({ name, detail, icon: Icon }) => (
                <a
                  className="lesson-row"
                  href="#contact"
                  key={name}
                  onClick={() => setForm((current) => ({ ...current, lesson: name }))}
                >
                  <span className="lesson-icon">
                    <Icon size={27} strokeWidth={1.45} aria-hidden="true" />
                  </span>
                  <span className="lesson-copy">
                    <strong>{name}</strong>
                    <span>{detail}</span>
                  </span>
                  <span className="lesson-link">
                    Enquire <ArrowUpRight size={16} aria-hidden="true" />
                  </span>
                </a>
              ))}
            </div>
          </section>

          <section className="home-section" id="home-tuition">
            <div className="home-art" aria-hidden="true">
              <House size={118} strokeWidth={1} />
              <span className="home-art-note">♪</span>
            </div>
            <div className="home-copy">
              <p className="eyebrow">Home tuition</p>
              <h2>Lessons happen<br /><em>at your home</em></h2>
              <p>
                Tonexa Music Academy offers home tuition only. Tell us your area
                and the instrument you are interested in. We will reply by email
                to discuss whether lessons can be arranged at your address.
              </p>
              <a className="text-link" href="#contact">
                Ask about your area <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </section>

          <section className="contact-section" id="contact">
            <div className="contact-copy">
              <p className="eyebrow">Get in touch</p>
              <h2>Tell us what<br /><em>you want to play</em></h2>
              <p>
                Send the details below and your email app will open a message
                addressed to Tonexa Music Academy. You can review it before sending.
              </p>
              <a className="contact-detail" href={emailUrl}>
                <Mail size={18} aria-hidden="true" />
                <span>{emailAddress}</span>
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>

            <form className="enquiry-form" onSubmit={submitEnquiry}>
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
                Phone number <span className="optional-label">Optional</span>
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
                Your area <span className="optional-label">Optional</span>
                <input
                  name="area"
                  value={form.area}
                  onChange={updateField("area")}
                  placeholder="Your area or locality"
                />
              </label>

              <label className="message-field">
                Message <span className="optional-label">Optional</span>
                <textarea
                  name="message"
                  rows="3"
                  maxLength={600}
                  value={form.message}
                  onChange={updateField("message")}
                  placeholder="Experience level, preferred days or questions"
                />
              </label>

              <button className="submit-link" type="submit">
                Prepare email enquiry <ArrowUpRight size={16} aria-hidden="true" />
              </button>

              <p className="form-note">
                Your email app will open a draft to {emailAddress}. Press Send when you are ready.
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
