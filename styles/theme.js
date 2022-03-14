import { createTheme } from "@mui/material/styles";

const theme = createTheme({
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

export default theme;
