import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-600 text-white ">
      <div className="mx-auto max-w-7xl px-6 py-12">

        {/* Partie principale */}
       <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">

  {/* Njamala */}
  <div className="lg:col-span-2">
    <h2 className="mb-4 text-2xl font-extrabold text-amber-500">
      Njamala
    </h2>

    <p className="max-w-xl text-white font-extrabold leading-7">
      Njamala - Votre destination de confiance pour les produits de qualité.
      Nous nous engageons à vous offrir les meilleurs prix et un service client
      exceptionnel.
    </p>

    <div className="mt-5 space-y-3 text-gray-300">
      <p className="flex items-center gap-3">
        <MapPin size={18} />
        Dakar, Senegal
      </p>

      <p className="flex items-center gap-3">
        <Phone size={18} />
        +221 77 208 01 19
      </p>

      <p className="flex items-center gap-3">
        <Mail size={18} />
        contact@njamala.com
      </p>
    </div>
  </div>

  {/* Navigation */}
  <div>
    <h3 className="mb-5 text-lg font-semibold">
      Navigation
    </h3>

    <ul className="space-y-3 text-gray-400">
      <li>
        <Link href="/">Accueil</Link>
      </li>

      <li>
        <Link href="/categories">Catalogue</Link>
      </li>

      <li>
        <Link href="/products">Nos produits</Link>
      </li>

      <li>
        <Link href="/blog">Blog</Link>
      </li>

      <li>
        <Link href="/about">À propos</Link>
      </li>
    </ul>
  </div>

  {/* Catégories */}
  <div>
    <h3 className="mb-5 text-lg font-semibold">
      Catégories
    </h3>

    <ul className="space-y-3 text-gray-400">
      <li>
        <Link href="/categories/headsets">
          Headsets
        </Link>
      </li>

      <li>
        <Link href="/categories/monitors">
          Monitors
        </Link>
      </li>

      <li>
        <Link href="/categories/decors">
          Decors
        </Link>
      </li>

      <li>
        <Link href="/categories/stickers">
          Stickers
        </Link>
      </li>

      <li>
        <Link href="/categories/cleaning-kits">
          Cleaning Kits
        </Link>
      </li>

      <li>
        <Link href="/categories/bags">
          Bags
        </Link>
      </li>

      <li>
        <Link
          href="/categories"
          className="font-medium text-white"
        >
          Voir toutes les catégories →
        </Link>
      </li>
    </ul>
  </div>

  {/* Newsletter */}
  <div>
    <h3 className="mb-5 text-lg font-semibold">
      Restez Connecté
    </h3>

    <p className="mb-4 text-gray-400">
      Recevez nos dernières offres et nouveautés.
    </p>

    <div className="flex">
      <input
        type="email"
        placeholder="Votre email"
        className="w-full rounded-l-md bg-white px-4 py-3 text-black outline-none"
      />

      <button className="rounded-r-md bg-amber-700 px-4 py-3 font-medium text-white transition hover:bg-amber-800">
        Sinscrire
      </button>
    </div>
  </div>

</div>

        {/* Réseaux sociaux */}
       

        {/* Paiement + copyright */}
        {/* <div className="mt-8 flex flex-col justify-between gap-4 border-t border-gray-800 pt-6 md:flex-row">
          <p className="text-sm text-gray-500">
            © 2026 Njamala. Tous droits réservés.
          </p>

          <p className="text-sm text-gray-400">
            Moyens de paiement acceptés
          </p>
        </div> */}

      </div>
    </footer>
  );
}