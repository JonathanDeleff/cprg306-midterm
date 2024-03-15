"use client";
import React, { useEffect, useState } from "react";

const APICallExam = ({onClick}) => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <button className="bg-red-100 p-2 rounded-md border border-red-500" onClick={onClick}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default APICallExam;
