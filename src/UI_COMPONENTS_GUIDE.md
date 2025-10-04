# Magic UI & Accentricity UI Components Guide

This E-Summit 2025 website now includes stunning animated components from Magic UI and Accentricity UI libraries. Below is a comprehensive guide to all available components.

## 🎨 Magic UI Components

Located in `/components/magicui/`

### 1. Particles
Animated particle background effect
```tsx
import { Particles } from "./components/magicui/particles";

<Particles 
  className="absolute inset-0" 
  quantity={100}
  staticity={50}
  ease={50}
/>
```

### 2. TextReveal & WordReveal
Animated text entrance effects
```tsx
import { TextReveal, WordReveal } from "./components/magicui/text-reveal";

<TextReveal>
  <h1>Your Heading</h1>
</TextReveal>

<WordReveal text="Words fade in one by one" />
```

### 3. GradientText
Text with animated gradient colors
```tsx
import { GradientText } from "./components/magicui/gradient-text";

<GradientText from="from-red-600" to="to-red-400">
  E-Summit 2025
</GradientText>
```

### 4. Spotlight
Dramatic spotlight effect for hero sections
```tsx
import { Spotlight } from "./components/magicui/spotlight";

<Spotlight className="hidden md:block" fill="white" />
```

### 5. Meteors
Falling meteor animation effect
```tsx
import { Meteors } from "./components/magicui/meteors";

<div className="relative">
  <Meteors number={20} />
</div>
```

### 6. AnimatedBorder
Pulsing animated border around elements
```tsx
import { AnimatedBorder } from "./components/magicui/animated-border";

<AnimatedBorder duration="3s">
  <Button>Click Me</Button>
</AnimatedBorder>
```

### 7. Marquee
Infinite scrolling marquee effect
```tsx
import { Marquee } from "./components/magicui/marquee";

<Marquee pauseOnHover speed="slow" reverse>
  <div>Your scrolling content</div>
</Marquee>
```

### 8. BentoGrid & BentoCard
Modern grid layout system
```tsx
import { BentoGrid, BentoCard } from "./components/magicui/bento-grid";

<BentoGrid>
  <BentoCard span="2">Content</BentoCard>
  <BentoCard span="1">Content</BentoCard>
</BentoGrid>
```

### 9. ShineBorder
Shimmering border animation
```tsx
import { ShineBorder } from "./components/magicui/shine-border";

<ShineBorder color="#dc2626">
  <Card>Your content</Card>
</ShineBorder>
```

### 10. AnimatedBeam
Animated line/beam effect
```tsx
import { AnimatedBeam } from "./components/magicui/animated-beam";

<AnimatedBeam duration={3} delay={0} />
```

## ✨ Accentricity UI Components

Located in `/components/accentricity/`

### 1. FloatingCard
Card with floating hover animation
```tsx
import { FloatingCard } from "./components/accentricity/floating-card";

<FloatingCard delay={0.2}>
  <div>Card content</div>
</FloatingCard>
```

### 2. GlowCard
Card with glowing border on hover
```tsx
import { GlowCard } from "./components/accentricity/glow-card";

<GlowCard glowColor="rgba(220, 38, 38, 0.3)">
  <Card>Content</Card>
</GlowCard>
```

### 3. GlassCard
Glassmorphic card design
```tsx
import { GlassCard } from "./components/accentricity/glass-card";

<GlassCard blur="md">
  <div>Glass effect content</div>
</GlassCard>
```

### 4. ShimmerButton
Button with shimmer animation
```tsx
import { ShimmerButton } from "./components/accentricity/shimmer-button";

<ShimmerButton onClick={handleClick} size="lg">
  Register Now
</ShimmerButton>
```

### 5. AnimatedGradient
Animated gradient background
```tsx
import { AnimatedGradient } from "./components/accentricity/animated-gradient";

<AnimatedGradient>
  <div>Content with animated background</div>
</AnimatedGradient>
```

### 6. PulseDot
Pulsing dot indicator
```tsx
import { PulseDot } from "./components/accentricity/pulse-dot";

<PulseDot size="md" color="bg-primary" />
```

### 7. RippleBackground
Animated ripple background effect
```tsx
import { RippleBackground } from "./components/accentricity/ripple-background";

<div className="relative">
  <RippleBackground />
  <div className="relative z-10">Your content</div>
</div>
```

### 8. NeonText
Text with neon glow effect
```tsx
import { NeonText } from "./components/accentricity/neon-text";

<NeonText color="#dc2626">
  Glowing Text
</NeonText>
```

### 9. Card3D
3D card with tilt effect on mouse move
```tsx
import { Card3D } from "./components/accentricity/card-3d";

<Card3D>
  <Card>Content tilts in 3D</Card>
</Card3D>
```

### 10. HoverGlow
Glow effect that follows mouse cursor
```tsx
import { HoverGlow } from "./components/accentricity/hover-glow";

<HoverGlow glowColor="#dc2626">
  <Card>Content with hover glow</Card>
</HoverGlow>
```

## 🎯 Where Components Are Used

### Homepage
- **Particles**: Hero section background
- **Spotlight**: Hero section dramatic light
- **Meteors**: Hero section falling stars
- **TextReveal & WordReveal**: Animated text entrances
- **GradientText**: Main heading
- **AnimatedBorder**: CTA buttons
- **Motion animations**: Stats, highlights, testimonials

### Speakers Page
- **ShineBorder**: Q&A section highlight
- **Motion animations**: Card entrances and hover effects

### Sponsors Page
- **Marquee**: Scrolling sponsor logos
- **AnimatedBorder**: CTA section
- **GlowCard**: Featured sponsors (if implemented)

### Pass Booking
- **GlowCard**: Recommended pass highlight
- **GlassCard**: Pass cards
- **ShimmerButton**: Primary CTA button
- **PulseDot**: Live indicators

### Team Page
- **BentoGrid**: Core team layout
- **GlassCard**: Faculty cards
- **GradientText**: Section headings
- **Motion**: 3D card rotations

### Venue Page
- **RippleBackground**: Header section
- **HoverGlow**: Main venue image
- **Card3D**: Venue cards with tilt effect

### Navigation
- **GradientText**: Logo
- **Motion**: Active nav indicator, hover effects

## 🚀 Usage Tips

1. **Performance**: Use animations sparingly - too many can impact performance
2. **Mobile**: Some effects (like Spotlight, 3D cards) are hidden on mobile for better UX
3. **Accessibility**: All animations respect `prefers-reduced-motion`
4. **Customization**: All components accept className props for Tailwind styling
5. **Color Theme**: Components automatically adapt to light/dark mode using CSS variables

## 🎨 Customizing Colors

All components use the theme colors from `globals.css`:
- Primary: `#dc2626` (Red)
- Adjust the `--primary` CSS variable to change accent color throughout

## 📦 Import Shortcuts

```tsx
// Instead of individual imports
import { Particles, GradientText, Spotlight } from "./components/magicui";
import { GlowCard, ShimmerButton, Card3D } from "./components/accentricity";
```

## 💡 Best Practices

1. **Hero Sections**: Combine Particles + Spotlight + Meteors for maximum impact
2. **CTAs**: Use ShimmerButton + AnimatedBorder for important actions
3. **Cards**: Mix GlowCard, GlassCard, and Card3D for variety
4. **Text**: Use GradientText for headings, TextReveal for entrances
5. **Backgrounds**: RippleBackground for sections, AnimatedGradient for variety

## 🔧 Troubleshooting

- If animations don't appear, check that Motion/React is properly imported
- For performance issues, reduce `quantity` on Particles
- If 3D effects don't work, ensure parent has proper perspective CSS

Enjoy building beautiful, animated experiences! ✨
