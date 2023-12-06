"use client";
import { useEffect } from "react";
import Container from "../Container";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";
import { updateTime } from "@/lib/redux/slices/timerSlicer";

export default function Time() {
  // Initialize Redux dispatch hook
  const dispatch = useDispatch();

  // Retrieve timestamp from Redux state using the useSelector hook
  const timestamp = useSelector((state: RootState) => state.time.timestamp);

  // Create a Date object based on the retrieved timestamp
  const time = new Date(timestamp);

  // Set up an effect to update the timestamp at regular intervals
  useEffect(() => {
    // Check if the code is running in a browser environment
    if (typeof window !== "undefined") {
      // Set up an interval to dispatch a Redux action to update the timestamp
      const intervalId = setInterval(() => {
        const newTime = new Date();
        dispatch(updateTime(newTime.getTime()));
      });

      // Clean up the interval when the component unmounts
      return () => clearInterval(intervalId);
    }
  }, [dispatch]);
  return (
    <Container>
      <ul className="flex flex-col items-center text-center text-xs sm:text-base md:text-lg lg:text-2xl">
        <li>{time.toString()}</li>
        <li>{time.toDateString()}</li>
        <li>{time.toLocaleString()}</li>
        <li>{time.toLocaleDateString()}</li>
        <li>{time.toLocaleTimeString()}</li>
        <li>{time.toUTCString()}</li>
        <li>{time.toISOString()}</li>
      </ul>
    </Container>
  );
}
