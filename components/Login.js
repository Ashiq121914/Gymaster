import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider/AuthProvider";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [admin, setAdmin] = useState([]);
console.log(admin.role)
  useEffect(() => {
    fetch(`http://localhost:3001/user/allusers/${formData.email}`)
    .then(res=>res.json())
    .then(data=>setAdmin(data))
  }, [formData.email]);
  // signup
  const router = useRouter();
  const { SignIn } = useContext(AuthContext);

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

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

    return Object.values(newErrors).every((error) => error === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Submit the form
    }
    SignIn(formData.email, formData.password)
      .then((result) => {
        const user = result.user;
        alert("successfully login");
        console.log(admin.role)
        if (admin) {
          router.push("/usersdata");
        } else {
          router.push("/");
        }
      })
      .catch((error) => {
        setErrors(error.message);
      });
  };
  console.log(formData);

  return (
    <div className="container mx-auto">
      <form
        className="bg-white p-6 rounded-lg shadow-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-lg font-medium mb-4">Login</h2>
        <div className="mb-4">
          <label className="block mb-2 font-medium text-sm" htmlFor="email">
            Email
          </label>
          <input
            className={`w-full border border-gray-400 p-2 rounded-lg ${
              errors.email && "border-red-500"
            }`}
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {errors.email && (
            <p className="text-red-500 text-xs italic mt-2">{errors.email}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-medium text-sm" htmlFor="password">
            Password
          </label>
          <input
            className={`w-full border border-gray-400 p-2 rounded-lg ${
              errors.password && "border-red-500"
            }`}
            id="password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          {errors.password && (
            <p className="text-red-500 text-xs italic mt-2">
              {errors.password}
            </p>
          )}
          <Link href="/reset">Forgot Password</Link>
        </div>
        <button
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 rounded-lg"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
