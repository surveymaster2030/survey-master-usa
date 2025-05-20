"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, House } from "lucide-react";

const navLinks = [
  { name: "Home", link: "/" },
  { name: "GNSS Systems", link: "/categories/GNSSSysyem" },
  { name: "SLAM", link: "/categories/SLAM" },
  // {
  //   name: "Machine Control Solutions",
  //   link: "/categories/MachineControlSolutions",
  // },
  { name: "Precision Agriculture", link: "/categories/PrecisionAgriculture" },
  { name: "Marine Systems", link: "/categories/MarineSystems" },
  { name: "Optical Systems", link: "/categories/OpticalSystems" },
  { name: "Radio & Antenna", link: "/categories/Radio&Antenna" },
];
export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="from-primary text-secondary relative bg-gradient-to-t to-amber-500">
      {/* ✅ المينيو في الشاشات الكبيرة */}
      <ul className="divide-primary container mx-auto hidden justify-center divide-x lg:flex">
        {navLinks.map((item) => (
          <li key={item.name} className="">
            <Link
              prefetch={true}
              href={item.link}
              className={`group hover:bg-secondary [.active]:bg-secondary relative block h-full w-full cursor-pointer p-5 text-sm font-semibold ${pathname === `${item.link}` ? "active" : ""}`}
            >
              <span className="transition duration-300 group-hover:text-amber-100 group-[.active]:text-amber-100">
                {item.name}
              </span>
              <span className="bg-primary absolute bottom-1 left-0 h-0.5 w-0 transition-all duration-500 group-hover:w-full group-[.active]:w-full"></span>
            </Link>
          </li>
        ))}
      </ul>

      {/* ✅ أيقونة الهامبرجر في الشاشات الصغيرة */}
      <div className="flex items-center justify-between p-4 lg:hidden">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="text-white focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* ✅ القائمة الجانبية للموبايل */}
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
          {navLinks.map((item) => (
            <li key={item.name}>
              <Link
                href={item.link}
                className="block rounded px-2 py-2 hover:bg-amber-600"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
