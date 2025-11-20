"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function ContactMap() {
  return (
    <section className="py-20 md:py-32 bg-[#050505]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold tracking-[0.4em] uppercase text-white/50 mb-4">
            Our Location
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Find us on the map
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
        >
          {/* Placeholder for map - Replace with actual map component */}
          <div className="relative h-[400px] md:h-[500px] bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-indigo-900/20">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="mx-auto h-16 w-16 text-white/40 mb-4" />
                <p className="text-white/60 text-lg">
                  Interactive map will be displayed here
                </p>
                <p className="text-white/40 text-sm mt-2">
                  123 Innovation Street, Tech City, TC 12345
                </p>
              </div>
            </div>
            {/* Grid pattern overlay */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
          </div>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm"
          >
            <h3 className="text-lg font-semibold text-white mb-2">
              Headquarters
            </h3>
            <p className="text-white/60 text-sm">
              123 Innovation Street
              <br />
              Tech City, TC 12345
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm"
          >
            <h3 className="text-lg font-semibold text-white mb-2">
              Office Hours
            </h3>
            <p className="text-white/60 text-sm">
              Monday - Friday
              <br />
              9:00 AM - 6:00 PM EST
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="rounded-xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm"
          >
            <h3 className="text-lg font-semibold text-white mb-2">
              Parking Available
            </h3>
            <p className="text-white/60 text-sm">
              Free parking on-site
              <br />
              Visitor spots available
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

