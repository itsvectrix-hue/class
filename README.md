# Tonexa Music Academy

A responsive React and Vite website for music lessons arranged at students' homes.

## Academy details
- Name: Tonexa Music Academy
- Email: tonexa.music.acadmy@gmail.com
- WhatsApp: +91 90286 71906
- Teaching model: Home tuition only
- Instruments: Keyboard, Guitar, Drums, Conga and Vocals
- Brand colours: Deep Navy Blue (#0A1F44), Rich Gold (#C9A227), Off White (#F9F9F9)

## React Bits effects

The page uses editable source components from [React Bits](https://reactbits.dev):
- **BlurText** for the hero eyebrow and headline reveal.
- **GradientText** for the soft animated gold headline accent.
- **AnimatedContent** for scroll-based section reveals, the studio image wipe, staggered steps and FAQ answer entrance.
- **SpotlightCard** for the instrument gallery's subtle gold pointer spotlight.
- **Magnet** for the primary hero action.
- **Branded first-load intro:** a navy-and-gold equalizer with a progress sweep and GSAP curtain exit; it waits briefly for fonts/hero imagery, has a failsafe, and shortens to a static fade for reduced-motion users.

The effects are intentionally restrained and respect reduced-motion preferences. Magnetic movement is disabled for coarse pointers/touch devices. The React Bits source components are checked into src/components/reactbits; they are not loaded from a third-party runtime.

React Bits project: https://github.com/DavidHDev/react-bits
License: MIT + Commons Clause (see the upstream repository's license).

## Photography
Instrument and studio photographs are sourced from free stock photo libraries and delivered through their image CDNs:
- Keyboard: Dima Zimakov, Unsplash
- Guitar: Harshveen Kalsi, Unsplash
- Drums: Burak Şahin, Unsplash
- Conga / hand percussion: wr heustis, Pexels
- Vocals: David Kristianto, Unsplash
- Studio / keyboard and guitar: Shoham Avisrur, Unsplash
- Studio microphone and keyboards: TStudio_lv, Unsplash

Photographs are shown under their respective Unsplash and Pexels free-use licenses. They are not representations of the academy's own facilities or teachers.

## Enquiries
The form prepares a message in the visitor's email app or opens WhatsApp. It does not send an email automatically, book a lesson, or store enquiry details in a website database. Lesson availability, travel arrangements, timings and fees must be confirmed directly with the academy.

## Development
\`\`\`sh
npm install
npm run dev
npm run build
npm run preview
\`\`\`

## Deployment
- GitHub: https://github.com/itsvectrix-hue/class
- Hosting: Vercel
