import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
export default function SpecialHoursAndTable() {
  return (
    <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr" , marginX: "10vw", marginTop: "10vh" }}>
      <Box
        sx={{
          paddingBottom: "2vh",
          display: "flex",
          textAlign: "center",
          flexDirection: "column",
          rowGap: "4vh",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: "3vh",
            color: "#532A10",
            bgcolor: "#FFF1E1",
            paddingY: "3vh",
            paddingX: "5rem",
            borderRadius: "16px",
          }}
        >
          <Typography variant="h3">Special Dates</Typography>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="body">Labor Day | Idk when</Typography>
            <Typography variant="body">Labor Day | Idk when</Typography>
            <Typography variant="body">Labor Day | Idk when</Typography>
            <Typography variant="body">Labor Day | Idk when</Typography>
            <Typography variant="body">Labor Day | Idk when</Typography>
            <Typography variant="body">Labor Day | Idk when</Typography>
            <Typography variant="body">Labor Day | Idk when</Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          marginX: "5vw",
          paddingBottom: "5vh",
          height: "500px",
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
              style={{ textAlign: "left", color: "#FFFAF4", padding: "2rem" }}
            >
              <Typography sx={{}} variant="body">
                Day
              </Typography>
            </td>
            <td
              style={{ textAlign: "left", color: "#FFFAF4", padding: "2rem" }}
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
            padding: 2rem;
          }
        `}</style>
      </Box>
    </Box>
  );
}