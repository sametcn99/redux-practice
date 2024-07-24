"use client";
import { selectSortedData } from "@/lib/redux/slices/sortedSlicer";
import { useSelector } from "react-redux";
import Container from "../Container";

const Sort = () => {
  const data = useSelector(selectSortedData);
  return (
    <Container>
      <h1>Sorted User Data</h1>
      <ul className="flex h-[20rem] w-full flex-col gap-2 overflow-y-auto">
        {data.map((item: any) => (
          <li
            key={item.id}
            className="flex flex-col rounded-lg bg-black/20 p-2"
          >
            <span> {item.name}</span>
            <span> {item.email}</span>
          </li>
        ))}
        {data.length === 0 && <li className="text-center">Not Found</li>}
      </ul>
      <ul></ul>
    </Container>
  );
};

export default Sort;
