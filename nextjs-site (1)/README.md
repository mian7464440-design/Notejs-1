# Urdu Heritage Site (Next.js, App Router)

Figma layout ke mutabiq responsive, RTL (Urdu) page.

## Chalane ka tareeqa

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Page ka order (`app/page.jsx`)

Figma: Navbar → Hero → وجہ تسمیہ → Divider → شجرہ نسب → Divider → شخصیات → گیلری → کتب → رابطہ → Footer

Add kiye gaye sections (Books ke baad, form se pehle): ۲۰۱۰ banner, افکار و خیالات, اقوالِ زریں, مضامین, تقاریب.
Kisi ko hatana ho to `app/page.jsx` se uski ek line hata dein.

## Tasveerein aur logo

Ye sab Figma design ki screenshots se nikal kar `public/images/` mein rakhe gaye hain (`components/Media.jsx` file mojood ho to `next/image` se dikhata hai, warna neutral slot):

| File | Jagah |
| --- | --- |
| `logo.png` | Navbar aur footer ka logo (transparent). Size/alt `lib/brand.js` mein |
| `hero.jpg` | Oopar ki bari masjid ki tasveer |
| `dome.png` | Intro ka gumbad (transparent, peeli lobes ke saath) |
| `pattern-floral.png` | شجرہ نسب ke dono kinaron ka floral design (tile hota hai) |
| `person-1.jpg` (dahni), `person-2.jpg` (bayen) | شخصیات |
| `g1.jpg`, `g2.jpg` (dahni), `g3.jpg`, `g4.jpg` (bayen) | Gallery ke sitare |
| `g-main.jpg` | Gallery ki beech wali mehrab tasveer |
| `video-main.jpg` | تقاریب ki bari video ka poster |
| `book-1.jpg`, `book-2.jpg`, `book-3.jpg` | Kitabon ke cover (abhi nahi, saada rang ka cover dikhta hai) |

Ye tasveerein screenshot (kam resolution) se kaati gayi hain, is liye bade screen par thodi soft nazar aayengi. Figma se asli (2x ya 3x) export isi naam se rakh dein to sharp ho jayengi. Logo ke upar ka hissa screenshot mein kata hua tha, wo neeche ke aks se mukammal kiya gaya hai.

## Text, rang, layout

- Text: `lib/data.js` (banner, اقوال, مضامین, list wagaira)
- Section ka markup: `components/*.jsx`
- Rang aur responsive rules: `app/globals.css` (rang `:root` mein)
- Custom shapes (sitara, mehrab, cusp, ogee): `components/ShapeDefs.jsx`

## Contact form

`components/Contact.jsx` mein `onSubmit` abhi sirf shukriya dikhata hai. Yahan apna API route ya email service jodein.

## Text aur layout (fluid)

- Text ka size screen ke saath khud barhta/ghatta hai: `app/globals.css` ke `:root` mein `--fs-2xs` se `--fs-xl` tak tokens hain (mobile par kam az kam 12px, bade screen par barh kar). Naya text likhein to `font-size: var(--fs-sm)` jaisa token use karein, px nahi.
- Layout ki chaurai `rem` mein hai aur `html` ka font-size bhi screen ke saath barhta hai, is liye 320px se 1920px tak sab proportion mein rehta hai.
- 320, 360, 390, 480, 600, 768, 900, 1024, 1280, 1440 aur 1920px par check kiya gaya: horizontal scroll nahi, 12px se chhota text nahi.

## Responsive

Breakpoints: 1000px (navbar → hamburger), 900px (مضامین 2 columns), 860px (تقاریب ek column), 760px (banner, افکار, اقوال ek column), 700px (intro stack), 640px (form stack), 600px (مضامین ek column), 520px (footer 2 columns).
