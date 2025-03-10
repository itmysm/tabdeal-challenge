export const shimmer = (w: number, h: number, bgColor: string, shimmerColor: string) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="${shimmerColor}" offset="20%" />
      <stop stop-color="${shimmerColor}" offset="50%" />
      <stop stop-color="${shimmerColor}" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="${bgColor}" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" opacity="0.8" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="2s" repeatCount="indefinite" />
</svg>`;

export const toBase64 = (str: string) =>
  typeof window === "undefined" ? Buffer.from(str).toString("base64") : btoa(str);