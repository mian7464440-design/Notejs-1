"use client";
import { useState } from "react";

const Icon = ({ d }) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d={d} />
  </svg>
);

// Figma: dahni taraf chhota card (3 field + bara bhoora button), bayen taraf bara safed card
// (do field ek row mein, ek field, textarea, chhota pill button).
export default function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    // TODO: yahan apna API route / email service jodein
    setSent(true);
  }

  return (
    <section id="contact" className="sec">
      <div className="container">
        <h2 className="fig-title">رابطہ</h2>
        <div className="contact-fig">
          <form className="card-sm" onSubmit={onSubmit}>
            <label className="icon-field"><Icon d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" /><input name="name" placeholder="نام" required /></label>
            <label className="icon-field"><Icon d="M4 6h16v12H4zM4 7l8 6 8-6" /><input name="email" type="email" placeholder="ای میل" required /></label>
            <label className="icon-field"><Icon d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" /><input name="phone" type="tel" placeholder="فون" /></label>
            <button type="submit" className="btn-block">ارسال کریں</button>
            {sent && <p role="status" className="ok">شکریہ! آپ کا پیغام موصول ہو گیا۔</p>}
          </form>

          <form className="card-lg" onSubmit={onSubmit}>
            <div className="row2">
              <label>پہلا نام<input name="first" /></label>
              <label>آخری نام<input name="last" /></label>
            </div>
            <label>موضوع<input name="subject" /></label>
            <label>پیغام<textarea name="message" rows={5} /></label>
            <button type="submit" className="btn-pill">بھیجیں</button>
          </form>
        </div>
      </div>
    </section>
  );
}
