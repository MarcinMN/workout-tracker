import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import ExerciseCard from "./components/ExerciseCard";

function App() {
  return (
    <Grid templateAreas={`"nav" "main"`} templateColumns={"1fr"}>
      <GridItem area="nav" bg="darkgreen">
        <NavBar />
      </GridItem>
      <GridItem area="main" bg="darkblue">
        <ExerciseCard />
      </GridItem>
    </Grid>
  );
}

export default App;
