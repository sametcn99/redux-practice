"use client";
import { fetchApiData } from "@/lib/redux/slices/apiSlicer";
import { RootState } from "@/lib/redux/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "../Container";

export default function Api() {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector(
    (state: RootState) => state.api,
  );

  useEffect(() => {
    dispatch(fetchApiData() as any);
  }, [dispatch]);

  return (
    <Container>
      <h2>Data from async thunk action</h2>
      {data === null && <div>No data available</div>}
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      <ul className="flex h-[20rem] w-full flex-col gap-2 overflow-y-auto">
        {data?.map((item: any) => (
          <li
            key={item.id}
            className="flex flex-col rounded-lg bg-black/20 p-2"
          >
            <span> {item.name}</span>
            <span> {item.email}</span>
          </li>
        ))}
      </ul>
    </Container>
  );
}
