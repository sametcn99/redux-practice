import React from "react";
import Container from "../Container";
import Link from "next/link";

export default function Header() {
  return (
    <Container>
      <h1 className="text-center text-5xl font-bold">
        Redux-Toolkit Practicing Examples
      </h1>
      <Link
        className="rounded-lg bg-green-900 p-2 transition-all duration-1000 hover:bg-green-950"
        href={`https://github.com/sametcn99/redux-practice`}
        target="_blank"
      >
        Source Code
      </Link>
    </Container>
  );
}
