import Nav from "@/components/Nav";
import BottomNav from "@/components/BottomNav";
import Slider from "@/components/Slider";
import CategoryCarousel from "@/components/CategoryCarousel";
import ItemCarousel from "@/components/ItemCarousel";
import Questions from "@/components/Faq";
import Footer from "@/components/Footer";
import Image from "next/image";
import { products } from "@/data/products";
import { categories } from "@/data/categories";

const destaque = products.filter(p => p.destaque);
const promocao = products.filter(p => p.promocao);

// Função para gerar preços aleatórios com preço antigo (mais alto)
function addRandomPrices(games) {
  return games.map(game => {
    // Preço entre 50 e 300
    const price = (Math.random() * 250 + 50).toFixed(2);
    // Preço antigo 10% a 30% maior
    const oldPrice = (price * (1 + (Math.random() * 0.2 + 0.1))).toFixed(2);

    return {
      slug: game.slug,
      name: game.name,
      image: game.background_image || "/placeholder-image.png",
      price: Number(price),
      oldPrice: Number(oldPrice),
      freeShipping: false
    };
  });
}

export default async function Home() {
  const API_KEY = process.env.RAWG_API_KEY;

  // Fazendo fetch dos jogos RAWG (server side)
  const res = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}&page_size=10&ordering=-rating`, {
    cache: 'no-store', // sempre dados frescos
  });

  if (!res.ok) {
    throw new Error('Falha ao buscar dados da RAWG API');
  }

  const data = await res.json();

  // Filtra jogos que tenham imagem válida
  const gamesWithImage = data.results.filter(game => game.background_image && game.background_image.trim() !== '');

  // Adiciona preços aleatórios aos jogos filtrados
  const rawgGames = addRandomPrices(gamesWithImage);

  return (
    <>
      <Nav />
      <Slider />
      <main className="px-6 md:px-12">
        <CategoryCarousel title={"Categorias"} categories={categories} />
        <ItemCarousel title={"Destaques da Semana"} items={destaque} />
        <ItemCarousel title={"Promoções"} items={promocao} />
        <ItemCarousel title={"Jogos em Mídia Digital (RAWG API)"} items={rawgGames} />
      </main>
      {/* <Questions /> */}
      <Footer />
      <BottomNav />
    </>
  );
}