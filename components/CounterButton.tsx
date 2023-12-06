import React from "react";

export default function CounterButton({ ...props }) {
  return (
    <button
      className="rounded-lg bg-black p-2 transition-all duration-200 hover:scale-110 "
      type="button"
      onClick={props.onClick}
    >
      {props.logo}
    </button>
  );
}
