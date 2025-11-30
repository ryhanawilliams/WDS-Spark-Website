# EmailJS Setup Guide for Spark Waitlist

Follow these steps to configure EmailJS for automatic email sending:

## Step 1: Create EmailJS Account

1. Go to https://www.emailjs.com/
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Gmail Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Select **Gmail** as your service provider
4. Click **Connect Account** and sign in with: `ryhana.williams0@gmail.com`
5. Authorize EmailJS to send emails from your Gmail account
6. **Copy the Service ID** (you'll need this later)

## Step 3: Create Email Templates

You need to create **TWO** email templates:

### Template 1: User Confirmation Email

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. **Template Name**: "Spark Waitlist Confirmation"
4. **Subject**: `You're on the Spark Waitlist! ⚡`
5. **Content** (HTML or Plain Text):
```
Hi there,

Thanks for joining the waitlist for Spark, Western Developer Society's 24-hour hackathon and case competition. Happening at Western University from January 30th - February 1st 2026. 

You're all set. As soon as applications open, you'll be the first to know. Keep an eye on your inbox for updates, key dates, and everything you'll need to get ready for Spark.

If you have any questions in the meantime, feel free to reply to this email.

Can't wait to share more soon, get ready to create something big. 🔥⚡

Best,

WDS Externals Team
```
6. **To Email**: `{{to_email}}`
7. **From Name**: `WDS Externals Team`
8. **From Email**: `ryhana.williams0@gmail.com`
9. **Reply To**: `ryhana.williams0@gmail.com`
10. Click **Save**
11. **Copy the Template ID** (you'll need this later)

### Template 2: Owner Notification Email

1. Click **Create New Template** again
2. **Template Name**: "Spark Waitlist Notification"
3. **Subject**: `New Waitlist Signup: {{user_name}}`
4. **Content**:
```
New Waitlist Signup:

Name: {{user_name}}
Email: {{user_email}}

They have been added to the Spark waitlist.
```
5. **To Email**: `ryhana.williams0@gmail.com`
6. **From Name**: `Spark Waitlist`
7. **From Email**: `ryhana.williams0@gmail.com`
8. Click **Save**
9. **Copy the Template ID** (you'll need this later)

## Step 4: Get Your Public Key

1. Go to **Account** in your EmailJS dashboard
2. Scroll down to **API Keys**
3. **Copy your Public Key** (you'll need this later)

## Step 5: Configure the Code

1. Create a `.env` file in the root of your project (if it doesn't exist)
2. Add the following variables with your actual values:

```
REACT_APP_EMAILJS_SERVICE_ID=your_service_id_here
REACT_APP_EMAILJS_CONFIRMATION_TEMPLATE_ID=your_confirmation_template_id_here
REACT_APP_EMAILJS_NOTIFICATION_TEMPLATE_ID=your_notification_template_id_here
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
```

3. Replace the placeholder values with:
   - Your Service ID from Step 2
   - Your Confirmation Template ID from Step 3 (Template 1)
   - Your Notification Template ID from Step 3 (Template 2)
   - Your Public Key from Step 4

4. **Important**: Restart your development server after adding the `.env` file:
   ```bash
   npm start
   ```

## Step 6: Test

1. Fill out the waitlist form
2. Click "Join"
3. Check both:
   - Your email (ryhana.williams0@gmail.com) for the notification
   - The user's email for the confirmation

## Troubleshooting

- **Emails not sending?** Make sure you've restarted your dev server after adding the `.env` file
- **Service ID not working?** Double-check that you've connected your Gmail account properly
- **Template variables not working?** Make sure you're using the exact variable names: `{{to_email}}`, `{{user_name}}`, `{{user_email}}`
- **Public Key issues?** Make sure you're using the Public Key, not the Private Key

## Free Tier Limits

EmailJS free tier includes:
- 200 emails per month
- All features needed for this project

If you need more, consider upgrading to a paid plan.

