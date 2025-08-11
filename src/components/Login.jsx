import Header from "./Header";
import React, { useState } from "react";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const handleClick = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div
      className="relative w-screen h-screen"
      style={{
        backgroundImage: `url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f562aaf4-5dbb-4603-a32b-6ef6c2230136/dh0w8qv-9d8ee6b2-b41a-4681-ab9b-8a227560dc75.jpg/v1/fill/w_1192,h_670,q_70,strp/the_netflix_login_background__canada__2024___by_logofeveryt_dh0w8qv-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvZjU2MmFhZjQtNWRiYi00NjAzLWEzMmItNmVmNmMyMjMwMTM2XC9kaDB3OHF2LTlkOGVlNmIyLWI0MWEtNDY4MS1hYjliLThhMjI3NTYwZGM3NS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.LOYKSxIDqfPwWHR0SSJ-ugGQ6bECF0yO6Cmc0F26CQs')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent"></div>
      <Header />
      <form className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8 bg-black/85 rounded-lg w-96">
        <h1 className="text-2xl font-bold mb-4 text-white">{isSignIn ? "Sign In" : "Sign Up"}</h1>
        {!isSignIn && <input type="text" placeholder="Full Name" className="block w-full p-2 mb-4 bg-gray-800 text-white rounded" />}
        <input type="text" placeholder="Email or phone number" className="block w-full p-2 mb-4 bg-gray-800 text-white rounded" />
        <input type="password" placeholder="Password" className="block w-full p-2 mb-4 bg-gray-800 text-white rounded" />
        <button type="submit" className="w-full p-2 mb-4 bg-red-600 text-white rounded hover:bg-red-700">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="mt-4 text-sm text-gray-400 cursor-pointer" onClick={handleClick}>
          {isSignIn ? "New to Netflix? Sign up now." : "Already have an account? Sign in."}
        </p>
      </form>
    </div>
  );
};

export default Login;
