import Media from "./Media";

// Figma: beech mein bari mehrab-shape tasveer, dono taraf 2-2 sitara-shape tasveerein.
// Asli tasveerein: public/images/g1.jpg ... g4.jpg aur g-main.jpg
export default function Gallery() {
  return (
    <section id="gallery" className="sec">
      <div className="container">
        <h2 className="fig-title">گیلری</h2>
        <div className="gal-fig">
          <div className="gal-col">
            <Media name="g1" alt="گیلری تصویر ۱" className="star" sizes="200px" />
            <Media name="g2" alt="گیلری تصویر ۲" className="star" sizes="200px" />
          </div>
          <Media name="g-main" alt="گیلری مرکزی تصویر" className="mihrab" sizes="(max-width: 700px) 60vw, 320px" />
          <div className="gal-col">
            <Media name="g3" alt="گیلری تصویر ۳" className="star" sizes="200px" />
            <Media name="g4" alt="گیلری تصویر ۴" className="star" sizes="200px" />
          </div>
        </div>
      </div>
    </section>
  );
}
