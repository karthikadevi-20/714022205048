import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Typography,
} from "@mui/material";

function UrlList({ urls }) {
  if (urls.length === 0) {
    return <Typography sx={{ mt: 2 }}>No shortened URLs yet.</Typography>;
  }

  return (
    <Paper sx={{ mt: 3, borderRadius: 3, boxShadow: 3 }}>
      <Table>
        <TableHead sx={{ background: "#f5f5f5" }}>
          <TableRow>
            <TableCell>Short URL</TableCell>
            <TableCell>Original URL</TableCell>
            <TableCell>Created At</TableCell>
            <TableCell>Expiry</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {urls.map((url, idx) => (
            <TableRow key={idx}>
              <TableCell>{`http://localhost:3000/${url.shortcode}`}</TableCell>
              <TableCell>{url.originalUrl}</TableCell>
              <TableCell>{url.createdAt}</TableCell>
              <TableCell>{url.expiry}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default UrlList;
