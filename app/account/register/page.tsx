
"use client";

import Link from "next/link";

export default function page() {
  return (
    <main className="min-h-screen bg-white  flex items-center justify-center p-4 mt-36">
      <div className="w-full max-w-md bg-white shadow-2xl p-6 rounded-md border-[1px] border-gray-400">

        {/* Titre */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold  text-black">
            Créer un compte
          </h1>

          <p className="mt-2 text-gray-500 font-extrabold">
            Rejoignez Njamala — cest gratuit
          </p>
        </div>

        {/* Formulaire */}
        <form className="space-y-5">

          {/* Nom */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Nom complet
            </label>

            <input
              id="name"
              type="text"
              placeholder="Votre nom complet"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-black focus:ring-1 focus:ring-black"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Adresse email
            </label>

            <input
              id="email"
              type="email"
              placeholder="votre@email.com"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-black focus:ring-1 focus:ring-black"
            />
          </div>

          {/* Mot de passe */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Mot de passe
            </label>

            <input
              id="password"
              type="password"
              placeholder="••••••••"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-black focus:ring-1 focus:ring-black"
            />
          </div>

          {/* Confirmation */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Confirmer le mot de passe
            </label>

            <input
              id="confirmPassword"
              type="password"
              placeholder="••••••••"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-black focus:ring-1 focus:ring-black"
            />
          </div>

          {/* Bouton */}
          <button
            type="submit"
            className="w-full rounded-lg bg-black py-3 text-xl font-extrabold text-white hover:bg-gray-800 transition cursor-pointer"
          >
            Créer mon compte
          </button>
        </form>

        {/* Connexion */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Vous avez déjà un compte ?{" "}
          <Link
            href="/account/login"
            className="font-semibold text-black hover:underline"
          >
            Se connecter
          </Link>
        </p>

      </div>
    </main>
  );
}

