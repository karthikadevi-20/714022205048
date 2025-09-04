import React, { useState } from "react";
import { TextField, Button, Grid, Paper } from "@mui/material";

function UrlForm({ onAddUrl }) {
  const [originalUrl, setOriginalUrl] = useState("");
  const [validity, setValidity] = useState(30);
  const [shortcode, setShortcode] = useState("");

  const isValidUrl = (str) => {
    try {
      new URL(str);
      return true;
    } catch {
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!originalUrl || !isValidUrl(originalUrl)) {
      alert("Please enter a valid URL");
      return;
    }

    const newUrl = {
      originalUrl,
      shortcode: shortcode || Math.random().toString(36).substring(2, 7),
      validity: validity || 30,
      createdAt: new Date().toLocaleString(),
      expiry: new Date(Date.now() + validity * 60000).toLocaleString(),
    };

    onAddUrl(newUrl);
    setOriginalUrl("");
    setValidity(30);
    setShortcode("");
  };

  return (
    <Paper sx={{ p: 3, borderRadius: 3, boxShadow: 3 }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Original URL"
              value={originalUrl}
              onChange={(e) => setOriginalUrl(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              type="number"
              label="Validity (minutes)"
              value={validity}
              onChange={(e) => setValidity(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              label="Custom Shortcode (optional)"
              value={shortcode}
              onChange={(e) => setShortcode(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" size="large">
              🔗 Shorten
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
}

export default UrlForm;
