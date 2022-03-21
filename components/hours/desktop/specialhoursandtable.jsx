import React from "react";
import { Box } from "@mui/system";
import { Typography, useMediaQuery } from "@mui/material";
import theme from "../../../styles/theme";
export default function SpecialHoursAndTable() {
  const matches = useMediaQuery(theme.breakpoints.up("xl"));
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        marginX: matches ? "10vw" : "8vw",
        marginTop: "10vh",
      }}
    >
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
            rowGap: "8vh",
            color: "#532A10",
            bgcolor: "#FFF1E1",
            paddingY: "6vh",
            paddingX: "5rem",
            borderRadius: "16px",
          }}
        >
          <Typography variant="h3">Closed Dates</Typography>
          <Box
            sx={{ display: "flex", flexDirection: "column", rowGap: "2rem" }}
          >
            {/* <Typography variant="body">
              Good Friday | April 15th, 2022
            </Typography>
            <Typography variant="body">
              Victoria Day | May 20th, 2022
            </Typography>
            <Typography variant="body">Canada Day | July 1st, 2022</Typography>
            <Typography variant="body">
              British Columbia Day | August 1st, 2022
            </Typography>
            <Typography variant="body">
              Labour Day | September 5th, 2022
            </Typography> */}
            <Typography variant="body">
              Christmas Day | December 25th, 2022
            </Typography>
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
              style={{
                textAlign: "left",
                color: "#FFFAF4",
                padding: matches ? "2rem" : "1rem",
              }}
            >
              <Typography sx={{}} variant="body">
                Day
              </Typography>
            </td>
            <td
              style={{
                textAlign: "left",
                color: "#FFFAF4",
                padding: matches ? "2rem" : "1rem",
              }}
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
              <Typography variant="body">Friday</Typography>
            </td>
            <td className="element">
              <Typography variant="body">12:30pm - 8pm</Typography>
            </td>
          </tr>
          <tr className="row">
            <td className="element">
              <Typography variant="body">Saturday</Typography>
            </td>
            <td className="element">
              <Typography variant="body">10:00am- 10pm</Typography>
            </td>
          </tr>
          <tr className="row">
            <td className="element">
              <Typography variant="body">Sunday</Typography>
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
            padding-left: ${matches ? "2rem" : "1rem"};
            padding-right: ${matches ? "2rem" : "1rem"};
            padding-top: 2rem;
            padding-bottom: 2rem;
          }
        `}</style>
      </Box>
    </Box>
  );
}
