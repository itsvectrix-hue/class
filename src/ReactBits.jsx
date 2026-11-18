import React, { useEffect, useRef, useState } from "react";
export function useInView(threshold = 0.16) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (!("IntersectionObserver" in window)) { setVisible(true); return; }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); observer.disconnect(); }
    }, { threshold });
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, visible];
}
export function SplitText({ text, className = "" }) {
  return <span className={`rb-split ${className}`} aria-label={text}><span aria-hidden="true">{String(text).split(" ").map((word, i) => <span className="rb-split-word" style={{ "--rb-index": i }} key={i}>{word}&nbsp;</span>)}</span></span>;
}
export function BlurText({ children, className = "" }) { return <span className={`rb-blur-text ${className}`}>{children}</span>; }
export function TextType({ items = [], interval = 2400, className = "" }) {
  const [active, setActive] = useState(0);
  useEffect(() => {
    if (items.length < 2) return;
    const timer = window.setInterval(() => setActive((n) => (n + 1) % items.length), interval);
    return () => window.clearInterval(timer);
  }, [items.length, interval]);
  return <span className={`rb-text-type ${className}`} aria-live="polite">{items[active] || ""}</span>;
}
export function RotatingText({ items = [], interval = 3000, className = "" }) {
  const [active, setActive] = useState(0);
  useEffect(() => {
    if (items.length < 2) return;
    const timer = window.setInterval(() => setActive((n) => (n + 1) % items.length), interval);
    return () => window.clearInterval(timer);
  }, [items.length, interval]);
  return <span className={`rb-rotating-text ${className}`} key={active}>{items[active] || ""}</span>;
}
export function CurvedLoop({ text, className = "" }) {
  const repeated = text + "     " + text + "     ";
  return <div className={`rb-curved-loop ${className}`} aria-label={text}><div className="rb-loop-track" aria-hidden="true"><span>{repeated}</span><span>{repeated}</span></div></div>;
}
export function VariableProximity({ children, className = "" }) {
  const move = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const distance = Math.abs(event.clientX - (rect.left + rect.width / 2)) / Math.max(rect.width / 2, 1);
    event.currentTarget.style.setProperty("--rb-proximity", String(1.08 - Math.min(distance, 1) * 0.12));
  };
  const reset = (event) => event.currentTarget.style.setProperty("--rb-proximity", "1");
  return <span className={`rb-variable-proximity ${className}`} onPointerMove={move} onPointerLeave={reset}>{children}</span>;
}
export function TextPressure({ children, className = "" }) {
  const move = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const distance = Math.abs(event.clientX - (rect.left + rect.width / 2)) / Math.max(rect.width / 2, 1);
    event.currentTarget.style.setProperty("--rb-weight", String(Math.round(400 + (1 - Math.min(distance, 1)) * 220)));
  };
  const reset = (event) => event.currentTarget.style.setProperty("--rb-weight", "400");
  return <span className={`rb-text-pressure ${className}`} onPointerMove={move} onPointerLeave={reset}>{children}</span>;
}
export function ShuffleText({ text, className = "" }) {
  const [label, setLabel] = useState(text);
  const timer = useRef(null);
  const scramble = () => {
    window.clearInterval(timer.current);
    let step = 0;
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    timer.current = window.setInterval(() => {
      step += 1;
      if (step > 5) { setLabel(text); window.clearInterval(timer.current); return; }
      setLabel(text.split("").map((letter, index) => letter === " " || index < step - 1 ? letter : chars[Math.floor(Math.random() * chars.length)]).join(""));
    }, 38);
  };
  useEffect(() => () => window.clearInterval(timer.current), []);
  return <span className={`rb-shuffle-text ${className}`} onPointerEnter={scramble} onFocus={scramble}>{label}</span>;
}
export function TextScatter({ text, className = "" }) {
  return <span className={`rb-text-scatter ${className}`} aria-label={text}>{String(text).split("").map((char, i) => <span aria-hidden="true" key={i} style={{ "--rb-index": i }}>{char === " " ? "\u00a0" : char}</span>)}</span>;
}
export function ScrollReveal({ children, className = "", delay = 0, as = "div" }) {
  const [ref, visible] = useInView();
  const Tag = as;
  return <Tag ref={ref} className={`rb-scroll-reveal ${visible ? "is-visible" : ""} ${className}`} style={{ "--rb-delay": `${delay}ms` }}>{children}</Tag>;
}
export function FadeContent({ children, className = "", delay = 0 }) { return <ScrollReveal className={`rb-fade-content ${className}`} delay={delay}>{children}</ScrollReveal>; }
export function AnimatedContent({ children, className = "", delay = 0 }) { return <ScrollReveal className={`rb-animated-content ${className}`} delay={delay}>{children}</ScrollReveal>; }
export function ScrollFloat({ children, className = "" }) {
  const ref = useRef(null);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const node = ref.current;
        if (!node) return;
        const rect = node.getBoundingClientRect();
        const offset = (rect.top + rect.height / 2 - window.innerHeight / 2) / window.innerHeight;
        node.style.setProperty("--rb-float", String(Math.max(-1, Math.min(1, offset)) * -12));
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => { cancelAnimationFrame(frame); window.removeEventListener("scroll", update); window.removeEventListener("resize", update); };
  }, []);
  return <div ref={ref} className={`rb-scroll-float ${className}`}>{children}</div>;
}
export function CountUp({ end, suffix = "", duration = 1100, className = "" }) {
  const [ref, visible] = useInView(0.35);
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!visible) return;
    let frame = 0;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      setValue(Math.round(end * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [visible, end, duration]);
  return <span ref={ref} className={`rb-count-up ${className}`}>{value}{suffix}</span>;
}
export function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    update(); window.addEventListener("scroll", update, { passive: true }); window.addEventListener("resize", update);
    return () => { window.removeEventListener("scroll", update); window.removeEventListener("resize", update); };
  }, []);
  return <div className="rb-scroll-progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />;
}
export function Magnet({ children, className = "" }) {
  const ref = useRef(null);
  const move = (event) => {
    const rect = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--rb-magnet-x", `${(event.clientX - rect.left - rect.width / 2) * 0.1}px`);
    ref.current.style.setProperty("--rb-magnet-y", `${(event.clientY - rect.top - rect.height / 2) * 0.1}px`);
  };
  const reset = () => { ref.current?.style.setProperty("--rb-magnet-x", "0px"); ref.current?.style.setProperty("--rb-magnet-y", "0px"); };
  return <span ref={ref} className={`rb-magnet ${className}`} onPointerMove={move} onPointerLeave={reset}>{children}</span>;
}
export function ClickSpark({ children, className = "", onClick }) {
  const [burst, setBurst] = useState(0);
  return <span className={`rb-click-spark ${className}`} data-burst={burst} onClick={(event) => { setBurst((n) => n + 1); onClick?.(event); }}>{children}</span>;
}
export function Ripple({ children, className = "", onClick, as = "span", ...props }) {
  const Tag = as;
  const [ripple, setRipple] = useState(0);
  const [point, setPoint] = useState({ x: 50, y: 50 });
  const click = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setPoint({ x: event.clientX - rect.left, y: event.clientY - rect.top });
    setRipple((n) => n + 1);
    onClick?.(event);
  };
  return <Tag className={`rb-ripple ${className}`} onClick={click} style={{ "--rb-ripple-x": `${point.x}px`, "--rb-ripple-y": `${point.y}px` }} {...props}>{children}<span className="rb-ripple-wave" key={ripple} aria-hidden="true" /></Tag>;
}
export function GlareHover({ children, className = "" }) { return <div className={`rb-glare-hover ${className}`}>{children}</div>; }
export function TiltedCard({ children, className = "" }) {
  const ref = useRef(null);
  const move = (event) => {
    const rect = ref.current.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    ref.current.style.setProperty("--rb-tilt-x", String(-y * 4));
    ref.current.style.setProperty("--rb-tilt-y", String(x * 5));
  };
  const reset = () => { ref.current?.style.setProperty("--rb-tilt-x", "0"); ref.current?.style.setProperty("--rb-tilt-y", "0"); };
  return <div ref={ref} className={`rb-tilted-card ${className}`} onPointerMove={move} onPointerLeave={reset}>{children}</div>;
}
export function SpotlightCard({ children, className = "" }) {
  const move = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--rb-spot-x", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--rb-spot-y", `${event.clientY - rect.top}px`);
  };
  return <div className={`rb-spotlight-card ${className}`} onPointerMove={move}>{children}</div>;
}
export function AnimatedList({ children, className = "" }) { return <div className={`rb-animated-list ${className}`}>{children}</div>; }
export function StaggeredMenu({ children, open = false, className = "", id, ...props }) { return <nav id={id} className={`rb-staggered-menu ${open ? "is-open" : ""} ${className}`} {...props}>{children}</nav>; }
export function LogoLoop({ items = [], className = "" }) {
  const content = items.map((item, index) => <span key={index}>{item}</span>);
  return <div className={`rb-logo-loop ${className}`} aria-label={items.join(", ")}><div className="rb-logo-loop-track" aria-hidden="true">{content}{content}</div></div>;
}
export function Waveform({ bars = 24, className = "" }) {
  return <div className={`rb-waveform ${className}`} aria-hidden="true">{Array.from({ length: bars }, (_, i) => <i key={i} style={{ "--rb-bar": i }} />)}</div>;
}
export function HoverPreview({ children, preview, className = "" }) {
  return <span className={`rb-hover-preview ${className}`}>{children}<span className="rb-hover-preview-label" aria-hidden="true">{preview}</span></span>;
}
export function Parallax({ children, className = "", strength = 14 }) {
  const ref = useRef(null);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const offset = (rect.top + rect.height / 2 - window.innerHeight / 2) / window.innerHeight;
        ref.current.style.setProperty("--rb-parallax-y", `${Math.max(-1, Math.min(1, offset)) * strength}px`);
      });
    };
    update(); window.addEventListener("scroll", update, { passive: true });
    return () => { cancelAnimationFrame(frame); window.removeEventListener("scroll", update); };
  }, [strength]);
  return <div ref={ref} className={`rb-parallax ${className}`}>{children}</div>;
}
export function Accordion({ items = [], className = "" }) {
  return <div className={`rb-accordion ${className}`}>{items.map((item) => <details className="rb-accordion-item" key={item.question}><summary>{item.question}<span aria-hidden="true">+</span></summary><div className="rb-accordion-answer">{item.answer}</div></details>)}</div>;
}
export function CardSwap({ front, back, className = "" }) {
  const [flipped, setFlipped] = useState(false);
  return <button type="button" className={`rb-card-swap ${className}`} onClick={() => setFlipped((value) => !value)} aria-pressed={flipped}><span className="rb-card-swap-inner"><span className="rb-card-face">{flipped ? back : front}</span><span className="rb-card-swap-hint">{flipped ? "Show the first note" : "Read the next note"}</span></span></button>;
}
export function ScrollVelocity({ children, className = "" }) {
  const ref = useRef(null);
  useEffect(() => {
    let lastY = window.scrollY;
    let frame = 0;
    const update = () => {
      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const currentY = window.scrollY;
        const velocity = Math.min(Math.abs(currentY - lastY), 28);
        ref.current?.style.setProperty("--rb-velocity", String(1 + velocity / 35));
        lastY = currentY;
      });
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => { cancelAnimationFrame(frame); window.removeEventListener("scroll", update); };
  }, []);
  return <div ref={ref} className={`rb-scroll-velocity ${className}`}>{children}</div>;
}
