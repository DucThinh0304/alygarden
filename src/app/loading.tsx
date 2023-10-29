"use client";
import { CircularProgress } from "@nextui-org/react";
import React from "react";

const Loading = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <CircularProgress />
    </div>
  );
};

export default Loading;
