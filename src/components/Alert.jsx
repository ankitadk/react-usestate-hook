import { useState } from "react";

function Alert() {
  let [alertStatus, setAlerStatus] = useState(false);

  function alertHandler() {
    setAlerStatus((prev) => !prev);
  }

  return (
    <>
      {alertStatus ? (
        <div className="bg-neutral-50 border px-5 py-2 absolute right-10 top-[480px] rounded-lg">
          This is a React alert.
        </div>
      ) : (
        ""
      )}
      <div className="w-[400px] mx-auto m-12">
        <h1 className="text-3xl font-semibold">This is a simple Alert App</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel rerum
          doloribus aperiam!
        </p>

        <button
          onClick={alertHandler}
          className="bg-orange-600 px-4 py-2 rounded-lg text-white mt-4"
        >
          {alertStatus ? "Hide" : "Show"} Alert
        </button>
      </div>
    </>
  );
}

export default Alert;
