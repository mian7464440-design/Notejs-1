import Media from "./Media";

// Figma: dahni taraf "وجہ تسمیہ" heading (sunehri lakeeron ke saath), paragraph aur bhoora button;
// bayen taraf gumbad ki transparent tasveer (peeli lobes ke saath).
// Asli tasveer: public/images/dome.png
export default function Intro() {
  return (
    <section id="intro" className="sec">
      <div className="container intro-fig">
        <div className="intro-text">
          <h2 className="fig-title">وجہ تسمیہ</h2>
          <p>
            یہاں وجہ تسمیہ کا مختصر بیان درج ہوگا۔ یہ متن نمونے کے طور پر رکھا گیا ہے، اسے اپنے اصل مواد سے تبدیل کریں۔
            عبارت چار پانچ سطروں پر مشتمل ہو سکتی ہے تاکہ صفحے کی ساخت فگما کے مطابق رہے اور بٹن اس کے نیچے آئے۔
          </p>
          <a href="#sections" className="btn-pill">مزید پڑھیں</a>
        </div>
        <Media name="dome" alt="گنبد" fit="contain" className="dome-art" sizes="(max-width: 700px) 80vw, 380px" />
      </div>
    </section>
  );
}
