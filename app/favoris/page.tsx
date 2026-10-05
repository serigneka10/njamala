import { Heart, ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function page() {
  return (
    <main>
      <div className="bg-mauve-900 p-20 space-y-3 mt-5">
        <p className="text-5xl text-white font-extrabold">
          {" "}
          <span className="text-5xl text-amber-400">Mes</span> Favories
        </p>
        <p className="font-extrabold text-white text-xl">
          Les produits que vous avez mis de côté.
        </p>
      </div>

      <div className="p-30 bg-white flex flex-col items-center justify-center">
        <div className="bg-gray-200 p-4 rounded-full">
  <Heart  className="h-10 w-10 text-gray-800" />
</div>

        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-black">
            Connectez-vous pour voir vos favoris
          </h1>

          <p className="mt-3 text-gray-500 font-extrabold">
            Enregistrez les produits que vous aimez et retrouvez-les à tout
            moment.
          </p>

          <Link
            href="/account/login"
            className="inline-block mt-7 bg-black text-white rounded-md px-7 py-3 font-extrabold hover:bg-gray-800 transition"
          >
            Se connecter
          </Link>
        </div>
      </div>
    </main>
  );
}
