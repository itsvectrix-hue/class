import React, { useState } from "react";
import { ArrowDownRight, ArrowUpRight, ArrowRight, Menu, X, Phone, MessageCircle, Send, Instagram, Music2, Guitar, Piano } from "lucide-react";
import { SplitText, ScrollReveal, CircularText, Magnet, ScrollFloat } from "./components/ReactBits";

const phone = "919028671906";
const whatsapp = "https://wa.me/" + phone;
const lessons = [
  { no: "01", name: "Acoustic guitar", line: "Learn chords, rhythm and the songs you love.", kind: "guitar" },
  { no: "02", name: "Keyboard", line: "Build a feel for melody, harmony and timing.", kind: "keys" }
];

function AcousticGuitar({ className = "" }) {
  return (
    <svg className={"acoustic-guitar " + className} viewBox="0 0 260 650" role="img" aria-label="Illustration of an acoustic guitar">
      <defs>
        <linearGradient id="guitarBody" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#77786f"/><stop offset=".42" stopColor="#282a27"/><stop offset="1" stopColor="#10110f"/></linearGradient>
        <linearGradient id="guitarNeck" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#20211e"/><stop offset=".5" stopColor="#44463e"/><stop offset="1" stopColor="#161714"/></linearGradient>
        <filter id="guitarShadow" x="-50%" y="-20%" width="200%" height="150%"><feGaussianBlur stdDeviation="8"/></filter>
      </defs>
      <ellipse cx="133" cy="605" rx="91" ry="16" fill="#000" opacity=".2" filter="url(#guitarShadow)"/>
      <g>
        <path d="M112 154 C88 128 79 97 95 69 L165 69 C181 97 172 128 148 154 L153 331 C159 362 195 374 210 412 C231 468 210 539 170 576 C141 603 91 598 61 574 C18 539 5 466 27 410 C42 374 79 362 85 331Z" fill="url(#guitarBody)" stroke="#11120f" strokeWidth="3"/>
        <path d="M105 157 L155 157 L162 369 L97 369Z" fill="url(#guitarNeck)" stroke="#11120f" strokeWidth="2"/>
        <path d="M93 70 C84 40 99 17 130 13 C161 17 176 40 167 70 L159 94 L101 94Z" fill="#171815" stroke="#080908" strokeWidth="2"/>
        <path d="M104 18 Q130 5 156 18 L151 60 L109 60Z" fill="#30322e"/>
        <g fill="#b8b8ae" stroke="#222" strokeWidth="1">
          <circle cx="98" cy="30" r="7"/><circle cx="92" cy="48" r="7"/><circle cx="98" cy="65" r="7"/>
          <circle cx="162" cy="30" r="7"/><circle cx="168" cy="48" r="7"/><circle cx="162" cy="65" r="7"/>
        </g>
        <path d="M105 91 L155 91 L161 366 L98 366Z" fill="#282a26" opacity=".7"/>
        {Array.from({length:12},(_,i)=><path key={i} d={"M99 " + (177+i*15.5) + " L159 " + (177+i*15.5)} stroke="#a6a69b" strokeWidth="1.5" opacity=".8"/>)}
        {[0,1,2,3,4,5].map(i=><circle key={i} cx={108+i*8.2} cy={211+(i%2)*30} r="2.6" fill="#e2dfd2"/>)}
        <path d="M42 416 C55 385 81 367 112 367 C147 365 177 389 189 422 C202 460 187 514 153 544 C125 569 88 561 60 542 C27 518 20 458 42 416Z" fill="url(#guitarBody)"/>
        <circle cx="118" cy="453" r="46" fill="#131411" stroke="#cbc9bd" strokeWidth="5"/>
        <circle cx="118" cy="453" r="37" fill="#191a17" stroke="#77786e" strokeWidth="2"/>
        <circle cx="118" cy="453" r="31" fill="#050605"/>
        <circle cx="118" cy="453" r="25" fill="none" stroke="#aaa99c" strokeDasharray="1 4" strokeWidth="4"/>
        <path d="M88 538 Q118 547 148 538 L154 551 Q118 565 82 551Z" fill="#b5b2a5" stroke="#161714" strokeWidth="2"/>
        {Array.from({length:6},(_,i)=><path key={i} d={"M" + (104+i*5.3) + " 45 L" + (97+i*8.3) + " 541"} stroke="#deddd3" strokeWidth=".85" opacity=".9"/>)}
      </g>
    </svg>
  );
}

function KeyboardStudy() {
  return (
    <svg className="keyboard-study" viewBox="0 0 280 170" role="img" aria-label="Piano keyboard illustration">
      <rect x="1" y="1" width="278" height="168" fill="#e8e7e1"/>
      {Array.from({length:14},(_,i)=><rect key={i} x={12+i*18.3} y="30" width="18.3" height="119" fill={i%2?"#f5f4ef":"#fff"} stroke="#20211e" strokeWidth=".7"/>)}
      {Array.from({length:13},(_,i)=>![2,6,9].includes(i%7)?<rect key={i} x={24+i*18.3} y="30" width="11.5" height="68" fill="#171815"/>:null)}
      <path d="M12 20 H268" stroke="#4a4b45" strokeWidth=".7"/>
    </svg>
  );
}

function ScoreTile({ n, children }) {
  return <div className="score-tile"><span>{n}</span>{children}</div>;
}

function ElectricGuitar() {
  return (
    <svg className="electric-guitar" viewBox="0 0 210 440" role="img" aria-label="Illustration of an electric guitar">
      <path d="M88 104 L125 104 L134 190 C160 184 177 210 170 243 C165 267 148 276 144 303 C140 348 115 380 84 378 C56 376 48 349 58 320 C67 294 55 277 37 259 C12 233 25 194 57 191 C71 190 78 198 82 207Z" fill="#151613" stroke="#77786f" strokeWidth="2"/>
      <path d="M91 105 L120 105 L134 274 L78 274Z" fill="#35372f" stroke="#080908" strokeWidth="2"/>
      <path d="M92 104 L88 25 L124 25 L120 104Z" fill="#242620" stroke="#080908" strokeWidth="2"/>
      {Array.from({length:6},(_,i)=><path key={i} d={"M" + (92+i*5.1) + " 34 L" + (79+i*10.2) + " 353"} stroke="#d9d8ce" strokeWidth=".8"/>)}
      <rect x="71" y="245" width="62" height="9" rx="2" fill="#b5b3a7"/>
      <rect x="77" y="268" width="55" height="7" rx="2" fill="#b5b3a7"/>
      <circle cx="100" cy="300" r="21" fill="#b5b3a7"/><circle cx="100" cy="300" r="16" fill="#34362f"/>
      <circle cx="126" cy="300" r="7" fill="#b5b3a7"/><circle cx="143" cy="315" r="4" fill="#b5b3a7"/>
      <g fill="#c6c5ba"><circle cx="83" cy="40" r="4"/><circle cx="128" cy="40" r="4"/><circle cx="82" cy="65" r="4"/><circle cx="128" cy="65" r="4"/></g>
    </svg>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", interest: "Acoustic guitar", message: "" });
  const [sent, setSent] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    const message = [
      "Hello Naveen's Musical Class!",
      "",
      "Name: " + form.name,
      "Phone: " + form.phone,
      "Interested in: " + form.interest,
      "Message: " + (form.message || "Please share class details.")
    ].join("\n");
    setSent(true);
    window.open(whatsapp + "?text=" + encodeURIComponent(message), "_blank", "noopener,noreferrer");
  };

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Naveen's Musical Class home"><span className="brand-mark">M</span><span className="brand-caption">NAVEEN'S<br/>MUSICAL CLASS</span></a>
        <nav className={menuOpen ? "main-nav open" : "main-nav"} aria-label="Main navigation">
          <a href="#courses" onClick={()=>setMenuOpen(false)}>Lessons</a>
          <a href="#gallery" onClick={()=>setMenuOpen(false)}>Gallery</a>
          <a href="#contact" onClick={()=>setMenuOpen(false)}>Contacts</a>
          <a href="#contact" className="nav-enquire" onClick={()=>setMenuOpen(false)}>Enquire <ArrowUpRight size={13}/></a>
        </nav>
        <button className="menu-toggle" onClick={()=>setMenuOpen(!menuOpen)} aria-label={menuOpen?"Close menu":"Open menu"}>{menuOpen?<X/>:<Menu/>}</button>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-word" aria-hidden="true">MUSIC</div>
          <div className="hero-instrument"><ScrollFloat><AcousticGuitar/></ScrollFloat></div>
          <div className="hero-topnote"><span>THE ART OF LEARNING</span><span>01 / 04</span></div>
          <div className="hero-side-dots"><i/><i/><i/></div>
          <div className="hero-offer">
            <div className="offer-mark"><span>01</span><small>LESSONS</small></div>
            <div className="offer-copy"><strong>Find your sound.</strong><span>Guitar · Keyboard · Piano · Vocals</span><a href="#courses">Explore lessons <ArrowUpRight size={13}/></a></div>
          </div>
          <div className="hero-foot"><span>LEARN AT YOUR OWN PACE</span><span className="hero-rule"/><a href="#catalog">SCROLL TO DISCOVER <ArrowDownRight size={12}/></a></div>
        </section>

        <section className="catalog-section" id="catalog">
          <div className="section-heading"><a className="section-monogram" href="#home">M</a><span className="heading-rule"/><h2>Lessons</h2></div>
          <div className="catalog-layout" id="courses">
            <aside className="catalog-aside"><p>Make a little room for music.</p><span>Learn the instrument that makes you want to come back tomorrow.</span></aside>
            <div className="catalog-items">
              <a className="catalog-item" href="#contact">
                <div className="catalog-art"><AcousticGuitar className="catalog-guitar"/></div>
                <h3>Acoustic guitar</h3><p>Chords · rhythm · songs</p><span className="catalog-action">ENQUIRE <ArrowUpRight size={12}/></span>
              </a>
              <a className="catalog-item" href="#contact">
                <div className="catalog-art keyboard-frame"><KeyboardStudy/></div>
                <h3>Keyboard & piano</h3><p>Melody · timing · technique</p><span className="catalog-action">ENQUIRE <ArrowUpRight size={12}/></span>
              </a>
            </div>
            <aside className="catalog-note"><p>At your own pace</p><ul><li>Beginner friendly</li><li>Personal guidance</li><li>Practice with purpose</li><li>Play with joy</li></ul></aside>
          </div>
        </section>

        <section className="social-section" id="gallery">
          <div className="section-heading"><a className="section-monogram" href="#home">M</a><span className="heading-rule"/><h2>Inside the class</h2></div>
          <div className="social-layout">
            <div className="social-mosaic" aria-label="A collage of music studies and instruments">
              <ScoreTile n="01"><svg viewBox="0 0 100 100"><path d="M15 70 Q50 20 85 70" fill="none" stroke="#333" strokeWidth="3"/><circle cx="50" cy="48" r="20" fill="none" stroke="#777" strokeWidth="2"/><path d="M50 15 V81" stroke="#111" strokeWidth="2"/></svg></ScoreTile>
              <ScoreTile n="02"><svg viewBox="0 0 100 100"><path d="M20 12 L80 88 M80 12 L20 88" stroke="#272823" strokeWidth="4"/><circle cx="50" cy="50" r="28" fill="none" stroke="#96968b" strokeWidth="2"/></svg></ScoreTile>
              <ScoreTile n="03"><KeyboardStudy/></ScoreTile>
              <ScoreTile n="04"><svg viewBox="0 0 100 100"><path d="M50 10 C30 27 18 45 24 68 C28 87 72 87 76 68 C82 45 70 27 50 10Z" fill="#343630"/><circle cx="50" cy="54" r="15" fill="#c8c5b8"/></svg></ScoreTile>
              <ScoreTile n="05"><AcousticGuitar className="tile-mini-guitar"/></ScoreTile>
              <ScoreTile n="06"><svg viewBox="0 0 100 100"><path d="M14 28 H86 M14 40 H86 M14 52 H86 M14 64 H86" stroke="#55564f" strokeWidth="2"/><path d="M30 20 V77 M62 20 V77" stroke="#222" strokeWidth="3"/></svg></ScoreTile>
              <ScoreTile n="07"><svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="36" fill="#282a26"/><circle cx="50" cy="50" r="10" fill="#b8b6aa"/><circle cx="50" cy="50" r="30" fill="none" stroke="#b8b6aa" strokeDasharray="1 4" strokeWidth="3"/></svg></ScoreTile>
              <ScoreTile n="08"><svg viewBox="0 0 100 100"><path d="M12 75 Q32 10 52 75 T92 75" fill="none" stroke="#242620" strokeWidth="4"/><path d="M12 83 H92" stroke="#8a8b80"/></svg></ScoreTile>
              <ScoreTile n="09"><svg viewBox="0 0 100 100"><path d="M28 18 V77 M28 18 L70 12 V70" stroke="#20211d" strokeWidth="5"/><ellipse cx="18" cy="77" rx="13" ry="8" fill="#222"/><ellipse cx="60" cy="70" rx="13" ry="8" fill="#222"/></svg></ScoreTile>
            </div>
            <div className="social-copy">
              <div className="social-instagram"><Instagram size={16}/><span>Follow the notes</span></div>
              <p>Little things add up: a new chord, a familiar melody, a song played all the way through. This is where the practice happens — one note at a time.</p>
              <a href="#contact" className="social-button">COME MAKE MUSIC <ArrowUpRight size={13}/></a>
            </div>
            <div className="social-guitar"><ElectricGuitar/><span>MAKE IT YOURS.</span></div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-heading"><span>05 / SAY HELLO</span><h2>Let's talk music.</h2></div>
          <div className="contact-grid">
            <div className="contact-intro"><p>Have a question about lessons, timings or fees? Send a note and we'll help you find the right place to begin.</p><a href={"tel:+"+phone}><Phone size={15}/> +91 90286 71906</a><a href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={15}/> WhatsApp us</a></div>
            <form className="enquiry-form" onSubmit={submit}>
              <label>Name<input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Your name"/></label>
              <label>Phone<input required type="tel" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} placeholder="+91"/></label>
              <label>Interested in<select value={form.interest} onChange={e=>setForm({...form,interest:e.target.value})}><option>Acoustic guitar</option><option>Keyboard</option><option>Piano</option><option>Vocals</option><option>Not sure yet</option></select></label>
              <label>Message<textarea rows="2" value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="What would you like to learn?"/></label>
              <button type="submit"><span>{sent?"OPEN WHATSAPP":"SEND ENQUIRY"}</span><Send size={14}/></button>
              <small>Your message opens in WhatsApp. No information is stored on this website.</small>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-strings" aria-hidden="true"><svg viewBox="0 0 1400 240" preserveAspectRatio="none"><path d="M0 40 Q350 100 700 20 T1400 80"/><path d="M0 75 Q350 135 700 55 T1400 115"/><path d="M0 110 Q350 170 700 90 T1400 150"/><path d="M0 145 Q350 205 700 125 T1400 185"/></svg></div>
        <div className="footer-main"><div className="footer-brand"><span className="brand-mark">M</span><span>NAVEEN'S MUSICAL CLASS</span></div><div className="footer-contact"><a href={"tel:+"+phone}>+91 90286 71906</a><a href={whatsapp} target="_blank" rel="noreferrer">WHATSAPP <ArrowUpRight size={12}/></a><a href="#home">BACK TO TOP ↑</a></div></div>
        <div className="footer-bottom"><span>© 2026 NAVEEN'S MUSICAL CLASS</span><span>LEARN · LISTEN · PLAY</span><span>PUNE / INDIA</span></div>
      </footer>
      <a className="whatsapp-float" href={whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp Naveen's Musical Class"><MessageCircle size={16}/><span>WHATSAPP</span></a>
    </div>
  );
}

export default App;
