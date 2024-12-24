import { useState } from "react";
import Counter from "./components/Counter";
import Alert from "./components/Alert";
import Loader from "./components/Loader";
import User from "./components/User";

function App() {
  let [age, setAge] = useState(28);

  return (
    <>
      <div className="mt-12 w-[400px] mx-auto">
        <h1 className="font-semibold text-3xl ">Hey! my age is {age}</h1>
        <div className="mb-12">
          <button
            onClick={() => {
              setAge(30);
            }}
            className="bg-blue-600 rounded-lg py-2 px-5 mt-4 text-white"
          >
            Update my age
          </button>
        </div>
      </div>

      <hr />
      <Counter />
      <hr />
      <Alert />
      <hr />
      <Loader />
      <hr />
      <User />
    </>
  );
}

export default App;
