import React from "react";
import { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

const SearchExercises = () => {
  return (
    <Stack justifyContent="center" alignItems="center" mt="37px" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        textAlign="center"
        mb="50px"
      >
        Awesome Exercises You <br />
        Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: {lg: "1170px", xs: "350px"},
            backgroundColor: "#FFF",
            borderRadius: "40px"

          }}
          type="text"
          height="76px"
          value=""
          onChange={(e) => {}}
          placeholder="Search Exercises"
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
