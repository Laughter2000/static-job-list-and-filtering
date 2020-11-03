import React from "react";
import { render } from "react-dom";
import Listing from "./Listings";

const App = () => {
  return (
    <div>
      <Listing />
    </div>
  );
};

render(<App />, document.getElementById("root"));
