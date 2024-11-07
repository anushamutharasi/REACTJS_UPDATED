import "./App.css";
import Examples from "./React_Practice/components/Examples";


import Header from "../src/Projects/InvestmentCalculator/components/Header";
import Input from "./React_Practice/components/Input";
import UserInput from "./Projects/InvestmentCalculator/components/UserInput";

function App() {
 
  return (
    <>
      {/* <Header />
      <main>
        <Examples />
      </main>
      <p>
        <Input type="text" placeholder="Enter your name" />
      </p>
      <p>
        <Input type="submit" text="Submit"></Input>
      </p> */}
      <Header/>
      <UserInput/>
    </>
  );
}

export default App;
