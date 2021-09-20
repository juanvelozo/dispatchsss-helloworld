import { Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
  exit: { y: "-100vh", transition: { ease: "easeInOut", duration: 0.5 } },
};

export const Home = () => {
  return (
    <motion.div variants={variants} initial="hidden" animate="show" exit="exit">
      <Box sx={{ flexGrow: 1, height: 100 }}>
        <Grid container direction="column" justify="center" alignItems="center">
          <h1>Hello World</h1>
          <Button variant="contained">
            <Link to="/daftpunk">Start</Link>
          </Button>
        </Grid>
      </Box>
    </motion.div>
  );
};
