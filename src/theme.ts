import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { orange } from "@mui/material/colors";

export const theme = responsiveFontSizes(
  createTheme({
    palette: {
      mode: "dark",
      primary: orange,
    },

    components: {
      MuiContainer: {
        defaultProps: {
          maxWidth: "sm",
        },
      },
    },
  })
);
