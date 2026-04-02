# 🔧 NETLIFY FUNCTIONS - BACKEND APIS GUIDE

## ✨ WHAT ARE NETLIFY FUNCTIONS?

**Netlify Functions** = Serverless backend code for your website

**What this means:**
- No server to manage
- Pay only for what you use
- Free tier available
- Can send emails, save data, handle payments
- Runs on AWS Lambda

---

## 🎯 **WHAT YOU'LL BUILD**

### **Function 1: Contact Form Handler**
- Receives form submission
- Validates data
- Sends email notification
- Returns success/error

### **Function 2: Email Notifications**
- Sends email when form submitted
- Notifies you immediately
- Professional formatting

### **Function 3: Newsletter Signup**
- Collects email addresses
- Saves to database/email service
- Sends confirmation

### **Function 4: Inquiry Logger**
- Saves all inquiries
- Stores in database
- Tracks metrics

---

## 📋 **SETUP - STEP 1: FOLDER STRUCTURE**

In your website folder, create:

```
Undiscovered-world-website/
├── netlify/
│   └── functions/
│       ├── contact-form.js
│       ├── send-email.js
│       └── newsletter-signup.js
├── index.html
├── about.html
├── contact.html
├── styles.css
└── main.js
```

**How to create:**
1. Open folder: `C:\Users\Kelvin\Documents\GitHub\Undescovered-world-website`
2. Create new folder: `netlify`
3. Inside netlify, create new folder: `functions`
4. Create files (see below)

---

## 💻 **FUNCTION 1: CONTACT FORM HANDLER**

**File:** `netlify/functions/contact-form.js`

```javascript
// Handle contact form submissions
exports.handler = async (event) => {
    // Only accept POST requests
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: 'Method Not Allowed' })
        };
    }

    try {
        // Parse form data
        const { name, email, phone, subject, message } = JSON.parse(event.body);

        // Validate required fields
        if (!name || !email || !subject || !message) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Missing required fields' })
            };
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Invalid email format' })
            };
        }

        // Log submission (you can add database storage here)
        console.log('Contact form submission:', {
            name,
            email,
            phone,
            subject,
            message,
            timestamp: new Date().toISOString()
        });

        // Here you would:
        // 1. Send email to yourself
        // 2. Save to database
        // 3. Send confirmation to user

        // For now, return success
        return {
            statusCode: 200,
            body: JSON.stringify({
                success: true,
                message: 'Thank you! We received your inquiry. We will respond within 24 hours.'
            })
        };

    } catch (error) {
        console.error('Error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Server error. Please try again.' })
        };
    }
};
```

---

## 📧 **FUNCTION 2: SEND EMAIL**

**File:** `netlify/functions/send-email.js`

**Note:** Requires Sendgrid or Mailgun integration

```javascript
const sgMail = require('@sendgrid/mail');

// Set your SendGrid API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        const { name, email, phone, subject, message } = JSON.parse(event.body);

        // Email to yourself
        const msg = {
            to: process.env.CONTACT_EMAIL, // Your email
            from: process.env.SENDGRID_FROM_EMAIL,
            subject: `New Inquiry: ${subject}`,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
                <hr>
                <p>Reply to: ${email}</p>
            `
        };

        await sgMail.send(msg);

        // Confirmation email to user
        const confirmationMsg = {
            to: email,
            from: process.env.SENDGRID_FROM_EMAIL,
            subject: 'We received your inquiry - Undiscovered World',
            html: `
                <h2>Thank You, ${name}!</h2>
                <p>We received your inquiry about: <strong>${subject}</strong></p>
                <p>We will respond within 24 hours.</p>
                <p>In the meantime, check out our website for more information!</p>
                <hr>
                <p>Best regards,<br>Kelvin Juma Msuya<br>Undiscovered World</p>
            `
        };

        await sgMail.send(confirmationMsg);

        return {
            statusCode: 200,
            body: JSON.stringify({ 
                success: true, 
                message: 'Email sent successfully!' 
            })
        };

    } catch (error) {
        console.error('Email error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message })
        };
    }
};
```

---

## 📬 **FUNCTION 3: NEWSLETTER SIGNUP**

**File:** `netlify/functions/newsletter-signup.js`

```javascript
// Simple newsletter signup
exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        const { email } = JSON.parse(event.body);

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Invalid email' })
            };
        }

        // Log subscriber (you can add database storage)
        console.log('Newsletter signup:', {
            email,
            timestamp: new Date().toISOString()
        });

        // Send welcome email
        // (integrate with SendGrid or Mailgun)

        return {
            statusCode: 200,
            body: JSON.stringify({
                success: true,
                message: 'Welcome! Check your email for confirmation.'
            })
        };

    } catch (error) {
        console.error('Error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Server error' })
        };
    }
};
```

---

## 🔗 **SETUP - STEP 2: UPDATE CONTACT FORM HTML**

In your `contact.html`, update the form:

**Find this:**
```html
<form class="contact-form">
    <div class="form-group">
        <label for="name">Your Name *</label>
        <input type="text" id="name" name="name" required>
    </div>
    ...
</form>
```

**Replace with:**
```html
<form class="contact-form" id="contactForm">
    <div class="form-group">
        <label for="name">Your Name *</label>
        <input type="text" id="name" name="name" required placeholder="John Doe">
    </div>

    <div class="form-group">
        <label for="email">Your Email *</label>
        <input type="email" id="email" name="email" required placeholder="you@example.com">
    </div>

    <div class="form-group">
        <label for="phone">Phone Number</label>
        <input type="tel" id="phone" name="phone" placeholder="+1 (123) 456-7890">
    </div>

    <div class="form-group">
        <label for="subject">Subject *</label>
        <select id="subject" name="subject" required>
            <option value="">Select a topic...</option>
            <option value="tourism">Tourism Inquiry</option>
            <option value="culture">Cultural Exchange</option>
            <option value="language">Language Program</option>
            <option value="cooking">Culinary Experience</option>
            <option value="poultry">Poultry & Livestock</option>
            <option value="marketplace">Marketplace</option>
            <option value="visa">Visa & Tickets</option>
            <option value="partnership">Partnership Opportunity</option>
            <option value="other">Other</option>
        </select>
    </div>

    <div class="form-group">
        <label for="message">Message *</label>
        <textarea id="message" name="message" rows="5" required placeholder="Tell us more about your inquiry..."></textarea>
    </div>

    <button type="submit" class="btn-primary">Send Message</button>
    <p class="form-note">We'll get back to you within 24 hours!</p>
    <div id="formMessage"></div>
</form>
```

---

## ⚙️ **SETUP - STEP 3: UPDATE JAVASCRIPT**

Add this to your `main.js`:

```javascript
// Handle contact form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };

        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        try {
            // Send to Netlify function
            const response = await fetch('/.netlify/functions/contact-form', {
                method: 'POST',
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (response.ok) {
                // Success
                showNotification('success', 'Message sent! We\'ll respond soon.');
                contactForm.reset();
            } else {
                // Error
                showNotification('error', result.error || 'Failed to send message');
            }

        } catch (error) {
            console.error('Error:', error);
            showNotification('error', 'Network error. Please try again.');
        } finally {
            // Restore button
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    });
}

// Show notification toast
function showNotification(type, message) {
    const notif = document.createElement('div');
    notif.className = `toast ${type}`;
    notif.textContent = message;
    document.body.appendChild(notif);

    // Style
    notif.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 5px;
        color: white;
        z-index: 1000;
        animation: slideIn 0.3s;
    `;

    if (type === 'success') {
        notif.style.backgroundColor = '#27ae60';
    } else {
        notif.style.backgroundColor = '#e74c3c';
    }

    // Remove after 3 seconds
    setTimeout(() => notif.remove(), 3000);
}
```

---

## 🚀 **SETUP - STEP 4: DEPLOY**

### **Method 1: Push to GitHub then Netlify**

```bash
# In Command Prompt
cd C:\Users\Kelvin\Documents\GitHub\Undescovered-world-website

# Add netlify folder
git add netlify/
git add main.js
git add contact.html

# Commit
git commit -m "Add Netlify functions for contact form"

# Push
git push origin main
```

Netlify automatically detects and deploys the functions!

### **Method 2: Direct Netlify Upload**

If using Netlify drag-and-drop:
1. Include entire folder with netlify/ folder
2. Netlify automatically processes functions

---

## ⚙️ **SETUP - STEP 5: ENVIRONMENT VARIABLES (For Email)**

To send actual emails, add these to Netlify:

1. Go to: **Netlify Dashboard**
2. Site settings → Build & deploy → Environment
3. Add variables:
   ```
   SENDGRID_API_KEY = your_sendgrid_key
   CONTACT_EMAIL = your_email@gmail.com
   SENDGRID_FROM_EMAIL = noreply@undiscoveredworld.com
   ```

---

## 🔑 **GET SENDGRID API KEY (Free)**

1. Go to: **https://sendgrid.com**
2. Sign up (free)
3. Create API key
4. Copy key
5. Add to Netlify environment

---

## 📊 **AVAILABLE FUNCTIONS TO BUILD**

### **#1: Contact Form (Built Above)**
- Receives form data
- Validates input
- Sends email
- Returns response

### **#2: Newsletter Signup (Built Above)**
- Collects emails
- Validates format
- Stores subscriber
- Sends confirmation

### **#3: File Upload**
- Accept file uploads
- Store on Netlify
- Process data

### **#4: Database Queries**
- Get data from database
- Save data
- Update records

### **#5: Payment Processing**
- Accept payments
- Process with Stripe
- Handle webhooks

### **#6: SMS Notifications**
- Send SMS alerts
- Integrate with Twilio
- Real-time notifications

---

## 🧪 **TESTING YOUR FUNCTIONS**

### **Local Testing:**

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. In your folder:
```bash
netlify dev
```

3. Go to: `http://localhost:8888`

4. Test your form

### **Deployed Testing:**

1. Submit form on live website
2. Check Netlify Functions logs
3. Verify email sent

---

## 📈 **MONITORING & DEBUGGING**

### **View Function Logs:**

1. Netlify Dashboard
2. Functions tab
3. Click function name
4. See all logs

### **Common Issues:**

**Issue:** Function not found
→ Check folder structure
→ Ensure `netlify/functions/` exists

**Issue:** Email not sending
→ Check API key
→ Verify environment variables
→ Check SendGrid account

**Issue:** CORS error
→ Add headers to function response
→ Or use `/.netlify/functions/` path

---

## 🎯 **ADVANCED: DATABASE INTEGRATION**

To save inquiries to database:

### **Option 1: Google Sheets (Free)**
```javascript
const { google } = require('googleapis');

// Use Google Sheets API
// Save inquiry data directly to spreadsheet
```

### **Option 2: Airtable (Free)**
```javascript
const Airtable = require('airtable');

// Save to Airtable base
// Easy to view and manage
```

### **Option 3: Firebase (Free tier)**
```javascript
const firebase = require('firebase/app');

// Save to Firestore
// Real-time database
```

---

## 💡 **NEXT STEPS**

1. **Create netlify/functions folder** in your website
2. **Add contact-form.js** file
3. **Update contact.html** with form ID
4. **Update main.js** with event listener
5. **Deploy to Netlify**
6. **Test on live website**
7. **Add SendGrid** for email functionality

---

## 📚 **HELPFUL RESOURCES**

- **Netlify Functions Docs:** https://docs.netlify.com/functions/overview/
- **SendGrid Docs:** https://docs.sendgrid.com/
- **JavaScript Fetch API:** https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

---

## ✅ **CHECKLIST**

- [ ] Create netlify/functions folder
- [ ] Create contact-form.js
- [ ] Update contact.html form
- [ ] Update main.js with handler
- [ ] Deploy to Netlify
- [ ] Test form submission
- [ ] Check function logs
- [ ] Set up SendGrid (optional)
- [ ] Add environment variables
- [ ] Monitor inquiries

---

**Your backend is ready!** 🚀

