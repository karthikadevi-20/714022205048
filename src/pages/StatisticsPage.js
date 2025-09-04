import React, { useState } from "react";
import { Typography } from "@mui/material";
import StatsTable from "../components/StatsTable";

function StatisticsPage() {
  const [stats] = useState([
    {
      shortUrl: "http://localhost:3000/abc123",
      originalUrl: "https://example.com",
      createdAt: "2025-09-01 10:00",
      expiry: "2025-09-05 10:00",
      clicks: 12,
      details: [
        { timestamp: "2025-09-01 10:20", source: "Chrome", location: "India" },
        { timestamp: "2025-09-02 11:45", source: "Firefox", location: "USA" },
      ],
    },
  ]);

  return (
    <>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
        📊 URL Statistics
      </Typography>
      <StatsTable stats={stats} />
    </>
  );
}

export default StatisticsPage;
