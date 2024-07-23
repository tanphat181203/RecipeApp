import { useState } from "react";
import "./App.css";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import FoodDetails from "./components/FoodDetails";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodID, setfoodID] = useState("715415");
  return (
    <div className="App">
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
          <FoodList foodData={foodData} setfoodID={setfoodID} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetails foodID={foodID} />
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
