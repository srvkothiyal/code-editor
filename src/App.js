import React from "react";

//Components=
import Home from "./Components/Home";
import DataProvider from "./context/DataProvider";


export default function App() {
  return (
    <DataProvider>
      <Home />
    </DataProvider>
  );
}
