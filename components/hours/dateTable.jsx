import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import theme from "../../styles/theme";

export default function DateTable() {
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Box
        sx={{
          width: matches ? "60vw" : "90vw",
          marginX: "5vw",
          marginTop: "7vw",
          paddingBottom: "5vh",
          display: "flex",
          textAlign: "center",
          flexDirection: "column",
          rowGap: "4vh",
          alignItems: "center",
        }}
      >
        <table
          style={{
            width: "90%",
            borderTop: "2px solid #532A10",
            borderLeft: "2px solid #532A10",
            boxShadow: "5px 5px 0px #E9D2C2",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <tr
            style={{
              background: "#532A10",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
            }}
          >
            <td
              style={{ textAlign: "left", color: "#FFFAF4", padding: "1rem" }}
            >
              <Typography sx={{}} variant="body">
                Day
              </Typography>
            </td>
            <td
              style={{ textAlign: "left", color: "#FFFAF4", padding: "1rem" }}
            >
              <Typography variant="body">Hours</Typography>
            </td>
          </tr>
          <tr className="row">
            <td className="element">
              <Typography variant="body">Monday</Typography>
            </td>
            <td className="element">
              <Typography variant="body">10am - 8:15pm</Typography>
            </td>
          </tr>
          <tr className="row">
            <td className="element">
              <Typography variant="body">Tuesday</Typography>
            </td>
            <td className="element">
              <Typography variant="body">10am - 8:15pm</Typography>
            </td>
          </tr>
          <tr className="row">
            <td className="element">
              <Typography variant="body">Wednesday</Typography>
            </td>
            <td className="element">
              <Typography variant="body">10am - 8:15pm</Typography>
            </td>
          </tr>
          <tr className="row">
            <td className="element">
              <Typography variant="body">Thursday</Typography>
            </td>
            <td className="element">
              <Typography variant="body">10am - 8:15pm</Typography>
            </td>
          </tr>
          <tr className="row">
            <td className="element">
              <Typography variant="body">Monday</Typography>
            </td>
            <td className="element">
              <Typography variant="body">10am - 8:15pm</Typography>
            </td>
          </tr>
        </table>
        <style jsx>{`
          .row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            text-align: left;
          }
          .element {
            border-bottom: 2px solid #532a10;
            border-right: 2px solid #532a10;
            color: #532a10;
            padding: 1rem;
          }
        `}</style>
      </Box>
    </Box>
  );
}
