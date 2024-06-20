import {
  ThemeProvider,
  StyledEngineProvider,
  createTheme,
  Paper,
  CssBaseline,
} from "@mui/material";
// import { theme } from "./Theme";
import { SnackbarProvider } from "notistack";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import Router from "./routes";
import "./App.css";
import Navbar from "./Layouts/Component/Navbar";
import Footer from "./Layouts/Component/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useMemo, useState } from "react";
const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
        primary: {
          main: "#fff",
          secondary: "#fff",
          third: "#418BF9",
          forth: "#EFF5FF",
          fifth: "#212529",
          six: "#6C757D",
        },
        secondary: {
          main: "#f50057",
          secondary: "#fff",
        },
        divider: "#fde68a",
        background: {
          default: "#030035",
          paper: "#030035",
        },
        text: {
          primary: "#fff",
          secondary: "#71717a",
        },
        typography: {
          fontFamily: 'Montserrat, sans- serif'
        },
      }
      : {
        primary: {
          main: "#dbf4ff",
          secondary: "#9B9B9B",
          third: "#418BF9",
          forth: "#EFF5FF",
          fifth: "#212529",
          six: "#6C757D",
        },
        secondary: {
          main: "#f50057",
          secondary: "#3D617B",
        },
        divider: "#004282",
        background: {
          default: "#BF9A3F",
          paper: "#BF9A3F",
        },
        text: {
          primary: "#fff",
          secondary: "#71717a",
        },
        typography: {
          fontFamily: "Montserrat, sans-serif",
        },
      }),
  },
});
function App() {
  const dispatch = useDispatch();
  const [mode, setMode] = useState("dark");
  const darkMode = useSelector((state) => state.theme.isLight);
  useMemo(() => {
    if (darkMode) {
      setMode("dark");
    } else {
      setMode("light");
    }
  }, [darkMode]);
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
    <div>
      <ThemeProvider theme={theme}>
        <StyledEngineProvider injectFirst>
          <SnackbarProvider
            autoHideDuration={3000}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
          >
            <ErrorBoundary>
              <Paper>
                <CssBaseline />
                <Navbar />
                <Router />
                <Footer />
              </Paper>
            </ErrorBoundary>
          </SnackbarProvider>
        </StyledEngineProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
