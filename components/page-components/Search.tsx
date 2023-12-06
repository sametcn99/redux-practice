"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setSearchTerm,
  selectFilteredData,
} from "@/lib/redux/slices/searchSlicer";
import { RootState } from "@/lib/redux/store";
import Container from "../Container";
import Input from "../Input";

export default function Search() {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state: RootState) => state.search.searchTerm);
  const filteredData = useSelector(selectFilteredData);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <Container>
      <Input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={handleSearch}
        className="rounded border p-2"
        name="search bar"
      />
      <ul className="flex h-[20rem] w-full flex-col gap-2 overflow-y-auto">
        {filteredData.map((item: any) => (
          <li key={item.id} className="flex flex-col rounded-lg bg-black p-2">
            <span> {item.name}</span>
            <span> {item.email}</span>
          </li>
        ))}
        {filteredData.length === 0 && (
          <li className="text-center">Not Found</li>
        )}
      </ul>
    </Container>
  );
}
