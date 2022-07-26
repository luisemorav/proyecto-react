// Cuando importamos algo deo REact se procura ponerlo siempre al principio
import { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Counter from "./components/Counter"
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  // Crear una funcion que aumente el contador
  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="App">
      <Header />
      <Counter counter={counter} increment={increment} decrement={decrement} />
      <Footer />
    </div>
  );
}

export default App;

// function App() {
//   const [counter, setCounter] = useState(0);

//   // Crear una funcion que aumente el contador
//   const increment = () => {
//     setCounter(counter + 1);
//   };

//   const decrement = () => {
//     setCounter(counter - 1);
//   };

//   return (
//     <div className="App">
//       <Header />
//       <h1>Contador: {counter}</h1>
//       <button onClick={increment}>+</button>
//       <button onClick={decrement}>-</button>
//       <Footer />
//     </div>
//   );
// }

// export default App;
