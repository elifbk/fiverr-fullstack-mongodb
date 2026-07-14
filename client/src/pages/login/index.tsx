import React, { type FC } from "react";
import Field from "../../components/form/field";
import { Link } from "react-router-dom";
import type { LoginData } from "../../types";
import { useLogin } from "../../service/auth";

const Login: FC = () => {
  const { mutate, isPending } = useLogin();

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const loginData = Object.fromEntries(
      formData.entries()
    ) as unknown as LoginData;

    mutate(loginData);
  };

  return (
    <div className="container max-sm:px-5">
      <div className="pt-24 max-w-125 mx-auto sm:min-w-100 max-sm:w-full ">
        <h1 className="title mb-10">Continue with your email</h1>

        <form onSubmit={handleSubmit}>
          <Field label="Name" name="username" />
          <Field label="Password" name="password" />

          <button disabled={isPending} className="form-button">
            Continue
          </button>
        </form>

        <p className="mt-5 text-gray-500 ">
          Don’t have an account?
          <Link to="/register" className="ms-3 text-green-600 underline">
            Join here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
