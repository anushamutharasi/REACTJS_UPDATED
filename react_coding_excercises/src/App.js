import "./App.css";
import Examples from "./React_Practice/components/Examples";


import Header from "./React_Practice/components/Header/Header";
import Input from "./React_Practice/components/Input";

function App() {
 
  return (
    <>
     
      <Header />
      <main>
      <Examples/>
      </main>
      <Input type="text" placeholder="Enter your name"/>
      <Input type="submit" text="Submit"></Input>
    </>
  );
}

export default App;
