import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { otpUser } from "../../redux/slice/user.slice";
import { useForm } from "react-hook-form";
import { handleSuccess, handleError } from "../../utils/tostify.js";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/icons/logo.png";

const OTP = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { user, loading, error, success } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const length = 6;
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const [userOTP, setUserOTP] = useState("");
  const inputRefs = useRef([]);

  const onSubmit = () => {
    const data = {
      otp: userOTP,
    };
    dispatch(otpUser(data));
  };

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (index, e) => {
    const value = e.target.value;
    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    const combinedOtp = newOtp.join("");
    if (combinedOtp.length === length) setUserOTP(combinedOtp);

    if (value && index < length - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleClick = (index) => {
    inputRefs.current[index].setSelectionRange(1, 1);

    if (index > 0 && !otp[index - 1]) {
      inputRefs.current[otp.indexOf("")].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0 &&
      inputRefs.current[index - 1]
    ) {
      inputRefs.current[index - 1].focus();
    }
  };

  useEffect(() => {
    if (loading === false && success && user.message) {
      handleSuccess(user.message);
      setTimeout(() => {
        navigate("/home");
      }, 2000);
    } else if (error) {
      handleError(user.message);
    }
  }, [loading, success, error, user]);

  return (
    <div className="flex flex-col gap-10 justify-center items-center h-screen w-full">
      <div className="flex flex-col items-center justify-center gap-2 w-full">
        <img className="w-20" src={Logo} alt="logo" />
        <h1 className="heading text-3xl font-bold text-center">Verify OTP</h1>
        <p className="text text-xl text-center">Enter your OTP to continue</p>
      </div>
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-6 w-[540px] mx-auto">
          <div className="flex gap-6 w-[350px] sm:w-[470px] md:w-[540px] mx-auto justify-center items-center">
            {otp.map((value, index) => {
              return (
                <input
                  key={index}
                  type="text"
                  ref={(input) => (inputRefs.current[index] = input)}
                  value={value}
                  onChange={(e) => handleChange(index, e)}
                  onClick={() => handleClick(index)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="border-gray-300 outline-gray-300 border-2 w-[40px] sm:w-[60px] md:w-[70px] h-[40px] sm:h-[60px] md:h-[70px] rounded-lg text-center text-3xl poppins text"
                />
              );
            })}
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`background-40BFFF w-[350px] sm:w-[470px] md:w-[540px] mx-auto uppercase text-xl py-4 rounded-md text-white font-bold border-none ${
              loading ? "cursor-not-allowed" : "cursor-pointer"
            }`}
          >
            {loading ? "verifying..." : "verify"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default OTP;
