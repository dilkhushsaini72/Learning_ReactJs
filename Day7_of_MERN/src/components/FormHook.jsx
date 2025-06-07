import React, { useState } from "react";
import { useForm } from "react-hook-form";

const FormHook = () => {
  const [inputBtn, setInputBtn] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
    reset(); // optional: reset the form after submit
  };

  const onInputBtnClick = () => {
    setInputBtn(!inputBtn);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Let's Learn useForm Hook in React JS
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-md rounded-2xl p-8 w-full max-w-md space-y-6"
      >
        {/* Email Field */}
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-1 font-medium text-gray-700">
            Email
          </label>
          <input
            {...register("email", {
              required: { value: true, message: "Email required*" },
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email format",
              },
            })}
            type="email"
            placeholder="Enter your email"
            className={`p-3 rounded-md border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:ring-2 focus:ring-blue-400`}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/* Password Field */}
        <div className="flex flex-col relative">
          <label htmlFor="password" className="mb-1 font-medium text-gray-700">
            Password
          </label>
          <input
            {...register("password", {
              required: "Enter your password",
              minLength: {
                value: 8,
                message: "Password should be at least 8 characters",
              },
            })}
            type={inputBtn ? "text" : "password"}
            placeholder="Enter your password"
            className={`p-3 rounded-md border  ${
              errors.password ? "border-red-500 outline" : "border-gray-300"
            } focus:outline-none focus:ring-2 focus:ring-blue-400`}
          />

          <span
            onClick={onInputBtnClick}
            className="absolute right-0 top-10 pr-4 text-[#1ecfee] cursor-pointer font-bold"
          >
            {inputBtn ? "Hide" : "Show"}
          </span>
          {errors.password && (
            <p className="mt-1 text-sm text-red-500">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 rounded-xl font-semibold transition duration-300 ${
            isSubmitting
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-500 hover:bg-green-600 text-white"
          }`}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default FormHook;
