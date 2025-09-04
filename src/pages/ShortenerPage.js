import React, { useState } from "react";
import { Typography, Grid, Snackbar, Alert } from "@mui/material";
import UrlForm from "../components/UrlForm";
import UrlList from "../components/UrlList";

function ShortenerPage() {
  const [urls, setUrls] = useState([]);
  const [error, setError] = useState("");

  const handleAddUrl = (urlData) => {
    // prevent more than 5 URLs at once
    if (urls.length >= 5) {
      setError("You can only shorten up to 5 URLs at once!");
      return;
    }
    setUrls((prev) => [...prev, urlData]);
  };

  return (
    <>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
        Shorten Your URLs 🚀
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <UrlForm onAddUrl={handleAddUrl} />
        </Grid>
        <Grid item xs={12}>
          <UrlList urls={urls} />
        </Grid>
      </Grid>

      <Snackbar
        open={!!error}
        autoHideDuration={3000}
        onClose={() => setError("")}
      >
        <Alert severity="error">{error}</Alert>
      </Snackbar>
    </>
  );
}

export default ShortenerPage;
