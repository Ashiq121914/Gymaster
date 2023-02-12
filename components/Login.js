import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "./AuthProvider/AuthProvider";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [admin, setAdmin] = useState([]);
  console.log(admin.role);
  const router = useRouter();
  const { SignIn } = useContext(AuthContext);

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    fetch(
      `https://gymaster-server-side.vercel.app/user/allusers/${formData.email}`
    )
      .then((res) => {
        return res.text();
      })
      .then((data) => setAdmin(data));
  }, [formData.email]);
  // signup

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);


  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Submit the form
    }
    SignIn(formData.email, formData.password)
      .then((result) => {
        const user = result.user;
        toast.success("Successfully login");

        if (admin.role !== "user") {
          router.push("/usersdata");
        } else {
          router.push("/");
        }
      })
      .catch((error) => {
        setErrors(error.message);
      });
  };

  return (
    <div className="max-w-[800px] mx-auto my-[96px]">
      <form className="bg-white p-6  " onSubmit={handleSubmit}>
        <h2 className="text-[42px]  ">Login</h2>
        <div className="grid grid-cols-1 xl:grid-cols-2 justify-between gap-4 mt-[40px]">
          <div className="mb-4 ">
            <input
              className={`w-full border border-black/20 py-[15px] pl-[15px]   ${
                errors.email && "border-red-500"
              }`}
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && (
              <p className="text-red-500 text-xs  mt-2">{errors.email}</p>
            )}
          </div>
          <div className="mb-4 w-full">
            <input
              className={`w-full border border-black/20 py-[15px] px-[15px] mb-[8px]  ${
                errors.password && "border-red-500"
              }`}
              id="password"
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleInputChange}
            />
            {errors.password && (
              <p className="text-red-500 text-xs italic mt-2">
                {errors.password}
              </p>
            )}
            <Link className="text-[14px] " href="/reset">
              Forgot Password
            </Link>
          </div>
        </div>
        <button
          className=" border border-black px-[55px] py-[12px] hover:bg-black hover:text-white text-black  text-[14px] font-semibold"
          type="submit"
        >
          Sign In
        </button>
        <Link className="text-[14px] mt-[8px] block font-normal" href="/signup">
          Create Account
        </Link>
      </form>
    </div>
  );
};

export default Login;
