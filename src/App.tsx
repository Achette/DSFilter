import React from 'react'
import { Header, ListingBody } from "./components";
import { ContextNumberCount } from "./context/context-product-count";
import "./App.css";

function App() {

  const [contextNumberCount, setContexNumberCount] = React.useState<number>(0)

  return (
    <ContextNumberCount.Provider value={{ contextNumberCount, setContexNumberCount }}>
    <div className="App">
      <Header />
      <ListingBody />
    </div>
    </ContextNumberCount.Provider>
  );
}

export default App;
