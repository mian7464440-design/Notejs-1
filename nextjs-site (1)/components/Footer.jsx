import Image from "next/image";
import { footerCols } from "@/lib/data";
import { LOGO } from "@/lib/brand";

// Figma: oopar logo (dahni taraf) aur search patti (bayen), phir 3 columns, sab se neeche do chhoti likhaiyan.
export default function Footer() {
  return (
    <footer className="footer-fig">
      <div className="container">
        <div className="foot-top">
          <a href="#top" className="logo" aria-label={LOGO.alt}>
            <Image src={LOGO.src} alt={LOGO.alt} width={LOGO.width} height={LOGO.height} />
          </a>
          <label className="foot-search">
            <input type="search" placeholder="تلاش کریں" aria-label="تلاش" />
          </label>
        </div>
        <div className="foot-cols">
          {footerCols.map((c) => (
            <div key={c.title}>
              <h4>{c.title}</h4>
              <ul>{c.items.map((i) => <li key={i}><a href="#">{i}</a></li>)}</ul>
            </div>
          ))}
        </div>
        <div className="foot-bottom">
          <span>© ۲۰۲۶ جملہ حقوق محفوظ ہیں</span>
          <span>پرائیویسی پالیسی</span>
        </div>
      </div>
    </footer>
  );
}
