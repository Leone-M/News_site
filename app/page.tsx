import NewsBlock from "./ui/news_block";
import ApplicationButton from "./ui/new_form";

export default function Home() {
  return (
      <main className="grid bg-zinc-900">
        <div className="grid grid-cols-2">
        <NewsBlock />
        <div>
          <ApplicationButton />
        </div>
      </div>
      </main>
  );
}
