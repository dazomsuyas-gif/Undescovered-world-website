# 🎨 HOW TO EDIT YOUR WEBSITE - COMPLETE GUIDE

## 🎯 WHY LESS IMAGES & ANIMATIONS?

Your website currently uses:
- **Unsplash API links** - Generic world images, not African-specific
- **Basic animations** - Only hover effects and fade-ins
- **Limited cartoons** - No custom illustrations

**Solution:** Replace with African/Tanzania images + add more animations

---

## 📝 HOW TO EDIT YOUR WEBSITE

### **Option 1: EASIEST - Edit in VS Code** (Recommended)

**Step 1: Download VS Code**
- Go to: https://code.visualstudio.com
- Download and install
- It's free!

**Step 2: Open Your Project**
- Open VS Code
- File → Open Folder
- Choose: `C:\Users\Kelvin\Documents\GitHub\Undescovered-world-website`
- You'll see all files on the left

**Step 3: Edit Any File**
- Click on file (e.g., `index.html`)
- Edit in the middle panel
- Save with Ctrl+S
- Done!

**Step 4: See Changes**
- Open your Netlify website URL
- Changes appear in 30 seconds

---

### **Option 2: ONLINE - Edit in Netlify**

**Step 1: Go to Netlify**
- Go to: https://app.netlify.com
- Login with your account

**Step 2: Find Your Site**
- Click on your site

**Step 3: Open Netlify CMS** (if available)
- Or use: Site settings → Edit site files

**Note:** This requires enabling Netlify CMS (we can set up)

---

### **Option 3: SIMPLE - Edit in Notepad**

**Step 1: Open File**
- Go to: `C:\Users\Kelvin\Documents\GitHub\Undescovered-world-website`
- Right-click file → Open with → Notepad

**Step 2: Make Changes**
- Find the text you want to change
- Edit it

**Step 3: Save**
- Ctrl+S

**Step 4: Update Website**
- Open VS Code terminal or Git Bash
- Run:
  ```bash
  git add .
  git commit -m "Updated website content"
  git push origin main
  ```

---

## 🌍 **ISSUE #1: NOT ENOUGH AFRICAN IMAGES**

### **Current Problem:**
Your images are from Unsplash (generic world images)

### **Solution:**

**Replace Generic Images with African Images**

Here are FREE African image sources:

#### **Best African Image Sites:**

1. **Unsplash Africa** (Free)
   - https://unsplash.com/s/photos/africa
   - https://unsplash.com/s/photos/tanzania
   - https://unsplash.com/s/photos/safari
   - https://unsplash.com/s/photos/african-people

2. **Pexels** (Free)
   - https://www.pexels.com/search/africa/
   - https://www.pexels.com/search/tanzania/

3. **Pixabay** (Free)
   - https://pixabay.com/photos/?q=africa
   - https://pixabay.com/photos/?q=tanzania

4. **Africa Travel Portal** (Free)
   - Amazing Tanzania images
   - Arusha specific

---

## 📸 **HOW TO ADD NEW IMAGES**

### **Step 1: Find Image URL**

1. Go to Unsplash: https://unsplash.com/s/photos/tanzania
2. Search for what you want (e.g., "Mount Kilimanjaro", "Arusha market", "African food", "Maasai")
3. Click image
4. Right-click → Copy image address
5. Copy the URL

### **Step 2: Replace in Your HTML**

Example - Find this in index.html:
```html
<img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop"
     alt="Beach Destination">
```

Replace with:
```html
<img src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=400&h=300&fit=crop"
     alt="Zanzibar Beaches">
```

### **Step 3: Save & Push**

```bash
git add .
git commit -m "Updated images to African destinations"
git push origin main
```

---

## 🎨 **SPECIFIC IMAGES TO UPDATE**

### **Tourism Section** - Find & Replace:

**Current:** Generic beach
**Replace with:** Zanzibar beach
```
https://images.unsplash.com/photo-1516426122078-c23e76319801?w=400&h=300&fit=crop
```

**Current:** Generic mountain
**Replace with:** Mount Kilimanjaro
```
https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop
```

### **Culture Section** - Find & Replace:

**Current:** Generic cultural photo
**Replace with:** Maasai warrior
```
https://images.unsplash.com/photo-1574482620811-1aa16ffe3c82?w=400&h=300&fit=crop
```

**Current:** Generic festival
**Replace with:** African festival/celebration
```
https://images.unsplash.com/photo-1535245733244-4b6c903585d2?w=400&h=300&fit=crop
```

### **Cuisine Section** - Find & Replace:

**Current:** Generic food
**Replace with:** African/Tanzania food
```
https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop
```

### **Poultry Section** - Find & Replace:

**Current:** Generic images
**Replace with:** Chicken farm, eggs, market
```
https://images.unsplash.com/photo-1500595046891-5ceb7c45ef23?w=400&h=300&fit=crop
```

---

## ✨ **ISSUE #2: NOT ENOUGH ANIMATIONS**

### **Current Animations:**
- Hover effects
- Fade-in on scroll

### **Solution: Add More Animations**

Add this to your `styles.css`:

```css
/* ============================== 
   MORE ANIMATIONS
   ============================== */

/* Bounce animation */
@keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
}

/* Pulse animation */
@keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
}

/* Slide in from left */
@keyframes slideInLeft {
    from { transform: translateX(-100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
}

/* Slide in from right */
@keyframes slideInRight {
    from { transform: translateX(100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
}

/* Rotate animation */
@keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

/* Scale up */
@keyframes scaleUp {
    from { transform: scale(0.8); opacity: 0; }
    to { transform: scale(1); opacity: 1; }
}

/* Glow effect */
@keyframes glow {
    0%, 100% { box-shadow: 0 0 5px rgba(231, 76, 60, 0.5); }
    50% { box-shadow: 0 0 20px rgba(231, 76, 60, 1); }
}

/* Apply animations to elements */
.card {
    animation: scaleUp 0.5s ease-out;
}

.card:hover {
    animation: pulse 1s infinite;
}

.btn-primary {
    animation: glow 2s infinite;
}

.section-title {
    animation: slideInLeft 0.6s ease-out;
}

.hero-content h2 {
    animation: slideInRight 0.8s ease-out;
}

/* Animated background */
.hero {
    animation: fade-in-hero 1s ease-out;
}

@keyframes fade-in-hero {
    from { opacity: 0; }
    to { opacity: 1; }
}

/* Smooth transitions */
* {
    transition: all 0.3s ease;
}
```

---

## 🎬 **ISSUE #3: NO CARTOONS/ILLUSTRATIONS**

### **Free Cartoon/Illustration Sources:**

1. **Pixabay Illustrations** (Free)
   - https://pixabay.com/illustrations/?q=african

2. **Unsplash Illustrations** (Free)
   - Search "illustration" with "africa"

3. **FreePik** (Free & Premium)
   - https://www.freepik.com/
   - Search: "African illustration", "Tanzania cartoon"

4. **Canva** (Free with Canva)
   - https://www.canva.com
   - Has African-themed templates & illustrations

5. **Font Awesome** (Free Icons)
   - https://fontawesome.com
   - Add to your site:
   ```html
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
   ```

### **How to Add Cartoons:**

**Step 1: Find cartoon**
- Search on Pixabay/Unsplash
- Example: "Cartoon map of Africa"

**Step 2: Get URL**
- Right-click → Copy image address

**Step 3: Add to HTML**

```html
<img src="https://your-cartoon-url.jpg" 
     alt="African Map Cartoon"
     class="cartoon-illustration">
```

**Step 4: Style with CSS**

```css
.cartoon-illustration {
    width: 100%;
    max-width: 400px;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    animation: bounce 3s infinite;
}
```

---

## 📝 **SPECIFIC EDITS TO MAKE**

### **Edit 1: Add Your Personal Story**

In `about.html`, find:
```html
<p>founder biography content</p>
```

Replace with YOUR story about Undiscovered World!

Example:
```html
<p>I started Undiscovered World to bridge the gap between 
African talent, culture, and global opportunities. 
From Arusha, Tanzania, I believe in sustainable tourism, 
authentic cultural exchange, and empowering local producers.</p>
```

### **Edit 2: Update About Section**

In `index.html`, find:
```html
<section id="about">
    <!-- About content -->
</section>
```

Add more details about:
- Your mission
- Your background
- Your vision for Tanzania
- Your business model

### **Edit 3: Update Footer Contact Info**

In footer, add:
```html
<p>📍 Location: Arusha, Tanzania</p>
<p>💼 Education: University of Dar es Salaam, Wuhan Textile University</p>
<p>🌍 Languages: English, Swahili, Mandarin</p>
```

---

## 🎨 **ADD ANIMATED ILLUSTRATIONS**

### **Add Hero Illustration**

```html
<!-- In Hero Section -->
<div class="hero-illustration">
    <img src="https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&h=400"
         alt="African map illustration"
         class="bounce-animation">
</div>
```

### **Add Section Decorations**

```html
<!-- Before each section -->
<div class="section-decoration">
    <img src="https://your-decoration-url.svg" 
         alt="Decoration"
         class="rotate-animation">
</div>
```

---

## 🎬 **CSS FOR BETTER ANIMATIONS**

Add to `styles.css`:

```css
/* ============================== 
   ENHANCED ANIMATIONS
   ============================== */

/* Fade in */
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

/* Slide down */
@keyframes slideDown {
    from { transform: translateY(-50px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
}

/* Float effect */
@keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
}

/* Shimmer effect */
@keyframes shimmer {
    0% { background-position: -1000px 0; }
    100% { background-position: 1000px 0; }
}

/* Heartbeat */
@keyframes heartbeat {
    0%, 100% { transform: scale(1); }
    25% { transform: scale(1.1); }
    50% { transform: scale(1); }
}

/* Apply to elements */
.card {
    animation: fadeIn 0.6s ease-out;
}

.card:hover {
    animation: float 2s ease-in-out infinite;
}

.image-container {
    animation: slideDown 0.8s ease-out;
}

.hero-content {
    animation: fadeIn 1s ease-out;
}

.btn-primary:hover {
    animation: heartbeat 1s ease-in-out;
}
```

---

## 📸 **TANZANIA-SPECIFIC IMAGE IDEAS**

### Tourism:
- Mount Kilimanjaro
- Serengeti National Park
- Zanzibar beaches
- Stone Town
- Crater Lake
- Arusha town market

### Culture:
- Maasai warriors
- Traditional dances
- Local crafts
- Maasai villages
- African markets

### Food:
- Ugali (traditional dish)
- Nyama choma (grilled meat)
- Tanzanian fruits
- Market stalls
- Traditional cooking

### Poultry:
- Chicken farms
- Market sellers
- Eggs display
- Farm animals
- Village farming

### People:
- Smiling locals
- Family groups
- Market vendors
- Children
- Community gathering

---

## 🔄 **STEP-BY-STEP: UPDATE YOUR WEBSITE**

### **Step 1: Open VS Code**
- Open your project folder

### **Step 2: Edit index.html**
- Find image URLs
- Replace with African image URLs
- Save

### **Step 3: Edit styles.css**
- Add new animations (see above)
- Save

### **Step 4: Edit about.html**
- Add your personal story
- Update information
- Save

### **Step 5: Edit contact.html**
- Update contact info
- Add location details
- Save

### **Step 6: Upload to GitHub**
```bash
git add .
git commit -m "Added African images and more animations"
git push origin main
```

### **Step 7: Check Website**
- Go to your Netlify URL
- Refresh (Ctrl+F5)
- See changes live!

---

## ✨ **YOUR ACTION PLAN**

1. **TODAY:**
   - [ ] Download VS Code
   - [ ] Open your project
   - [ ] Find 5 image URLs to replace

2. **THIS WEEK:**
   - [ ] Replace all images with African versions
   - [ ] Add new animations to CSS
   - [ ] Update personal information
   - [ ] Push to GitHub

3. **RESULT:**
   - ✅ African-focused website
   - ✅ More animations
   - ✅ Your story featured
   - ✅ Live in 30 minutes

---

## 🆘 **NEED HELP?**

1. **Finding images?** → Use image sources above
2. **Editing HTML?** → Use VS Code (easier than notepad)
3. **Adding animations?** → Copy-paste CSS code above
4. **Push to GitHub?** → Follow git commands above

---

**Ready? Download VS Code and start editing! 🚀**
