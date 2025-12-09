# Qatra Cafe Website

A modern, animated website for Qatra Cafe - an Afghan Coffee House & Game Lounge in the Bay Area. Built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Modern Tech Stack**: Next.js 15 with App Router, TypeScript, Tailwind CSS
- **Smooth Animations**: Framer Motion for beautiful page transitions and scroll-triggered animations
- **Fully Responsive**: Mobile-first design that works on all devices
- **Afghan Aesthetic**: Color palette inspired by traditional Afghan carpets
- **Interactive Components**: Animated navigation, tabbed menu, filterable gallery
- **Booking System**: Functional reservation form for game tables and seating
- **Event Calendar**: Showcases tournaments and community events

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Fonts**: Playfair Display (display) + Inter (body)

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
cd qatra
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
qatra/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with fonts
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Navbar.tsx         # Animated navigation
│   ├── Hero.tsx           # Hero section
│   ├── Games.tsx          # Games showcase
│   ├── Vibe.tsx           # About/vibe section
│   ├── Menu.tsx           # Tabbed menu
│   ├── Events.tsx         # Events calendar
│   ├── Gallery.tsx        # Filterable gallery
│   ├── Booking.tsx        # Reservation form
│   ├── Contact.tsx        # Contact info
│   └── Footer.tsx         # Footer
├── public/                # Static assets
│   └── icon.jpg          # Qatra logo
├── tailwind.config.ts    # Tailwind configuration
└── package.json          # Dependencies
```

## Customization

### Colors

The Afghan carpet-inspired color palette is defined in `tailwind.config.ts`:

```typescript
colors: {
  maroon: {
    primary: '#7A1E24',
    dark: '#4A0E12',
    rich: '#8B2332',
    burgundy: '#5C1419',
  },
  gold: {
    accent: '#D4AF37',
  },
  // ... more colors
}
```

### Content

Update content in the component files:
- **Menu items**: `components/Menu.tsx`
- **Games**: `components/Games.tsx`
- **Events**: `components/Events.tsx`
- **Contact info**: `components/Contact.tsx`

### Images

Replace placeholder images with real photos:
1. Add images to the `public/` folder
2. Update image references in components
3. For the gallery, update `components/Gallery.tsx`

## Key Features Breakdown

### 1. Framer Motion Animations

- **Scroll-triggered animations**: Elements animate in as you scroll
- **Hover effects**: Interactive cards and buttons
- **Page transitions**: Smooth content changes
- **Parallax effects**: Hero section with depth

### 2. Afghan Heritage Theme

- Color palette based on traditional Afghan carpets
- Maroon, burgundy, and gold accent colors
- Warm cream backgrounds
- Cultural authenticity in copy and imagery

### 3. Gaming Focus

- Featured Carrom game (traditional board game)
- Pool, Ping Pong, Chess, Backgammon
- Gaming combo deals in menu
- Tournament/event system

### 4. Booking System

- Form validation
- Date/time selection
- Activity selection (games or general seating)
- Party size options
- Special requests field

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Vercel will auto-detect Next.js and deploy

### Or deploy manually:

```bash
npm run build
npm start
```

## Next Steps

1. **Add Real Photos**: Replace placeholder images with actual cafe photos
2. **Google Maps**: Add Google Maps embed in Contact section
3. **Social Media**: Link actual social media accounts
4. **Backend Integration**: Connect booking form to a backend/database
5. **Analytics**: Add Google Analytics or similar
6. **SEO**: Update meta tags and add structured data
7. **Email**: Set up newsletter subscription service

## Contributing

This is a custom website for Qatra Cafe. For questions or updates, contact the development team.

## Contact

**Qatra Cafe**
- Email: qatracafe@gmail.com
- Location: San Francisco Bay Area
- Instagram: @qatracafe

---

Built with ❤️ for the Afghan community in the Bay Area
