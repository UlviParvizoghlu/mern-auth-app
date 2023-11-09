import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(false);
      setError(true);
      const res = await axios.post("/api/auth/signup", formData);
      const data = res.data;
      setLoading(false);
      if(data.success === false){
        setError(true)
        return
      }
      setError(false)

      navigate('/sign-in')
    } catch (error) {

    }
  };

  return (
    <div className="max-w-lg p-3 mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          onChange={handleChange}
          type="text"
          placeholder="Username"
          id="username"
          className="bg-slate-100 p-3 rounded-lg"
        />
        <input
          onChange={handleChange}
          type="email"
          placeholder="Email"
          id="email"
          className="bg-slate-100 p-3 rounded-lg"
        />
        <input
          onChange={handleChange}
          type="password"
          placeholder="Password"
          id="password"
          className="bg-slate-100 p-3 rounded-lg"
        />
        <button disabled={loading} className="bg-slate-700 text-white p-3 rounded-lg hover:opacity-90 disabled:opacity-75">
          {loading ? "Loading..." : "Sign Up"}
        </button>
        <OAuth/>
      </form>
      <div className="flex justify-between">
        <p>Have an account?</p>
        <Link to={"/sign-in"}>
          <span className="text-blue-500">Sign In</span>
        </Link>
      </div>
      <p className="text-red-700 mt-5">{error && 'Something went wrong'}</p>
    </div>
  );
};

export default SignUp;
