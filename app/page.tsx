import Counter from "@/components/page-components/Counter";
import Header from "@/components/page-components/Header";
import Search from "@/components/page-components/Search";
import Todo from "@/components/page-components/Todo";
import UserProfile from "@/components/page-components/User";
import dynamic from "next/dynamic";

export default function Home() {
  // Dynamically import the Time component with client-side rendering
  const Time = dynamic(() => import("@/components/page-components/Time"), {
    ssr: false, // Disable server-side rendering for this component
  });

  return (
    <main className="my-10 flex select-none flex-col gap-6 p-2 transition-all duration-1000 sm:w-[20rem] md:w-[30rem] lg:w-[40rem]">
      <Header />
      <Time />
      <Counter />
      <UserProfile />
      <Todo />
      <Search />
    </main>
  );
}
