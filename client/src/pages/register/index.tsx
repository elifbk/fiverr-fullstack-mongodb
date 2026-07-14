import React, { useState, type FC, type SubmitEvent } from "react";
import Field from "../../components/form/field";
import { Link } from "react-router-dom";
import Toggle from "../../components/form/toggle";
import type { RegisterData } from "../../types";
import { useRegister } from "../../service/auth";

const Register: FC = () => {
  const [isSeller, setIsSeller] = useState<boolean>(false);
  const { mutate, isPending } = useRegister();

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    // bir formdata örneği oluştur
    const formData = new FormData(e.target);

    // bütün inputlardaki verileri nesne formatında al
    const userData = Object.fromEntries(
      formData.entries()
    ) as unknown as RegisterData;

    // isSeller değerini boolean formatında ekle
    userData.isSeller = isSeller;

    mutate(userData);
  };

  return (
    <div className="pt-10 md:pt-24 max-w-225 mx-auto sm:min-w-100 max-sm:w-full p-5">
      <form
        onSubmit={handleSubmit}
        className=" grid md:grid-cols-2 md:gap-10 gap-10"
      >
        <div>
          <h1 className="title mb-10 font-bold text-2xl text-black">
            Success <span className="text-pink-400">starts </span>
            here.
          </h1>

          <Field label="Name" name="username" />
          <Field label="Email" name="email" type="email" />
          <Field label="Picture" name="profilePicture" type="file" />
          <Field label="Country" name="country" />
          <Field label="Password" name="password" type="text" />
        </div>

        <div>
          <h1 className="title mb-10 font-bold text-2xl">
            I want to become a seller.
          </h1>

          <Toggle setIsSeller={setIsSeller} />

          <Field label="Phone" name="phone" disabled={!isSeller} />
          <Field
            label="Description"
            name="description"
            type="textarea"
            disabled={!isSeller}
          />

          <button disabled={isPending} className="form-button w-full">
            Continue
          </button>

          <p className="mt-5 text-gray-500 ">
            Already have an account?
            <Link to="/register" className="ms-3 text-green-600 underline">
              Sign in
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
