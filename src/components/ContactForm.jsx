import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { personal } from '../data/personal';
import './ContactForm.css';

/**
 * ============================================
 * CONTACT FORM (EmailJS — no backend needed)
 * ============================================
 *
 * To make this form actually send emails:
 * 1. Sign up free at https://www.emailjs.com/
 * 2. Add an email service (Gmail recommended) and grab the SERVICE_ID
 * 3. Create an email template and grab the TEMPLATE_ID
 * 4. Get your PUBLIC_KEY from Account → API Keys
 * 5. Replace the three constants below
 *
 * Until you set those up, the form falls back to a mailto: link.
 */

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function ContactForm() {
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const isConfigured =
    EMAILJS_SERVICE_ID !== 'YOUR_SERVICE_ID' &&
    EMAILJS_TEMPLATE_ID !== 'YOUR_TEMPLATE_ID' &&
    EMAILJS_PUBLIC_KEY !== 'YOUR_PUBLIC_KEY';

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Fallback: open user's mail client if EmailJS not configured
    if (!isConfigured) {
      const formData = new FormData(formRef.current);
      const subject = encodeURIComponent(`Project enquiry from ${formData.get('name')}`);
      const body = encodeURIComponent(
        `Name: ${formData.get('name')}\nEmail: ${formData.get('email')}\nProject type: ${formData.get('project_type')}\nBudget: ${formData.get('budget')}\n\n${formData.get('message')}`
      );
      window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus('sending');
    setErrorMsg('');

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      formRef.current.reset();
      // Reset to idle after 5s so they can send another
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      setStatus('error');
      setErrorMsg(err?.text || 'Something went wrong. Please email me directly.');
    }
  };

  return (
    <div className="contact-form-wrap reveal">
      <div className="cf-header">
        <span className="cf-num">→ Quick enquiry</span>
        <h3>Tell me about your project.</h3>
        <p>Fill in below and I'll respond within 24 hours. Or email me directly at <a href={`mailto:${personal.email}`}>{personal.email}</a>.</p>
      </div>

      <form ref={formRef} onSubmit={handleSubmit} className="contact-form" noValidate>
        <div className="cf-row two">
          <label className="cf-field">
            <span className="cf-label">Your name *</span>
            <input
              type="text"
              name="name"
              required
              placeholder="Jane Doe"
              autoComplete="name"
            />
          </label>

          <label className="cf-field">
            <span className="cf-label">Email *</span>
            <input
              type="email"
              name="email"
              required
              placeholder="jane@company.com"
              autoComplete="email"
            />
          </label>
        </div>

        <div className="cf-row two">
          <label className="cf-field">
            <span className="cf-label">Engagement type</span>
            <select name="project_type" defaultValue="Freelance project">
              <option>Freelance project</option>
              <option>Contract role</option>
              <option>Full-time role</option>
              <option>Just saying hi</option>
            </select>
          </label>

          <label className="cf-field">
            <span className="cf-label">Budget / Range</span>
            <select name="budget" defaultValue="To be discussed">
              <option>To be discussed</option>
              <option>$1k – $5k</option>
              <option>$5k – $15k</option>
              <option>$15k – $50k</option>
              <option>$50k+</option>
              <option>Salaried role</option>
            </select>
          </label>
        </div>

        <label className="cf-field">
          <span className="cf-label">Tell me about it *</span>
          <textarea
            name="message"
            required
            rows="5"
            placeholder="What are you building? What's the timeline? What does success look like?"
          ></textarea>
        </label>

        <div className="cf-actions">
          <button
            type="submit"
            className={`cf-submit ${status}`}
            disabled={status === 'sending'}
          >
            {status === 'idle' && <>Send enquiry <span>→</span></>}
            {status === 'sending' && <>Sending...</>}
            {status === 'success' && <>✓ Sent — I'll be in touch</>}
            {status === 'error' && <>Try again</>}
          </button>

          {!isConfigured && (
            <p className="cf-note">
              Form opens your mail client. Set up EmailJS to enable direct sending — see comments in <code>ContactForm.jsx</code>.
            </p>
          )}

          {status === 'error' && errorMsg && (
            <p className="cf-error">{errorMsg}</p>
          )}
        </div>
      </form>
    </div>
  );
}
