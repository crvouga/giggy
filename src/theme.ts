import { orange } from "@mui/material/colors";
import {
  createTheme as createMuiTheme,
  responsiveFontSizes
} from "@mui/material/styles";

export const theme = responsiveFontSizes(
  createMuiTheme({
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
