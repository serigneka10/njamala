import React from "react";

export default function page() {
  return (
    <main>
      <div className="mt-10 bg-taupe-900 p-28 space-y-6">
        <p className="font-extrabold text-5xl flex justify-center items-center text-white">
          À propos de <span className="text-amber-500">Njamala</span>{" "}
        </p>
        <p className="text-white text-xl font-extrabold flex flex-col justify-center items-center">
          Njamala est votre boutique en ligne de référence au Sénégal. Notre
          mission est simple :{" "}
          <span>
            vous apporter les meilleurs produits du quotidien — électronique,
            maison, mode, beauté
          </span>{" "}
          et plus à des prix justes, avec des conseils honnêtes.
        </p>
      </div>

      <div className="flex flex-col space-y-5 p-6 mt-7">
        <p className="font-extrabold text-3xl text-black ml-50">
          Notre Histoire
        </p>
        <p className="flex flex-col justify-center items-center text-xl font-extrabold text-gray-600">
          Njamala est né dune frustration simple : trouver des produits de
          qualité à Dakar était souvent{" "}
          <span>
            {" "}
            impossible sans payer des frais dexpédition internationaux ou
            attendre des semaines pour être
          </span>{" "}
          livré.
        </p>

        <p className="flex flex-col justify-center items-center text-xl font-extrabold text-gray-600">
          Nous avons commencé petit — une équipe soudée de passionnés décidée à
          résoudre le problème elle-{" "}
          <span>
            même. Nous nous approvisionnons directement auprès de fabricants de
            confiance et proposons{" "}
          </span>
          les produits à la communauté locale à des prix compétitifs.
        </p>

        <p className="flex flex-col justify-center items-center text-xl font-extrabold text-gray-600">
          {" "}
          Aujourd hui, Njamala est une destination de choix pour les achats en
          ligne au Sénégal. Nous livrons{" "}
          <span>
            dans tout le pays, servons des milliers de clients et continuons de
            grandir grâce au soutien dune
          </span>{" "}
          communauté fidèle.
        </p>
      </div>
    </main>
  );
}
