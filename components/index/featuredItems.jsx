import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import LinkCard from "../index/linkCard";
import FeaturedItem from "../index/featuredItem";
import Link from "../shared/link";
const FeaturedItems = () => {
  return (
    <Box
      sx={{
        background: "#FFF1E1",
        paddingBottom: "5vh",
        paddingTop: "5vh",
      }}
    >
      <Box
        sx={{
          marginX: "10vw",
          display: "flex",
          flexDirection: "column",
          rowGap: "5vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            marginTop: "5vh",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="caption"
            sx={{ marginRight: "15vw", color: "#532A10", fontStyle: "italic" }}
          >
            FEATURED ITEMS
          </Typography>
          <hr
            style={{
              backgroundColor: "#532A10",
              border: "none",
              height: "1px",
              width: "25vw",
              alignSelf: "flex-start",
            }}
          ></hr>
        </Box>
        <FeaturedItem
          description="A strong, sweet, and espresso-based spin on a latte."
          src="/cafe_assets/Mobile/Mobile Spanish Latte.png"
        >
          Spanish Latte
        </FeaturedItem>
        <FeaturedItem
          description="Classic fresh strawberry puree swirled with cold cream."
          src="/cafe_assets/Mobile/Mobile Strawberry Latte.png"
        >
          Strawberry Latte
        </FeaturedItem>
        <FeaturedItem
          description="Concentrated caffeine that will wake you up with a creamy kick."
          src="/cafe_assets/Mobile/Mobile Espresso.png"
        >
          Espresso
        </FeaturedItem>
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
            background: "#FFFAF4",
          }}
        >
          <Typography
            variant="caption"
            sx={{ color: "#532A10", textDecoration: "none", py: "2rem" }}
          >
            BROWSE THE MENU
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default FeaturedItems;
