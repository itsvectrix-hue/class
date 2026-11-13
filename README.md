# Naveen's Musical Class

A responsive editorial-style website for Naveen's Musical Class, built with React and Vite.

## Design direction

Minimal monochrome art direction inspired by the supplied music editorial reference: oversized serif typography, instrument photography, warm neutral surfaces, subtle brass accents, and a mobile-first layout.

## Experience

- Home, About, Courses / Instruments, Timings & Fees, Gallery, Contact
- WhatsApp enquiry flow and one-tap calling: +91 90286 71906
- Enquiry form that opens a pre-filled WhatsApp message
- Responsive navigation, accessible form labels, reduced-motion support
- No invented fee or schedule information; visitors are invited to request current details

## Motion language

The motion layer is implemented in `src/components/ReactBits.jsx`, drawing on the interaction vocabulary and visual patterns of the [React Bits library](https://reactbits.dev/). It includes 32 source-owned effects/components:

Gradient ASCII, Split Text, Blur Text, Gradient Text, Text Type, Shiny Text, Scroll Reveal, Scroll Float, Magnet, Glare Hover, Animated Content, Fade Content, Count Up, Circular Text, Decrypted Text, Scroll Velocity, Click Spark, Particles, Aurora, Grainient, Dot Grid, Threads, Waves, Letter Glitch, Orb, Light Rays, Grid Distortion, Dither, Masonry, Flex Carousel, Spotlight Card, and Tilted Card.

The effects are locally authored and adapted to this site's restrained visual system; the project does not depend on a paid React Bits Pro package.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy

Configured for Vercel with the Vite framework. The GitHub repository is `itsvectrix-hue/class`.
