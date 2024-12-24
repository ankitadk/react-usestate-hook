import { useState } from "react";

function Loader() {
  let [loadingStatus, setLoadingStatus] = useState(false);

  function loaderHandler() {
    setLoadingStatus((prev) => !prev);
  }

  return (
    <>
      <div className="w-[400px] mx-auto m-12">
        <h1 className="text-3xl font-semibold">
          This is a simple Button Loader App
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          quibusdam numquam ea.
        </p>
        <button
          onClick={loaderHandler}
          className="bg-orange-600 px-4 py-2 rounded-lg text-white mt-4 flex gap-2 items-center"
        >
          <div className="">Load Data</div>
          {loadingStatus ? <div className="loader"></div> : ""}
        </button>
      </div>
    </>
  );
}

export default Loader;
