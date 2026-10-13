import fs from "node:fs";
import path from "node:path";
import Image from "next/image";

// public/images/<name>.(jpg|jpeg|png|webp|avif) mojood ho to wohi next/image se dikhti hai.
// File na ho to saaf neutral slot dikhta hai, taake layout toote nahi.
const EXTS = ["jpg", "jpeg", "png", "webp", "avif"];

export function findImage(name) {
  for (const ext of EXTS) {
    const file = path.join(process.cwd(), "public", "images", `${name}.${ext}`);
    if (fs.existsSync(file)) return `/images/${name}.${ext}`;
  }
  return null;
}

export default function Media({
  name,
  alt,
  className = "",
  tone = "light", // "light" (cream par) ya "dark" (gehre hisson par)
  fit = "cover",
  priority = false,
  sizes = "(max-width: 768px) 90vw, 600px",
  children,
}) {
  const src = findImage(name);
  const state = src ? "has-img" : "is-empty";
  return (
    <div
      className={`media media-${tone} ${state} ${className}`}
      {...(!src && { role: "img", "aria-label": alt })}
    >
      {src && <Image src={src} alt={alt} fill sizes={sizes} priority={priority} style={{ objectFit: fit }} />}
      {children}
    </div>
  );
}
