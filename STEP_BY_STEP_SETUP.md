# 📝 STEP-BY-STEP - EDIT & UPLOAD CHANGES

## ✅ GOAL
Add blog link to your website and upload the changes so your blog page goes live.

---

## 🔴 **STEP 1: OPEN FILE IN NOTEPAD** (3 minutes)

### **On Your Computer:**

**1.1** Press: **Windows Key** (look for Windows logo on keyboard)
- Screen should show search box

**1.2** Type: `File Explorer`
- Click on "File Explorer"
- A window opens

**1.3** In the window, click the address bar (top) and paste:
```
C:\Users\Kelvin\Documents\GitHub\Undescovered-world-website
```
- Press Enter
- You see all your website files!

**1.4** Look for: `index.html`
- Right-click on it
- A menu appears
- Click: "Open with"
- Click: "Notepad"
- File opens in Notepad! ✅

---

## 🟡 **STEP 2: FIND THE LOCATION TO ADD LINK** (1 minute)

### **In Notepad:**

**2.1** Press: **Ctrl + F**
- A search box appears at top

**2.2** Type: `About</a>`
- This searches for "About</a>" on the page
- It will HIGHLIGHT that line

**2.3** You should see this:
```html
<li><a href="about.html">About</a></li>
```

**2.4** Click the X to close search box
- But keep the line visible!

---

## 🟢 **STEP 3: ADD THE BLOG LINK** (1 minute)

### **Still in Notepad:**

**3.1** Click at the END of this line:
```html
<li><a href="about.html">About</a></li>
```
- Your cursor should be after `</li>`

**3.2** Press: **Enter** (creates new line)
- You now have a blank line

**3.3** Type this EXACTLY (copy it):
```html
<li><a href="blog.html">Blog</a></li>
```

**Before:** Should look like:
```html
<li><a href="about.html">About</a></li>
```

**After:** Should look like:
```html
<li><a href="about.html">About</a></li>
<li><a href="blog.html">Blog</a></li>
```

✅ Blog link added!

---

## 💾 **STEP 4: SAVE THE FILE** (30 seconds)

### **Still in Notepad:**

**4.1** Press: **Ctrl + S**
- The file is saved!
- Title bar should NOT show an asterisk (*)

✅ Changes saved!

**4.2** Close Notepad
- Click X button (top right)

---

## 🔵 **STEP 5: OPEN COMMAND PROMPT** (1 minute)

### **On Your Computer:**

**5.1** Press: **Windows Key**
- Search box appears

**5.2** Type: `Command Prompt`
- Click on "Command Prompt"
- A BLACK WINDOW opens

✅ Command Prompt ready!

---

## 🟣 **STEP 6: GO TO YOUR PROJECT FOLDER** (1 minute)

### **In Command Prompt:**

You see something like:
```
C:\Users\Kelvin>
```

**6.1** Copy this ENTIRE text:
```
cd C:\Users\Kelvin\Documents\GitHub\Undescovered-world-website
```

**6.2** Right-click in Command Prompt
- A menu appears
- Click: "Paste"
- The text appears

**6.3** Press: **Enter**
- Wait 1 second
- You see:
```
C:\Users\Kelvin\Documents\GitHub\Undescovered-world-website>
```

✅ You're in the right folder!

---

## 🟠 **STEP 7: RUN FIRST GIT COMMAND** (1 minute)

### **In Command Prompt:**

**7.1** Type:
```
git add .
```
- Press: **Enter**
- Wait 2 seconds
- You return to the prompt (no message = success!)

✅ Changes staged!

---

## 🟤 **STEP 8: RUN SECOND GIT COMMAND** (1 minute)

### **In Command Prompt:**

**8.1** Type:
```
git commit -m "Added blog page link"
```
- Press: **Enter**
- Wait 2 seconds
- You see a message about changes

✅ Changes committed!

---

## ⚫ **STEP 9: PUSH TO GITHUB** (2 minutes)

### **In Command Prompt:**

**9.1** Type:
```
git push origin main
```
- Press: **Enter**
- Wait 10 seconds
- You see upload progress

✅ Changes uploaded to GitHub!

---

## 🟢 **STEP 10: WAIT FOR NETLIFY** (30 seconds)

### **After Command Prompt:**

**10.1** Wait **30-60 seconds**
- Netlify automatically detects the change
- Your website rebuilds
- Blog page goes live!

✅ Website updated!

---

## ✅ **VERIFICATION - IS IT WORKING?**

### **Check if blog page is live:**

**11.1** Go to: `https://yoursite.netlify.app`
- You should see "Blog" link in navigation!

**11.2** Click the "Blog" link
- You go to `/blog.html`
- You see the posting form!

✅ Everything working!

---

## 📋 **QUICK REFERENCE - ALL 9 STEPS**

```
STEP 1: Open File Explorer
        Go to: C:\Users\Kelvin\Documents\GitHub\Undescovered-world-website

STEP 2: Right-click index.html
        Open with → Notepad

STEP 3: Press Ctrl+F
        Search for: About</a>

STEP 4: Click at end of About line
        Press Enter (new line)
        Type: <li><a href="blog.html">Blog</a></li>

STEP 5: Press Ctrl+S (save)

STEP 6: Close Notepad

STEP 7: Open Command Prompt
        (Search for "Command Prompt")

STEP 8: Paste this and press Enter:
        cd C:\Users\Kelvin\Documents\GitHub\Undescovered-world-website

STEP 9: Type and press Enter:
        git add .

STEP 10: Type and press Enter:
         git commit -m "Added blog page link"

STEP 11: Type and press Enter:
         git push origin main

STEP 12: Wait 30 seconds for website to update
```

**DONE! 🎉**

---

## 🎬 **VISUAL EXAMPLE - WHAT YOU'LL SEE**

### **In Notepad:**

BEFORE:
```html
<nav>
    <ul class="nav-links">
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="contact.html">Contact</a></li>
    </ul>
</nav>
```

AFTER (with Blog added):
```html
<nav>
    <ul class="nav-links">
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="blog.html">Blog</a></li>
        <li><a href="contact.html">Contact</a></li>
    </ul>
</nav>
```

✅ Blog link added between About and Contact!

---

## 🎯 **COMMAND PROMPT - WHAT YOU'LL TYPE**

You'll type these 3 commands (one at a time):

**Command 1:**
```
git add .
```

**Command 2:**
```
git commit -m "Added blog page link"
```

**Command 3:**
```
git push origin main
```

That's it! 3 commands = your website updates!

---

## ❓ **IF SOMETHING GOES WRONG**

### **"File not found"**
→ Check your path: `C:\Users\Kelvin\Documents\GitHub\Undescovered-world-website`
→ Make sure folder exists

### **"Command not recognized"**
→ Make sure you typed it exactly right
→ Check for typos

### **"Can't find the About line"**
→ Press Ctrl+F again
→ Search for just: `About`
→ Look for `<a href="about.html">About</a>`

### **Still not working?**
→ Read this guide again slowly
→ Follow each step exactly
→ Ask me if stuck!

---

## ✨ **SUMMARY**

**What you're doing:**
1. Edit HTML file (add blog link)
2. Save file
3. Upload changes to GitHub
4. GitHub tells Netlify
5. Netlify updates your website
6. Website now has blog!

**Time needed:** 5-10 minutes
**Difficulty:** Very easy (just copy-paste!)
**Result:** Blog page goes live! ✅

---

## 🚀 **NEXT: START POSTING!**

After you complete these 9 steps:

1. Go to: `yoursite.netlify.app/blog.html`
2. Click "Blog" link from navigation (or type /blog.html)
3. Fill the form
4. Click "Post Now"
5. Your post appears instantly! ✅

---

**Ready? Let's start with Step 1!** 🎉
