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
import CounterButton from "../CounterButton";

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <Container>
      <div className="font-mono text-3xl">
        <span>Count:</span> <span>{count}</span>
      </div>
      <div className="flex gap-4">
        <CounterButton
          onClick={() => dispatch(decrement())}
          logo={<FaMinus />}
        />
        <CounterButton
          onClick={() => dispatch(increment())}
          logo={<FaPlus />}
        />
        <CounterButton
          onClick={() => dispatch(doubled())}
          logo={<span className="font-bold">2x</span>}
        />
        <CounterButton
          onClick={() => dispatch(half())}
          logo={<span className="font-bold">/2</span>}
        />
        <CounterButton
          onClick={() => dispatch(reset())}
          logo={<GrPowerReset />}
        />
      </div>
    </Container>
  );
}
