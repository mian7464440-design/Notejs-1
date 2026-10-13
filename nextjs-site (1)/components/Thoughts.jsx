import { Arrow } from "./Icons";
import { thoughts } from "@/lib/data";

// Cream hissa: beech mein patli lakeer, dono taraf ek ek mufakkir ka intikhab.
export default function Thoughts() {
  return (
    <section id="thoughts" className="section light">
      <div className="container">
        <div className="sec-title"><h2>افکار و خیالات</h2></div>
        <div className="thoughts">
          {thoughts.map((t) => (
            <article className="thought" key={t.name}>
              <small className="tag">{t.tag}</small>
              <h3>{t.name}</h3>
              <p>{t.text}</p>
              <a href="#" className="more-link-dark">مزید پڑھیں <Arrow /></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
