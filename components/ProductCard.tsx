import { CircleCheck } from "lucide-react";

type ProductCardProps = {
  name: string;
  description: string;
  price: number;
  image: string;
  button: string;
};

export default function ProductCard({
  name,
  description,
  price,
  image,
  button,
}: ProductCardProps) {
  return (
    <div className="relative z-0 overflow-hidden rounded-xl border-1 fle bg-white shadow-2xl p-3">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-100">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Favoris */}
        <button
          type="button"
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-2xl shadow-sm transition hover:scale-105"
          aria-label="Ajouter aux favoris"
        >
          ♡
        </button>
      </div>

      {/* Informations */}
      <div className="pt-3 ml-4">
        <h3 className="text-xl font-extrabold text-gray-900">{name}</h3>
        <p className="text-md font-extrabold text-gray-700 mt-3.5">
          {description}{" "}
        </p>
        <h2 className="text-gray-900 font-extrabold mt-4 text-2xl">
          {price} XOF
        </h2>
      </div>
      <div className="flex justify-center bg-black p-2 rounded-xl gap-3">
        <CircleCheck className="text-white" />
        <button className=" text-white font-extrabold ">{button} </button>
      </div>
    </div>
  );
}
