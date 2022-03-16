import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@mui/material";
const descriptionVariant = {
  open: {
    height: "auto",
  },
  closed: {
    height: 0,
  },
};
const Question = ({ children, description }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginY: "3rem",
        }}
      >
        <Typography variant="questionHeading">{children}</Typography>
        <button style={{}} onClick={() => setOpen(!open)}>
          <Typography variant="h2">+</Typography>
        </button>
      </Box>
      <motion.div
        variants={descriptionVariant}
        animate={open ? "open" : "closed"}
        style={{ overflow: "hidden", marginBottom: open ? "3rem" : "0" }}
      >
        <Typography variant="body">{description}</Typography>
      </motion.div>
      <hr
        style={{
          border: "none",
          backgroundColor: "#532A10",
          height: "1px",
          width: "100%",
        }}
      ></hr>
    </>
  );
};
export default Question;
