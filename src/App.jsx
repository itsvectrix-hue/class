import React, { useState } from "react";
import { ArrowDownRight, ArrowUpRight, ArrowRight, Clock3, Guitar, Menu, Music2, Piano, X, Phone, MessageCircle, Send } from "lucide-react";
import { SplitText, ScrollReveal, Magnet, ScrollFloat, CircularText } from "./components/ReactBits";

const phone = "919028671906";
const whatsapp = "https://wa.me/" + phone;
const instruments = [
  { number: "01", name: "Acoustic guitar", note: "Chords, rhythm, fingerstyle and the songs you love." },
  { number: "02", name: "Keyboard", note: "Melody, coordination and a foundation in music." },
  { number: "03", name: "Piano", note: "Technique, expression and confident playing." },
  { number: "04", name: "Vocals", note: "Pitch, breath, listening and finding your voice." }
];

function GuitarArtwork() {
  return (
    <svg className="guitar-art" viewBox="0 0 620 720" role="img" aria-label="Original line illustration of an acoustic guitar">
      <defs>
        <pattern id="paperGrain" width="7" height="7" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r=".45" fill="#1a1a1a" opacity=".16"/></pattern>
      </defs>
      <path d="M340 30 C500 65 595 195 570 350 C550 480 485 610 350 675 C220 737 80 630 58 492 C38 365 104 245 205 155 C245 120 285 77 340 30Z" fill="#e7e9df"/>
      <path d="M340 30 C500 65 595 195 570 350 C550 480 485 610 350 675 C220 737 80 630 58 492 C38 365 104 245 205 155 C245 120 285 77 340 30Z" fill="url(#paperGrain)"/>
      <g transform="translate(38 5) rotate(13 310 350)">
        <path d="M292 105 C278 81 282 53 305 31 C328 9 361 13 381 37 C399 60 395 89 380 111 L372 205 L388 297 C404 336 456 348 466 408 C478 483 438 542 375 557 C322 570 269 550 246 514 C216 469 233 410 261 376 C282 350 298 340 302 302 L294 205Z" fill="#a2aa91" stroke="#1a1a1a" strokeWidth="2.4"/>
        <path d="M303 34 C323 13 355 12 378 36 L367 203 L310 203Z" fill="#252823" stroke="#1a1a1a" strokeWidth="2"/>
        <path d="M307 203 L370 203 L379 350 L299 350Z" fill="#30352e" stroke="#1a1a1a" strokeWidth="2"/>
        {Array.from({length:13},(_,i)=><path key={i} d={"M304 " + (215+i*10.5) + " L375 " + (215+i*10.5)} stroke="#b3b7a8" strokeWidth="1.2"/>)}
        <path d="M302 31 L300 5 L385 5 L382 34" fill="#252823" stroke="#1a1a1a" strokeWidth="2"/>
        {Array.from({length:6},(_,i)=><g key={i}><path d={"M" + (309+i*12) + " 8 L" + (309+i*12) + " 514"} stroke="#e8e6da" strokeWidth={i===2||i===3?1.6:1} opacity=".92"/><circle cx={308+i*13} cy="21" r="4" fill="#c7c7b8" stroke="#252823"/><circle cx={308+i*13} cy="514" r="2" fill="#d7d5c7"/></g>)}
        <path d="M257 405 C278 375 312 364 340 373 C378 385 399 418 400 455 C402 497 370 529 331 529 C285 529 246 497 244 455 C243 435 248 418 257 405Z" fill="#d6d7cb" stroke="#1a1a1a" strokeWidth="2"/>
        <circle cx="327" cy="452" r="54" fill="#33382f" stroke="#1a1a1a" strokeWidth="2.5"/>
        <circle cx="327" cy="452" r="44" fill="#1b1d19" stroke="#c7c8b8" strokeWidth="2"/>
        <circle cx="327" cy="452" r="34" fill="#252a23"/>
        <path d="M299 514 L355 514 L359 526 L294 526Z" fill="#252823"/>
        <path d="M291 536 Q327 545 363 536" fill="none" stroke="#d7d4c6" strokeWidth="3"/>
        <path d="M250 436 Q235 447 245 464 M402 436 Q417 447 400 465" fill="none" stroke="#c7c8b8" strokeWidth="2"/>
      </g>
      <g fill="#4a5d4e" fontFamily="DM Mono, monospace" fontSize="10" letterSpacing="2">
        <text x="34" y="630">A SOUND OF YOUR OWN</text>
        <text x="450" y="82">Nº 01</text>
      </g>
      <path d="M30 608 H170" stroke="#4a5d4e" strokeWidth="1"/>
    </svg>
  );
}

function KeyboardArtwork() {
  return (
    <svg className="keyboard-art" viewBox="0 0 560 230" role="img" aria-label="Original illustration of piano keys">
      <rect x="10" y="12" width="540" height="206" rx="2" fill="#e3e5da"/>
      <path d="M30 34 H530" stroke="#4a5d4e" strokeWidth="1"/>
      {Array.from({length:14},(_,i)=><rect key={i} x={30+i*35.7} y="45" width="35.7" height="150" fill={i%2===0?"#faf9f5":"#f0eee7"} stroke="#1a1a1a" strokeWidth=".8"/>)}
      {Array.from({length:13},(_,i)=>![2,6,9].includes(i%7)?<rect key={i} x={55+i*35.7} y="45" width="22" height="88" fill="#1a1a1a"/>:null)}
      <text x="30" y="30" fill="#4a5d4e" fontSize="9" fontFamily="DM Mono" letterSpacing="2">A SMALL STUDY IN NOTES</text>
      <text x="442" y="211" fill="#4a5d4e" fontSize="8" fontFamily="DM Mono">88 KEYS / INFINITE IDEAS</text>
    </svg>
  );
}

function ScoreArtwork() {
  return (
    <svg className="score-art" viewBox="0 0 380 380" role="img" aria-label="Original music notation and hand-drawn sound marks">
      <rect x="15" y="15" width="350" height="350" fill="#eeeee7"/>
      <g stroke="#4a5d4e" opacity=".45" strokeWidth="1">{Array.from({length:5},(_,i)=><path key={i} d={\`M52 \${120+i*14} H330\`}/>)}</g>
      <g fill="#1a1a1a">
        <ellipse cx="92" cy="162" rx="10" ry="6" transform="rotate(-18 92 162)"/><path d="M101 161 V83" stroke="#1a1a1a" strokeWidth="2"/>
        <ellipse cx="151" cy="133" rx="10" ry="6" transform="rotate(-18 151 133)"/><path d="M160 132 V55" stroke="#1a1a1a" strokeWidth="2"/>
        <ellipse cx="225" cy="150" rx="10" ry="6" transform="rotate(-18 225 150)"/><path d="M234 149 V76" stroke="#1a1a1a" strokeWidth="2"/>
        <ellipse cx="283" cy="119" rx="10" ry="6" transform="rotate(-18 283 119)"/><path d="M292 118 V44" stroke="#1a1a1a" strokeWidth="2"/>
      </g>
      <path d="M65 248 C120 206 170 295 222 245 S300 223 318 260" stroke="#a3aa95" strokeWidth="4" fill="none" strokeLinecap="round"/>
      <text x="52" y="320" fill="#4a5d4e" fontSize="9" fontFamily="DM Mono" letterSpacing="2">FOLLOW THE FEELING</text>
    </svg>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", interest: "Acoustic guitar", message: "" });
  const nav = [{label:"About",href:"#about"},{label:"Lessons",href:"#courses"},{label:"Timings & fees",href:"#timings-fees"},{label:"Gallery",href:"#gallery"},{label:"Contact",href:"#contact"}];
  const submit = (e) => {
    e.preventDefault();
    const body = [
      "Hello Naveen's Musical Class!",
      "",
      "Name: " + form.name,
      "Phone: " + form.phone,
      "Interested in: " + form.interest,
      "Message: " + (form.message || "Please share class details.")
    ].join("\n");
    setSent(true);
    window.open(whatsapp + "?text=" + encodeURIComponent(body), "_blank", "noopener,noreferrer");
  };

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Naveen's Musical Class home">
          <span className="brand-symbol">n<span>.</span></span>
          <span className="brand-copy">NAVEEN'S <small>MUSICAL CLASS</small></span>
        </a>
        <nav className={menuOpen ? "main-nav open" : "main-nav"} aria-label="Main navigation">
          {nav.map(item=><a href={item.href} key={item.label} onClick={()=>setMenuOpen(false)}>{item.label}</a>)}
          <a className="nav-contact" href="#contact" onClick={()=>setMenuOpen(false)}>Enquire <ArrowUpRight size={14}/></a>
        </nav>
        <button className="menu-toggle" onClick={()=>setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"}>{menuOpen?<X/>:<Menu/>}</button>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-aside"><span>INDEPENDENT MUSIC LEARNING</span><span>PUNE, INDIA&nbsp; / &nbsp;EST. 2026</span></div>
          <div className="hero-main">
            <div className="hero-copy">
              <p className="eyebrow"><span/> LESSONS FOR THE LOVE OF IT</p>
              <h1><SplitText>A little more</SplitText><br/><em>music</em> in your life.</h1>
              <p className="hero-intro">Find your rhythm, learn an instrument, and make space for something that stays with you.</p>
              <div className="hero-actions">
                <Magnet><a className="button button-dark" href="#courses">Explore lessons <ArrowUpRight size={16}/></a></Magnet>
                <a className="quiet-link" href="#about">A little about us <ArrowDownRight size={15}/></a>
              </div>
            </div>
            <div className="hero-art-wrap">
              <div className="art-note art-note-top">NO. 01 <span>STRING STUDY</span></div>
              <ScrollFloat><GuitarArtwork/></ScrollFloat>
              <div className="hero-art-seal"><CircularText text="LEARN • LISTEN • PLAY • "/><span>♪</span></div>
              <div className="art-note art-note-bottom">SIX STRINGS.<br/>ENDLESS WAYS TO BEGIN.</div>
            </div>
          </div>
          <div className="hero-foot"><span>START WHERE YOU ARE.</span><span className="foot-rule"/><a href="#about">SCROLL TO EXPLORE <ArrowDownRight size={13}/></a></div>
        </section>

        <section className="about-section section-pad" id="about">
          <div className="section-label"><span>01</span><span>THE CLASS</span></div>
          <div className="about-layout">
            <div className="about-heading"><h2>It starts with<br/><em>a sound.</em></h2><span className="hand-mark">and grows from there ↗</span></div>
            <div className="about-copy">
              <ScrollReveal><p className="about-lead">Music gives you a way to slow down, pay attention, and say something without words.</p></ScrollReveal>
              <ScrollReveal><p>At Naveen's Musical Class, the aim is simple: make learning welcoming, practical and full of discovery. Whether this is your first lesson or the next step in your musical journey, there's room to find your own pace.</p></ScrollReveal>
              <a className="inline-link" href="#contact">Meet us through a conversation <ArrowUpRight size={15}/></a>
            </div>
          </div>
          <div className="about-bottom"><span>NO AUDITION REQUIRED.</span><span>JUST CURIOSITY, AND A LITTLE PRACTICE.</span></div>
        </section>

        <section className="lessons-section section-pad" id="courses">
          <div className="section-label"><span>02</span><span>FIND YOUR INSTRUMENT</span></div>
          <div className="lessons-heading"><h2>What would you<br/><em>like to play?</em></h2><p>Four ways in. A whole world to explore.</p></div>
          <div className="instrument-list">
            {instruments.map((item,i)=><a className="instrument-row" href="#contact" key={item.number}>
              <span className="instrument-number">{item.number}</span>
              <span className="instrument-name">{item.name}<small>{item.note}</small></span>
              <span className="instrument-mark">{i===0?<Guitar/>:i===1?<Music2/>:i===2?<Piano/>:<span className="voice-mark">♫</span>}</span>
              <ArrowUpRight className="instrument-arrow" size={19}/>
            </a>)}
          </div>
          <div className="lessons-endnote"><span>NOT SURE YET?</span><a href="#contact">TELL US WHAT YOU LISTEN TO. WE'LL TAKE IT FROM THERE <ArrowRight size={14}/></a></div>
        </section>

        <section className="interlude">
          <div className="interlude-art"><KeyboardArtwork/><span>THE SPACE BETWEEN THE NOTES MATTERS, TOO.</span></div>
          <div className="interlude-copy">
            <p className="eyebrow"><span/> A PRACTICE, NOT A PERFORMANCE</p>
            <h2>Play it<br/><em>your way.</em></h2>
            <p>Small wins count. Repeating a tricky bar counts. Playing a song just because it makes you happy counts most of all.</p>
            <a className="interlude-link" href="#timings-fees">How classes work <ArrowUpRight size={15}/></a>
          </div>
          <div className="interlude-ornament">♪</div>
        </section>

        <section className="schedule-section section-pad" id="timings-fees">
          <div className="section-label"><span>03</span><span>MAKE A LITTLE ROOM</span></div>
          <div className="schedule-layout">
            <div className="schedule-heading"><h2>Good things<br/>take <em>practice.</em></h2><p>Let's find a class time that fits around the rest of your life.</p><a className="button button-outline" href={whatsapp+"?text="+encodeURIComponent("Hello, please share the current class timings and fees.")} target="_blank" rel="noreferrer">Ask about timings <ArrowUpRight size={15}/></a></div>
            <div className="schedule-details">
              <div className="detail-line"><span className="detail-index">A.</span><div><span className="detail-kicker">CLASS TIMINGS</span><h3>Flexible batches</h3><p>Ask about current weekday and weekend availability.</p></div><Clock3/></div>
              <div className="detail-line"><span className="detail-index">B.</span><div><span className="detail-kicker">COURSE FEES</span><h3>Clear from the start</h3><p>Fees vary by instrument and class plan. We'll share the current details directly.</p></div><span className="detail-symbol">₹</span></div>
              <div className="schedule-footnote">A QUICK MESSAGE IS ALL IT TAKES TO GET STARTED.</div>
            </div>
          </div>
        </section>

        <section className="gallery-section section-pad" id="gallery">
          <div className="section-label"><span>04</span><span>NOTES FROM THE STUDIO</span></div>
          <div className="gallery-layout">
            <div className="gallery-title"><h2>A life with<br/><em>music in it.</em></h2><p>Instruments, patterns, and the little details that make a sound yours.</p></div>
            <div className="gallery-artwork">
              <div className="gallery-sheet"><ScoreArtwork/><span>STUDY Nº 04 — IN PROGRESS</span></div>
              <div className="gallery-quote"><span>“</span><p>Every song begins<br/>with one note.</p><small>KEEP GOING.</small></div>
            </div>
          </div>
          <div className="gallery-bottom"><span>THE NEXT NOTE IS YOURS.</span><a href="#contact">COME MAKE IT <ArrowUpRight size={14}/></a></div>
        </section>

        <section className="contact-section section-pad" id="contact">
          <div className="section-label"><span>05</span><span>YOUR FIRST STEP</span></div>
          <div className="contact-layout">
            <div className="contact-copy"><p className="eyebrow"><span/> LET'S START WITH HELLO</p><h2>Let's make<br/><em>some music.</em></h2><p>Tell us what you'd like to learn. We'll help you figure out the next step.</p>
              <div className="direct-contact">
                <a href={"tel:+"+phone}><Phone size={16}/><span><small>CALL NAVEEN</small>+91 90286 71906</span><ArrowUpRight size={15}/></a>
                <a href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={16}/><span><small>WHATSAPP</small>Start a conversation</span><ArrowUpRight size={15}/></a>
              </div>
            </div>
            <form className="enquiry-form" onSubmit={submit}>
              <p className="form-intro">A NOTE TO US</p>
              <label>Your name<input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="How should we call you?"/></label>
              <label>Phone number<input required type="tel" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} placeholder="+91"/></label>
              <label>I'm interested in<select value={form.interest} onChange={e=>setForm({...form,interest:e.target.value})}>{instruments.map(item=><option key={item.number}>{item.name}</option>)}<option>Not sure yet</option></select></label>
              <label>Anything you'd like us to know<textarea rows="3" value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="Your musical curiosity starts here..."/></label>
              <button className="form-submit" type="submit"><span>{sent?"OPEN WHATSAPP AGAIN":"SEND YOUR ENQUIRY"}</span><Send size={16}/></button>
              <small className="form-note">This opens a message in WhatsApp. No information is stored on this website.</small>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main"><a className="brand footer-brand" href="#home"><span className="brand-symbol">n<span>.</span></span><span className="brand-copy">NAVEEN'S <small>MUSICAL CLASS</small></span></a><p>Find your sound.<br/><em>Make it yours.</em></p><a href="#home" className="back-top">BACK TO TOP <ArrowUpRight size={14}/></a></div>
        <div className="footer-meta"><span>© 2026 NAVEEN'S MUSICAL CLASS</span><span>MADE FOR THE LOVE OF MUSIC</span><a href={whatsapp} target="_blank" rel="noreferrer">SAY HELLO ON WHATSAPP <ArrowUpRight size={12}/></a></div>
      </footer>
      <a className="whatsapp-float" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Message Naveen's Musical Class on WhatsApp"><MessageCircle size={17}/><span>WHATSAPP</span></a>
    </div>
  );
}

export default App;
