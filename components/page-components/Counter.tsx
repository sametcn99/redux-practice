"use client";
import { RootState } from "@/lib/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { FaPlus, FaMinus } from "react-icons/fa";
import {
  decrement,
  doubled,
  half,
  increment,
  reset,
} from "@/lib/redux/slices/counterSlicer";
import Container from "../Container";
import { GrPowerReset } from "react-icons/gr";

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <Container>
      <div className="font-mono text-3xl">
        Count: <span>{count}</span>
      </div>
      <div className="flex gap-4">
        <button onClick={() => dispatch(decrement())}>
          <FaMinus />
        </button>
        <button onClick={() => dispatch(increment())}>
          <FaPlus />
        </button>
        <button onClick={() => dispatch(doubled())}>
          <span className="font-bold">2x</span>
        </button>
        <button onClick={() => dispatch(half())}>
          <span className="font-bold">/ 2</span>
        </button>
        <button onClick={() => dispatch(reset())}>
          <span className="font-bold">
            <GrPowerReset />
          </span>
        </button>
      </div>
    </Container>
  );
}
