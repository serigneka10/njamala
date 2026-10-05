import ProductCard from "@/components/ProductCard";
import { Funnel, Search, Table } from "lucide-react";
import React from "react";

export default function page() {
  return (
    <div className="p-7 mt-14">
      {/* Nos produits */}
      <section className="mt-10 px-6 pb-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="flex justify-center text-3xl font-extrabold text-gray-900">
            Nos Produits
          </h2>

          {/* Barre de contrôle */}
          <div className="mt-6">
            {/* Recherche */}
            <button className="flex w-full gap-2.5 rounded-lg border border-gray-300 bg-white px-4 py-4 text-left text-xl font-medium hover:border-amber-400">
              <Search />
              <span>Recherche...</span>
            </button>

            <div className="mt-7 flex justify-between">
              {/* Gauche */}
              <div className="flex items-center gap-3">
                {/* Filtre */}
                <button className="flex justify-center gap-3.5 rounded-lg border border-gray-300 bg-white px-6 py-2 text-sm font-medium hover:bg-gray-50">
                  <Funnel />

                  <span className="mt-1">Filtre</span>
                </button>

                {/* Nombre de produits */}
                <span className="text-xl font-bold text-gray-500">
                  26 produits
                </span>
              </div>

              {/* Droite */}
              <div className="flex items-center gap-3">
                {/* Tri */}
                <select className="rounded-lg border border-gray-300 bg-white px-6 py-2 text-sm outline-none hover:border-amber-400">
                  <option>Produit vedette</option>
                  <option>Prix croissant</option>
                  <option>Prix décroissant</option>
                  <option>Plus récent</option>
                </select>

                {/* Vue grille */}
                <button
                  className="rounded-lg border border-gray-300 bg-black p-2"
                  aria-label="Vue grille"
                >
                  <Table className="text-white" />
                </button>

                {/* Vue liste */}
                <button
                  className="rounded-lg border border-gray-300 p-2"
                  aria-label="Vue liste"
                >
                  ☰
                </button>
              </div>
            </div>

            {/* Produits */}
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <ProductCard
                name="Casque sans fil"
                description="Customize your belongings with this Sticker Pack"
                price={50}
                image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
                button="ajouter au produits"
              />

              <ProductCard
                name="Casque sans fil"
                description="Customize your belongings with this Sticker Pack"
                price={50}
                image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
                button="ajouter au produits"
              />

              <ProductCard
                name="Casque sans fil"
                description="Customize your belongings with this Sticker Pack"
                price={50}
                image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
                button="ajouter au produits"
              />

              <ProductCard
                name="Casque sans fil"
                description="Customize your belongings with this Sticker Pack"
                price={50}
                image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
                button="ajouter au produits"
              />

              <ProductCard
                name="Casque sans fil"
                description="Customize your belongings with this Sticker Pack"
                price={50}
                image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
                button="ajouter au produits"
              />

              <ProductCard
                name="Casque sans fil"
                description="Customize your belongings with this Sticker Pack"
                price={50}
                image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
                button="ajouter au produits"
              />

              <ProductCard
                name="Casque sans fil"
                description="Customize your belongings with this Sticker Pack"
                price={50}
                image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
                button="ajouter au produits"
              />

              <ProductCard
                name="Casque sans fil"
                description="Customize your belongings with this Sticker Pack"
                price={50}
                image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
                button="ajouter au produits"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="flex items-center justify-center gap-2 sm:gap-4  p-10">
        <button className="px-4 py-2 rounded-md bg-amber-700 text-white hover:bg-amber-800 transition">
          Précédent
        </button>
        <button className="flex h-10 w-10 items-center justify-center rounded-md bg-black text-white hover:bg-gray-800 transition">
          {" "}
          1
        </button>

        <button className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-200 text-black hover:bg-gray-300 transition">
          {" "}
          2
        </button>

        <button className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-200 text-black hover:bg-gray-300 transition">
          {" "}
          3
        </button>

        <button className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-200 text-black hover:bg-gray-300 transition">
          4
        </button>

        <button className="px-4 py-2 rounded-md bg-amber-700 text-white hover:bg-amber-800 transition">
          Suivant
        </button>
        <div></div>

       
      </div>
       <p className="font-extrabold text-gray-900 flex justify-center">Afficher de 1 a 8 sur 2</p>
    </div>
  );
}
