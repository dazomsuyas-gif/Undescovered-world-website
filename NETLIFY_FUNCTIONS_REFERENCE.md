# 📚 NETLIFY FUNCTIONS - REFERENCE GUIDE

## 🎯 OVERVIEW

**What are Netlify Functions?**
- Serverless backend code
- Run on AWS Lambda
- No server management
- Auto-scaling
- Free tier available
- Perfect for contact forms, email, webhooks

---

## 🔄 **HOW IT WORKS**

```
User fills form on website
        ↓
JavaScript sends data to function
        ↓
Netlify Function processes data
        ↓
Function validates & logs inquiry
        ↓
Function sends response back
        ↓
JavaScript shows success message
        ↓
Data logged in Netlify dashboard
```

---

## 📁 **FOLDER STRUCTURE**

```
Undiscovered-world-website/
│
├── netlify/
│   └── functions/
│       ├── contact-form.js          ← Receives form data
│       ├── newsletter-signup.js      ← Collects emails
│       └── get-inquiries.js          ← Returns inquiries
│
├── index.html                        ← Homepage
├── about.html                        ← About page
├── contact.html                      ← Contact form
├── main.js                           ← JavaScript with form handler
└── styles.css                        ← Styling
```

---

## 🚀 **API ENDPOINTS**

### **1. Submit Contact Form**

**Endpoint:** `POST /.netlify/functions/contact-form`

**Request body:**
```json
{
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+255 123 456 789",
    "subject": "Poultry Supplies",
    "message": "I am interested in buying poultry equipment..."
}
```

**Response (Success):**
```json
{
    "success": true,
    "message": "Thank you for your inquiry! We will respond within 24 hours.",
    "data": {
        "name": "John Doe",
        "email": "john@example.com",
        "subject": "Poultry Supplies",
        "receivedAt": "2024-01-15T10:30:00Z"
    }
}
```

**Response (Error):**
```json
{
    "error": "Invalid email format"
}
```

---

### **2. Newsletter Signup**

**Endpoint:** `POST /.netlify/functions/newsletter-signup`

**Request body:**
```json
{
    "email": "subscriber@example.com"
}
```

**Response (Success):**
```json
{
    "success": true,
    "message": "Welcome! Check your email for confirmation.",
    "email": "subscriber@example.com"
}
```

---

### **3. Get Inquiries**

**Endpoint:** `GET /.netlify/functions/get-inquiries`

**Response:**
```json
{
    "success": true,
    "inquiries": [
        {
            "id": 1,
            "name": "John Doe",
            "email": "john@example.com",
            "subject": "Poultry Supplies",
            "message": "I am interested...",
            "status": "new",
            "createdAt": "2024-01-15T10:30:00Z"
        }
    ],
    "count": 1
}
```

---

## 📝 **FUNCTION CODE BREAKDOWN**

### **contact-form.js Explained**

```javascript
// Export handler function - Netlify calls this
exports.handler = async (event) => {
    
    // Only accept POST requests (reject GET, DELETE, etc.)
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        // Parse incoming JSON data
        const { name, email, phone, subject, message } = JSON.parse(event.body);

        // Validate required fields exist
        if (!name || !email || !subject || !message) {
            return { statusCode: 400, body: 'Missing fields' };
        }

        // Validate email format using regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return { statusCode: 400, body: 'Invalid email' };
        }

        // Log to Netlify console
        console.log('New inquiry:', { name, email, subject });

        // Return success response
        return {
            statusCode: 200,
            body: JSON.stringify({
                success: true,
                message: 'Thank you for your inquiry!'
            })
        };

    } catch (error) {
        // Handle errors
        console.error('Error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Server error' })
        };
    }
};
```

---

## 🎮 **JAVASCRIPT CLIENT CODE**

### **How to Call Functions from Website**

```javascript
// Simple function call
const response = await fetch('/.netlify/functions/contact-form', {
    method: 'POST',
    body: JSON.stringify({
        name: 'John',
        email: 'john@example.com',
        subject: 'Hello',
        message: 'This is a test'
    })
});

const data = await response.json();
console.log(data); // See response
```

### **Error Handling**

```javascript
try {
    const response = await fetch('/.netlify/functions/contact-form', {
        method: 'POST',
        body: JSON.stringify(formData)
    });

    if (response.ok) {
        const result = await response.json();
        console.log('✅ Success:', result);
    } else {
        console.log('❌ Error status:', response.status);
    }
} catch (error) {
    console.error('❌ Network error:', error);
}
```

---

## 🔐 **SECURITY BEST PRACTICES**

1. **Always validate input** (check email format, length, etc.)
2. **Check request method** (POST for submissions, GET for retrieval)
3. **Add rate limiting** (prevent spam)
4. **Use HTTPS** (Netlify provides free SSL)
5. **Never expose secrets** in function code (use environment variables)
6. **Add CORS headers** if calling from different domain

---

## 📊 **NETLIFY DASHBOARD**

### **View Function Logs**

1. Go to: https://app.netlify.com
2. Select your site
3. Go to: **Functions** tab
4. Click function name to see logs
5. Logs show:
   - Execution time
   - Memory used
   - Console output
   - Errors

### **Monitor Performance**

- Response time
- Error rate
- Execution count
- Resource usage

---

## ⚙️ **ENVIRONMENT VARIABLES**

For sensitive data (API keys, emails), use environment variables:

```javascript
// In your function
const apiKey = process.env.SENDGRID_API_KEY;
const myEmail = process.env.CONTACT_EMAIL;
```

### **Set in Netlify:**

1. Site → Settings → Build & deploy → Environment
2. Add variables:
```
SENDGRID_API_KEY = your_key
CONTACT_EMAIL = your_email@gmail.com
```

---

## 🐛 **COMMON ERRORS**

| Error | Cause | Solution |
|-------|-------|----------|
| Function not found | Wrong path or folder | Check `netlify/functions/` exists |
| CORS error | Wrong domain | Use `/.netlify/functions/` |
| 405 error | Wrong HTTP method | POST for submit, GET for retrieve |
| 400 error | Invalid data | Check email format, required fields |
| 500 error | Code error | Check Netlify logs for details |

---

## 🚀 **SCALING UP**

### **What You Can Build**

1. **Email notifications** (SendGrid, Mailgun)
2. **Database integration** (Firebase, MongoDB, Supabase)
3. **Payment processing** (Stripe, PayPal)
4. **SMS alerts** (Twilio)
5. **Slack notifications** (Slack API)
6. **Image processing** (Sharp, ImageMagick)
7. **Document generation** (PDFs, reports)

### **Example: Add SendGrid Email**

```javascript
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async (event) => {
    // ... validation ...

    const msg = {
        to: process.env.CONTACT_EMAIL,
        from: 'noreply@undiscoveredworld.com',
        subject: `New inquiry: ${subject}`,
        html: `<p>From: ${name}</p><p>${message}</p>`
    };

    await sgMail.send(msg);

    return { statusCode: 200, body: 'Email sent!' };
};
```

---

## 📚 **RESOURCES**

- **Netlify Functions Docs**: https://docs.netlify.com/functions/overview/
- **Netlify CLI**: https://cli.netlify.com
- **Node.js Docs**: https://nodejs.org/docs/
- **JavaScript Fetch**: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
- **HTTP Status Codes**: https://httpwg.org/specs/rfc9110.html#status.codes

---

## ✅ **CHECKLIST**

### **Setup**
- [ ] Create `netlify/functions/` folder
- [ ] Create 3 function files
- [ ] Update contact.html
- [ ] Update main.js
- [ ] Test locally with `netlify dev`
- [ ] Push to GitHub
- [ ] Deploy to Netlify

### **Testing**
- [ ] Submit form on live site
- [ ] Check success message
- [ ] View Netlify function logs
- [ ] Verify data was received
- [ ] Test error cases

### **Optimization**
- [ ] Add email notifications
- [ ] Add database storage
- [ ] Add rate limiting
- [ ] Monitor performance
- [ ] Set up alerts

---

## 💡 **TIPS**

1. **Start simple** - Get basic form working first
2. **Use Netlify CLI** - Test locally before deploying
3. **Check logs** - Most issues visible in function logs
4. **Test thoroughly** - Submit various data types
5. **Monitor** - Check Netlify dashboard regularly
6. **Scale gradually** - Add features one at a time

---

## 🎓 **LEARNING PATH**

1. Start: Basic contact form (you are here)
2. Next: Add email notifications
3. Then: Store data in database
4. Later: Payment processing
5. Advanced: Multi-function workflows

---

**Happy coding! 🚀**
