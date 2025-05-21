// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-secondary mt-20 text-white">
      <div className="relative -top-10 mx-auto flex w-full max-w-2/3 flex-col items-center justify-around rounded-md bg-teal-600 p-6 px-10 lg:flex-row">
        <div className="flex flex-col">
          <h2 className="mb-2 text-2xl font-extrabold md:text-3xl">
            SurvayM Newsletter
          </h2>
          <p className="mb-4 text-xs">
            Subscribe to our Newsletter to receive SURVAY MASTER updates on
            product.
          </p>
        </div>

        <div className="flex flex-col gap-4 rounded-md bg-white p-1.5 sm:flex-row">
          <input
            type="email"
            placeholder="Type your email here"
            className="px-4 text-black placeholder:text-gray-600 focus:ring-0 focus:outline-none"
          />
          <button className="bg-secondary hover:bg-primary rounded-md px-6 py-3 text-xs">
            Subscribe
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 px-8 py-16 md:grid-cols-4">
        <div>
          <div className="mb-4">
            <img src="/logo.png" alt="Survey Master Logo" className="w-32" />
          </div>
          <p className="text-sm text-gray-300">
            There are many variations of passages of lorem ipsu
          </p>
        </div>

        <div>
          <h3 className="mb-2 text-lg font-semibold">Products</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>GNSS Receivers</li>
            <li>Total Stations</li>
            <li>Laser Scanners</li>
            <li>Accessories</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-2 text-lg font-semibold">Contact</h3>
          <p className="flex items-center gap-2 text-sm text-gray-300">
            📧 info@survaymaster.us
          </p>
          <p className="mt-2 flex items-center gap-2 text-sm text-gray-300">
            📍 80 broklyn golden street, New York, USA
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between border-t border-gray-700 px-8 py-4 text-xs text-gray-400 sm:flex-row">
        <p>© All Copyright 2025 by SURVAY MASTER</p>
        <div className="mt-2 flex gap-4 sm:mt-0">
          <a href="#">Terms of Use</a>
          <span>|</span>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
