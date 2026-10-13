const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  focusable: "false",
};

// RTL mein "aage" ka matlab bayen taraf, is liye teer bayen taraf ka hai.
export const Arrow = (props) => (
  <svg {...base} width="14" height="14" {...props}><path d="M19 12H5M11 6l-6 6 6 6" /></svg>
);

export const Play = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" {...props}><path d="M8 5v14l11-7z" /></svg>
);

export const Camera = (props) => (
  <svg {...base} width="24" height="24" {...props}>
    <path d="M4 8h3l1.5-2h7L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
    <circle cx="12" cy="13" r="3.5" />
  </svg>
);
