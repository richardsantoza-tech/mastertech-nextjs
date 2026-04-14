"use server";

import { Resend } from "resend";

export interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone?: string;
  service: string;
  location?: string;
  message: string;
}

export interface ContactResult {
  success: boolean;
  error?: string;
}

const TO_EMAIL = "info@mastertech.work";
// Until a custom domain is verified in Resend, use their test sender.
// Once Richard verifies mastertech.work in Resend, change to e.g. "noreply@mastertech.work".
const FROM_EMAIL = "MasterTech Website <onboarding@resend.dev>";

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function submitContact(
  data: ContactFormData
): Promise<ContactResult> {
  // Basic server-side validation
  if (!data.name || !data.company || !data.email || !data.service || !data.message) {
    return { success: false, error: "Missing required fields" };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return { success: false, error: "Invalid email address" };
  }

  const apiKey = process.env.RESEND_API_KEY;

  // Graceful dev mode: if no API key set, log the submission and return success.
  // Production deploy requires RESEND_API_KEY env var in Vercel.
  if (!apiKey) {
    console.log("[contact] RESEND_API_KEY not set — submission logged only:", {
      from: data.email,
      company: data.company,
      service: data.service,
      message: data.message.substring(0, 100) + "...",
    });
    return { success: true };
  }

  const subject = `New staffing inquiry: ${data.service} — ${escapeHtml(data.company)}`;
  const html = `
    <h2>New MasterTech Staffing Inquiry</h2>
    <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
      <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold; width: 140px;">Name</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${escapeHtml(data.name)}</td></tr>
      <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Company</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${escapeHtml(data.company)}</td></tr>
      <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Email</td><td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></td></tr>
      <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Phone</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${escapeHtml(data.phone || "—")}</td></tr>
      <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Service</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${escapeHtml(data.service)}</td></tr>
      <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Location</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${escapeHtml(data.location || "—")}</td></tr>
    </table>
    <h3 style="margin-top: 24px;">Message</h3>
    <p style="white-space: pre-wrap; line-height: 1.6;">${escapeHtml(data.message)}</p>
    <hr style="margin-top: 32px; border: none; border-top: 1px solid #eee;" />
    <p style="color: #888; font-size: 12px;">Sent from mastertech.work contact form</p>
  `;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: data.email,
      subject,
      html,
    });

    if (error) {
      console.error("[contact] Resend API error:", error);
      return { success: false, error: "Email service error. Please call (888) 305-0102." };
    }

    return { success: true };
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return { success: false, error: "Something went wrong. Please call (888) 305-0102." };
  }
}
