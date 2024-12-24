import { useState } from "react";

function User() {
  let [user, setUser] = useState({
    name: "Aarav Sharma",
    img: "https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWVufGVufDB8MHwwfHx8MA%3D%3D",
    profession: "Software Engineer",
    requestSent: false,
    isFriend: false,
  });

  function sendRequestHandler() {
    setUser((prev) => ({
      ...prev,
      requestSent: true,
    }));
  }

  return (
    <>
      <div className="w-[400px] mx-auto m-12">
        <h1 className="text-3xl font-semibold">Follow Me</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
          provident id velit.
        </p>
        <div className="w-full mt-5 mb-3 flex justify-between items-center mx-auto bg-neutral-200 px-5 py-2 rounded-lg">
          <div className="flex items-center gap-4">
            <img
              className="w-12 h-12 object-cover rounded-full"
              src={user.img}
              alt=""
            />
            <div className="">
              <p className="">{user.name}</p>
              <p className="text-sm">{user.profession}</p>
            </div>
          </div>
          <button onClick={sendRequestHandler} className="">
            {user.requestSent ? "Request Sent" : "Send Request"}
          </button>
        </div>
      </div>
    </>
  );
}

export default User;
