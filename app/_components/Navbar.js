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
    <nav className="from-primary text-secondary relative bg-gradient-to-t to-amber-500">
      <ul className="divide-primary container mx-auto hidden items-stretch justify-center divide-x lg:flex">
        {/* <li>
          <Link
            href="/"
            className={`group hover:bg-secondary [.active]:bg-secondary relative block h-full w-full cursor-pointer p-5 text-sm font-extrabold ${
              pathname === "/" ? "active" : ""
            }`}
          >
            <span className="transition duration-300 group-hover:text-amber-100 group-[.active]:text-amber-100">
              Home
            </span>
            <span className="bg-primary absolute bottom-1 left-0 h-0.5 w-0 transition-all duration-500 group-hover:w-full group-[.active]:w-full"></span>
          </Link>
        </li> */}
        {categories.map((category) => (
          <li key={category.id} className="">
            <Link
              prefetch={true}
              href={`/categories/${category.slug}`}
              className={`group hover:bg-secondary [.active]:bg-secondary relative block h-full w-full cursor-pointer p-5 text-sm font-extrabold ${pathname === `/categories/${category.slug}` ? "active" : ""}`}
            >
              <span className="transition duration-300 group-hover:text-amber-100 group-[.active]:text-amber-100">
                {category.name}
              </span>
              <span className="bg-primary absolute bottom-1 left-0 h-0.5 w-0 transition-all duration-500 group-hover:w-full group-[.active]:w-full"></span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-between p-4 lg:hidden">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="text-white focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
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
        <ul className="flex flex-col gap-4 px-6">
          {/* <li>
            <Link
              href="/"
              className="block rounded px-2 py-2 hover:bg-amber-600"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li> */}
          {categories.map((category) => (
            <li key={category.id}>
              <Link
                prefetch={true}
                href={`/categories/${category.slug}`}
                className="block rounded px-2 py-2 hover:bg-amber-600"
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
