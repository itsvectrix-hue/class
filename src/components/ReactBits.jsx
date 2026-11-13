import React, { useEffect, useRef, useState } from "react";

export function GradientAscii({ className = "" }) { return <div aria-hidden="true" className={"rb-gradient-ascii " + className}><span>01 / MUSIC / 01 / SOUND / 01 / RHYTHM / 01 / MUSIC / 01 / SOUND / 01</span></div>; }
export function SplitText({ children, className = "" }) { return <span className={"rb-split-text " + className}>{String(children).split("").map((c, i) => <span key={i} style={{ "--i": i }}>{c === " " ? "\u00a0" : c}</span>)}</span>; }
export function BlurText({ children, className = "" }) { return <span className={"rb-blur-text " + className}>{children}</span>; }
export function GradientText({ children, className = "" }) { return <span className={"rb-gradient-text " + className}>{children}</span>; }
export function TextType({ children, className = "" }) { return <span className={"rb-text-type " + className}>{children}</span>; }
export function ShinyText({ children, className = "" }) { return <span className={"rb-shiny-text " + className}>{children}</span>; }
export function ScrollReveal({ children, className = "" }) {
  const ref = useRef(null);
  useEffect(() => { const node = ref.current; if (!node) return; const io = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { node.classList.add("is-visible"); io.disconnect(); } }, { threshold: .12 }); io.observe(node); return () => io.disconnect(); }, []);
  return <div ref={ref} className={"rb-scroll-reveal " + className}>{children}</div>;
}
export function ScrollFloat({ children, className = "" }) { return <div className={"rb-scroll-float " + className}>{children}</div>; }
export function Magnet({ children, className = "" }) {
  const ref = useRef(null);
  const move = (e) => { const r = ref.current && ref.current.getBoundingClientRect(); if (!r) return; ref.current.style.setProperty("--mx", ((e.clientX-r.left-r.width/2)*.12) + "px"); ref.current.style.setProperty("--my", ((e.clientY-r.top-r.height/2)*.12) + "px"); };
  const reset = () => { if (ref.current) { ref.current.style.setProperty("--mx","0px"); ref.current.style.setProperty("--my","0px"); } };
  return <div ref={ref} onMouseMove={move} onMouseLeave={reset} className={"rb-magnet " + className}>{children}</div>;
}
export function GlareHover({ children, className = "" }) { return <div className={"rb-glare-hover " + className}>{children}</div>; }
export function AnimatedContent({ children, className = "" }) { return <div className={"rb-animated-content " + className}>{children}</div>; }
export function FadeContent({ children, className = "" }) { return <div className={"rb-fade-content " + className}>{children}</div>; }
export function CountUp({ to = 0, suffix = "", duration = 1400 }) {
  const [value, setValue] = useState(0); const ref = useRef(null);
  useEffect(() => { const node = ref.current; if (!node) return; let started = false; const io = new IntersectionObserver(([entry]) => { if (!entry.isIntersecting || started) return; started = true; const start = performance.now(); const tick = (now) => { const p = Math.min(1, (now-start)/duration); setValue(Math.round(to*(1-Math.pow(1-p,3)))); if (p < 1) requestAnimationFrame(tick); }; requestAnimationFrame(tick); io.disconnect(); }, { threshold: .4 }); io.observe(node); return () => io.disconnect(); }, [to, duration]);
  return <span ref={ref}>{value}{suffix}</span>;
}
export function CircularText({ text = "LEARN • PLAY • CREATE • ", className = "" }) { return <svg className={"rb-circular-text " + className} viewBox="0 0 120 120" aria-label={text}><defs><path id="rb-circle-path" d="M60,60 m-43,0 a43,43 0 1,1 86,0 a43,43 0 1,1 -86,0" /></defs><text><textPath href="#rb-circle-path">{text.repeat(2)}</textPath></text></svg>; }
export function DecryptedText({ children, className = "" }) { return <span className={"rb-decrypted-text " + className} data-text={children}>{children}</span>; }
export function ScrollVelocity({ children, className = "" }) { return <div className={"rb-scroll-velocity " + className}><div>{Array.from({length:4},(_,i)=><span key={i}>{children}<i>✳</i></span>)}</div></div>; }
export function ClickSpark({ children, className = "" }) { const [spark, setSpark] = useState(false); return <div className={"rb-click-spark " + className + (spark ? " sparked" : "")} onClick={()=>{setSpark(true);window.setTimeout(()=>setSpark(false),450);}}>{children}</div>; }
export function Particles({ count = 22, className = "" }) { return <div aria-hidden="true" className={"rb-particles " + className}>{Array.from({length:count},(_,i)=><i key={i} style={{"--i":i}} />)}</div>; }
export function Aurora({ className = "" }) { return <div aria-hidden="true" className={"rb-aurora " + className} />; }
export function Grainient({ className = "" }) { return <div aria-hidden="true" className={"rb-grainient " + className} />; }
export function DotGrid({ className = "" }) { return <div aria-hidden="true" className={"rb-dot-grid " + className} />; }
export function Threads({ className = "" }) { return <div aria-hidden="true" className={"rb-threads " + className} />; }
export function Waves({ className = "" }) { return <svg aria-hidden="true" className={"rb-waves " + className} viewBox="0 0 1200 160" preserveAspectRatio="none"><path d="M0 80 C150 10 250 150 400 80 S650 10 800 80 1050 150 1200 80" /><path d="M0 105 C150 35 250 175 400 105 S650 35 800 105 1050 175 1200 105" /></svg>; }
export function LetterGlitch({ children, className = "" }) { return <span className={"rb-letter-glitch " + className}>{children}</span>; }
export function Orb({ className = "" }) { return <div aria-hidden="true" className={"rb-orb " + className}><i /></div>; }
export function LightRays({ className = "" }) { return <div aria-hidden="true" className={"rb-light-rays " + className} />; }
export function GridDistortion({ children, className = "" }) { return <div className={"rb-grid-distortion " + className}>{children}</div>; }
export function Dither({ children, className = "" }) { return <div className={"rb-dither " + className}>{children}</div>; }
export function Masonry({ children, className = "" }) { return <div className={"rb-masonry " + className}>{children}</div>; }
export function FlexCarousel({ children, className = "" }) { return <div className={"rb-flex-carousel " + className}>{children}</div>; }
export function SpotlightCard({ children, className = "" }) {
  const ref = useRef(null); const move = e => { const r=ref.current && ref.current.getBoundingClientRect(); if(!r)return; ref.current.style.setProperty("--sx",(e.clientX-r.left)+"px"); ref.current.style.setProperty("--sy",(e.clientY-r.top)+"px"); };
  return <div ref={ref} onMouseMove={move} className={"rb-spotlight-card " + className}>{children}</div>;
}
export function TiltedCard({ children, className = "" }) {
  const ref=useRef(null); const move=e=>{const r=ref.current && ref.current.getBoundingClientRect();if(!r)return;ref.current.style.setProperty("--rx",(((e.clientY-r.top-r.height/2)/r.height)*-7)+"deg");ref.current.style.setProperty("--ry",(((e.clientX-r.left-r.width/2)/r.width)*7)+"deg");}; const reset=()=>{if(ref.current){ref.current.style.setProperty("--rx","0deg");ref.current.style.setProperty("--ry","0deg");}};
  return <div ref={ref} onMouseMove={move} onMouseLeave={reset} className={"rb-tilted-card " + className}>{children}</div>;
}
