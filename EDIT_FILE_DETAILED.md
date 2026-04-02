# 📝 **EDIT FILE - SUPER DETAILED GUIDE**

## **GOAL:** Add blog link to your website

---

## **🎬 SCENE 1: OPEN FILE EXPLORER**

### **What you'll do:**
Open the program that shows your files (like folders on your computer).

### **EXACT STEPS:**

**Step 1:** Press these 2 keys at same time:
```
Windows Key + E
```
(Hold Windows, tap E)

**Expected result:**
- A window opens
- Shows folders (look like yellow folders)
- Title says "File Explorer"
- You'll see things like "Desktop", "Documents", "Downloads"

✅ **If you see this, you're good!**

**OR if that doesn't work:**

**Step 1 (Alternative):**
1. Press: `Windows Key` (the Windows logo button)
2. Type: `File Explorer`
3. Press: `Enter`

**Expected result:** Same window opens

---

## **🎬 SCENE 2: COPY THE ADDRESS**

### **What you'll do:**
Put the address to your folder into File Explorer so it takes you there.

### **EXACT STEPS:**

**Step 1:** Look at the top of File Explorer
- You'll see: `C:` or `Desktop` or something like that
- This is the **Address Bar** (shows where you are)

**Step 2:** Click on the address bar
- Position your mouse on it
- Left-click once
- It should be highlighted (turn blue/selected)

**Expected result:**
- Text in address bar becomes highlighted/selected
- You see the path highlighted

**Step 3:** If text isn't selected, do this:
- Triple-click on the address bar
- All text becomes selected

**Expected result:**
- Everything in address bar is selected (blue highlight)

**Step 4:** Now type this path (it will replace what was there):
```
C:\Users\Kelvin\Documents\GitHub\Undescovered-world-website
```

**Expected result:**
- The path appears in address bar
- Text is blue/selected

**Step 5:** Press: `Enter`

**Expected result:**
- File Explorer shows your website files!
- You'll see these files:
  - index.html
  - about.html
  - contact.html
  - blog.html
  - main.js
  - styles.css
  - And others...

✅ **If you see these files, you're in the right place!**

---

## **🎬 SCENE 3: FIND index.html FILE**

### **What you'll do:**
Find the index.html file in your folder.

### **EXACT STEPS:**

**Step 1:** Look at the list of files in File Explorer

**Step 2:** Find `index.html`
- Look for a file with this exact name
- It might have a small icon (looks like a blue/white file icon)
- You can see it in the list

**Expected result:**
- You see `index.html` in the list

✅ **Found it? Great! Continue...**

---

## **🎬 SCENE 4: OPEN WITH NOTEPAD**

### **What you'll do:**
Open index.html using Notepad (a simple text editor).

### **EXACT STEPS:**

**Step 1:** Right-click on `index.html`
- Position mouse on the file name
- Press right mouse button (right-click)
- A menu appears with options

**Expected result:**
- A context menu appears (small popup menu)
- You see options like: "Open", "Edit", "Delete", "Rename"

**Step 2:** Look for option "Open with"
- Might say "Open with" or "Open With"
- Click on it

**Expected result:**
- A submenu appears
- Shows programs you can use to open the file
- You should see "Notepad" in the list

**Step 3:** Click: `Notepad`

**Expected result:**
- Notepad opens (white window with text)
- It shows the contents of index.html
- You'll see lots of lines of code starting with `<`

✅ **See HTML code? Perfect!**

---

## **🎬 SCENE 5: FIND THE "ABOUT" PART**

### **What you'll do:**
Find where it says `About</a>` so you know where to add the new blog link.

### **EXACT STEPS:**

**Step 1:** In Notepad, press: `Ctrl + F`

**Expected result:**
- A search box appears
- Usually in top-right or top-left of Notepad
- You see an empty text field with "Find" label

**Step 2:** Type this in the search box:
```
About</a>
```

**Expected result:**
- Text appears in the search field
- The line with this text highlights in the file

**Step 3:** Press: `Enter`

**Expected result:**
- Notepad jumps to that line
- Highlights the text "About</a>" in yellow (or blue)

**Step 4:** Look at the full line
- It should say something like:
```html
<li><a href="about.html">About</a></li>
```

**Expected result:**
- You see this complete line

✅ **Found it? Great!**

---

## **🎬 SCENE 6: CLOSE SEARCH BOX**

### **What you'll do:**
Close the search box so you can edit.

### **EXACT STEPS:**

**Step 1:** Look at the search box you opened

**Step 2:** Close it by:
- Pressing: `Escape` key
- OR clicking the X button on search box

**Expected result:**
- Search box disappears
- You still see the file content
- The line with "About" is still visible

✅ **Can you see the file now?**

---

## **🎬 SCENE 7: POSITION YOUR CURSOR**

### **What you'll do:**
Click at the END of the "About" line so you can add a new line below it.

### **EXACT STEPS:**

**Step 1:** Look at the line with `About</a>`

**Step 2:** Look at the END of that line
- The very end should have: `</li>`
- This is the closing tag

**Step 3:** Click right after `</li>`
- Position your mouse at the very end of that line
- After the `>` symbol
- Left-click once

**Expected result:**
- You see a blinking cursor (thin line)
- It's at the end of the "About" line
- Right after `</li>`

✅ **See the cursor? Perfect!**

---

## **🎬 SCENE 8: ADD NEW LINE**

### **What you'll do:**
Press Enter to create a new line where you'll add the Blog link.

### **EXACT STEPS:**

**Step 1:** Press: `Enter` (the Return key)

**Expected result:**
- A new blank line appears below the "About" line
- Your cursor is now on this new line
- It's empty

✅ **See a new line? Good!**

---

## **🎬 SCENE 9: TYPE THE NEW CODE**

### **What you'll do:**
Type the exact text for the Blog link.

### **EXACT STEPS:**

**Step 1:** Make sure your cursor is on the new blank line

**Step 2:** Type this EXACTLY (copy-paste is better):
```html
<li><a href="blog.html">Blog</a></li>
```

**How to type it safely:**
- Easiest: Highlight this text above ☝️
- Press: `Ctrl + C` (copy)
- In Notepad, press: `Ctrl + V` (paste)
- The text appears!

**OR type it manually:**
```
<li><a href="blog.html">Blog</a></li>
```

**Expected result:**
- The new line appears in Notepad
- It looks exactly like the "About" line above it
- But says "Blog" instead of "About"

**Should look like:**
```html
<li><a href="about.html">About</a></li>
<li><a href="blog.html">Blog</a></li>
```

✅ **See both lines? Perfect!**

---

## **🎬 SCENE 10: VERIFY WHAT YOU TYPED**

### **What you'll do:**
Make sure you typed it correctly.

### **CHECK LIST:**

Your new line should have:
- ✅ `<li>` at the start
- ✅ `<a href="blog.html">` 
- ✅ `Blog` (the word)
- ✅ `</a>` 
- ✅ `</li>` at the end

**Does it match?**
```html
<li><a href="blog.html">Blog</a></li>
```

✅ **Yes?** Continue...
❌ **No?** Delete this line and try again

---

## **🎬 SCENE 11: SAVE THE FILE**

### **What you'll do:**
Save the changes you made so they're stored on your computer.

### **EXACT STEPS:**

**Step 1:** Press: `Ctrl + S`
- Hold Control, press S

**Expected result:**
- A small message might appear: "Saved" or nothing
- The file is now saved
- No asterisk (*) in the title bar (which would mean unsaved)

**Alternative method:**
- Click: "File" menu at top
- Click: "Save"

**Expected result:** Same thing - file is saved

✅ **File saved!**

---

## **🎬 SCENE 12: CLOSE NOTEPAD**

### **What you'll do:**
Close Notepad since we're done editing.

### **EXACT STEPS:**

**Step 1:** Press: `Alt + F4`
- OR click the X button in top-right corner

**Expected result:**
- Notepad closes
- You're back to File Explorer
- You see your files again

✅ **Done with editing!**

---

## **📋 SUMMARY - WHAT YOU JUST DID**

| What | How | Expected |
|------|-----|----------|
| Opened File Explorer | Windows + E | Shows folders |
| Navigated to folder | Typed path in address bar | Shows website files |
| Found index.html | Looked in file list | File is visible |
| Opened with Notepad | Right-click → Open with → Notepad | Shows code |
| Found About line | Ctrl+F → Search "About</a>" | Line highlighted |
| Added new line | Click at end → Press Enter | Blank line created |
| Typed Blog link | Copy/paste: `<li><a href="blog.html">Blog</a></li>` | New line added |
| Saved file | Ctrl+S | File saved |

---

## **✅ CHECKLIST - DID YOU DO IT?**

- ✅ Opened File Explorer
- ✅ Navigated to website folder
- ✅ Opened index.html with Notepad
- ✅ Found the "About" line
- ✅ Added a new line below it
- ✅ Typed the Blog link line
- ✅ Saved the file (Ctrl+S)
- ✅ Closed Notepad

**If all checked, you're ready for next step!**

---

## **🎯 WHAT'S NEXT?**

After this step, you'll:
1. Open Command Prompt
2. Run 4 git commands
3. Wait 30 seconds
4. Check your website
5. Blog link appears!

**Continue with the Command Prompt steps next!**

---

## **❓ TROUBLESHOOTING**

### **"I can't find index.html"**
- Make sure you're in the right folder
- Check the address bar shows: `C:\Users\Kelvin\Documents\GitHub\Undescovered-world-website`
- File list should show: index.html, about.html, contact.html, etc.

### **"Notepad won't open"**
- Right-click index.html
- Select "Open with"
- Choose "Notepad"
- If still doesn't work, try "Visual Studio Code" or "VS Code"

### **"I can't find 'About</a>' line"**
- Make sure search is working (Ctrl+F)
- Try searching for just "About" (no `</a>`)
- Scroll through file manually

### **"I typed the line but it looks wrong"**
- Delete what you typed
- Copy from this guide: `<li><a href="blog.html">Blog</a></li>`
- Paste it (Ctrl+V) instead of typing

### **"File won't save"**
- Press Ctrl+S
- Wait 1 second
- If still doesn't save, check if file is read-only (right-click → Properties → uncheck Read-only)

---

## **✨ YOU'RE DOING GREAT!**

This was the hard part. Everything after this is easy!

**Next step: Open Command Prompt and run the git commands!**

---

**Ready? Any questions? Let me know!** 🚀
