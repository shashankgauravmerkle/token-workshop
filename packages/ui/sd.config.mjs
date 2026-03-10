import StyleDictionary from "style-dictionary";

// Converts CamelCase / space-separated strings to kebab-case
const toKebab = (s) =>
  s
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .toLowerCase()
    .replace(/[\s_]+/g, "-");

/**
 * Custom name transform — maps Figma token paths to clean CSS variable names:
 *
 *   Color.White            → --color-white
 *   Font.FontWeight.B      → --font-weight-b
 *   Font.FontFamily.Inter  → --font-family-inter
 *   Font.FontSize.16       → --font-size-16
 *   Spacing.Space-16       → --space-16
 */
StyleDictionary.registerTransform({
  name: "name/figma",
  type: "name",
  transform: (token) => {
    const [category, ...rest] = token.path;
    switch (category) {
      case "Color":
        return `color-${toKebab(rest[0])}`;
      case "Font":
        // rest = ['FontWeight'|'FontFamily'|'FontSize', leafName]
        return `${toKebab(rest[0])}-${toKebab(rest[1])}`;
      case "Spacing":
        // 'Space-16' → 'space-16'
        return toKebab(rest[0]);
      default:
        return [...token.path].map(toKebab).join("-");
    }
  },
});

/**
 * Convert Figma font-weight labels to valid CSS numeric values.
 *   "Regular"    → 400
 *   "Bold"       → 700
 *   "Semi Bold"  → 600
 *   "Extra Bold" → 800
 */
StyleDictionary.registerTransform({
  name: "value/font-weight",
  type: "value",
  filter: (token) => token.path[0] === "Font" && token.path[1] === "FontWeight",
  transform: (token) => {
    const map = {
      Regular: "400",
      Bold: "700",
      "Semi Bold": "600",
      "Extra Bold": "800",
    };
    const raw = token.$value ?? token.value;
    return map[raw] ?? raw;
  },
});

/**
 * Add px unit to raw number values for font sizes and spacing.
 */
StyleDictionary.registerTransform({
  name: "value/size-to-px",
  type: "value",
  filter: (token) =>
    (token.path[0] === "Font" && token.path[1] === "FontSize") ||
    token.path[0] === "Spacing",
  transform: (token) => `${token.$value ?? token.value}px`,
});

const sd = new StyleDictionary({
  source: ["tokens/tokens.json"],
  platforms: {
    css: {
      transforms: ["name/figma", "value/font-weight", "value/size-to-px"],
      buildPath: "src/",
      files: [
        {
          destination: "tokens.css",
          format: "css/variables",
          options: { selector: ":root" },
        },
      ],
    },
  },
});

await sd.buildAllPlatforms();
