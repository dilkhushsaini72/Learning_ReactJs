import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const isAgree = watch("checkBox");

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 shadow-lg rounded-lg mt-10">
      <h2 className="text-3xl font-bold text-center mb-4">Send Us a Message</h2>
      <p className="text-center text-gray-600 mb-8">
        Please fill in the form below to get in touch with us.
      </p>

      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        {/* First + Last Name */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full">
            <input
              type="text"
              className={`outline-none border-2 rounded bg-gray-100 py-2 px-4 w-full ${
                errors.firstName ? "border-red-500" : "border-none"
              }`}
              placeholder="First Name"
              {...register("firstName", {
                required: {
                  value: true,
                  message: "Please provide your first name.",
                },
              })}
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.firstName.message}
              </p>
            )}
          </div>

          <div className="w-full">
            <input
              type="text"
              className={`outline-none border-2 rounded bg-gray-100 py-2 px-4 w-full ${
                errors.lastName ? "border-red-500" : "border-none"
              }`}
              placeholder="Last Name"
              {...register("lastName", {
                required: {
                  value: true,
                  message: "Please provide your last name",
                },
              })}
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.lastName.message}
              </p>
            )}
          </div>
        </div>

        {/* Email + Phone */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full">
            <input
              type="email"
              className={`outline-none border-2 rounded bg-gray-100 py-2 px-4 w-full ${
                errors.email ? "border-red-500" : "border-none"
              }`}
              placeholder="Email address"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required",
                },
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="w-full">
            <input
              type="number"
              className={`outline-none border-2 rounded bg-gray-100 py-2 px-4 w-full ${
                errors.phoneNum ? "border-red-500" : "border-none"
              }`}
              placeholder="Phone Number"
              {...register("phoneNum", {
                minLength: {
                  value: 10,
                  message: "Number should be at least 10 digits",
                },
              })}
            />
            {errors.phoneNum && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phoneNum.message}
              </p>
            )}
          </div>
        </div>

        {/* Message Box */}
        <div>
          <textarea
            className={`rounded outline-none border-2 bg-gray-100 py-2 px-4 w-full h-32 resize-none ${
              errors.message ? "border-red-500" : "border-none"
            }`}
            placeholder="Message"
            {...register("message", {
              required: {
                value: true,
                message: "Please fill in the message box",
              },
              minLength: {
                value: 10,
                message: "Message should be at least 10 characters",
              },
              maxLength: {
                value: 100,
                message: "Message can be up to 100 characters only",
              },
              pattern: {
                value: /^(?! ).*(?<! )$/,
                message: "Remove the spaces from starting or Ending",
              },
            })}
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Checkbox Agreement */}
        <div className="flex items-start gap-2 text-sm">
          <input
            type="checkbox"
            id="check"
            {...register("checkBox", {
              required: {
                value: true,
                message: "Please agree to the terms",
              },
            })}
          />
          <label htmlFor="check" className="text-gray-700">
            I've read and agree with{" "}
            <span className="text-blue-600 underline cursor-pointer">
              Terms of Service
            </span>{" "}
            and{" "}
            <span className="text-blue-600 underline cursor-pointer">
              Privacy Policy
            </span>
            .
          </label>
        </div>
        {errors.checkBox && (
          <p className="text-red-500 text-sm mt-1">{errors.checkBox.message}</p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!isAgree}
          className={`w-full py-2 rounded transition ${
            isAgree
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-gray-400 text-gray-200 cursor-not-allowed"
          }`}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
