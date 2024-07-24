import Link from "next/link";
import Container from "../Container";

export default function Header() {
  return (
    <Container>
      <h1 className="text-center text-5xl font-bold">
        Redux-Toolkit Practicing Examples
      </h1>
      <Link
        className="rounded-lg p-2 transition-all duration-1000 hover:underline"
        href={`https://sametcc.me/redux-practice`}
        target="_blank"
      >
        Source Code
      </Link>
    </Container>
  );
}
