import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-24">
      <Navbar />
      Hello My Name is Shobhit
      <Counter/>
    </div>
  );
}
