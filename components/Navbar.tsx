"use client";

import { useState } from "react";
import Link from "next/link";
import { Bookmark, ShoppingCart, User, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b bg-black">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-extrabold text-amber-400"
        >
          Njamala
        </Link>

        {/* Navigation desktop */}
        <div className="hidden items-center gap-8 md:flex">
          <Link href="/" className="text-sm font-extrabold text-amber-400 hover:text-white">
            Accueil
          </Link>

          <Link href="/catalogue" className="text-sm font-extrabold text-white hover:text-amber-400">
            Catalogue
          </Link>

          <Link href="/categories" className="text-sm font-extrabold text-white hover:text-amber-400">
            Catégories
          </Link>

          <Link href="/blog" className="text-sm font-extrabold text-white hover:text-amber-400">
            Blog
          </Link>

          <Link href="/apropos" className="text-sm font-extrabold text-white hover:text-amber-400">
            À propos
          </Link>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-6">

          <Link href="/favoris" aria-label="Favoris">
            <Bookmark className="text-white hover:text-amber-400" size={24} />
          </Link>

          <Link href="/pagner" aria-label="Panier">
            <ShoppingCart className="text-white hover:text-amber-400" size={24} />
          </Link>

          <Link href="/account" aria-label="Compte">
            <User className="text-white hover:text-amber-400" size={24} />
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white md:hidden"
            aria-label="Ouvrir le menu"
          >
            {menuOpen ? <X size={28} /> : "☰"}
          </button>
        </div>
      </nav>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="border-t border-gray-800 bg-black px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5">

            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="font-extrabold text-amber-400"
            >
              Accueil
            </Link>

            <Link
              href="/catalogue"
              onClick={() => setMenuOpen(false)}
              className="font-extrabold text-white"
            >
              Catalogue
            </Link>

            <Link
              href="/categories"
              onClick={() => setMenuOpen(false)}
              className="font-extrabold text-white"
            >
              Catégories
            </Link>

            <Link
              href="/blog"
              onClick={() => setMenuOpen(false)}
              className="font-extrabold text-white"
            >
              Blog
            </Link>

            <Link
              href="/apropos"
              onClick={() => setMenuOpen(false)}
              className="font-extrabold text-white"
            >
              À propos
            </Link>

          </div>
        </div>
      )}
    </header>
  );
}