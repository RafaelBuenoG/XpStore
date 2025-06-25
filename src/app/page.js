import Nav from "@/components/Nav";
import BottomNav from "@/components/BottomNav";
import Slider from "@/components/Slider";
import CategoryCarousel from "@/components/CategoryCarousel";
import ItemCarousel from "@/components/ItemCarousel";
import { products } from "@/data/products";
import { categories } from "@/data/categories";

const categoria = categories
const destaque = products.filter(p => p.destaque);
const promocao = products.filter(p => p.promocao);

export default function Home() {
  return (
    <>
      <Nav />  
      <Slider />
      <main className="pb-16 px-6 md:px-12">
        <CategoryCarousel title={"Categorias"} categories={categoria} />
        <ItemCarousel title={"Destaques da Semana"} items={destaque} />
        <ItemCarousel title={"Promoções"} items={promocao} />
      </main>
      <BottomNav />
    </>
  );
}
