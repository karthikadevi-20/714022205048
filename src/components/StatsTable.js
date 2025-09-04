import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function StatsTable({ stats }) {
  if (stats.length === 0) {
    return <Typography>No stats available.</Typography>;
  }

  return (
    <Paper sx={{ mt: 3, borderRadius: 3, boxShadow: 3 }}>
      {stats.map((item, idx) => (
        <Accordion key={idx} sx={{ borderRadius: 2, boxShadow: 2, mb: 1 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ fontWeight: "bold" }}>
              {item.shortUrl} | Clicks: {item.clicks}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">
              Original URL: {item.originalUrl} <br />
              Created At: {item.createdAt} <br />
              Expiry: {item.expiry}
            </Typography>

            <Table sx={{ mt: 2 }}>
              <TableHead sx={{ background: "#f5f5f5" }}>
                <TableRow>
                  <TableCell>Timestamp</TableCell>
                  <TableCell>Source</TableCell>
                  <TableCell>Location</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {item.details.map((d, i) => (
                  <TableRow key={i}>
                    <TableCell>{d.timestamp}</TableCell>
                    <TableCell>{d.source}</TableCell>
                    <TableCell>{d.location}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </AccordionDetails>
        </Accordion>
      ))}
    </Paper>
  );
}

export default StatsTable;
