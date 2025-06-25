import Nav from "@/components/Nav";
import BottomNav from "@/components/BottomNav";
import Slider from "@/components/Slider";
import CategoryCarousel from "@/components/CategoryCarousel";
import ItemCarousel from "@/components/ItemCarousel";

const categorias = [
  {
    name: 'Aventura',
    icon: '',
    slug: 'aventura',
  },
  {
    name: 'RPG',
    icon: '',
    slug: 'rpg',
  },
  {
    name: 'Corrida',
    icon: '',
    slug: 'corrida',
  },
  {
    name: 'Esportes',
    icon: '',
    slug: 'esportes',
  },
  {
    name: 'Tiro',
    icon: '',
    slug: 'tiro',
  },
];

const destaques = [
  {
    name: 'Action Figure Kratos',
    image: '/products/kratos.webp',
    price: 99.99,
    oldPrice: 249,
    freeShipping: true,
    slug: '',
  },
  {
    name: 'FIFA 24',
    image: '/products/fifa24.jpg',
    price: 149,
    oldPrice: 1000,
    freeShipping: false,
    slug: '',
  },
  {
    name: 'Red Dead 2',
    image: '/products/reddead.jpg',
    price: 129,
    oldPrice: false,
    freeShipping: true,
    slug: '',
  },
];

const promocoes = [
  {
    name: 'Action Figure Kratos',
    image: '/products/kratos.webp',
    price: 99.99,
    oldPrice: 249,
    freeShipping: true,
    slug: '',
  },
  {
    name: 'FIFA 24',
    image: '/products/fifa24.jpg',
    price: 149,
    oldPrice: 1000,
    freeShipping: false,
    slug: '',
  },
  {
    name: 'Red Dead 2',
    image: '/products/reddead.jpg',
    price: 129,
    oldPrice: false,
    freeShipping: true,
    slug: '',
  },
];

export default function Home() {
  return (
    <>
      <Nav />  
      <Slider />
      <main className="pb-16 px-6 md:px-12">
        <CategoryCarousel title={"Categorias"} categories={categorias} />
        <ItemCarousel title={"Destaques da Semana"} items={destaques} />
        <ItemCarousel title={"Promoçôes"} items={promocoes} />
      </main>
      <BottomNav />
    </>
  );
}
