import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "./AuthProvider/AuthProvider";

const SignUp = () => {
  const { SignUp } = useContext(AuthContext);
  const router = useRouter();
  const [error, setError] = useState("");
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const firstName = form.firstname.value;
    const lastName = form.lastname.value;
    const email = form.email.value;
    const password = form.password.value;
    const users = {
      firstname: firstName,
      lastname: lastName,
      email: email,
      password: password,
      role: "user",
    };
    SignUp(email, password)
      .then((result) => {
        const user = result.user;
        fetch("http://localhost:3001/user/register", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(users),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
        form.reset();
        toast.success("Successfully register");
        router.push("/login");
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="max-w-[800px] mx-auto my-[96px] p-4">
      <div>
        <h1 className="text-[#000000]  text-[40px] mb-[40px] ">
          Register Your Account
        </h1>
        <div className="">
          <form onSubmit={handleRegister} className=" ">
            <div className=" grid grid-cols-1 xl:grid-cols-2 gap-8">
            <div >
              
              <input
                placeholder="First Name"
                name="firstname"
                className="w-full border border-black/20 py-[15px] pl-[15px]"
                type="text"
              />
            </div>
            <div className="">
              
              <input
                placeholder="Last name"
                name="lastname"
                className="w-full border border-black/20 py-[15px] pl-[15px]"
                type="text"
              />
            </div>
            <div className="">
              
              <input
                placeholder="Email"
                name="email"
                className="w-full border border-black/20 py-[15px] pl-[15px]"
                type="text"
              />
            </div>
            <div className="">
              
              <input
                name="password"
                placeholder="Password"
                className="w-full border border-black/20 py-[15px] pl-[15px]"
                type="password"
              />
            </div>
            </div>
            
            <div className="mt-[40px]">
              <button
                type="submit"
                className=" border border-black px-[55px] py-[12px] hover:bg-black hover:text-white text-black  text-[14px] font-semibold"
              >
                Sign Up
              </button>
              
            </div>
            <Link href="/" className="text-[14px] mt-[8px] block font-normal" >Cancel</Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
