import { useState } from "react";

function Counter() {
  let [counter, setCounter] = useState(0);

  /*Incorrect way of defining setState method
  function IncrementHandler() {
    setCounter(counter++);
    console.log(counter);
  }*/
  function IncrementHandler() {
    setCounter((prev) => prev + 1);
    console.log(counter);
  }
  function DecrementHandler() {
    setCounter((prev) => prev - 1);
    console.log(counter);
  }

  return (
    <>
      <div className="w-[400px] mx-auto m-12">
        <h1 className="text-3xl font-semibold">This is a simple counter App</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
          consequatur sequi neque!
        </p>
        <h1 className="font-bold text-3xl">{counter}</h1>
        <div className="mt-4 flex gap-2">
          {/* Incorrect way of calling an event handler */}
          {/* <button
            onClick={IncrementHandler()}
            className="px-5 py-2 rounded-lg bg-orange-600 text-white"
          > */}
          <button
            onClick={IncrementHandler}
            className="px-5 py-2 rounded-lg bg-orange-600 text-white"
          >
            Increment
          </button>
          <button
            onClick={DecrementHandler}
            className="px-5 py-2 rounded-lg bg-orange-600 text-white"
          >
            Decrement
          </button>
        </div>
      </div>
    </>
  );
}

export default Counter;
