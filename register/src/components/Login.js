import { useState } from "react";
import { BiHide } from "react-icons/bi";
import { BiShow } from "react-icons/bi";

function Login() {
  const [showPassword, setShowPassword] = useState(false);


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };



  return (
    <div className="h-screen flex gap-5 flex-col justify-center bg-gradient-to-tl from-white via-[#8ACFED] to-[#79CDF1]">
      <div className="w-full flex justify-center overflow-hidden">
        <div
          className="bg-white rounded-xl sm:px-10 sm:py-10 px-6 py-5 sm:space-y-5 space-y-3 border border-gray-300 min-w-[20rem]"
          style={{ boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.1)" }}
        >
          <h2 className="text-3xl ">Login</h2>

          <div className="flex flex-col gap-1">
            <label>Email</label>
            <input
              //placeholder="Insert your Email"
              type="text"
              className="border border-gray-500 py-1 px-2 rounded-[4px] overflow-ellipsis"
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

          <div className="pt-5">
            <button className="bg-[#31B1FE] hover:bg-[#2c9fe5] px-5 py-2 rounded-full text-white font-medium">
              Login
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white bg-opacity-30 p-4 w-full rounded-[4px] max-w-[30rem] flex mx-auto justify-center">
        <p>
          Already have an account?
          <span className="text-[#2c9fe5] cursor-pointer font-semibold pl-1">
            Register
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
