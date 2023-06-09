import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../Style";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";

type form = {
  email: string;
  // password: string | number;
  password: any;
};

const SignIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<form>({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;
      console.log(user);
      if (user) {
        navigate("/feedscreen");
      }
      toast.success("sign in successfully");
    } catch (error) {
      console.log(error);
      toast.error("Something happened");
    }
  }

  return (
    <div className={`${styles.flexCenter}`}>
      <div className={`lg:w-[50%] ${styles.flexCenter} mt-[4rem]`}>
        <div className={``}>
          <h1 className={`${styles.h5Style}`}>Welcome back</h1>
          <div className="py-6">
            <div>
              <form onSubmit={handleSubmit}>
                <input
                  placeholder="Email"
                  className="w-full h-12 border px-2 my-1"
                  type="email"
                  value={email}
                  id="email"
                  onChange={handleInput}
                />
                <input
                  placeholder="Password"
                  className="w-full h-12 border px-2 my-2"
                  value={password}
                  id="password"
                  type="password"
                  onChange={handleInput}
                />

                <div className="flex justify-between w-full my-2">
                  <p>
                    Don't Have an account?{" "}
                    <Link to="/signup" className="text-blue-500">
                      Sign Up
                    </Link>{" "}
                  </p>
                  <Link to="/forgotPassword" className="text-red-500">
                    Forgot Password
                  </Link>
                </div>

                <button
                  type="submit"
                  className={`${styles.flexCenter} ${styles.btnStyle} cursor-pointer my-3 w-full h-12 bg-blue-500 shadow-md hover:shadow-lg rounded hover:bg-blue-700`}
                >
                  Sign In
                </button>

                <div className={`${styles.flexCenter} gap-4 `}>
                  <div className="border border-gray-400 w-[50%]" />
                  <p>OR</p>
                  <div className="border border-gray-400 w-[50%]" />
                </div>

                <button
                  className={`${styles.flexCenter} ${styles.btnStyle} cursor-pointer my-3 w-full h-12 bg-red-500 shadow-md hover:shadow-lg rounded hover:bg-red-700`}
                >
                  Sign In with Google
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
