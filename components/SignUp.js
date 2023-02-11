import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider/AuthProvider";

const SignUp = () => {
     // signup
  const router = useRouter();
  const {SignUp} = useContext(AuthContext);

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) {
      newErrors.name = "Name is required";
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
    }
    

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);

      setTimeout(() => {
        console.log(formData);
        setIsSubmitting(false);
      }, 3000);
    }
    SignUp(formData.email,formData.password)
    .then(result=>{
        const user = result.user;
        alert("successfully register");
        router.push('/login');
        setErrors('');
    })
    .catch(error=>{
        setErrors(error.message);
    })

  };
  

 

  return (
    <div className="bg-gray-200 h-screen flex items-center justify-center">
      <form
        className="bg-white p-6 rounded-lg shadow-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-lg font-medium mb-4">Registration</h2>
        <div className="mb-4">
          
          <input
            id="firstname"
            name="firstname"
            type="text"
            value={formData.firstname}
            onChange={handleChange}
            placeholder="First Name"
            className={`w-full p-2 border border-gray-300 rounded-lg
            focus:outline-none focus:bg-white focus:border-purple-500 ${
              errors.firstname ? "border-red-500" : ""
            }`}
          />
          {errors.firstname && (
            <p className="text-red-500 text-xs italic mt-2">{errors.firstname}</p>
          )}
        </div>
        <div className="mb-4">
          
          <input
            id="lastname"
            name="lastname"
            type="text"
            value={formData.lastname}
            onChange={handleChange}
            placeholder="Last name"
            className={`w-full p-2 border border-gray-300 rounded-lg
            focus:outline-none focus:bg-white focus:border-purple-500 ${
              errors.lastname ? "border-red-500" : ""
            }`}
          />
          {errors.lastname && (
            <p className="text-red-500 text-xs italic mt-2">{errors.lastname}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block font-medium mb-2 text-gray-700"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className={`w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:bg-white focus:border-purple-500 ${
              errors.email ? "border-red-500" : ""
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs italic mt-2">{errors.email}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block font-medium mb-2 text-gray-700"
            htmlFor="password"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className={`w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:bg-white focus:border-purple-500 ${
              errors.password ? "border-red-500" : ""
            }`}
          />
          {errors.password && (
            <p className="text-red-500 text-xs italic mt-2">
              {errors.password}
            </p>
          )}
        </div>
        
        <button
          type="submit"
          className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
