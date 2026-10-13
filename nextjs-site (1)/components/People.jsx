import Media from "./Media";
import { Arrow } from "./Icons";
import { people } from "@/lib/data";

// Figma: quatrefoil frame (halka bhoora kinara) mein tasveer, neeche naam, tafseel aur "مزید پڑھیں".
// Tasveerein: public/images/person-1.jpg (dahni taraf), person-2.jpg (bayen taraf)
export default function People() {
  return (
    <section id="people" className="sec">
      <div className="container">
        <h2 className="fig-title">شخصیات</h2>
        <div className="people-fig">
          {people.map((p, i) => (
            <article className="person-fig" key={p.name}>
              <div className="cusp-wrap">
                <div className="cusp-ring">
                  <Media name={`person-${i + 1}`} alt={p.name} className="cusp" sizes="280px" />
                </div>
              </div>
              <h3>{p.name}</h3>
              <p>{p.text}</p>
              <a href="#" className="btn-outline">مزید پڑھیں <Arrow width={11} height={11} /></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
