import React from "react";
import { useParams } from "react-router-dom";

const NoRoutesFound = () => {
  const { id } = useParams();

  return (
    <div>
      <h2 className="text-center text-2xl py-3 capitalize font-semibold" >Uh oh! This page is lost in space!</h2>
      <img
        src="https://www.shutterstock.com/image-vector/vector-flat-cosmos-design-background-260nw-573940966.jpg"
        className="w-screen"
      />
    </div>
  );
};

export default NoRoutesFound;
