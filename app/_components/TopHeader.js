import Image from "next/image";
import {
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  MapPin,
  Mails,
} from "lucide-react";
import Link from "next/link";

export default function TopHeader() {
  return (
    <div className="container mx-auto flex items-center justify-around">
      <Link href="/" className="ml-14 lg:ml-0">
        <Image
          src="/images/logo.png"
          alt="logo"
          className="p-3"
          width={261}
          height={71}
        />
      </Link>
      <div className="hidden space-x-3 lg:flex">
        <div className="hidden items-center justify-center space-x-2">
          <a
            className="bg-light_beige rounded-full p-2 transition-all duration-150 hover:rounded-md"
            target="blank"
            href="https://www.google.com/"
          >
            <Facebook size={16} strokeWidth={1.5} />
          </a>
          <a
            className="bg-light_beige rounded-full p-2 transition-all duration-150 hover:rounded-md"
            target="blank"
            href="https://www.google.com/"
          >
            <Linkedin size={16} strokeWidth={1.5} />
          </a>
          <a
            className="bg-light_beige rounded-full p-2 transition-all duration-150 hover:rounded-md"
            target="blank"
            href="https://www.google.com/"
          >
            <Instagram size={16} strokeWidth={1.5} />
          </a>
          <a
            className="bg-light_beige rounded-full p-2 transition-all duration-150 hover:rounded-md"
            target="blank"
            href="https://www.google.com/"
          >
            <Youtube size={16} strokeWidth={1.5} />
          </a>
        </div>
        <div className="flex border-l border-l-gray-300 p-3.5">
          <Mails
            className="mr-3"
            size={32}
            color="#FF7600"
            strokeWidth={1.5}
            absoluteStrokeWidth={true}
          />
          <div>
            <p className="text-[10px] text-gray-500">Send email</p>
            <h4 className="text-xs font-semibold">sales@survaymasterusa.com</h4>
          </div>
        </div>
        <div className="flex border-l border-l-gray-300 p-3.5">
          <MapPin
            className="mr-3"
            size={32}
            color="#FF7600"
            strokeWidth={1.5}
            absoluteStrokeWidth={true}
          />
          <div>
            <p className="text-[10px] text-gray-500">
              30 N. Gould Street, Suite 52519
            </p>
            <h4 className="text-xs font-semibold text-gray-800">
              Sheridan, Wyoming 82801, USA
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
