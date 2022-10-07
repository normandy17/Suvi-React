import { StrictMode } from 'react';
import React from 'react'
import ReactDOM from 'react-dom'
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import App from './App';

function pxToRem(value) {
  return `${value / 16}rem`;
}

// Generate breakpoints so we can use them in the theme definition
const breakpoints = createBreakpoints({});
const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 320,
      sm: 768,
      md: 1024,
      lg: 1440,
      xl: 1920,
    },
  },
  overrides: {
    MuiTypography: {
      fontFamily: 'Rubik, sans-serif !important',
      headline: {
        fontSize: pxToRem(24),
        [breakpoints.up("md")]: {
          fontSize: pxToRem(32)
        }
      },
      title: {
        fontSize: pxToRem(21),
        [breakpoints.up("md")]: {
          fontSize: pxToRem(24)
        }
      },
      h1: {
        fontFamily: 'Rubik, sans-serif !important',
      },
      h2: {
        fontFamily: 'Rubik, sans-serif !important',
      },
      h3: {
        fontFamily: 'Rubik, sans-serif !important',
      },
      h4: {
        fontFamily: 'Rubik, sans-serif !important',
        [breakpoints.up("xs")]: {
          fontSize: pxToRem(44),
        },
        [breakpoints.up("md")]: {
          fontSize: pxToRem(56),
        },
        [breakpoints.up("xl")]: {
          fontSize: pxToRem(70),
        },
      },
      h5: {
        fontFamily: 'Rubik, sans-serif !important',
        fontWeight:600,
        marginBottom:'10px',
        [breakpoints.up("xs")]: {
          fontSize: pxToRem(20),
        },

        [breakpoints.up("xl")]: {
          fontSize: pxToRem(24),
        },
      },
      h6: {
        fontFamily: 'Rubik, sans-serif !important',        
        [breakpoints.up("xs")]: {
          fontSize: pxToRem(16),
          lineHeight:pxToRem(18),
        },

        [breakpoints.up("xl")]: {
          fontSize: pxToRem(20),
          lineHeight:pxToRem(22),
        },
      },
      body1: {
        fontSize: pxToRem(14),

        [breakpoints.up("md")]: {
          fontSize: pxToRem(16)
        }
      },
      body2: {
        fontSize: pxToRem(14),
        [breakpoints.up("md")]: {
          fontSize: pxToRem(16)
        }
      },
      button: {
        fontSize: pxToRem(14),
        [breakpoints.up("md")]: {
          fontSize: pxToRem(16)
        }
      }
    }
  }
});

const root = document.getElementById('root')
ReactDOM.render(
  <StrictMode>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </StrictMode>,
  root
);
