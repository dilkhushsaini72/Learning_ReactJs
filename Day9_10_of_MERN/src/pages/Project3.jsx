import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Project3 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const [inputText, setInputText] = useState("");

  // const formSubmitHandle = (e) => {
  //   e.preventDefault();
  // };

  const onSubmitForm = (e) => {
    e.preventDefault();
  };

  const inputChangeHandle = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div className="min-h-[80vh] bg-[#7a7a7a44]">
      <h2 className="text-center text-2xl py-4 text-white font-bold bg-fuchsia-600">
        Emoji Translator
      </h2>
      <div className="flex items-center justify-center ">
        <div className="shadow h-100 w-100 rounded-2xl bg-[#cfedff77] mt-3">
          <form onSubmit={() => handleSubmit(onSubmitForm)}>
            <input
              className="rounded outline-3 bg-white  px-3 py-2 w-full focus:outline-green-500"
              placeholder="Write something"
              type="text"
              value={inputText}
              // onChange={inputChangeHandle}
              {...register("inputText", {
                maxLength: {
                  value: 300,
                  message: "Character limited 300",
                },
              })}
            />

            <div className="text-wrap">
              <p className="break-words text-justify w-full max-w-[400px] px-3 py-2">
                {inputText}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Project3;
