import Link from "next/link";

export default function AboutCTA() {
  return (
    <section className="bg-white text-black py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6 text-center space-y-6">
        <p className="uppercase tracking-[0.4em] text-xs text-gray-500">
          Ready to partner
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold">
          Bring us your next program and we will design the operating model,
          teams, and product systems that get it done.
        </h2>
        <p className="text-gray-600">
          Co-build with cross-functional leaders who live inside your problem
          space until it ships.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/projects"
            className="px-6 py-3 border border-gray-900 text-gray-900 rounded-full font-semibold hover:bg-gray-900 hover:text-white transition"
          >
            Explore case studies
          </Link>
          <Link
            href="/#contact"
            className="px-6 py-3 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition"
          >
            Schedule a call
          </Link>
        </div>
      </div>
    </section>
  );
}

