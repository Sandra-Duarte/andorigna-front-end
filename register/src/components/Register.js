import React from "react";

function Register() {
  return (
    <div className="w-full flex justify-center">
      <div className="bg-white w-fit h-fit rounded-xl p-10 space-y-5 border border-gray-300">
        <h2 className="text-2xl">Register</h2>
        <div className="flex gap-10">
          <div className="flex flex-col gap-1">
            <label>Name</label>
            <input
              placeholder="Insert your name"
              type="text"
              className="border border-gray-500 py-0.5 px-1 rounded-md overflow-ellipsis"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label>Surname</label>
            <input
              placeholder="Insert your Surname"
              type="text"
              className="border border-gray-500 py-0.5 px-1 rounded-md overflow-ellipsis"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label>Email</label>
          <input
            placeholder="Insert your Email"
            type="text"
            className="border border-gray-500 py-0.5 px-1 rounded-md overflow-ellipsis"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label>Date of birthday</label>
          <input
            className="w-full border border-gray-500 py-0.5 px-1 rounded-md"
            placeholder="Insert your password"
            type="date"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label>Password</label>
          <input
            className="w-full border border-gray-500 py-0.5 px-1 rounded-md"
            placeholder="Insert your password"
            type="text"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label>Confirm Password</label>
          <input
            className="w-full border border-gray-500 py-0.5 px-1 rounded-md"
            placeholder="Insert your password"
            type="text"
          />
        </div>
        <div className="pt-5">
          <button className="bg-[#31B1FE] px-5 py-1 rounded-full text-white font-bold">
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
