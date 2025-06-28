import Image from "next/image";
import { MapPin, Mail } from "lucide-react";
import NewsletterForm from "./NewsletterForm";
// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-secondary mt-20 text-white">
      <NewsletterForm />

      <div className="mx-auto grid max-w-3/4 grid-cols-1 gap-8 px-8 py-16 md:grid-cols-4">
        <div>
          <div className="mb-4">
            <Image
              src="/images/logo_wh.png"
              alt="Survey Master Logo"
              className="w-32"
              width={100}
              height={100}
            />
          </div>
          <p className="text-xs text-gray-400">
            Where you can collect all<br></br> surveying tools from one place.
          </p>
        </div>

        <div className="relative">
          <h3 className="mb-1 text-lg font-semibold">Categories</h3>
          <span className="bg-mint_green relative mt-1 block h-1 w-14 rounded-2xl">
            <span className="bg-mint_green absolute top-1/2 -right-2 h-1 w-1 -translate-y-1/2 rounded-full"></span>
          </span>
          <ul className="mt-5 space-y-1 text-sm text-gray-400">
            <li>GNSS Systems</li>
            <li>SLAM</li>
            <li>Machine Control Solutions</li>
            <li>Precision Agriculture</li>
          </ul>
        </div>
        <div className="relative">
          <h3 className="mb-1 text-lg font-semibold">More</h3>
          <span className="bg-mint_green relative mt-1 block h-1 w-14 rounded-2xl">
            <span className="bg-mint_green absolute top-1/2 -right-2 h-1 w-1 -translate-y-1/2 rounded-full"></span>
          </span>
          <ul className="mt-5 space-y-1 text-sm text-gray-400">
            <li>Marine Systems</li>
            <li>Optical Systems</li>
            <li>Radio & Antenna</li>
            <li>Accessories</li>
          </ul>
        </div>

        <div className="relative">
          <h3 className="mb-1 text-lg font-semibold">Contact Us</h3>
          <span className="bg-mint_green relative mt-1 block h-1 w-14 rounded-2xl">
            <span className="bg-mint_green absolute top-1/2 -right-2 h-1 w-1 -translate-y-1/2 rounded-full"></span>
          </span>
          <p className="mt-5 flex items-center gap-2 text-xs text-gray-400">
            <Mail
              className="mr-3"
              size={22}
              color="#FF7600"
              strokeWidth={1.5}
              absoluteStrokeWidth={true}
            />{" "}
            sales@survaymasterusa.com
          </p>
          <p className="mt-2 flex items-center gap-2 text-xs text-gray-400">
            <MapPin
              className="mr-3"
              size={38}
              color="#FF7600"
              strokeWidth={1.5}
              absoluteStrokeWidth={true}
            />{" "}
            30 N. Gould Street, Suite 52519, Sheridan, Wyoming 82801, USA
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between bg-[#093340] px-8 py-4 text-xs text-gray-400 sm:flex-row">
        <p>© All Copyright 2025 by SURVAY MASTER</p>
        <div className="mt-2 flex gap-4 sm:mt-0">
          <a>Terms of Use</a>
          <span>|</span>
          <a>Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
