import nodemailer from 'nodemailer';
import type { Rsvp } from '@shared/schema';

// Email configuration
const createTransporter = () => {
  // In production, you would use real SMTP settings
  // For development, we'll use a test account or console logging
  const isDevelopment = process.env.NODE_ENV !== 'production';
  
  if (isDevelopment) {
    // For development, we'll just log emails to console
    return nodemailer.createTransport({
      streamTransport: true,
      newline: 'unix',
      buffer: true
    });
  }
  
  // Production email configuration (would be configured with real SMTP)
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

export const sendRsvpNotification = async (rsvp: Rsvp): Promise<void> => {
  try {
    const transporter = createTransporter();
    const isDevelopment = process.env.NODE_ENV !== 'production';
    
    // Email content
    const subject = `New RSVP from ${rsvp.fullName}`;
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #d946ef; text-align: center;">New Wedding RSVP 💕</h2>
        
        <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0;">Guest Information</h3>
          <p><strong>Name:</strong> ${rsvp.fullName}</p>
          <p><strong>Email:</strong> ${rsvp.email}</p>
          ${rsvp.phone ? `<p><strong>Phone:</strong> ${rsvp.phone}</p>` : ''}
          <p><strong>Number of Guests:</strong> ${rsvp.guestCount}</p>
        </div>
        
        <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0;">Attendance</h3>
          <p><strong>Ceremony:</strong> ${rsvp.attendingCeremony ? '✅ Yes' : '❌ No'}</p>
          <p><strong>Reception:</strong> ${rsvp.attendingReception ? '✅ Yes' : '❌ No'}</p>
        </div>
        
        ${rsvp.dietaryRestrictions || rsvp.specialRequests ? `
        <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0;">Special Requirements</h3>
          ${rsvp.dietaryRestrictions ? `<p><strong>Dietary:</strong> ${rsvp.dietaryRestrictions}</p>` : ''}
          ${rsvp.specialRequests ? `<p><strong>Requests:</strong> ${rsvp.specialRequests}</p>` : ''}
        </div>
        ` : ''}
        
        ${rsvp.message ? `
        <div style="background: #fce7f3; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0;">Message from Guest</h3>
          <p style="font-style: italic;">"${rsvp.message}"</p>
        </div>
        ` : ''}
        
        <div style="text-align: center; margin-top: 30px; font-size: 12px; color: #666;">
          <p>RSVP submitted at: ${rsvp.submittedAt?.toLocaleString()}</p>
          <p>Elena & Alexander Wedding RSVP System</p>
        </div>
      </div>
    `;

    const mailOptions = {
      from: process.env.SMTP_FROM || 'noreply@wedding-rsvp.com',
      to: process.env.WEDDING_EMAIL || 'elena.alexander.wedding@gmail.com',
      subject: subject,
      html: htmlContent,
    };

    if (isDevelopment) {
      // In development, log the email instead of sending
      console.log('\n🎉 RSVP EMAIL NOTIFICATION (Development Mode):');
      console.log('═'.repeat(60));
      console.log(`To: ${mailOptions.to}`);
      console.log(`Subject: ${mailOptions.subject}`);
      console.log('─'.repeat(60));
      console.log('Email Content:');
      console.log(`
📧 New RSVP from ${rsvp.fullName}

Guest Information:
• Name: ${rsvp.fullName}  
• Email: ${rsvp.email}
${rsvp.phone ? `• Phone: ${rsvp.phone}` : ''}
• Number of Guests: ${rsvp.guestCount}

Attendance:
• Ceremony: ${rsvp.attendingCeremony ? '✅ Yes' : '❌ No'}
• Reception: ${rsvp.attendingReception ? '✅ Yes' : '❌ No'}

${rsvp.dietaryRestrictions ? `Dietary Requirements: ${rsvp.dietaryRestrictions}` : ''}
${rsvp.specialRequests ? `Special Requests: ${rsvp.specialRequests}` : ''}
${rsvp.message ? `Message: "${rsvp.message}"` : ''}

Submitted: ${rsvp.submittedAt?.toLocaleString()}
      `);
      console.log('═'.repeat(60));
    } else {
      // In production, send actual email
      const result = await transporter.sendMail(mailOptions);
      console.log(`RSVP notification email sent: ${result.messageId}`);
    }

  } catch (error) {
    console.error('Failed to send RSVP notification email:', error);
    // Don't throw error - RSVP should still be saved even if email fails
  }
};