import Link from "next/link";
import { User } from "lucide-react";

export default function page() {
  return (
    <main className="">
      <div className="p-24 bg-olive-900  mt-10">
        <p className="text-5xl font-extrabold text-white flex justify-center gap-3.5">
          Mon <span className="text-amber-400">Compte</span>
        </p>
      </div>

      <div className="flex flex-col gap-4 bg-white p-20 justify-center items-center">
        <User size={70} className="text-black text-7xl  hover:text-amber-400" />
        <p className="text-2xl cursor-pointer text-gray-800 font-extrabold">
          Connectez-vous pour accéder à votre compte
        </p>
        <div className="gap-4 flex flex-col">
          <Link
            href="/account/login"
            className="bg-olive-900 text-white cursor-pointer rounded-md px-7 py-2 font-extrabold"
          >
            Se Connecter
          </Link>

          <Link
            href="/account/register"
            className="border-[0.8px] border-gray-800 cursor-pointer rounded-md px-7 py-2 font-extrabold"
          >
            Cree un compte
          </Link>
        </div>
      </div>
    </main>
  );
}
