import Image from "next/image";
import NewsBlock from "./ui/news_block";
import ApplicationButton from "./ui/new_form";

export default function Home() {
  return (
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div>
        <NewsBlock />
        <ApplicationButton />
      </div>
      </main>
  );
}
