import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight, Check, ChevronDown, Guitar, House, Mail, Menu, Mic2, Music2, Piano, Drum, X, MessageCircle } from "lucide-react";

const EMAIL = "tonexa.music.acadmy@gmail.com";
const WHATSAPP = "919028671906";
const WHATSAPP_LABEL = "+91 90286 71906";
const photo = (id, width = 900) => "https://images.unsplash.com/" + id + "?auto=format&fit=crop&w=" + width + "&q=78&fm=webp";

const instruments = [
  { name:"Keyboard", description:"Build a foundation in melody, chords and rhythm.", image:photo("photo-1756412959941-cbe4b24fa542"), alt:"Piano keyboard", position:"center 57%", icon:Piano },
  { name:"Guitar", description:"Learn chords, strumming and songs you enjoy.", image:photo("photo-1647265194908-6815badcc397"), alt:"Acoustic guitar", position:"center 48%", icon:Guitar },
  { name:"Drums", description:"Develop timing, coordination and a steady groove.", image:photo("photo-1715210355452-59514bfe00ba"), alt:"Drum kit in a music studio", position:"center 50%", icon:Drum },
  { name:"Conga", description:"Explore hand percussion, tones and rhythm.", image:"https://images.pexels.com/photos/31177554/pexels-photo-31177554.jpeg?auto=compress&cs=tinysrgb&w=1000", alt:"Conga and hand percussion drums", position:"center 54%", icon:Drum },
  { name:"Vocals", description:"Work on pitch, breathing and expression.", image:photo("photo-1671163700597-160e18736a4b"), alt:"Singer recording vocals at a studio microphone", position:"center 48%", icon:Mic2 },
];

const faqs = [
  { question:"Where do lessons take place?", answer:"Tonexa Music Academy offers home tuition only. Lessons are arranged at the student's home, subject to availability in the area." },
  { question:"Which instruments can I ask about?", answer:"You can enquire about keyboard, guitar, drums, conga and vocals. Select your preferred option in the enquiry form." },
  { question:"How do I check availability?", answer:"Send an enquiry with your area and the instrument you are interested in. The academy can confirm availability and share the next steps directly." },
  { question:"How do I get in touch?", answer:"Use the enquiry form, email tonexa.music.acadmy@gmail.com or message +91 90286 71906 on WhatsApp." },
];

function Reveal({ children, className = "" }) {
  const ref = useRef(null);
  useEffect(() => {
    const node = ref.current;
    if (!node || !("IntersectionObserver" in window)) { node?.classList.add("is-visible"); return undefined; }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { node.classList.add("is-visible"); observer.unobserve(node); }
    }, { threshold:0.12, rootMargin:"0px 0px -32px 0px" });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={"reveal " + className}>{children}</div>;
}

function Brand({ light = false }) {
  return <a className={"brand" + (light ? " brand-light" : "")} href="#home" aria-label="Tonexa Music Academy home">
    <img src="/tonexa-mark.svg" alt="" width="38" height="38" />
    <span className="brand-copy"><strong>TONEXA</strong><small>MUSIC ACADEMY</small></span>
  </a>;
}

function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const close = (event) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);
  const closeMenu = () => setOpen(false);
  return <header className="site-header">
    <div className="header-inner">
      <Brand />
      <button className="menu-toggle" type="button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="site-navigation" onClick={() => setOpen(value => !value)}>
        {open ? <X size={23} /> : <Menu size={23} />}
      </button>
      <nav id="site-navigation" className={"main-nav" + (open ? " is-open" : "")} aria-label="Main navigation">
        <a href="#home" onClick={closeMenu}>Home</a><a href="#instruments" onClick={closeMenu}>Instruments</a><a href="#about" onClick={closeMenu}>About</a><a href="#faq" onClick={closeMenu}>FAQs</a>
        <a className="nav-contact" href="#contact" onClick={closeMenu}>Enquire <ArrowUpRight size={15} /></a>
      </nav>
    </div>
  </header>;
}

function Hero() {
  return <section className="hero" id="home">
    <div className="hero-content"><Reveal>
      <p className="eyebrow"><span /> MUSIC LESSONS, AT YOUR HOME</p>
      <h1>Find your sound.<br /><em>Learn at home.</em></h1>
      <p className="hero-description">Make space for music in your everyday life. Explore keyboard, guitar, drums, conga and vocal lessons arranged at home.</p>
      <div className="hero-actions">
        <a className="button button-gold" href="#instruments">Explore instruments <ArrowRight size={17} /></a>
        <a className="text-link" href="#contact">Make an enquiry <ArrowUpRight size={16} /></a>
      </div>
      <div className="hero-note"><House size={17} strokeWidth={1.7} /><span>HOME TUITION ONLY</span></div>
    </Reveal></div>
    <div className="hero-visual">
      <img src={photo("photo-1708791783497-ad3ae07f9e69", 1400)} alt="Keyboard and guitar arranged in a recording studio" fetchPriority="high" width="1400" height="934" />
      <div className="hero-photo-caption"><span>TONEXA / 01</span><span>Make music part of your day</span></div>
    </div>
    <div className="hero-bottomline" aria-hidden="true"><span /><span>TONEXA MUSIC ACADEMY</span></div>
  </section>;
}

function InstrumentSection({ onSelect }) {
  return <section className="instrument-section section-pad" id="instruments">
    <div className="section-heading"><Reveal>
      <p className="eyebrow eyebrow-dark">CHOOSE YOUR INSTRUMENT</p>
      <div className="heading-row"><h2>What would you<br /><em>like to play?</em></h2><p>Start with the sound that interests you. Choose an instrument to add it to your enquiry.</p></div>
    </Reveal></div>
    <div className="instrument-grid">
      {instruments.map((item, index) => {
        const Icon = item.icon;
        return <button className="instrument-card" type="button" key={item.name} onClick={() => onSelect(item.name)}>
          <span className="instrument-photo">
            <img src={item.image} alt={item.alt} loading="lazy" width="900" height="1100" style={{ objectPosition:item.position }} />
            <span className="instrument-number">0{index + 1}</span><span className="instrument-arrow"><ArrowUpRight size={19} /></span>
          </span>
          <span className="instrument-name-row"><strong>{item.name}</strong><Icon size={18} strokeWidth={1.6} aria-hidden="true" /></span>
          <span className="instrument-description">{item.description}</span>
        </button>;
      })}
    </div>
  </section>;
}

function AboutSection() {
  return <section className="about-section" id="about">
    <div className="about-photo">
      <img src={photo("photo-1634286051376-940ff8525141", 1100)} alt="Studio microphone with electronic keyboards" loading="lazy" width="1100" height="1958" />
      <span className="photo-label">A SPACE TO START</span>
    </div>
    <div className="about-copy"><Reveal>
      <p className="eyebrow eyebrow-dark">A MORE COMFORTABLE WAY TO LEARN</p>
      <h2>Your home.<br /><em>Your own rhythm.</em></h2>
      <p>Music learning can begin right where you are. Tonexa Music Academy arranges lessons at home, so you can enquire about the instrument you want to learn and check whether tuition is available in your area.</p>
      <a className="underlined-link" href="#contact">Ask about home tuition <ArrowUpRight size={16} /></a>
    </Reveal></div>
  </section>;
}

function HowItWorks() {
  const steps = [
    ["01","Choose an instrument","Pick the sound you would like to explore."],
    ["02","Share your area","Tell us where you would like home tuition."],
    ["03","Confirm the details","The academy will get back to you about availability."],
  ];
  return <section className="steps-section section-pad"><Reveal>
    <p className="eyebrow eyebrow-dark">GETTING STARTED</p>
    <div className="heading-row steps-heading"><h2>Three simple steps.</h2><p>Send an enquiry first. Lesson arrangements and availability are confirmed directly with the academy.</p></div>
  </Reveal>
  <div className="steps-grid">{steps.map(([number,title,description]) => <div className="step" key={number}>
    <span className="step-number">{number}</span><h3>{title}</h3><p>{description}</p>
  </div>)}</div></section>;
}

function FAQ() {
  const [active, setActive] = useState(0);
  return <section className="faq-section section-pad" id="faq">
    <div className="faq-intro"><Reveal>
      <p className="eyebrow eyebrow-dark">A FEW DETAILS</p><h2>Good to<br /><em>know.</em></h2>
      <p>Need something else clarified? Send us a message and ask.</p>
      <a href="#contact" className="underlined-link">Ask a question <ArrowUpRight size={16} /></a>
    </Reveal></div>
    <div className="faq-list">{faqs.map((item,index) => <div className={"faq-item" + (active === index ? " active" : "")} key={item.question}>
      <button type="button" aria-expanded={active === index} aria-controls={"faq-answer-" + index} onClick={() => setActive(active === index ? -1 : index)}>
        <span>{item.question}</span><ChevronDown size={18} />
      </button>
      {active === index && <p id={"faq-answer-" + index}>{item.answer}</p>}
    </div>)}</div>
  </section>;
}

function ContactSection({ selectedInstrument }) {
  const [form,setForm] = useState({name:"",phone:"",instrument:"Keyboard",area:"",message:""});
  useEffect(() => { if (selectedInstrument) setForm(current => ({...current,instrument:selectedInstrument})); },[selectedInstrument]);
  const setField = field => event => setForm(current => ({...current,[field]:event.target.value}));
  const buildMessage = () => [
    "Hello Tonexa Music Academy,","",
    "Name: " + form.name.trim(),
    "Phone: " + (form.phone.trim() || "Not provided"),
    "Interested in: " + form.instrument,
    "Home tuition area: " + form.area.trim(),
    "Message: " + (form.message.trim() || "Please share the lesson details."),
  ].join("\n");
  const submitEmail = event => {
    event.preventDefault();
    const subject = encodeURIComponent("Music lesson enquiry from " + form.name.trim());
    const body = encodeURIComponent(buildMessage());
    window.location.href = "mailto:" + EMAIL + "?subject=" + subject + "&body=" + body;
  };
  const submitWhatsApp = () => {
    const nameInput = document.getElementById("contact-name");
    const areaInput = document.getElementById("contact-area");
    if (!nameInput.checkValidity()) { nameInput.reportValidity(); return; }
    if (!areaInput.checkValidity()) { areaInput.reportValidity(); return; }
    window.open("https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(buildMessage()),"_blank","noopener,noreferrer");
  };
  return <section className="contact-section" id="contact">
    <div className="contact-copy"><Reveal>
      <p className="eyebrow">LET'S TALK MUSIC</p><h2>Ready when<br /><em>you are.</em></h2>
      <p>Tell us what you want to learn and the area where you need home tuition. We’ll get back to you with the next steps.</p>
      <div className="contact-methods">
        <a href={"mailto:" + EMAIL}><Mail size={18} /> {EMAIL}</a>
        <a href={"https://wa.me/" + WHATSAPP} target="_blank" rel="noopener noreferrer"><MessageCircle size={18} /> {WHATSAPP_LABEL}</a>
      </div>
      <div className="contact-home-note"><House size={17} /> HOME TUITION ONLY</div>
    </Reveal></div>
    <div className="contact-form-wrap"><form className="enquiry-form" onSubmit={submitEmail}>
      <div className="form-heading"><span>ENQUIRY FORM</span><span>01 — 05</span></div>
      <label htmlFor="contact-name">Your name</label>
      <input id="contact-name" name="name" value={form.name} onChange={setField("name")} placeholder="Enter your name" autoComplete="name" required />
      <div className="form-row">
        <div><label htmlFor="contact-phone">Phone number <span>Optional</span></label><input id="contact-phone" name="phone" type="tel" value={form.phone} onChange={setField("phone")} placeholder="Your number" autoComplete="tel" /></div>
        <div><label htmlFor="contact-instrument">Instrument</label><select id="contact-instrument" name="instrument" value={form.instrument} onChange={setField("instrument")}>{instruments.map(item => <option key={item.name} value={item.name}>{item.name}</option>)}</select></div>
      </div>
      <label htmlFor="contact-area">Your area</label>
      <input id="contact-area" name="area" value={form.area} onChange={setField("area")} placeholder="City / locality" autoComplete="address-level2" required />
      <label htmlFor="contact-message">Anything else? <span>Optional</span></label>
      <textarea id="contact-message" name="message" value={form.message} onChange={setField("message")} rows="3" placeholder="Tell us a little about what you want to learn" />
      <button className="button button-gold form-submit" type="submit">Send enquiry by email <ArrowUpRight size={17} /></button>
      <button className="button button-outline form-whatsapp" type="button" onClick={submitWhatsApp}>Enquire on WhatsApp <MessageCircle size={17} /></button>
      <p className="form-note">Your message opens in your email app or WhatsApp for you to review and send. No booking is made automatically.</p>
    </form></div>
  </section>;
}

function Footer() {
  return <footer className="site-footer">
    <div className="footer-main"><Brand light /><p>Learn. Play. Grow.</p>
      <div className="footer-contact"><a href={"mailto:" + EMAIL}>{EMAIL}</a><a href={"https://wa.me/" + WHATSAPP} target="_blank" rel="noopener noreferrer">WhatsApp {WHATSAPP_LABEL}</a></div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} Tonexa Music Academy</span>
      <nav aria-label="Footer links"><a href="/terms">Terms of use</a><a href="/privacy">Privacy policy</a><a href="#home">Back to top ↑</a></nav>
    </div>
  </footer>;
}

export default function App() {
  const [selectedInstrument,setSelectedInstrument] = useState("Keyboard");
  const chooseInstrument = name => {
    setSelectedInstrument(name);
    document.getElementById("contact")?.scrollIntoView({behavior:"smooth",block:"start"});
  };
  return <>
    <Header />
    <main>
      <Hero />
      <div className="service-strip">
        <span><House size={17} /> Home tuition only</span>
        <span><Music2 size={17} /> Five instruments</span>
        <span><Check size={17} /> Enquire directly with the academy</span>
      </div>
      <InstrumentSection onSelect={chooseInstrument} />
      <AboutSection />
      <HowItWorks />
      <FAQ />
      <ContactSection selectedInstrument={selectedInstrument} />
    </main>
    <Footer />
    <a className="floating-whatsapp" href={"https://wa.me/" + WHATSAPP} aria-label="Contact Tonexa on WhatsApp" target="_blank" rel="noopener noreferrer"><MessageCircle size={22} /></a>
  </>;
}
