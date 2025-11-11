# Discord Login Page Clone

> A pixel-perfect recreation of Discord's login interface with animated interactions and clean, modern code architecture.

<div align="center">

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
[![GitHub stars](https://img.shields.io/github/stars/Ayanprogrammer11/discord-login-page-clone?style=social)](https://github.com/Ayanprogrammer11/discord-login-page-clone/stargazers)

[View Demo](https://discord-cl.netlify.app/) · [Report Bug](https://github.com/Ayanprogrammer11/discord-login-page-clone/issues) · [Request Feature](https://github.com/Ayanprogrammer11/discord-login-page-clone/issues)

</div>

---

## 📸 Preview

![Discord Login Page Clone Screenshot](./discord-login-page-clone-screenshot.png)

## ✨ Features

### 🎯 **Pixel-Perfect UI**
Faithfully replicates Discord's login page with attention to every detail:
- Authentic color schemes using Discord's design system
- Custom `gg sans` font implementation
- Responsive layout and precise spacing
- Matching hover states and transitions

### 🔄 **Animated QR Code**
Dynamic QR code system with smooth animations:
- Auto-generates unique QR codes every 2 minutes
- Smooth loading animation during refresh
- Wandering cubes spinner effect
- Real QR code generation using qrcode.js

### 🧩 **Modular Architecture**
Clean, maintainable JavaScript with modern patterns:
- ES6+ syntax with arrow functions and template literals
- Separated concerns with dedicated modules
- Comprehensive JSDoc documentation
- Centralized configuration management

### 🎨 **Smooth Animations**
Delightful micro-interactions:
- Pulsing ellipsis loader on button click
- Smooth QR code refresh transitions
- CSS keyframe animations
- No external animation libraries needed

### 🧼 **Clean Code**
Production-ready codebase:
- Well-commented and documented
- Follows modern JavaScript best practices
- Error handling and null-safety checks
- Easy to customize and extend

## 🚀 Quick Start

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, or Edge)
- Basic knowledge of HTML/CSS/JavaScript (for customization)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ayanprogrammer11/discord-login-page-clone.git
   cd discord-login-page-clone
   ```

2. **Open in your browser**
   
   **Windows:**
   ```bash
   start index.html
   ```
   
   **macOS:**
   ```bash
   open index.html
   ```
   
   **Linux:**
   ```bash
   xdg-open index.html
   ```

That's it! No build process, no dependencies to install. Just open and run.

## 🛠️ Development

### Project Structure

```
discord-login-page-clone/
├── assets/
│   ├── fonts/
│   │   └── ggsans/          # Discord's custom font
│   ├── bg.svg               # Background gradient
│   ├── login-screen-logo.svg
│   └── qrcode-discord-logo.png
├── css/
│   ├── index.css            # Variables and base styles
│   └── main.css             # Component styles
├── js/
│   └── script.js            # Modular JavaScript
├── index.html
└── README.md
```

### Key Components

**QRCodeModule** - Handles QR code generation and refresh logic
```javascript
QRCodeModule.generate(data)      // Generate QR code
QRCodeModule.refresh()           // Refresh with new code
QRCodeModule.initRefreshInterval() // Start auto-refresh
```

**LoginButtonModule** - Manages login button animations
```javascript
LoginButtonModule.showLoading()  // Show loading state
LoginButtonModule.reset()        // Reset to default
LoginButtonModule.init()         // Initialize event listeners
```

### Customization

#### Change QR Refresh Interval
```javascript
// In js/script.js
const CONFIG = {
  QR_REFRESH_INTERVAL: 120000, // Change this value (in milliseconds)
};
```

#### Modify Colors
```css
/* In css/index.css */
:root {
  --btn-bg: rgb(88, 101, 242);        /* Button color */
  --btn-bg-hover: rgb(71, 82, 196);   /* Button hover */
  --link-color: oklab(...);           /* Link color */
}
```

## 📚 Learning Resources

This project is perfect for learning:
- **HTML5 Semantic Structure** - Proper use of forms, sections, and accessibility
- **CSS Custom Properties** - Dynamic theming with CSS variables
- **Modern JavaScript** - ES6+ features, modules, and best practices
- **SVG Manipulation** - Generating and modifying SVG elements
- **Animation Techniques** - CSS keyframes and JavaScript timing

## 🤝 Contributing

Contributions are what make the open-source community amazing! Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Contribution Ideas

- [ ] Add dark/light theme toggle
- [ ] Implement form validation
- [ ] Add password strength indicator
- [ ] Create mobile-responsive version
- [ ] Add more animation effects
- [ ] Improve accessibility (ARIA labels)
- [ ] Add unit tests

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Ayan Liaqat**
- GitHub: [@Ayanprogrammer11](https://github.com/Ayanprogrammer11)
- Project Link: [https://github.com/Ayanprogrammer11/discord-login-page-clone](https://github.com/Ayanprogrammer11/discord-login-page-clone)

## 🙏 Acknowledgements

- Inspired by [Discord's Login Page](https://discord.com/login)
- [qrcode-generator](https://www.npmjs.com/package/qrcode-generator) for QR code generation
- Discord's design team for the beautiful UI

## 📊 Stats

![GitHub repo size](https://img.shields.io/github/repo-size/Ayanprogrammer11/discord-login-page-clone)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/Ayanprogrammer11/discord-login-page-clone)
![GitHub last commit](https://img.shields.io/github/last-commit/Ayanprogrammer11/discord-login-page-clone)

---

<div align="center">

### ⚠️ Important Disclaimer

This project is **NOT affiliated with, endorsed by, or connected to Discord Inc.** in any way.

It is a **frontend clone created purely for educational and non-commercial purposes** to demonstrate web development skills.

**DO NOT use this for:**
- Phishing or impersonation
- Collecting user credentials
- Any malicious activities

Using this project for illegal purposes is **unethical and illegal**.

---

**If you found this project helpful, please consider giving it a ⭐!**

Made with ❤️ by [Ayan Liaqat](https://github.com/Ayanprogrammer11)

</div>
