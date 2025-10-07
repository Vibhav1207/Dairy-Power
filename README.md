# Dairy Power Website

A modern, responsive website for Dairy Power - showcasing premium dairy products and services. Built with pure HTML, CSS, and JavaScript (no frameworks or build tools required).

## 🚀 Quick Start

1. **Preview the website**: Simply open `index.html` in your web browser
2. **Add your images**: Place your images in the `assets/images/` folder
3. **Customize content**: Edit the HTML files to match your business information

## 📁 Project Structure

```
dairy-power/
├── index.html              # Homepage
├── about.html              # About page
├── css/
│   ├── base.css            # CSS reset, variables, typography
│   ├── layout.css          # Grid system and layouts
│   ├── components.css      # Buttons, cards, modals, forms
│   └── responsive.css      # Media queries for all devices
├── js/
│   ├── main.js             # Navigation, modals, form validation
│   └── gallery.js          # Image gallery with lightbox
├── assets/
│   ├── images/             # Your photos go here
│   └── icons/              # Favicons and icons
├── README.md               # This file
└── .gitignore             # Git ignore rules
```

## 🖼️ Adding Your Images

The website currently uses placeholder images. To add your real images:

1. **Place your images** in the `assets/images/` folder
2. **Update image references** in the HTML files:

### Current Placeholder Images to Replace:

- `placeholder-hero.jpg` - Main hero image
- `placeholder-fresh.jpg` - Fresh delivery service icon
- `placeholder-organic.jpg` - Organic certification icon
- `placeholder-variety.jpg` - Product variety icon
- `placeholder-1.jpg` through `placeholder-6.jpg` - Gallery images
- `placeholder-mission.jpg` - About page mission image
- `placeholder-team-1.jpg` through `placeholder-team-3.jpg` - Team photos

### Recommended Image Sizes:

- **Hero image**: 1200x800px (landscape)
- **Service icons**: 400x400px (square)
- **Gallery images**: 800x600px (landscape)
- **Team photos**: 400x500px (portrait)
- **Mission image**: 800x600px (landscape)

## ✨ Features

### 🎯 Core Features
- **Responsive Design**: Works perfectly on all devices
- **Accessible**: WCAG 2.1 compliant with keyboard navigation
- **Fast Loading**: Optimized images with lazy loading
- **SEO Ready**: Semantic HTML and meta tags included

### 🛠️ Interactive Components
- **Mobile Navigation**: Hamburger menu with smooth animations
- **Contact Modal**: Form with client-side validation
- **Image Gallery**: Lightbox with keyboard navigation (←→ arrows, ESC)
- **Smooth Scrolling**: Animated navigation between sections

### 🎨 Design Features
- **Modern Aesthetics**: Clean cards, subtle shadows, smooth transitions
- **Neon Button Effects**: Eye-catching call-to-action buttons
- **High Contrast Support**: Accessible for users with visual impairments
- **Dark Mode Ready**: CSS variables support dark theme

## 🔧 Customization

### Colors and Branding
Edit the CSS custom properties in `css/base.css`:

```css
:root {
    --color-primary: #2563eb;        /* Main brand color */
    --color-secondary: #10b981;      /* Secondary color */
    /* Add your brand colors here */
}
```

### Content Updates
- **Company Info**: Update contact details in footer sections
- **Services**: Modify the services section in `index.html`
- **Team**: Replace team member information in `about.html`
- **Testimonials**: Update customer testimonials with real reviews

### Adding New Pages
1. Create new HTML file following the structure of `about.html`
2. Add navigation link in the header
3. Include all CSS and JS files
4. Follow semantic HTML structure

## 🌐 Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **Mobile**: iOS Safari, Chrome Mobile, Samsung Internet
- **Accessibility**: Screen readers, keyboard navigation
- **Progressive Enhancement**: Core functionality works without JavaScript

## 📱 Mobile Features

- **Touch Navigation**: Swipe gestures in gallery lightbox
- **Responsive Images**: Optimized for different screen sizes
- **Mobile-First Design**: Built for mobile, enhanced for desktop
- **Touch-Friendly**: 44px minimum touch targets

## 🚀 Deployment

### Static Hosting (Recommended)
Upload the entire folder to any static hosting service:
- **Netlify**: Drag and drop the folder
- **Vercel**: Connect your Git repository
- **GitHub Pages**: Enable Pages in repository settings
- **Traditional Hosting**: Upload via FTP

### Local Development Server
For testing with a local server:

```bash
# Python 3
python -m http.server 8000

# Node.js (if you have http-server installed)
npx http-server

# PHP
php -S localhost:8000
```

Then visit `http://localhost:8000`

## 🔍 SEO Optimization

The website includes:
- **Meta Tags**: Title, description, keywords
- **Semantic HTML**: Proper heading hierarchy
- **Alt Text**: Descriptive image alternatives
- **Open Graph**: Social media sharing optimization
- **Schema Markup**: Ready for structured data

To improve SEO:
1. Add your Google Analytics ID
2. Create and submit a sitemap
3. Add your business to Google My Business
4. Optimize images (compress, add alt text)

## 🎨 Suggested Commit Messages

When making changes, use these commit message formats:

```bash
git add .
git commit -m "feat: add new team member photo"
git commit -m "fix: improve mobile navigation accessibility"
git commit -m "style: update hero section colors"
git commit -m "docs: update README with new instructions"
git commit -m "content: update testimonials section"
```

## 🛠️ Development Notes

### CSS Architecture
- **Mobile-First**: All base styles are mobile, desktop uses `min-width` media queries
- **BEM Methodology**: Block__Element--Modifier naming convention
- **Custom Properties**: CSS variables for consistent theming
- **Component-Based**: Reusable components in `components.css`

### JavaScript Features
- **Vanilla JS**: No dependencies or frameworks
- **Modular**: Separate files for different functionality
- **Accessible**: Focus management and ARIA attributes
- **Progressive**: Works without JavaScript for core features

### Performance
- **Lazy Loading**: Images load when needed
- **Efficient CSS**: Minimal reflows and repaints
- **Optimized JS**: Debounced events and efficient selectors
- **Small Footprint**: Under 100KB total (excluding images)

## 📧 Support

If you need help customizing the website:
1. Check the code comments for guidance
2. Refer to the semantic HTML structure
3. Use browser developer tools for debugging
4. Test accessibility with keyboard navigation

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ for modern web standards**