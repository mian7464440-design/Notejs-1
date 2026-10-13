import { Arrow } from "./Icons";
import { articles } from "@/lib/data";

// Teen card: oopar gehre sabz mehrab (sunehri kinara), neeche 3 mazameen ki fehrist aur "مزید".
export default function Articles() {
  return (
    <section id="articles" className="section light">
      <div className="container">
        <div className="sec-title"><h2>مضامین</h2></div>
        <div className="articles">
          {articles.map((a) => (
            <article className="art-card" key={a.title}>
              <div className="art-frame">
                <div className="art-head">
                  <span className="dot" aria-hidden="true" />
                  <h3>{a.title}</h3>
                </div>
              </div>
              <ul>
                {a.items.map((i) => (
                  <li key={i}><a href="#">{i}</a></li>
                ))}
              </ul>
              <a href="#" className="more-link-dark">مزید <Arrow /></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
