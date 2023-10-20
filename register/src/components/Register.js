import { useState } from "react";
import { BiHide } from "react-icons/bi";
import { BiShow } from "react-icons/bi";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmVisibility = () => {
    setConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="h-screen flex gap-5 flex-col justify-center bg-gradient-to-tl from-white via-[#8ACFED] to-[#79CDF1]">
      <div className="w-full flex justify-center overflow-hidden">
        <div
          className="bg-white rounded-xl sm:px-10 sm:py-10 px-6 py-5 sm:space-y-5 space-y-3 border border-gray-300 min-w-[20rem]"
          style={{ boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.1)" }}
        >
          <h2 className="text-3xl ">Register</h2>
          <div className="sm:flex sm:flex-row flex-col gap-x-5">
            <div className="flex flex-col gap-1 sm:pb-0 pb-5">
              <label>Name</label>
              <input
                //placeholder="Insert your name"
                type="text"
                className="border border-gray-500 py-1 px-2 rounded-[4px] overflow-ellipsis"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label>Surname</label>
              <input
                //placeholder="Insert your Surname"
                type="text"
                className="border border-gray-500 py-1 px-2 rounded-[4px] overflow-ellipsis"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label>Email</label>
            <input
              //placeholder="Insert your Email"
              type="text"
              className="border border-gray-500 py-1 px-2 rounded-[4px] overflow-ellipsis"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label>Date of birthday</label>
            <input
              className="w-full border border-gray-500 py-1 px-2 rounded-[4px] overflow-ellipsis"
              //placeholder="Insert your password"
              type="date"
            />
          </div>
          <div className="flex flex-col gap-1 relative">
            <label>Password</label>
            {showPassword ? (
              <BiShow
                onClick={togglePasswordVisibility}
                className="absolute w-5 h-5 right-3 bottom-[10%] cursor-pointer opacity-60"
              />
            ) : (
              <BiHide
                onClick={togglePasswordVisibility}
                className="absolute w-5 h-5 right-3 bottom-[10%] cursor-pointer opacity-60"
              />
            )}
            <input
              className="w-full border border-gray-500 py-1 px-2 rounded-[4px] overflow-ellipsis"
              type={showPassword ? "text" : "password"}
            />
          </div>
          <div className="flex flex-col gap-1 relative">
            <label>Confirm Password</label>
            {showConfirmPassword ? (
              <BiShow
                onClick={toggleConfirmVisibility}
                className="absolute w-5 h-5 right-3 bottom-[10%] cursor-pointer opacity-60"
              />
            ) : (
              <BiHide
                onClick={toggleConfirmVisibility}
                className="absolute w-5 h-5 right-3 bottom-[10%] cursor-pointer opacity-60"
              />
            )}
            <input
              className="w-full border border-gray-500 py-1 px-2 rounded-[4px] overflow-ellipsis"
              type={showConfirmPassword ? "text" : "password"}
            />
          </div>
          <div className="pt-5">
            <button className="bg-[#31B1FE] hover:bg-[#2c9fe5] px-5 py-2 rounded-full text-white font-medium">
              Create Account
            </button>
          </div>
        </div>
      </div>
      <div className="flex mx-auto w-full text-center">
        <div className="bg-white bg-opacity-30 w-full p-4 rounded-[4px] max-w-[30rem] mx-auto">
          <p>
            Already have an account?{" "}
            <span className="text-[#113e59] hover:text-[#165072] cursor-pointer font-semibold">
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
