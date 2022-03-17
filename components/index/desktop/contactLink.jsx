import React from "react";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import Link from "../../shared/link";

export default function ContactLink({ href, children}) {
  return (
    <motion.div
      initial={{ textDecoration: "none" }}
      whileHover={{ textDecoration: "underline" }}
    >
      <Typography component={Link} noLinkStyle={true} href={href} variant="bottomNavText">
        {children}
      </Typography>
    </motion.div>
  );
}
