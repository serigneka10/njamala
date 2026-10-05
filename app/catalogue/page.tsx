import CategoryCard from "@/components/categoryCard";
import { Search } from "lucide-react";

export default function CataloguePage() {
  const categories = [
    {
      id: 1,
      name: "Casques",
      description:
        "Découvrez nos casques audio pour une expérience sonore exceptionnelle.",
      image:
        "https://cdn.njamala.com/file-1787405346112-20633835-ba75-420c-bebe-1998697fc3b9.webp",
    },

    {
      id: 2,
      name: "Casques",
      description:
        "Découvrez nos casques audio pour une expérience sonore exceptionnelle.",
      image:
        "https://cdn.njamala.com/file-1787405346112-20633835-ba75-420c-bebe-1998697fc3b9.webp",
    },

    {
      id: 3,
      name: "Casques",
      description:
        "Découvrez nos casques audio pour une expérience sonore exceptionnelle.",
      image:
        "https://cdn.njamala.com/file-1787405346112-20633835-ba75-420c-bebe-1998697fc3b9.webp",
    },

    {
      id: 4,
      name: "Casques",
      description:
        "Découvrez nos casques audio pour une expérience sonore exceptionnelle.",
      image:
        "https://i.pinimg.com/736x/2c/25/07/2c250773a6127d50246f9090ed01435e.jpg",
    },

     {
      id: 4,
      name: "Casques",
      description:
        "Découvrez nos casques audio pour une expérience sonore exceptionnelle.",
      image:
        "https://i.pinimg.com/736x/2c/25/07/2c250773a6127d50246f9090ed01435e.jpg",
    },

     {
      id: 4,
      name: "Casques",
      description:
        "Découvrez nos casques audio pour une expérience sonore exceptionnelle.",
      image:
        "https://i.pinimg.com/736x/2c/25/07/2c250773a6127d50246f9090ed01435e.jpg",
    },

      {
      id: 4,
      name: "Casques",
      description:
        "Découvrez nos casques audio pour une expérience sonore exceptionnelle.",
      image:
        "https://i.pinimg.com/736x/2c/25/07/2c250773a6127d50246f9090ed01435e.jpg",
    },

     {
      id: 4,
      name: "Casques",
      description:
        "Découvrez nos casques audio pour une expérience sonore exceptionnelle.",
      image:
        "https://i.pinimg.com/736x/2c/25/07/2c250773a6127d50246f9090ed01435e.jpg",
    },

      {
      id: 4,
      name: "Casques",
      description:
        "Découvrez nos casques audio pour une expérience sonore exceptionnelle.",
      image:
        "https://i.pinimg.com/736x/2c/25/07/2c250773a6127d50246f9090ed01435e.jpg",
    },

     {
      id: 4,
      name: "Casques",
      description:
        "Découvrez nos casques audio pour une expérience sonore exceptionnelle.",
      image:
        "https://i.pinimg.com/736x/2c/25/07/2c250773a6127d50246f9090ed01435e.jpg",
    },

      {
      id: 4,
      name: "Casques",
      description:
        "Découvrez nos casques audio pour une expérience sonore exceptionnelle.",
      image:
        "https://i.pinimg.com/736x/2c/25/07/2c250773a6127d50246f9090ed01435e.jpg",
    },

     {
      id: 4,
      name: "Casques",
      description:
        "Découvrez nos casques audio pour une expérience sonore exceptionnelle.",
      image:
        "https://i.pinimg.com/736x/2c/25/07/2c250773a6127d50246f9090ed01435e.jpg",
    },

     
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* En-tête du catalogue */}
      <section className="px-6 py-20 mt-7">
        <div className="mx-auto max-w-7xl ">
          <h1 className="text-xl font-extrabold text-gray-900 md:text-5xl">
            Nos Catégories
          </h1>

          <p className=" mt-4 max-w-2xl text-lg font-bold text-gray-500">
            Découvrez tous nos produits organisés par catégorie
          </p>
        </div>
      </section>

      {/* button recherche*/}
      <section className="">
        <div className="flex items-center justify-center">
          <button className="flex w-full max-w-md items-center justify-start gap-3 rounded-md border border-gray-950 px-6 py-4 text-left">
            <Search className="text-gray-500" size={22} />
            <span className="font-extrabold">Recherche...</span>
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-10 p-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              name={category.name}
              description={category.description}
              image={category.image}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
