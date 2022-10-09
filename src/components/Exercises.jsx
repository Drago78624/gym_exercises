import React, { useEffect, useState } from "react";
import { Pagination, Box, Stack, Typography } from "@mui/material";
import { exercisesOptions, fetchData } from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const exercisePerPage = 9

  const indexOfLastExercise = currentPage * exercisePerPage
  const indexOfFirstExercise = indexOfLastExercise - exercisePerPage
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise)

  useEffect(()=>{
    const fetchExercisesData = async () => {
      let exercisesData = []
      if(bodyPart === "all"){
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exercisesOptions
        )
      }else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exercisesOptions
        )
      }
      setExercises(exercisesData)
    }
    fetchExercisesData()
  }, [bodyPart])

  const paginate = (e, value) => {
    setCurrentPage(value)
    window.scrollTo({top: 1800, behaviour: "smooth"})
  }

  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <Typography variant="h3" mb="46px">
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "100px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.map((exercise, index) => {
          return <ExerciseCard key={index} exercise={exercise} />;
        })}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises.length > exercisePerPage && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisePerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
