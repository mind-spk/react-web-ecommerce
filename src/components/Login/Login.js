// src/Login.js
import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { Link } from "react-router-dom";

function Login() {
  const [submit, setSubmit] = useState();
  const [text, setText] = useState("");
  const [text2, setText2] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;

    if (!emailPattern.test(text)) {
      newErrors.email = " * ไม่ใช่รูปเเบบอีเมล";
    }

    if (!passwordPattern.test(text2)) {
      newErrors.password =
        "* รหัสผ่านควรมีความยาว 8 ตัวอักษรขึ้นไป  , ตัวอักษร (a-z, A-Z) , ตัวเลข (0-9) , เเละตัวอักษรพิเศษ ";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      clickMe("submit");
    }
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleChanges = (e) => {
    setText2(e.target.value);
  };

  const clickMe = (x) => {
    setSubmit(x);
  };

  return (
    <div className=" w-full h-screen bg-orange-500/80 ">
      <div className="flex justify-end items-end min-w-10 p-[100px] mr-[120px]">
        <div>
          <form
            className="flex flex-col mt-[80px] items-center p-6 shadow-md w-[390px]  fix-h-[540px] text-white rounded-[35px] backdrop-blur-[15px] bg-white/20"
            onSubmit={handleSubmit}
          >
            <h2 className="text-white font-semibold text-4xl mb-4 text-center mt-[15px]">
              Login
            </h2>

            <div className="mt-10 mb-4">
              <input
                type="text"
                className="bg-transparent border-b-2 border-black-500 w-[280px] px-3 py-2 placeholder:text-white focus:top-[10] "
                placeholder="Email"
                value={text}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="w-[300px] text-wrap text-sm text-red-500 mt-2">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="mb-4">
              <input
                type="password"
                className="bg-transparent border-b-2 border-black-500 w-[280px] px-3 py-2 text-white placeholder:text-white placeholder-slate-400"
                placeholder="Password"
                value={text2}
                onChange={handleChanges}
              />
              {errors.password && (
                <p className="w-[300px] text-wrap text-sm text-red-500 mt-2">
                  {errors.password}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-[180px] h-[45px] bg-blue-600 text-white py-2 rounded-[30px] hover:bg-blue-400 mt-[30px]"
            >
              Login
            </button>

            <div className="mt-5">
              <input className="mr-3" type="checkbox" />
              <label htmlFor="scales">Remember my Username</label>
            </div>

            <div className="flex justify-around gap-8 mt-10 text-3xl font-semibold">
              <FaFacebook />
              <BiLogoGmail />
            </div>
            <label className="mt-5 bg-transparent hover:text-blue-400 focus:top-[10]">
              <Link to="/register">Create new account</Link>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
