import Counter from "@/components/page-components/Counter";
import Header from "@/components/page-components/Header";
import Search from "@/components/page-components/Search";
import Todo from "@/components/page-components/Todo";
import UserProfile from "@/components/page-components/User";

export default function Home() {
  return (
    <main className="my-10 flex w-full select-none flex-col gap-6 p-2 sm:w-[20rem] md:w-[30rem] lg:w-[40rem]">
      <Header />
      <Counter />
      <UserProfile />
      <Todo />
      <Search />
    </main>
  );
}
