import Media from "./Media";
import { Camera, Play } from "./Icons";

const photos = ["تقریب کی تصاویر ۱", "تقریب کی تصاویر ۲", "تقریب کی تصاویر ۳", "تقریب کی تصاویر ۴"];
const smallVideos = ["ویڈیو عنوان ۲", "ویڈیو عنوان ۳"];

// Dahni taraf فوٹو گیلری, bayen taraf ویڈیو گیلری (RTL).
// Bari video ka poster: public/images/video-main.jpg
export default function Events() {
  return (
    <section id="events" className="section dark">
      <div className="container">
        <div className="sec-title"><h2>تقاریب</h2></div>

        <div className="events">
          <div>
            <div className="ev-head"><span>فوٹو گیلری</span></div>
            <div className="photo-grid">
              {photos.map((label) => (
                <a href="#" className="photo-card" key={label}>
                  <Camera />
                  <span>{label}</span>
                </a>
              ))}
            </div>
            <a href="#" className="more-link">مزید دیکھیں</a>
          </div>

          <div>
            <div className="ev-head"><span>ویڈیو گیلری</span></div>
            <Media name="video-main" alt="ویڈیو عنوان ۱" tone="dark" className="video-main" sizes="(max-width: 860px) 90vw, 560px">
              <span className="play"><Play /></span>
              <span className="caption">
                <span>سالانہ تقریب – ویڈیو عنوان ۱</span>
                <span className="pill-sm">مزید دیکھیں</span>
              </span>
            </Media>
            <div className="video-row">
              {smallVideos.map((v) => (
                <a href="#" className="video-sm" key={v}>
                  <span className="play sm"><Play /></span>
                  <span className="caption">{v}</span>
                </a>
              ))}
            </div>
            <a href="#" className="more-link">مزید دیکھیں</a>
          </div>
        </div>
      </div>
    </section>
  );
}
