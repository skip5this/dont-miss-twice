module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "carbon-darkest": "var(--carbon-darkest)",
        "carbon-neutral300": "var(--carbon-neutral300)",
        "dark-face-primaryalt": "var(--dark-face-primaryalt)",
        darkborderprimary: "var(--darkborderprimary)",
        darkfaceprimary: "var(--darkfaceprimary)",
        darkfacesecondary: "var(--darkfacesecondary)",
        darkfacetertiary: "var(--darkfacetertiary)",
        darkfacetertiarydisabled: "var(--darkfacetertiarydisabled)",
        darklayerbackground: "var(--darklayerbackground)",
        darklayerprimary: "var(--darklayerprimary)",
        darklayerprimaryhover: "var(--darklayerprimaryhover)",
        darklayersecondary: "var(--darklayersecondary)",
        darkobjectaccent: "var(--darkobjectaccent)",
        darkobjectprimary: "var(--darkobjectprimary)",
        darkobjecttertiary: "var(--darkobjecttertiary)",
        "product-000": "var(--product-000)",
        semanticvariablefaceprimary: "var(--semanticvariablefaceprimary)",
        "systemorange-light": "var(--systemorange-light)",
        teal: "var(--teal)",
        white: "var(--white)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        caption: "var(--caption-font-family)",
        "subheadline-02": "var(--subheadline-02-font-family)",
        "subheadline-03": "var(--subheadline-03-font-family)",
        "title-04": "var(--title-04-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
