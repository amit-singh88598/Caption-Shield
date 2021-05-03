import { createMuiTheme, NoSsr, ThemeProvider } from "@material-ui/core";
import { AuthProvider } from "../auth";
import "../styles/globals.css";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1F1D1D", // Black ( Header )
      light: "#ffffff",
      background: "#9c0609", // Blue
      grey: "#edeff2", //Light Grey
    },
    secondary: {
      main: "#403D3D", // Dark Grey
      light: "#656565", // Green Color
      grey: "#403e3e", // darkGrey
      background: "#dfe4eb", //Light Grey
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <NoSsr>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </ThemeProvider>
    </NoSsr>
  );
}

export default MyApp;
