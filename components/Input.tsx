import React from "react";

export default function Input({ ...props }: any) {
  return (
    <input
      placeholder={props.placeholder}
      className="w-full rounded-lg bg-white bg-opacity-5 p-2 text-gray-400"
      type={props.type}
      value={props.value}
      onChange={props.onChange}
      name={props.name}
      autoComplete="off"
    />
  );
}
