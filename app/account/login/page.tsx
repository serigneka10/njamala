"use client";

import Link from "next/link";

export default function page() {
  return (
    <main className="min-h-screen bg-white shadow-2xl flex items-center justify-center px-6 mt-14">
      <div className="w-full max-w-md shadow-2xl p-4 rounded-md border-[1px] border-gray-400">
        {/* Titre */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-black">Connexion</h1>

          <p className="mt-2 text-gray-500">Accédez à votre compte Njamala</p>
        </div>

        {/* Formulaire */}
        <form className="space-y-5">
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
            <div className="flex items-center justify-between mb-2">
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-700"
              >
                Mot de passe
              </label>

              <Link
                href="/account/forgot-password"
                className="text-sm text-gray-600 hover:text-black"
              >
                Mot de passe oublié ?
              </Link>
            </div>

            <input
              id="password"
              type="password"
              placeholder="••••••••"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-black focus:ring-1 focus:ring-black"
            />
          </div>

          {/* Bouton */}
          <button
            type="submit"
            className="w-full rounded-lg bg-black py-3 text-xl  text-white hover:bg-gray-800 transition font-extrabold"
          >
            Se connecter
          </button>
        </form>

        {/* Inscription */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Pas de compte ?{" "}
          <Link
            href="/account/register"
            className="font-semibold text-black hover:underline"
          >
            Créez-en un
          </Link>
        </p>
      </div>
    </main>
  );
}
