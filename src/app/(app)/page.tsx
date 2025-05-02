import Categories from "@/components/categories";
import Stream from "@/components/stream";




export default function Home() {
  return (
    <div className="flex">
      <Categories />
      <Stream />
    </div>
  );
}
