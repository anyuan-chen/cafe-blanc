import { createTheme } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    menu: {
      beige: "#556cd6",
      slideBrown: "#907362",
    },
    background: {
      beige: {
        100: "#fffaf4",
        110: "#fff1e1",
        120: "#f5e4d7",
      },
    },
    brown: "#532a10",
    nav: {
      hover: "#f9d39a",
    },
    annotation: {
      black: "#000",
    },
    link: {
      toffee: "#e89465",
    },
  },
});

theme.typography = {
  largeTagline: {
    fontFamily: "RoxboroughCF",
    fontSize: "7rem",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: 1.06,
    letterSpacing: "normal",
    [theme.breakpoints.up("md")]: {
      fontSize: "9.75rem",
      lineHeight: 0.97,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "17.5rem",
      lineHeight: "normal",
    },
  },
  h2: {
    fontFamily: "RoxboroughCF",
    fontWeight: 600,
    fontSize: "6rem",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    [theme.breakpoints.up("md")]: {
      fontSize: "8rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "14.75rem",
    },
  },
  h3: {
    fontFamily: "RoxboroughCF",
    fontSize: "4.5rem",
    fontWeight: 600,
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    [theme.breakpoints.up("lg")]: {
      fontSize: "9rem",
    },
  },
  bottomNavHeading: {
    fontFamily: "RoxboroughCF",
    fontSize: "5rem",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    [theme.breakpoints.up("lg")]: {
      fontSize: "8rem",
    },
  },
  largeLink: {
    fontFamily: "RoxboroughCF",
    fontSize: "7.5rem",
    fontWeight: 300,
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    [theme.breakpoints.up("md")]: {
      fontSize: "8rem",
    },
  },
  questionHeading: {
    fontFamily: "DMSans",
    fontSize: "2.5rem",
    fontWeight: "bold",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    [theme.breakpoints.up("md")]: {
      fontSize: "3rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "4.5rem",
    },
  },
  linkPageSubtitle: {
    fontFamily: "DMSans",
    fontSize: "3.5rem",
    fontWeight: 500,
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    [theme.breakpoints.up("md")]: {
      fontSize: "4.5rem",
    },
  },
  link: {
    fontFamily: "DMSans",
    fontWeight: "bold",
    fontSize: "3rem",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    [theme.breakpoints.up("md")]: {
      fontSize: "2.75rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "4rem",
    },
  },
  body: {
    fontFamily: "DMSans",
    fontSize: "2rem",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: 1.63,
    letterSpacing: "normal",
    [theme.breakpoints.up("md")]: {
      fontSize: "2.5rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "3.25rem",
      lineHeight: "42.2px",
    },
  },
  smallLink: {
    fontFamily: "DMSans",
    fontSize: "3rem",
    fontWeight: "bold",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
  },
  caption: {
    fontFamily: "DMSans",
    fontSize: "1.5rem",
    fontWeight: 500,
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "3.6px",
    [theme.breakpoints.up("md")]: {
      fontSize: "2rem",
      letterSpacing: "4.8px",
    },
    [theme.breakpoints.up("lg")]: {
      fontFamily: "DMSans",
      fontSize: "3rem",
      letterSpacing: "7.2px",
    },
  },
  homeTextNormal: {
    fontFamily: "DMSans",
    fontSize: "2rem",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: 1.44,
    letterSpacing: "normal",
    [theme.breakpoints.up("md")]: {
      fontSize: "3rem",
      lineHeight: "1.76px",
    },
  },
  bottomNavSubtitle: {
    fontFamily: "DMSans",
    fontSize: "2.75rem",
    fontWeight: "bold",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: " 6.6px",
  },
  homeTextItalics: {
    fontFamily: "DMSans",
    letterSpacing: "normal",
    fontSize: "1.75rem",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "italic",
    lineHeight: 1.43,
    [theme.breakpoints.up("md")]: {
      fontSize: "2.25rem",
      lineHeight: 1.44,
      letterSpacing: "normal",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "2.5rem",
      lineHeight: 1.26,
    },
  },
  bottomNavText: {
    fontFamily: "DMSans",
    fontSize: "2.5rem",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: 1.3,
    letterSpacing: "normal",
    [theme.breakpoints.up("lg")]: {
      lineHeight: "normal",
    },
  },
};

export default theme;
