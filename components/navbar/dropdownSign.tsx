import { Box } from "@mui/system";
import { motion } from "framer-motion";
import styles from "../../styles/DropdownSign.module.css";
import { Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import theme from "../../styles/theme";

const DropdownSign = () => {
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const signAnimation = {
    rest: {
      top: "25px",
    },
    active: {
      top: "35px",
    },
  };
  return (
    <motion.div
      id={styles.sign}
      style={{
        width: "200px",
        height: "50px",
        left: "30px",
      }}
      initial="rest"
      animate="rest"
      whileHover="active"
      variants={signAnimation}
    >
      <motion.div className={`${styles.left} ${styles.handle}`}>
        <div className={styles.circle} style={{}}>
          <div className={styles.innercircle}></div>
        </div>
        <motion.div className={styles.outerStick}>
          <motion.div className={styles.stick} style={{}}></motion.div>
        </motion.div>
      </motion.div>
      <Typography
        sx={{
          fontSize: matches ? "3.2rem" : "1.6rem",
          color: "background.beige.100",
          fontFamily: "DMSans",
          fontWeight: "semibold",
          letterSpacing: "0.03em",
        }}
      >
        Café Blanc
      </Typography>
      <motion.div className={`${styles.right} ${styles.handle}`}>
        <div className={styles.circle}>
          <div className={styles.innercircle}></div>
        </div>
        <motion.div className={styles.outerStick}>
          <motion.div className={styles.stick}></motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default DropdownSign;
{
  /* <style jsx>{`
        #sign {
          width: 150px;
          height: 40px;
          background-color: #532a10;
          display: flex;
          position: relative;
          top: ${hovered ? "30px" : "25px"};
          left: 50px;
          justify-content: center;
          align-items: center;
        }
        .handle {
          position: relative;
          bottom: 25px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .circle {
          margin-top: -10px;
          border-radius: 100%;
          background-color: #532a10;
          width: 25px;
          height: 25px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .innercircle {
          background-color: #fffaf4;
          width: 15px;
          border-radius: 100%;
          height: 15px;
        }
        .stick {
          height: ${hovered ? "35px" : "30px"};
          width: 5px;
          background-color: #532a10;
        }
        .right {
          left: 20px;
        }
        .left {
          right: 20px;
        }
      `}</style> */
}
