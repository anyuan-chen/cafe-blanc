import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import LinkCard from "../../index/linkCard";
import { AnimatePresence, motion } from "framer-motion";
import FeaturedItem from "./featuredItem";
import Link from "../../shared/link";
const buttonVariants = {
  rest: {},
  animate: {
    backgroundColor: "#532A10",
  },
};
const textVariants = {
  rest: {
    color: "#532A10",
  },
  animate: {
    color: "#FFFAF4",
  },
};
const FeaturedItems = () => {
  return (
    <AnimatePresence>
      <Box sx={{ height: "calc(100vh - 100px)" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly",
            height: "100%",
          }}
        >
          <Box>
            <Typography
              variant="h3"
              sx={{ color: "#532A10", fontStyle: "italic" }}
            >
              Featured Items
            </Typography>
          </Box>
          <Box
            sx={{
              marginX: "10vw",
              display: "flex",
              flexDirection: "row",
              columnGap: "5vw",
            }}
          >
            <FeaturedItem
              description="A strong, sweet, and espresso-based spin on a latte."
              src="/cafe_assets/Desktop/Desktop Spanish Latte.png"
            >
              Spanish Latte
            </FeaturedItem>
            <FeaturedItem
              description="Classic fresh strawberry puree swirled with cold cream."
              src="/cafe_assets/Desktop/Desktop Strawberry Latte.png"
            >
              Strawberry Latte
            </FeaturedItem>
            <FeaturedItem
              description="Concentrated caffeine that will wake you up with a creamy kick."
              src="/cafe_assets/Desktop/Desktop Espresso.png"
            >
              Espresso
            </FeaturedItem>
          </Box>
          <Box
            component={motion.div}
            sx={{ color: "#532A10" }}
            initial="rest"
            animate="rest"
            whileHover="animate"
            variants={buttonVariants}
          >
            <Box
              href="/menu"
              component={Link}
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "2px solid #532A10",
                textDecoration: "none",
              }}
            >
              <Typography
                variant="caption"
                sx={{ py: "2rem", px: "4rem", color: "inherit" }}
                variants={textVariants}
                component={motion.h2}
              >
                BROWSE THE MENU
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </AnimatePresence>
  );
};
export default FeaturedItems;
