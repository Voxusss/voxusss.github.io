import React from 'react';
import { useState, CSSProperties } from "react";
import { RingLoader } from "react-spinners";
const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
const Spinner = () => (
    <div className='flex h-screen items-center justify-center bg-black'>
    <div className="sweet-loading">
      <RingLoader
        color={"#ffffff"}
        loading={true}
        size={150}
      />
    </div>
    </div>
);
 
export default Spinner;