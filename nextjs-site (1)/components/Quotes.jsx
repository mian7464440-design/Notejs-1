import { Arrow } from "./Icons";
import { quotes } from "@/lib/data";

// Gehra hissa: do patli sunehri frame wale dabbe, har dabbe mein qaul, qaail ka naam aur button.
export default function Quotes() {
  return (
    <section id="quotes" className="section dark">
      <div className="container">
        <div className="sec-title"><h2>اقوالِ زریں</h2></div>
        <div className="quotes">
          {quotes.map((q) => (
            <blockquote className="quote-box" key={q.by}>
              <span className="q-orn" aria-hidden="true" />
              <p>{q.text}</p>
              <cite className="q-by">{q.by}</cite>
              <a href="#" className="btn-ghost">مزید پڑھیں <Arrow /></a>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
