const operatingTenets = [
  {
    label: "01",
    title: "Full-stack delivery teams",
    copy: "Strategy, design, AI, and engineering sit under one lead to shorten feedback loops.",
  },
  {
    label: "02",
    title: "System-level thinking",
    copy: "We map dependencies across data, infra, policy, and customer touch points before we build.",
  },
  {
    label: "03",
    title: "Momentum rituals",
    copy: "Every engagement runs on 6-week program increments with measurable lifts.",
  },
];

export default function AboutMission() {
  return (
    <section className="bg-white text-black py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        <div className="flex flex-col gap-4">
          <p className="text-sm font-semibold tracking-[0.4em] text-gray-500 uppercase">
            Mission & Approach
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 max-w-2xl">
              We combine deep systems expertise with rapid product delivery
              rituals.
            </h2>
            <p className="text-gray-600 md:max-w-md">
              Every engagement blends discovery, architecture, and build tracks
              so we can navigate regulation without sacrificing velocity.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {operatingTenets.map((tenet) => (
            <div
              key={tenet.label}
              className="border border-gray-200 rounded-xl p-6 space-y-4 bg-white"
            >
              <span className="text-sm font-semibold text-indigo-500">
                {tenet.label}
              </span>
              <h3 className="text-xl font-semibold text-gray-900">
                {tenet.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{tenet.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

