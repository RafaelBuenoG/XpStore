import Nav from "@/components/Nav";
import BottomNav from "@/components/BottomNav";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <>
      <Nav />  
      <main className="pb-16">
        <Slider />
        
      </main>
      <BottomNav />
    </>
  );
}
