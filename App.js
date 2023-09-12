import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <h1 className="head" tabIndex="1">
    Helloo react using JSX
  </h1>
);

//comopnent composition
const HeadingComponent = () => (
  <div id="container">
    <Title />
    <h1 className="heading"> hey component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
