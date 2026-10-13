import { sectionsRight, sectionsLeft } from "@/lib/data";

// Figma: beech mein khari line, dono taraf barabar rows, har row par dot.
export default function Timeline() {
  return (
    <section id="sections" className="sec lattice">
      <div className="container">
        <h2 className="fig-title">شجرہ نسب</h2>
        <ul className="split-list">
          {sectionsRight.map((r, i) => (
            <li key={r}>
              <a href="#" className="cell cell-r">{r}</a>
              <a href="#" className="cell cell-l">{sectionsLeft[i]}</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
