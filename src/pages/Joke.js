import { Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { motion } from "framer-motion";
import React, { useState } from "react";

const variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  exit: { y: "-100vh", transition: { ease: "easeInOut", duration: 0.5 } },
};

export const Joke = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <motion.div variants={variants} initial="hidden" animate="show" exit="exit">
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
      >
        <h1>
          Wait, you just said 'Hello World'? <br />
          That's reminds me a song
        </h1>
        <Button
          variant="contained"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={handleToggle}
        >
          {toggle ? "hide" : "Show Me!"}
        </Button>
        {toggle && (
          <Box
            sx={{
              boxShadow: 1,
              borderRadius: 1,
              p: 2,
              minWidth: 300,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <iframe
              title="Around the world"
              src="https://open.spotify.com/embed/track/1pKYYY0dkg23sQQXi0Q5zN?theme=0"
              width="auto"
              height="80"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
            />
          </Box>
        )}
      </Grid>
    </motion.div>
  );
};
