import React from "react";
import { EXAMPLES } from "../../data"

import { useState } from "react";
import TabButton from "./TabButton";
import Section from "./Section";
import Tabs from "./Tabs";



const Examples = () => {
   
  const [selectedButton, setSelectedButton] = useState();
  function OnSelectButton(selectedbutton) {
    console.log("Button Selected is" + selectedbutton);
    setSelectedButton(selectedbutton);
    console.log("SELECTED BUTTON INSTATE" + selectedButton);
  }
  return (
    <>
      <Section title="Examples" id="example">
        <Tabs
        ButtonsContainer="menu"
          buttons={
            <>
              <TabButton onSelect={() => OnSelectButton("components")}>
                Components
              </TabButton>
              <TabButton onSelect={() => OnSelectButton("jsx")}>JSX</TabButton>
              <TabButton onSelect={() => OnSelectButton("props")}>
                PROPS
              </TabButton>
              <TabButton onSelect={() => OnSelectButton("state")}>
                State
              </TabButton>
            </>
          }
        >
          {}
        </Tabs>
        <menu style={{ display: "flex", gap: "20px" }}></menu>
        {!selectedButton ? <p>Please select a Button</p> : null}
        {selectedButton && (
          <div>
            <h2>Title:{EXAMPLES[selectedButton].title}</h2>
            <p>
              <b>Description:</b>
              {EXAMPLES[selectedButton].description}
            </p>
            <pre>
              <code>
                <b>code:</b>
                {EXAMPLES[selectedButton].code}
              </code>
            </pre>
          </div>
        )}
      </Section>
    </>
  );
};

export default Examples;
