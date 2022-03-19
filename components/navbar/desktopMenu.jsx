import Link from "../shared/link";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import DesktopMenuLink from "./desktopMenuLink";
import { useRouter } from "next/router";
import CheveronMenu from "./cheveronMenu";
export default function DesktopMenu() {
  const router = useRouter();
  let style = [0, 0, 0, 0];
  if (router.pathname === "/") {
    style[0] = 1;
  } else if (router.pathname === "/menu") {
    style[1] = 1;
  } else if (router.pathname === "/hours") {
    style[2] = 1;
  } else if (router.pathname === "/faq") {
    style[3] = 1;
  }
  return (
    <Box sx={{ display: "flex", fontFamily: "DMSans" }}>
      <DesktopMenuLink href="/" highlight={style[0]}>
        Home
      </DesktopMenuLink>
      <DesktopMenuLink href="/cafe_assets/cafe_blanc_menu.pdf" highlight={style[1]}>
        Menu
      </DesktopMenuLink>
      <DesktopMenuLink href="/hours" highlight={style[2]}>
        Hours
      </DesktopMenuLink>
      <DesktopMenuLink href="/faq" highlight={style[3]}>
        FAQ
      </DesktopMenuLink>
      <CheveronMenu></CheveronMenu>
    </Box>
  );
}
