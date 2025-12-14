import React from "react";
import ReactDOM from "react-dom/client";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

//writing my first ever component
function FirstComponent() {
  return (
    <>
      <h1>This is my first component of react</h1>
      <h2>Hi this is my header 2</h2>
      <SecondComponent />
    </>
  );
}

function SecondComponent() {
  // this is called as react fragment. also written as
  return (
    <React.Fragment>
      <h1>
        This header is using react frangment. We cant apply styles to react
        fragment as its an empty tag.
      </h1>
    </React.Fragment>
  );
}

root.render(<FirstComponent />);
