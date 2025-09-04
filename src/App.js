import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  CssBaseline,
  Container,
} from "@mui/material";
import ShortenerPage from "./pages/ShortenerPage";
import StatisticsPage from "./pages/StatisticsPage";

function App() {
  return (
    <Router>
      <CssBaseline />
      <AppBar position="sticky" sx={{ background: "#1976d2" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold" }}>
            URL Shortener
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Shortener
          </Button>
          <Button color="inherit" component={Link} to="/stats">
            Statistics
          </Button>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<ShortenerPage />} />
          <Route path="/stats" element={<StatisticsPage />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
