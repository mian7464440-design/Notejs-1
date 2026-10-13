import Image from "next/image";
import { findImage } from "./Media";
import { books } from "@/lib/data";

// Figma: teen tirchhi kitabein. Asli cover: public/images/book-1.jpg, book-2.jpg, book-3.jpg
// Cover na ho to saada rang ka cover aur title dikhta hai.
export default function Books() {
  return (
    <section id="books" className="sec">
      <div className="container">
        <h2 className="fig-title">کتب</h2>
        <div className="books-fig">
          {books.map((b, i) => {
            const cover = findImage(`book-${i + 1}`);
            return (
              <article className="book-fig" key={b.title}>
                <div className={`book3d ${cover ? "has-cover" : b.tone}`}>
                  {cover ? (
                    <Image src={cover} alt={b.title} fill sizes="170px" style={{ objectFit: "cover" }} />
                  ) : (
                    <span className="book-title">{b.title}</span>
                  )}
                </div>
                <h3>{b.title}</h3>
                <small>{b.author}</small>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
