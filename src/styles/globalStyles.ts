import { globalCss } from "@stitches/react";

export default globalCss({
  html: {
    $$notifyBannerHeight: "40px",
    $$navbarHeight: "76px",
    scrollPaddingTop: "80px",
    "&.dragging-ew": {
      userSelect: "none !important",
      cursor: "ew-resize !important",
      "*": {
        userSelect: "none !important",
        cursor: "ew-resize !important",
      },
    },
  },

  // rainbow gradient

  ".rainbowLinearGradient": {
    linearGradient:
      "90deg, #c42d01 0%, #c42d01 10%, #FFA4E3 10%, ##fcf26 40%, ##00e754 60%, ##00eef4 70%, #0070f3 1000%,",
  },
  ".rainbowRadialGradient": {
    radialGradient:
      "circle at 50% 50%, #c42d01 0%, #c42d01 10%, #FFA4E3 10%, ##fcf26 40%, ##00e754 60%, ##00eef4 70%, #0070f3 1000%,",
  },

  // css baseline overrides
  blockquote: {
    mb: "$14 !important",
    "& p": {
      fontSize: "1rem !important",
    },
  },
  // home sections
  ".inview-section": {
    zIndex: "$2",
    width: "100%",
  },
  "#nprogress": {
    pointerEvents: "none",
  },
  "#nprogress .bar": {
    background: "var(--nextui-colors-secondary)",
    position: "fixed",
    zIndex: "999999",
    top: 0,
    left: 0,
    width: "100%",
    height: "3px",
  },
  /* Fancy blur effect */
  " #nprogress .peg": {
    display: "block",
    position: "absolute",
    right: "0px",
    width: "100px",
    height: "100%",
    boxShadow:
      "0 0 10px var(--nextui-colors-secondary), 0 0 5px var(--nextui-colors-secondary)",
    opacity: 1,
    WebkitTransform: "rotate(3deg) translate(0px, -4px)",
    transform: "rotate(3deg) translate(0px, -4px)",
  },
});
