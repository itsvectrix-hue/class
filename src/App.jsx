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
    detail: "Chords, rhythm and songs",
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
        fill="#343b32"
      />
      <path d="M104 142 L156 142 L161 357 L99 357Z" fill="#20251f" />
      <path d="M94 56 C85 28 101 12 130 10 C159 12 175 28 166 56 L158 83 L102 83Z" fill="#20251f" />
      <path d="M109 20 H151 L148 58 H112Z" fill="#77796f" />
      <g fill="#e8e5d9">
        <circle cx="98" cy="28" r="5" />
        <circle cx="94" cy="46" r="5" />
        <circle cx="98" cy="64" r="5" />
        <circle cx="162" cy="28" r="5" />
        <circle cx="166" cy="46" r="5" />
        <circle cx="162" cy="64" r="5" />
      </g>
      <path
        d="M45 397 C58 369 82 351 119 350 C156 351 182 369 195 397 C214 444 186 501 151 520 C126 533 104 533 79 520 C44 501 16 444 45 397Z"
        fill="#343b32"
      />
      <circle cx="130" cy="438" r="42" fill="#171b17" />
      <circle cx="130" cy="438" r="34" fill="none" stroke="#c5c4b7" strokeWidth="2" />
      <circle cx="130" cy="438" r="27" fill="none" stroke="#c5c4b7" strokeWidth="1" />
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
          stroke="#8a8c82"
          strokeWidth="1"
        />
      ))}
    </svg>
  );
}

function KeyboardIllustration() {
  return (
    <svg className="keyboard-illustration" viewBox="0 0 520 210" aria-hidden="true">
      <path d="M18 16 H502" stroke="#aeb5a5" strokeWidth="1" />
      <path d="M18 194 H502" stroke="#aeb5a5" strokeWidth="1" />
      <rect x="18" y="40" width="484" height="136" rx="3" fill="#e8e7df" />
      {Array.from({ length: 14 }, (_, index) => (
        <rect
          key={"key-" + index}
          x={24 + index * 34}
          y="46"
          width="33"
          height="123"
          fill="#fbfaf5"
          stroke="#a8a99f"
          strokeWidth=".8"
        />
      ))}
      {Array.from({ length: 13 }, (_, index) =>
        ![2, 6, 9].includes(index % 7) ? (
          <rect
            key={"black-" + index}
            x={47 + index * 34}
            y="46"
            width="21"
            height="76"
            rx="1"
            fill="#272c26"
          />
        ) : null
      )}
      <path d="M18 26 H502" stroke="#aeb5a5" strokeWidth="1" />
      <circle cx="74" cy="26" r="3" fill="#f0eee6" />
      <circle cx="446" cy="26" r="3" fill="#f0eee6" />
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
              <h1>Pick up an instrument. Play something you love.</h1>
              <p className="hero-description">
                Guitar, keyboard, piano and vocal lessons at Naveen's Musical Class.
                Ask about current timings and fees.
              </p>
              <div className="hero-actions">
                <a className="primary-link" href="#contact">
                  Ask about lessons <ArrowUpRight size={16} aria-hidden="true" />
                </a>
                <a className="secondary-link" href="#lessons">Explore lessons</a>
              </div>
            </div>

            <div className="hero-art">
              <AcousticIllustration />
              <span className="art-caption">Acoustic guitar</span>
            </div>
          </section>

          <section className="lessons-section" id="lessons">
            <div className="section-intro">
              <h2>Find your instrument</h2>
              <p>Choose what you want to learn and ask about the current classes.</p>
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
                    Ask about this <ArrowUpRight size={15} aria-hidden="true" />
                  </span>
                </a>
              ))}
            </div>
          </section>

          <section className="practice-section" id="practice">
            <div className="practice-art">
              <KeyboardIllustration />
            </div>
            <div className="practice-copy">
              <h2>Start with the music you enjoy</h2>
              <p>
                Bring a song you're trying to learn, or ask where to begin.
                Tell Naveen what you've played before and what you'd like to work on.
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
                Ask about fees, timings or which instrument to start with.
                Call or send a WhatsApp message.
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
                Lesson
                <select name="lesson" value={form.lesson} onChange={updateField("lesson")}>
                  <option>Acoustic guitar</option>
                  <option>Keyboard and piano</option>
                  <option>Vocals</option>
                  <option>Not sure yet</option>
                </select>
              </label>

              <label className="message-field">
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
                Your message opens in WhatsApp. Check it before sending.
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
