import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import LinkCard from "../../index/linkCard";
import { AnimatePresence, motion } from "framer-motion";
import FeaturedItem from "./featuredItem";
import Link from "../../shared/link";
const buttonVariants = {
  rest: {
    boxShadow: "4px 4px 0 #532A10",
  },
  animate: {
    boxShadow: "6px 6px 0 #532A10",
    transform: "translate(-2px, -2px)",
  },
};

const staggerVariants = {
  rest: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const itemVariants = {
  rest: { opacity: 0 },
  animate: { opacity: 1 },
};
const FeaturedItems = () => {
  return (
    <AnimatePresence>
      <Box
        sx={{ height: "calc(100vh - 100px)" }}
        component={motion.div}
        // initial={{ opacity: 0 }}
        // whileInView={{ opacity: 1 }}
        // transition={{ duration: 1 }}
      >
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
            component={motion.div}
            variants={staggerVariants}
            initial="rest"
            whileInView="animate"
          >
            <motion.div variants={itemVariants}>
              <FeaturedItem
                description="A strong, sweet, and espresso-based spin on a latte."
                src="/cafe_assets/Desktop/Desktop Spanish Latte.png"
              >
                Spanish Latte
              </FeaturedItem>
            </motion.div>
            <motion.div variants={itemVariants}>
              <FeaturedItem
                description="Classic fresh strawberry puree swirled with cold cream."
                src="/cafe_assets/Desktop/Desktop Strawberry Latte.png"
              >
                Strawberry Latte
              </FeaturedItem>
            </motion.div>
            <motion.div variants={itemVariants}>
              <FeaturedItem
                description="Concentrated caffeine that will wake you up with a creamy kick."
                src="/cafe_assets/Desktop/Desktop Espresso.png"
              >
                Espresso
              </FeaturedItem>
            </motion.div>
          </Box>
          <Box
            component={motion.div}
            sx={{ color: "#532A10", borderRadius: "6px" }}
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
                boxShadow: "2px 2px 0 #532A10",
                borderRadius: "6px",
                textDecoration: "none",
                color: "#532A10",
              }}
            >
              <Typography
                variant="caption"
                sx={{ py: "2rem", px: "4rem", color: "#532A10" }}
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
