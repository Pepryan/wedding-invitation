# Wedding Invitation Website

A modern and elegant wedding invitation website built with Next.js, Tailwind CSS, and TypeScript. This website serves as a digital invitation platform with various interactive features.

## Features

### Main Sections
1. **Hero Section** - Beautiful landing page with couple's photo and wedding details
2. **Couple Profile** - Detailed information about the bride and groom
3. **Event Details** - Information about akad and reception ceremonies
4. **Love Story** - Timeline of the couple's relationship journey
5. **Gallery** - Collection of prewedding and engagement photos
6. **Quranic Verses** - Inspirational verses from the Quran
7. **Digital Envelope** - Bank and e-wallet information for gifts
8. **RSVP** - Confirmation system with WhatsApp integration
9. **Guest Book** - Virtual guest book for messages and well-wishes

### Special Features
- **Countdown Timer** - Displays time remaining until the wedding
- **Photo Booth Frame** - Interactive photo frame feature
- **Music Player** - Custom playlist for the wedding
- **Gift Registry** - Optional gift registry system
- **Live Streaming** - Optional live streaming integration

## Customization

### Themes
The website offers multiple theme options:
1. Sage - Earthy green tones
2. Dusty Blue - Soft blue tones (default)
3. Soft Brown - Warm brown tones
4. Pearl - Neutral white and gray tones
5. Classic - Elegant gold and gray
6. Romantic - Dusty rose and pink tones
7. Modern - Dark sage and cream tones

### Configuration
All wedding details and configurations can be modified in:
- `src/config/wedding-config.ts` - Main wedding details and features
- `src/config/theme-config.ts` - Theme customization

## Technical Details

### Built With
- Next.js 13
- TypeScript
- Tailwind CSS
- React Icons
- React Hook Form

### Development
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run development server:
   ```bash
   npm run dev
   ```

### Deployment
The project includes GitHub Actions workflow for automatic deployment. Configure deployment settings in `.github/workflows/deploy.yml`.

## Project Structure
```
wedding-invitation/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   ├── config/          # Configuration files
│   ├── contexts/        # React contexts
│   ├── pages/           # Next.js pages
│   ├── styles/          # Global styles
│   └── types/           # TypeScript types
├── .eslintrc.json       # ESLint configuration
├── next.config.js       # Next.js configuration
├── package.json         # Project dependencies
├── postcss.config.mjs   # PostCSS configuration
├── tailwind.config.ts   # Tailwind CSS configuration
└── tsconfig.json        # TypeScript configuration
```

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
