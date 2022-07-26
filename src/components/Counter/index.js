//? const Counter = ({ counter, increment, decrement }) => {

const Counter = (props) => {
    const { counter, increment, decrement } = props;
  return (
    <div>
      <h1>Contador: {counter}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default Counter;

// const Counter = (props) => {
//   return (
//     <div>
//       <h1>Contador: {props.counter}</h1>
//       <button onClick={props.increment}>+</button>
//       <button onClick={props.decrement}>-</button>
//     </div>
//   );
// };

// export default Counter;