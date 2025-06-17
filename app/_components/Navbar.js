"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Menu, X } from "lucide-react";

import { categories } from "@/data/categories";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="from-primary text-secondary relative h-0.5 bg-gradient-to-t to-amber-500 lg:h-auto">
      <ul className="divide-primary container mx-auto hidden items-stretch justify-center divide-x lg:flex">
        {categories.map((category) => (
          <li key={category.id} className="">
            <Link
              prefetch={true}
              href={`/categories/${category.slug}`}
              className={`group hover:bg-secondary [.active]:bg-secondary relative block h-full w-full cursor-pointer p-5 text-sm font-extrabold tracking-wide ${pathname === `/categories/${category.slug}` ? "active" : ""}`}
            >
              <span className="transition duration-300 group-hover:text-amber-100 group-[.active]:text-amber-100">
                {category.name}
              </span>
              <span className="bg-primary absolute bottom-1 left-0 h-0.5 w-0 transition-all duration-500 group-hover:w-full group-[.active]:w-full"></span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="absolute -top-19 left-2 flex items-center justify-between rounded-r-md p-4 lg:hidden">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="text-primary focus:outline-none"
        >
          {isOpen ? <X size={36} /> : <Menu size={36} />}
        </button>
      </div>

      <div
        className={`fixed top-0 right-0 z-50 h-full w-64 transform bg-[#194755] text-white transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setIsOpen(false)} className="text-white">
            <X size={28} />
          </button>
        </div>
        <ul className="z-50 flex flex-col gap-4">
          {categories.map((category) => (
            <li key={category.id}>
              <Link
                prefetch={true}
                href={`/categories/${category.slug}`}
                className="block rounded border-b border-b-cyan-900 px-6 pb-4 tracking-wide text-amber-50 transition-colors duration-300 hover:bg-amber-600"
                onClick={() => setIsOpen(false)}
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
