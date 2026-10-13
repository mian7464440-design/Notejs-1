import Media from "./Media";

// Figma: poori chaurai ki raat ki masjid ki tasveer.
// Asli tasveer: public/images/hero.jpg
export default function Hero() {
  return (
    <section id="top" className="hero-fig">
      <Media name="hero" alt="مسجد کا منظر" tone="dark" priority sizes="100vw" />
    </section>
  );
}
