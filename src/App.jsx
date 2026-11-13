import React, { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Guitar,
  Menu,
  MessageCircle,
  Mic,
  Piano,
  Phone,
  X,
} from "lucide-react";

const phoneNumber = "919028671906";
const phoneLabel = "+91 90286 71906";
const whatsappUrl = "https://wa.me/" + phoneNumber;

const lessons = [
  {
    name: "Acoustic guitar",
    detail: "Chords, rhythm and the songs you want to play",
    icon: Guitar,
  },
  {
    name: "Keyboard and piano",
    detail: "Melody, timing and technique",
    icon: Piano,
  },
  {
    name: "Vocals",
    detail: "Pitch, breathing and expression",
    icon: Mic,
  },
];

function AcousticIllustration() {
  return (
    <svg
      className="hero-guitar"
      viewBox="0 0 260 560"
      role="img"
      aria-label="Acoustic guitar illustration"
    >
      <path
        d="M111 143 C82 115 79 84 95 55 L165 55 C181 84 178 115 149 143 L151 310 C165 333 200 353 211 395 C228 461 198 514 153 538 C132 549 106 549 85 538 C40 514 10 461 27 395 C38 353 73 333 87 310Z"
        fill="#34362f"
      />
      <path d="M104 142 L156 142 L161 357 L99 357Z" fill="#20211d" />
      <path d="M94 56 C85 28 101 12 130 10 C159 12 175 28 166 56 L158 83 L102 83Z" fill="#20211d" />
      <path d="M109 20 H151 L148 58 H112Z" fill="#66675f" />
      <g fill="#e1dfd4">
        <circle cx="98" cy="28" r="5" />
        <circle cx="94" cy="46" r="5" />
        <circle cx="98" cy="64" r="5" />
        <circle cx="162" cy="28" r="5" />
        <circle cx="166" cy="46" r="5" />
        <circle cx="162" cy="64" r="5" />
      </g>
      <path
        d="M45 397 C58 369 82 351 119 350 C156 351 182 369 195 397 C214 444 186 501 151 520 C126 533 104 533 79 520 C44 501 16 444 45 397Z"
        fill="#34362f"
      />
      <circle cx="130" cy="438" r="42" fill="#171815" />
      <circle cx="130" cy="438" r="34" fill="none" stroke="#a9a89e" strokeWidth="2" />
      <circle cx="130" cy="438" r="27" fill="none" stroke="#a9a89e" strokeWidth="1" />
      <path d="M93 522 Q130 533 167 522 L172 536 Q130 550 88 536Z" fill="#c7c4b8" />
      {Array.from({ length: 6 }, (_, index) => (
        <path
          key={index}
          d={"M" + (109 + index * 8) + " 30 L" + (105 + index * 10) + " 529"}
          fill="none"
          stroke="#dedcd1"
          strokeWidth="1"
        />
      ))}
      {Array.from({ length: 10 }, (_, index) => (
        <path
          key={"fret-" + index}
          d={"M101 " + (164 + index * 16) + " H159"}
          fill="none"
          stroke="#87877e"
          strokeWidth="1"
        />
      ))}
    </svg>
  );
}

function EntryLoader() {
  return (
    <div className="entry-loader" role="status" aria-label="Loading Naveen's Musical Class">
      <div className="entry-loader-content">
        <svg className="loader-staff" viewBox="0 0 280 74" aria-hidden="true">
          <path d="M4 17 H276 M4 27 H276 M4 37 H276 M4 47 H276 M4 57 H276" />
          <path className="loader-sweep" d="M18 12 V62" />
          <circle className="loader-note" cx="18" cy="37" r="5" />
        </svg>
        <p>Naveen's Musical Class</p>
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
      <a className="brand" href="/" aria-label="Naveen's Musical Class home" onClick={closeMenu}>
        <span className="brand-mark">M</span>
        <span className="brand-name">Naveen's<br />Musical Class</span>
      </a>

      <nav
        id="primary-navigation"
        className={menuOpen ? "main-nav is-open" : "main-nav"}
        aria-label="Main navigation"
      >
        <a href="#lessons" onClick={closeMenu}>Lessons</a>
        <a href="#practice" onClick={closeMenu}>Practice</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
        <a className="nav-contact" href="#contact" onClick={closeMenu}>
          Ask about classes <ArrowUpRight size={15} aria-hidden="true" />
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
        <a className="footer-brand" href="/" aria-label="Naveen's Musical Class home">
          <span className="brand-mark">M</span>
          <span>Naveen's Musical Class</span>
        </a>
        <a href={"tel:+" + phoneNumber}>{phoneLabel}</a>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          WhatsApp <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </div>
      <div className="footer-bottom">
        <span>Music lessons in Pune</span>
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
    lesson: "Acoustic guitar",
    message: "",
  });
  const [preparedMessage, setPreparedMessage] = useState("");

  useEffect(() => {
    const timer = window.setTimeout(() => setShowLoader(false), 860);
    return () => window.clearTimeout(timer);
  }, []);

  const updateField = (field) => (event) => {
    setForm((current) => ({ ...current, [field]: event.target.value }));
    setPreparedMessage("");
  };

  const submitEnquiry = (event) => {
    event.preventDefault();

    const message = [
      "Hello Naveen's Musical Class,",
      "",
      "Name: " + form.name.trim(),
      "Phone: " + form.phone.trim(),
      "Interested in: " + form.lesson,
      "Message: " + (form.message.trim() || "Please share the current class details."),
    ].join("\n");

    const url = whatsappUrl + "?text=" + encodeURIComponent(message);
    setPreparedMessage(url);
    window.open(url, "_blank", "noopener,noreferrer");
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
              <p className="location-line">Music lessons in Pune</p>
              <h1>Pick an instrument and learn a song</h1>
              <p className="hero-description">
                Naveen's Musical Class offers guitar, keyboard, piano and vocal lessons in Pune. Ask about current timings and fees before you visit.
              </p>
              <div className="hero-actions">
                <a className="primary-link" href="#contact">
                  Ask about lessons <ArrowUpRight size={16} aria-hidden="true" />
                </a>
                <a className="secondary-link" href="#lessons">See the lessons</a>
              </div>
            </div>

            <div className="hero-art">
              <AcousticIllustration />
            </div>
          </section>

          <section className="lessons-section" id="lessons">
            <div className="section-intro">
              <h2>Find your instrument</h2>
              <p>Choose an instrument and ask about the current classes and availability.</p>
            </div>

            <div className="lesson-list">
              {lessons.map(({ name, detail, icon: Icon }) => (
                <a
                  className="lesson-row"
                  href="#contact"
                  key={name}
                  onClick={() => setForm((current) => ({ ...current, lesson: name }))}
                >
                  <span className="lesson-icon"><Icon size={25} strokeWidth={1.5} aria-hidden="true" /></span>
                  <span className="lesson-copy">
                    <strong>{name}</strong>
                    <span>{detail}</span>
                  </span>
                  <span className="lesson-link">Ask about this <ArrowUpRight size={15} aria-hidden="true" /></span>
                </a>
              ))}
            </div>
          </section>

          <section className="practice-section" id="practice">
            <div className="practice-art">
              <Piano size={54} strokeWidth={1.2} aria-hidden="true" />
            </div>
            <div className="practice-copy">
              <h2>A place to begin</h2>
              <p>
                Bring a song you're trying to learn, or ask where to begin. Tell Naveen what you've played before and what you'd like to work on.
              </p>
              <a className="text-link" href="#contact">
                Talk about lessons <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </section>

          <section className="contact-section" id="contact">
            <div className="contact-copy">
              <h2>Have a question?</h2>
              <p>
                Want to check fees, timings or which instrument to start with? Call or send a WhatsApp message.
              </p>
              <a className="contact-detail" href={"tel:+" + phoneNumber}>
                <Phone size={17} aria-hidden="true" />
                <span>{phoneLabel}</span>
              </a>
              <a className="contact-detail" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle size={17} aria-hidden="true" />
                <span>Message on WhatsApp</span>
                <ArrowUpRight size={14} aria-hidden="true" />
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
                Phone number
                <input
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  maxLength={25}
                  pattern="[+0-9 ()-]{7,25}"
                  title="Enter a valid phone number"
                  required
                  value={form.phone}
                  onChange={updateField("phone")}
                  placeholder="+91"
                />
              </label>

              <label>
                Lesson
                <select name="lesson" value={form.lesson} onChange={updateField("lesson")}>
                  <option>Acoustic guitar</option>
                  <option>Keyboard and piano</option>
                  <option>Vocals</option>
                  <option>Not sure yet</option>
                </select>
              </label>

              <label>
                What would you like to learn?
                <textarea
                  name="message"
                  rows="3"
                  maxLength={500}
                  value={form.message}
                  onChange={updateField("message")}
                  placeholder="A song, an instrument, or a question"
                />
              </label>

              <button className="submit-link" type="submit">
                Open WhatsApp <ArrowUpRight size={16} aria-hidden="true" />
              </button>

              <p className="form-note">
                Your message opens in WhatsApp. It is sent only when you press Send there.
              </p>

              {preparedMessage && (
                <p className="form-status" role="status">
                  Message prepared. If WhatsApp did not open,{" "}
                  <a href={preparedMessage} target="_blank" rel="noopener noreferrer">open it here</a>.
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
