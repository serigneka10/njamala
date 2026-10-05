import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type CategoryCardProps = {
  name: string;
  description: string;
  image: string;
};

export default function CategoryCard({
  name,
  description,
  image,
}: CategoryCardProps) {
  return (
    <Link
      href={`/catalogue/${name.toLowerCase()}`}
      className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      {/* Image */}
      <div className="relative h-80 w-full">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      {/* Contenu */}
      <div className="p-5">
        <h2 className="text-xl font-bold text-gray-900">
          {name}
        </h2>

        <p className="mt-2 text-sm leading-6 text-gray-500">
          {description}
        </p>

        {/* Explorer */}
        <div className="mt-5 flex items-center gap-2 font-semibold text-amber-700 transition group-hover:text-amber-900">
          <span>Explorer</span>
          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </div>
      </div>
    </Link>
  );
}