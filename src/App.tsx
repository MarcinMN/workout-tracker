import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import ExerciseCard from "./components/ExerciseCard";
import SetCard from "./components/SetCard";
import RepInput from "./components/RepInput";

function App() {
  return (
    <Grid templateAreas={`"nav" "main"`} templateColumns={"1fr"}>
      <GridItem area="nav" bg="darkgreen">
        <NavBar />
      </GridItem>
      <GridItem area="main">
        <ExerciseCard />
        <SetCard />
        <RepInput />
      </GridItem>
    </Grid>
  );
}

export default App;
