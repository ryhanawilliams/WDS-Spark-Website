## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## Project Structure

```
src/
├── components/
│   ├── Header.js          # Navigation header
│   ├── Hero.js            # Hero section with main title
│   ├── About.js           # "What is Overhaul" section
│   ├── Testimonials.js    # Testimonials section
│   ├── Sponsors.js        # Sponsorship section
│   ├── FAQ.js             # Frequently asked questions
│   └── Footer.js          # Footer component
├── App.js                 # Main app component
├── index.js               # React entry point
└── index.css              # Global styles and Tailwind imports

public/
└── assets/                # All image assets
```

## Customization

- Colors are defined in `tailwind.config.js`
- Component styling uses Tailwind CSS classes
- Images are stored in `public/assets/` and referenced as `/assets/filename`

## Contact

For sponsorship inquiries, contact: ryhana.williams0@gmail.com
