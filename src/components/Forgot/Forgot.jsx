import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { forgetUser, resetState } from "../../redux/slice/user.slice";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { handleSuccess, handleError } from "../../utils/tostify.js";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/icons/logo.png";

function Forgot() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { user, loading, error, success } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const onSubmit = (userInfo) => {
    dispatch(forgetUser(userInfo));
  };

  useEffect(() => {
    if (loading === false && success && user.message) {
      handleSuccess(user.message);
      setTimeout(() => {
        dispatch(resetState())
        navigate("/otp");
      }, 2000);
    } else if (error) {
      handleError(user.message);
    }
  }, [loading, success, error]);

  return (
    <div>
      <form
        className="flex items-center justify-center flex-col h-full w-full gap-7 poppins py-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col items-center justify-center gap-2">
          <img className="w-20" src={Logo} alt="logo" />
          <h1 className="heading text-3xl font-bold text-center">
            Forgot password
          </h1>
          <p className="text text-xl text-center">Enter your email to continue</p>
        </div>

        <div className="w-[80%] sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[30%] flex flex-col gap-3">
          <div className="flex justify-center items-center border-gray-300 border-[1px] rounded-md w-full gap-3 py-1 px-3">
            <MdOutlineEmail className="text text-4xl w-[10%]" />
            <div className="w-[90%]">
              <input
                className="w-full text-xl text outline-none border-none mt-4"
                type="email"
                placeholder="Your Email"
                autoComplete="off"
                {...register("email", {
                  required: { value: true, message: "Email is required" },
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Please enter a valid email address",
                  },
                })}
              />
              <p className="text-xs h-4 flex items-center text-red-700">
                {errors.email && errors.email.message}
              </p>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`background-40BFFF uppercase text-xl py-4 rounded-md text-white font-bold border-none ${
              loading ? "cursor-not-allowed" : "cursor-pointer"
            }`}
          >
            {loading ? "Sending..." : "Send OTP"}
          </button>

          <div className="flex flex-col w-full justify-center text-center items-center gap-1">
            <div className="flex gap-1">
              <p className="text text-lg">Have an account?</p>
              <Link to={"/signup"} className="color-40BFFF text-lg font-bold">
                Login
              </Link>
            </div>
            <div className="flex gap-1">
              <p className="text text-lg">Don’t have an account?</p>
              <Link to={"/signup"} className="color-40BFFF text-lg font-bold">
                Register
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Forgot;