import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#174d3c] text-white">
      <div className="mx-auto max-w-7xl px-5 py-12 lg:px-10 lg:py-16">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          <div>
            <h2 className="mb-4 text-2xl font-bold">
              NeuroLink
            </h2>

            <p className="text-sm leading-6 text-gray-200">
              Technology and innovation for better health
              and quality of life.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-sm text-gray-200">
              <Link href="/about">About</Link>
              <Link href="/#solutions">Solutions</Link>
              <Link href="/insights">Insights</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">
              Contact
            </h3>

            <div className="flex flex-col gap-3 text-sm text-gray-200">
              <p>Email: neurolink@gmail.com</p>
              <p>Phone: 0123456789</p>
              <p>LINE: nuerolink</p>
              <p>Address: nuerolink</p>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">
              Legal
            </h3>

            <div className="flex flex-col gap-3 text-sm text-gray-200">
              <Link href="/privacy-policy">
                Privacy Policy
              </Link>

              <Link href="/terms">
                Terms & Conditions
              </Link>

              <Link href="/cookie-policy">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/20 pt-6">
          <p className="text-center text-xs text-gray-300">
            © 2026 NeuroLink AI Co., Ltd.
            All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}