import { createTheme } from "@mui/material/styles";
const theme = createTheme({
  typography: {
    fontFamily: ["Raleway", "Roboto"].join(","),
    t1: {
      fontSize: "56px",
      fontWeight: "600",
      fontFamily: "Raleway",
      lineHeight: "70px",
    },
    t2: {
      fontSize: "64px",
      fontWeight: "600",
      fontFamily: "Roboto",
      lineHeight: "80px",
    },
    h1: {
      fontSize: "32px",
      fontWeight: "600",
      fontFamily: "Roboto",
      lineHeight: "32px",
    },
    h2: {
      fontSize: "32px",
      fontWeight: "400",
      fontFamily: "Roboto",
      lineHeight: "32px",
    },
    h4: {
      fontSize: "24px",
      fontWeight: "600",
      fontFamily: "Roboto",
      lineHeight: "30.07",
    },
    h5: {
      fontSize: "16px",
      fontWeight: "600",
      fontFamily: "Roboto",
      lineHeight: "19.2px",
    },
    h6: {
      fontSize: "16px",
      fontWeight: "400",
      fontFamily: "Roboto",
      lineHeight: "19.2px",
    },
    v1: {
      fontSize: "16px",
      fontWeight: "700",
      fontFamily: "Roboto",
      lineHeight: "18.75px",
    },
    v2: {
      fontSize: "14px",
      fontWeight: "400",
      fontFamily: "Roboto",
      lineHeight: "16.8px",
    },
    v3: {
      fontFamily: "Roboto",
      fontWeight: "700",
      fontSize: "24px",
      lineHeight: "24px",
    },
    v4: {
      fontFamily: "Raleway",
      fontWeight: "500",
      fontSize: "16px",
      lineHeight: "18.78px",
    },
    v5: {
      fontFamily: "Raleway",
      fontWeight: "700",
      fontSize: "16px",
      lineHeight: "19px",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "20px",
        },
      },
    },
  },
});
export default theme;
