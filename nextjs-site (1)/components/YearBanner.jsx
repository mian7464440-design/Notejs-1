import { Arrow } from "./Icons";
import { banner } from "@/lib/data";

// Gehra sabz banner: dahni taraf bara sunehri saal, uske baad patli lakeer, phir title/paragraph/button.
export default function YearBanner() {
  return (
    <section className="section dark year-sec">
      <span className="badge">{banner.badge}</span>
      <div className="container year">
        <div className="year-num"><span>{banner.year}</span></div>
        <div className="year-text">
          <h2>{banner.title}</h2>
          <p>{banner.text}</p>
          <a href="#thoughts" className="btn-gold">مزید پڑھیں <Arrow /></a>
        </div>
      </div>
    </section>
  );
}
