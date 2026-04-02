# 📹 VISUAL WALKTHROUGH - FOLLOW ALONG!

## 🎬 **WATCH THIS (READ CAREFULLY)**

I'll describe exactly what you'll see and do on your screen.

---

## 🔴 **SCENE 1: FILE EXPLORER**

### **What You Do:**
1. Press **Windows Key** on keyboard
2. Type: `File Explorer`
3. Click the folder icon that appears

### **What You See:**
```
A folder window opens showing:
- Your Documents folder
- Pictures, Downloads, etc.
```

### **Next Action:**
- Look at the TOP of the window
- You see an address bar showing: `C:\Users\Kelvin\Documents`
- Click on that address bar
- It highlights blue

---

## 🟡 **SCENE 2: NAVIGATE TO FOLDER**

### **What You Do:**
1. Delete all text in address bar (select all, then delete)
2. Type or PASTE this:
```
C:\Users\Kelvin\Documents\GitHub\Undescovered-world-website
```
3. Press **Enter**

### **What You See:**
```
The folder window now shows many files:
- index.html ← THIS ONE!
- about.html
- contact.html
- blog.html ← I created this!
- styles.css
- main.js
- ... and more
```

### **Next Action:**
- Find `index.html` in the list
- Right-click on it
- A menu pops up

---

## 🟢 **SCENE 3: OPEN WITH NOTEPAD**

### **What You See:**
```
A popup menu appears with options:
- Edit
- Cut
- Copy
- Delete
- Open with ← CLICK THIS
- Send to
- ... more options
```

### **What You Do:**
1. Click: "Open with"
2. A submenu appears showing:
   ```
   - Notepad
   - WordPad
   - Visual Studio Code
   - ... other apps
   ```
3. Click: "Notepad"

### **What You See:**
```
Notepad window opens showing your HTML code:
Line 1: <!DOCTYPE html>
Line 2: <html lang="en">
Line 3: <head>
... lots of code ...
```

---

## 🔵 **SCENE 4: SEARCH FOR "ABOUT"**

### **What You Do:**
1. Press: **Ctrl + F**
2. A search box appears at TOP of Notepad

### **What You See:**
```
At the top of Notepad:
┌─────────────────────────┐
│ Find:  [search box]  ↑↓ │
└─────────────────────────┘
```

### **What You Do:**
1. Click in the search box
2. Type: `About</a>`
3. Press Enter

### **What You See:**
```
Notepad finds and HIGHLIGHTS this line:
<li><a href="about.html">About</a></li>
                ↑
            HIGHLIGHTED IN BLUE
```

---

## 🟣 **SCENE 5: CLOSE SEARCH, POSITION CURSOR**

### **What You Do:**
1. Close search box (click X)
2. Click at the END of the "About" line
   - Specifically after: `</li>`

### **What You See:**
```
The search box closes.
Your cursor is now positioned:

<li><a href="about.html">About</a></li>|
                                        ↑
                            CURSOR IS HERE (blinking line)
```

---

## ⚫ **SCENE 6: ADD NEW LINE AND TYPE**

### **What You Do:**
1. Press: **Enter**
2. A new blank line appears
3. Type this EXACTLY:
```
<li><a href="blog.html">Blog</a></li>
```

### **What You See:**
```
Before:
<li><a href="about.html">About</a></li>

After (now you see):
<li><a href="about.html">About</a></li>
<li><a href="blog.html">Blog</a></li>
                            ↑
                    YOU JUST TYPED THIS!
```

---

## 🟠 **SCENE 7: SAVE FILE**

### **What You Do:**
1. Press: **Ctrl + S**

### **What You See:**
```
The title bar of Notepad:
BEFORE: "Untitled - Notepad *" (with asterisk)
AFTER:  "index.html - Notepad" (no asterisk)
                        ↑
                   FILE IS SAVED!
```

### **What You Do:**
1. Close Notepad
2. Click the X button (top right)

---

## 🟤 **SCENE 8: OPEN COMMAND PROMPT**

### **What You Do:**
1. Press: **Windows Key**
2. Type: `Command Prompt`
3. Click the black icon

### **What You See:**
```
A BLACK WINDOW opens:

C:\Users\Kelvin>_
            ↑
      BLINKING CURSOR HERE
```

This is Command Prompt (also called Terminal or CMD).

---

## ⚪ **SCENE 9: GO TO YOUR FOLDER**

### **What You Do:**
1. Copy this line:
```
cd C:\Users\Kelvin\Documents\GitHub\Undescovered-world-website
```

2. Right-click in Command Prompt window
3. Select "Paste"

### **What You See:**
```
The text appears in Command Prompt:
C:\Users\Kelvin>cd C:\Users\Kelvin\Documents\GitHub\Undescovered-world-website
```

### **What You Do:**
1. Press: **Enter**

### **What You See:**
```
BEFORE:
C:\Users\Kelvin>cd C:\Users\Kelvin\Documents\GitHub\Undescovered-world-website

AFTER (wait 1 second, then you see):
C:\Users\Kelvin\Documents\GitHub\Undescovered-world-website>_
        ↑
    NOW YOU'RE IN THE RIGHT FOLDER!
```

---

## 🟡 **SCENE 10: RUN FIRST COMMAND**

### **What You Do:**
1. Type:
```
git add .
```

2. Press: **Enter**

### **What You See:**
```
BEFORE:
C:\Users\Kelvin\Documents\GitHub\Undescovered-world-website>git add .

AFTER (wait 2 seconds):
C:\Users\Kelvin\Documents\GitHub\Undescovered-world-website>_
        ↑
    IT JUST RETURNS TO PROMPT (no message = success!)
```

---

## 🟢 **SCENE 11: RUN SECOND COMMAND**

### **What You Do:**
1. Type:
```
git commit -m "Added blog page link"
```

2. Press: **Enter**

### **What You See:**
```
The command runs and shows:
[main xxxxxx] Added blog page link
 1 file changed, 1 insertion(+)
        ↑
   YOU SEE THIS MESSAGE
```

---

## 🔵 **SCENE 12: RUN THIRD COMMAND (THE BIG ONE!)**

### **What You Do:**
1. Type:
```
git push origin main
```

2. Press: **Enter**

### **What You See:**
```
This might take 10-15 seconds.

You see something like:
Counting objects: 5, done.
Delta compression using up to 8 threads.
Compressing objects: 100% (5/5), done.
Writing objects: 100% (5/5), 598 bytes | 0 bytes/s, done.
Total 5 (delta 2), reused 0 (delta 0)
remote: Resolving deltas: 100% (2/2), completed with 1 local object.
To https://github.com/YOUR_USERNAME/Undiscovered-world-website.git
   abc1234..def5678  main -> main
        ↑
    YOUR CHANGES ARE UPLOADED!
```

---

## 🟣 **SCENE 13: WAIT FOR NETLIFY**

### **What You Do:**
1. Wait 30-60 seconds
2. Netlify automatically:
   - Sees the GitHub change
   - Rebuilds your website
   - Deploys it live

### **What You See:**
No action on your part. Just wait!

---

## 🟠 **SCENE 14: CHECK YOUR WEBSITE**

### **What You Do:**
1. Open browser
2. Go to: `https://yoursite.netlify.app`
   (Replace "yoursite" with your actual Netlify URL)

### **What You See:**
```
Your website loads and now shows:

NAVIGATION:
Home  |  Blog  |  About  |  Contact
       ↑
    BLOG IS HERE NOW!
```

### **What You Do:**
1. Click the "Blog" link
2. Page loads showing the posting form!

---

## 🎉 **SCENE 15: SUCCESS!**

### **What You See:**
```
Blog page with:
- Title: "📝 Blog & Updates"
- Form for writing posts
- Fields for: Title, Category, Content, Image
- "Post Now" button

YOU'RE READY TO POST!
```

### **What You Do Next:**
1. Fill in the form
2. Write your first post
3. Click "Post Now"
4. POST APPEARS INSTANTLY! ✅

---

## 📋 **SUMMARY - ALL SCENES**

| Scene | Action | Time |
|-------|--------|------|
| 1 | Open File Explorer | 1 min |
| 2 | Navigate to folder | 1 min |
| 3 | Open index.html | 30 sec |
| 4 | Search for About | 30 sec |
| 5 | Position cursor | 30 sec |
| 6 | Add blog link | 1 min |
| 7 | Save file | 30 sec |
| 8 | Open Command Prompt | 1 min |
| 9 | Navigate to folder | 30 sec |
| 10 | Run git add | 30 sec |
| 11 | Run git commit | 30 sec |
| 12 | Run git push | 2 min |
| 13 | Wait for Netlify | 1 min |
| 14 | Check website | 1 min |
| 15 | Start posting! | Anytime! |

**TOTAL TIME: 10-15 minutes**

---

## ✅ **YOU'RE DONE!**

Now you know exactly what to do and what you'll see!

**Ready to start? Go to Step 1 and follow along!** 🚀
