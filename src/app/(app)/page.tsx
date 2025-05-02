import Categories from "@/components/categories";
import Stream from "@/components/stream";
import PlannedStream from "@/components/stream";
import Image from "next/image";



export default function Home() {
  return (
    <div className="flex">
      <Categories />
      <Stream />
    </div>
  );
}
