# Undiscovered World Website - JavaScript Features Documentation

## Overview
The website includes a comprehensive JavaScript module (`main.js`) that provides interactive features and smooth user experience.

## Features Included

### 1. **Scroll Animations**
- Elements fade in and slide up as they become visible during scroll
- Uses `IntersectionObserver` for performance optimization
- Applies to: cards, sections, ticket cards, and shop items
- Smooth 0.6s transition with ease timing function

### 2. **Carousel Functionality**
- Horizontal scrollable card containers
- Previous/Next navigation buttons
- Smooth scrolling with 320px increment
- Works on all sections: Tourism, Culture, Language, Cooking
- Uses native `scrollBy()` with smooth behavior

### 3. **Form Handling**
- **Subscription Form Validation**
  - Email validation with regex pattern
  - Success feedback: button changes color to green with checkmark
  - Auto-clear form after 2 seconds
  - Error alerts for invalid emails

### 4. **Navigation**
- **Smooth Scroll**: All anchor links scroll smoothly to target sections
- **Active State**: Navigation links highlight in red (#e74c3c) when scrolling through corresponding sections
- **Mobile Menu Toggle**: Hamburger menu integration (if present)

### 5. **Button Interactions**
- **Ripple Effect**: Material Design ripple animation on button click
- **Visual Feedback**: Hover states and click animations
- Applies to: `.btn-primary` and `.btn-secondary`

### 6. **Scroll-to-Top Button**
- Appears after scrolling 300px down
- Positioned fixed at bottom-right
- Smooth scroll back to top on click
- Hover effect: scales and changes color
- Auto-hides when near top of page

### 7. **Notification System**
- Toast-style notifications for user feedback
- Three types: `success` (green), `error` (red), `info` (blue)
- Auto-dismisses after 3 seconds
- Slide-in and slide-out animations
- Usage: `showNotif(message, type)`

### 8. **Utility Functions**

#### Email Validation
```javascript
// Validates email format
const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
```

#### Copy to Clipboard
```javascript
copyToClipboard('text to copy');
// Shows success notification
```

#### Form Validation
```javascript
const isValid = validateForm(formElement);
// Highlights invalid fields in red
```

#### Counter Animation
```javascript
animateCounter(element, targetNumber, duration);
// Animates number counting up to target
```

### 9. **Keyboard Shortcuts**
- **Ctrl/Cmd + E**: Focus on email subscription input
- Extensible for additional shortcuts

### 10. **Mobile Menu**
- Hamburger menu toggle (if `.hamburger` element exists)
- Auto-closes when clicking navigation links
- Active state visual feedback

### 11. **Performance Features**
- Page load time monitoring (logged to console)
- Efficient event delegation
- Optimized observer patterns
- Minified code (7KB)

### 12. **Dynamic Content**
- Auto-update year in footer elements with `data-year` attribute
- Usage: `<span data-year></span>`

## CSS Animations Injected by JavaScript

The script automatically injects the following animations:

```css
@keyframes slideIn {
    from { transform: translateX(100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
}

@keyframes slideOut {
    from { transform: translateX(0); opacity: 1; }
    to { transform: translateX(100%); opacity: 0; }
}

@keyframes ripple {
    to { transform: scale(4); opacity: 0; }
}
```

## Usage Examples

### Email Subscription (HTML)
```html
<form class="subscribe-form">
    <input type="email" placeholder="Enter your email" required>
    <button type="submit">Subscribe</button>
</form>
```
JavaScript handles validation and feedback automatically.

### Carousel (HTML)
```html
<div class="carousel-container">
    <button class="carousel-btn prev">&#10094;</button>
    <div class="card-container">
        <!-- cards here -->
    </div>
    <button class="carousel-btn next">&#10095;</button>
</div>
```

### Dynamic Year (HTML)
```html
<p>&copy; <span data-year></span> Undiscovered World</p>
```
JavaScript auto-updates to current year.

### Smooth Links (HTML)
```html
<a href="#tourism">Tourism</a>
```
Automatically scrolls to `<section id="tourism">` smoothly.

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- IntersectionObserver support required for scroll animations
- Fallbacks for older browsers included
- Graceful degradation for unsupported features

## Performance Metrics

- **File Size**: ~7KB (minified inline)
- **Load Time**: No external dependencies
- **Execution**: All features load on DOMContentLoaded
- **Memory**: Efficient observer cleanup

## Debug/Console Output

When the page loads, you'll see:
```
✓ Undiscovered World JS loaded
Page loaded in XXXms
```

## Customization

To modify animations, update these values in `main.js`:

- **Scroll Animation Delay**: Change `threshold` and `rootMargin` in `observerOptions`
- **Carousel Scroll Amount**: Change `320` in the `scroll()` method
- **Button Ripple Duration**: Change `0.6s` in ripple animation
- **Scroll-to-Top Trigger**: Change `300` in scroll event listener
- **Notification Timeout**: Change `3000` in `showNotif()` function

## Future Enhancements

Possible additions:
- Image lazy loading
- Service worker for offline functionality
- Advanced form validation
- Search functionality
- Analytics integration
- Dark mode toggle
- Accessibility features (ARIA labels)

---

**Last Updated**: 2026-03-31  
**Status**: Production Ready
