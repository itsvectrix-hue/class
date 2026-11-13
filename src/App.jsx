import React, { useState } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, Check, Clock3, Guitar, Headphones, Menu, Music2, Piano, Play, Send, Sparkles, X } from "lucide-react";
import {
  AnimatedContent, Aurora, BlurText, ClickSpark, CountUp, CircularText, DecryptedText, Dither,
  DotGrid, FadeContent, FlexCarousel, GradientAscii, GradientText, Grainient, GridDistortion,
  LetterGlitch, LightRays, Magnet, Masonry, Orb, Particles, ScrollFloat, ScrollReveal,
  ScrollVelocity, ShinyText, SpotlightCard, SplitText, TextType, Threads, TiltedCard, Waves
} from "./components/ReactBits";

const phone = "919028671906";
const whatsapp = "https://wa.me/" + phone;
const courses = [
  { n: "01", title: "Acoustic Guitar", detail: "Chords, rhythm, fingerstyle and songs you love.", icon: "guitar", tag: "START HERE" },
  { n: "02", title: "Keyboard", detail: "Build coordination, music reading and melody.", icon: "keys", tag: "ALL LEVELS" },
  { n: "03", title: "Piano", detail: "Technique, expression and a strong musical foundation.", icon: "piano", tag: "FOUNDATIONS" },
  { n: "04", title: "Vocals", detail: "Pitch, breath, confidence and finding your voice.", icon: "voice", tag: "FIND YOUR VOICE" }
];
const gallery = [
  { src: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1100&q=85", alt: "Acoustic guitar in a warm studio", cls: "gallery-tall" },
  { src: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=900&q=85", alt: "Piano keys in soft light", cls: "" },
  { src: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=900&q=85", alt: "Music recording studio", cls: "" },
  { src: "https://images.unsplash.com/photo-1524366322-6b5c3b7c7b6d?auto=format&fit=crop&w=1100&q=85", alt: "Musician performing on stage", cls: "gallery-wide" }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", interest: "Acoustic Guitar", message: "" });
  const nav = ["About", "Courses", "Timings & Fees", "Gallery", "Contact"];
  const submit = (e) => {
    e.preventDefault();
    const message = "Hello Naveen's Musical Class!%0A%0AName: " + encodeURIComponent(form.name) +
      "%0APhone: " + encodeURIComponent(form.phone) + "%0AInterested in: " + encodeURIComponent(form.interest) +
      "%0AMessage: " + encodeURIComponent(form.message || "Please share course details.");
    setSent(true);
    window.open(whatsapp + "?text=" + message, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="site-shell">
      <div className="top-note"><span className="live-dot" /> MUSIC IS FOR EVERYONE <span className="top-note-right">PUNE · INDIA</span></div>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Naveen's Musical Class home"><span className="brand-mark">N<span>.</span></span><span className="brand-name">NAVEEN'S<br/><small>MUSICAL CLASS</small></span></a>
        <nav className={menuOpen ? "main-nav open" : "main-nav"} aria-label="Main navigation">
          {nav.map((item) => <a key={item} href={"#" + item.toLowerCase().replaceAll(" ", "-").replace("&-", "")} onClick={() => setMenuOpen(false)}>{item}</a>)}
          <a className="nav-cta" href="#contact">BOOK A TRIAL <ArrowUpRight size={14}/></a>
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"}>{menuOpen ? <X/> : <Menu/>}</button>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-bg"><GradientAscii/><Aurora/><Grainient/><Particles count={24}/><LightRays/></div>
          <div className="hero-meta"><span>EST. FOR THE LOVE OF MUSIC</span><span>01 — 05 / THE EXPERIENCE</span></div>
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-line"/> YOUR FIRST NOTE STARTS HERE</p>
            <AnimatedContent><h1><span className="hero-line"><SplitText>MAKE</SplitText></span><span className="hero-line hero-line-outline"><DecryptedText>YOUR</DecryptedText></span><span className="hero-line"><GradientText>MUSIC.</GradientText></span></h1></AnimatedContent>
            <div className="hero-bottom">
              <div className="hero-description"><FadeContent><BlurText><TextType>Learn an instrument. Find your rhythm. Discover what you can create.</TextType></BlurText></FadeContent></div>
              <div className="hero-actions"><Magnet><ClickSpark><a className="button button-light" href="#courses"><ShinyText>EXPLORE CLASSES</ShinyText> <ArrowUpRight size={16}/></a></ClickSpark></Magnet><a className="text-link" href="#about">OUR APPROACH <ArrowDown size={14}/></a></div>
            </div>
          </div>
          <div className="hero-visual">
            <GridDistortion><Dither><img src="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1500&q=90" alt="Acoustic guitar ready to play" /></Dither></GridDistortion>
            <div className="image-stamp"><CircularText text="LEARN • PLAY • CREATE • "/><span>01</span></div>
            <div className="hero-image-caption"><span>THE BEAUTY OF BEGINNING</span><span>GUITAR / KEYS / VOICE</span></div>
          </div>
          <div className="hero-scroll"><span>SCROLL TO EXPLORE</span><span className="scroll-line"/></div>
          <div className="hero-index">NMC — 2026</div>
        </section>

        <section className="intro section-pad" id="about">
          <div className="section-kicker"><span>01 / ABOUT US</span><span>THE JOURNEY BEGINS WITH ONE NOTE</span></div>
          <div className="intro-grid">
            <div><h2 className="display-heading">A place to<br/><em>find your sound.</em></h2></div>
            <div className="intro-text">
              <ScrollReveal><p className="lead">Music is not about being perfect. It's about showing up, listening closely, and enjoying every little breakthrough.</p></ScrollReveal>
              <ScrollReveal><p>At Naveen's Musical Class, learning is a personal journey. Whether you're picking up an instrument for the first time or building on what you already know, take it one note at a time.</p></ScrollReveal>
              <a className="under-link" href="#contact">GET TO KNOW THE CLASS <ArrowUpRight size={15}/></a>
            </div>
          </div>
          <div className="stats-row">
            <ScrollFloat><div className="stat"><strong><CountUp to={4} suffix="+" /></strong><span>WAYS TO MAKE MUSIC</span></div>
            <div className="stat"><strong><CountUp to={1} /></strong><span>NOTE AT A TIME</span></div></ScrollFloat>
            <div className="stat stat-quote"><span>OUR PHILOSOPHY</span><p>Practice with purpose.<br/>Play with joy.</p></div>
          </div>
        </section>

        <section className="courses section-pad" id="courses">
          <div className="section-kicker"><span>02 / WHAT YOU CAN LEARN</span><span>CHOOSE YOUR INSTRUMENT</span></div>
          <div className="section-heading-row"><h2 className="display-heading">Find your<br/><em>instrument.</em></h2><p>Start with curiosity. We'll help you build the skills, confidence and consistency to keep going.</p></div>
          <div className="course-grid">
            {courses.map((course) => <SpotlightCard className="course-card" key={course.n}>
              <div className="course-top"><span>{course.n} / 04</span><span className="course-tag">{course.tag}</span></div>
              <div className="course-icon">{course.icon === "guitar" ? <Guitar/> : course.icon === "keys" ? <Music2/> : course.icon === "piano" ? <Piano/> : <Headphones/>}</div>
              <h3>{course.title}</h3><p>{course.detail}</p>
              <a href="#contact" aria-label={"Enquire about " + course.title}><ArrowUpRight/></a>
            </SpotlightCard>)}
          </div>
          <div className="courses-foot"><span>NOT SURE WHERE TO START?</span><a href="#contact">TELL US WHAT YOU LOVE LISTENING TO <ArrowUpRight size={15}/></a></div>
        </section>

        <section className="manifesto">
          <div className="manifesto-bg"><DotGrid/><Threads/><Orb/></div>
          <div className="manifesto-inner">
            <p className="eyebrow"><span className="eyebrow-line"/> THE WAY WE LEARN</p>
            <h2><span>LESS SCROLL.</span><br/><em>MORE SOUL.</em></h2>
            <p className="manifesto-note">A little practice, a lot of curiosity, and the freedom to make it your own.</p>
            <CircularText text="PRACTICE • EXPLORE • REPEAT • "/>
          </div>
          <ScrollVelocity className="manifesto-marquee">MAKE SOME NOISE · FIND YOUR RHYTHM ·</ScrollVelocity>
        </section>

        <section className="schedule section-pad" id="timings-fees">
          <div className="section-kicker"><span>03 / PLAN YOUR PRACTICE</span><span>TIME WELL SPENT</span></div>
          <div className="schedule-grid">
            <div><h2 className="display-heading">Make room<br/>for <em>music.</em></h2><p className="schedule-intro">The best class is one that fits your life. Get in touch to find the right batch and a fee plan for your learning goals.</p><a className="button button-dark" href={whatsapp + "?text=Hello%2C%20please%20share%20class%20timings%20and%20fees."} target="_blank" rel="noreferrer">ASK ABOUT BATCHES <ArrowUpRight size={16}/></a></div>
            <FlexCarousel className="schedule-panel">
              <div className="schedule-item"><div className="schedule-icon"><Clock3/></div><div><span>CLASS TIMINGS</span><h3>Flexible batches</h3><p>Ask about current weekday and weekend availability.</p></div><ArrowUpRight className="schedule-arrow"/></div>
              <div className="schedule-item"><div className="schedule-icon"><Music2/></div><div><span>COURSE FEES</span><h3>Made clear, upfront</h3><p>Fees depend on the instrument and class plan. Contact us for details.</p></div><ArrowUpRight className="schedule-arrow"/></div>
              <div className="schedule-item"><div className="schedule-icon"><Sparkles/></div><div><span>NEW TO MUSIC?</span><h3>Let's find your starting point</h3><p>Tell us what you'd like to learn and we'll guide you from there.</p></div><ArrowUpRight className="schedule-arrow"/></div>
            </div>
          </div>
        </section>

        <section className="gallery-section section-pad" id="gallery">
          <div className="section-kicker"><span>04 / A FEEL FOR THE MUSIC</span><span>INSTRUMENTS · MOMENTS · MOVEMENT</span></div>
          <div className="section-heading-row"><h2 className="display-heading">In the<br/><em>moment.</em></h2><p>A glimpse into the world of music. Your own story could be the next one we share.</p></div>
          <Masonry className="gallery-grid">
            {gallery.map((item, i) => <TiltedCard className={"gallery-item " + item.cls} key={item.src}><img src={item.src} alt={item.alt} loading="lazy"/><span>0{i+1} / 04</span></TiltedCard>)}
          </Masonry>
          <div className="gallery-caption"><LetterGlitch>GOOD MUSIC. GOOD ENERGY.</LetterGlitch><span>THE BEST PART IS WHAT COMES NEXT.</span></div>
        </section>

        <section className="contact-section section-pad" id="contact">
          <div className="contact-bg"><Waves/><Grainient/></div>
          <div className="section-kicker"><span>05 / LET'S TALK</span><span>YOUR NEXT CHAPTER STARTS HERE</span></div>
          <div className="contact-grid">
            <div className="contact-copy"><p className="eyebrow"><span className="eyebrow-line"/> HAVE A QUESTION?</p><h2 className="display-heading">Let's make<br/><em>some music.</em></h2><p>Tell us what you'd like to learn. We'll get back to you with the details.</p>
              <div className="contact-direct"><a href={"tel:+" + phone}><span>CALL US</span><strong>+91 90286 71906</strong><ArrowUpRight/></a><a href={whatsapp} target="_blank" rel="noreferrer"><span>WHATSAPP</span><strong>Start a conversation</strong><ArrowUpRight/></a></div>
            </div>
            <form className="enquiry-form" onSubmit={submit}>
              <div className="form-heading"><span>ENQUIRY FORM</span><span>WE'D LOVE TO HEAR FROM YOU</span></div>
              <label>Your name<input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Name"/></label>
              <label>Phone number<input required type="tel" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} placeholder="+91"/></label>
              <label>What would you like to learn?<select value={form.interest} onChange={e=>setForm({...form,interest:e.target.value})}>{courses.map(c=><option key={c.title}>{c.title}</option>)}<option>Not sure yet</option></select></label>
              <label>Anything else? <textarea rows="3" value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="Tell us a little about your musical goals..."/></label>
              <button className="button button-dark form-submit" type="submit"><span>{sent ? "OPEN WHATSAPP AGAIN" : "SEND ENQUIRY"}</span><Send size={15}/></button>
              <small className="form-note"><Check size={12}/> Your enquiry opens in WhatsApp so we can reply directly.</small>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-top"><a className="brand footer-brand" href="#home"><span className="brand-mark">N<span>.</span></span><span className="brand-name">NAVEEN'S<br/><small>MUSICAL CLASS</small></span></a><p>Find your sound.<br/><em>Make it yours.</em></p><a className="back-top" href="#home">BACK TO TOP <ArrowUpRight size={15}/></a></div>
        <div className="footer-bottom"><span>© 2026 NAVEEN'S MUSICAL CLASS</span><span>MADE FOR THE LOVE OF MUSIC</span><a href={whatsapp} target="_blank" rel="noreferrer">WHATSAPP <ArrowUpRight size={12}/></a></div>
      </footer>
      <a className="whatsapp-float" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Chat with us on WhatsApp"><span className="wa-symbol">◉</span><span>LET'S CHAT</span></a>
    </div>
  );
}

export default App;
