import Link from "next/link";
import { ArrowLeft, ShoppingCart } from "lucide-react";

export default function page() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="text-center">

        <ShoppingCart className="mx-auto mb-6 h-12 w-12 text-gray-800" />

        <h1 className="text-3xl font-extrabold text-black">
          Votre panier est vide
        </h1>

        <p className="mt-3 text-gray-500">
          Découvrez nos produits et ajoutez-les à votre panier
        </p>

        <Link
          href="/products"
          className="inline-block mt-7 bg-black text-white rounded-md px-7 py-3 font-extrabold hover:bg-gray-800 transition"
        >
          Continuer mes achats
        </Link>

        <div className="mt-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-black"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour à laccueil
          </Link>
        </div>

      </div>
    </main>
  );
}