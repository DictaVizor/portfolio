import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = responsiveFontSizes(createTheme({
  palette: {
    primary: {
      main: '#3949AB',
      dark: "#00227B",
      contrastText: "#FFFFFF"
    },
    secondary: {
      main: '#FA4404',
      contrastText: "#FFFFFF"
    },
    background: {
        default: "#0B1637",
        paper: "#121212"
    },
    text: {
        primary: "#FFFFFF",
        secondary: "rgb(255, 255, 255, 0.70)",
        disabled: "rgb(255, 255, 255, 0.15)"
    },
  },
}));



export default theme;
export {theme};