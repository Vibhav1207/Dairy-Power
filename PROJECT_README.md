# Dairy Power Pvt Ltd Website

A modern, responsive website for Dairy Power Pvt Ltd, recreated using pure HTML, CSS, and JavaScript based on the original design.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Elements**: Hover effects, smooth scrolling, and dynamic content
- **Performance Optimized**: Optimized images, lazy loading, and efficient code
- **Accessibility**: ARIA labels and keyboard navigation support
- **Cross-Browser Compatible**: Works on all modern browsers

## 📁 Project Structure

```
Dairy-Power/
├── index.html              # Main HTML file
├── css/
│   ├── style.css          # Main stylesheet
│   ├── responsive.css     # Responsive design styles
│   └── utilities.css      # Utility classes and enhancements
├── js/
│   ├── main.js           # Core JavaScript functionality
│   └── enhanced.js       # Enhanced features and animations
├── assets/
│   ├── images/
│   │   ├── logo.png      # Company logo
│   │   ├── topimage.png  # Hero section background
│   │   └── background.png # Additional background image
│   └── icons/            # Icon files
├── LICENSE
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, for better development experience)

### Installation

1. **Clone or download the repository**
   ```bash
   git clone <repository-url>
   cd Dairy-Power
   ```

2. **Open the website**
   
   **Option 1: Direct file opening**
   - Simply open `index.html` in your web browser
   
   **Option 2: Local web server (recommended)**
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Python 2
   python -m SimpleHTTPServer 8000
   
   # Using Node.js (if you have live-server installed)
   npx live-server
   
   # Using PHP
   php -S localhost:8000
   ```
   
   Then open `http://localhost:8000` in your browser

## 🎨 Design Features

### Color Scheme
- **Primary Blue**: #2c5aa0 (Header, titles, primary buttons)
- **Secondary Blue**: #1e4080 (Gradients, hover states)
- **Accent Cyan**: #00bcd4 (Call-to-action buttons, highlights)
- **Background**: Clean whites and light grays

### Typography
- **Font Family**: Roboto (Google Fonts)
- **Weights**: 300 (Light), 400 (Regular), 500 (Medium), 700 (Bold)

### Sections
1. **Header**: Fixed navigation with logo and menu
2. **Hero**: Full-screen banner with company tagline
3. **About Us**: Company information with facility image
4. **Statistics**: Animated counters showing company achievements
5. **Products**: Grid layout showcasing product categories
6. **Facilities**: Information about company facilities
7. **Contact**: Contact form and company information
8. **Footer**: Simple footer with copyright information

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## ⚡ Performance Features

- **Lazy Loading**: Images load as they come into view
- **Optimized Animations**: Hardware-accelerated CSS animations
- **Efficient JavaScript**: Debounced scroll events and optimized DOM queries
- **Preloading**: Critical resources are preloaded for faster initial load
- **Progressive Enhancement**: Core functionality works without JavaScript

## 🔧 Customization

### Changing Colors
Edit the CSS custom properties in `css/style.css`:
```css
:root {
  --primary-color: #2c5aa0;
  --secondary-color: #1e4080;
  --accent-color: #00bcd4;
  /* Add more custom properties as needed */
}
```

### Adding New Sections
1. Add HTML structure to `index.html`
2. Add corresponding styles to `css/style.css`
3. Add any interactive functionality to `js/main.js`

### Modifying Images
Replace images in the `assets/images/` directory with your own:
- `logo.png`: Company logo (recommended size: 200x200px)
- `topimage.png`: Hero section background (recommended size: 1920x1080px)
- `background.png`: Additional background image

## 🌐 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
- iOS Safari 12+
- Android Chrome 60+

## 📧 Contact Information

For questions or support regarding this website:

- **Company**: Dairy Power Pvt Ltd
- **Location**: Green Belts of Gwalior, Madhya Pradesh, India
- **Business**: Milk and milk products under the brand "Pawas"

## 📄 License

This project is licensed under the terms specified in the LICENSE file.

## 🚀 Deployment

### GitHub Pages
1. Push your code to a GitHub repository
2. Go to repository Settings > Pages
3. Select source branch (usually `main` or `master`)
4. Your site will be available at `https://username.github.io/repository-name`

### Netlify
1. Drag and drop the project folder to [Netlify](https://netlify.com)
2. Your site will be deployed automatically

### Traditional Web Hosting
1. Upload all files to your web server's public directory
2. Ensure `index.html` is in the root directory
3. Your site should be accessible via your domain

## 🔄 Future Enhancements

- [ ] Content Management System integration
- [ ] Multi-language support
- [ ] E-commerce functionality for online orders
- [ ] Customer portal
- [ ] Blog section
- [ ] Newsletter subscription
- [ ] Social media integration
- [ ] SEO optimization
- [ ] Analytics integration

## 🤝 Contributing

If you'd like to contribute to this project:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

*Built with ❤️ for Dairy Power Pvt Ltd*