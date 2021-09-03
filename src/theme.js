import { createTheme } from "@material-ui/core";

const themeOptions = {
  palette: {
    type: 'dark',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#190c4c',
      paper: '#3b1156',
    },
  },

  typography: {
    h1: {
      fontSize: '7rem',
      fontWeight: 100,
      lineHeight: 1.38,
      letterSpacing: '0.07em',
    },
  },
  
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          backgroundImage: "url(https://wallpaperaccess.com/full/1094561.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
          backgroundPosition: "center -10%",
          backgroundAttachment: "fixed",
        }
      }
    }
  }
};

export const theme = createTheme(themeOptions)