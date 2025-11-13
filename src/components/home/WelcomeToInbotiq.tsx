"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const WelcomeToInbotiq: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-6"
      >
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
          Welcome to <span className="text-emerald-600">Inbotiq</span>
        </h1>

        <p className="text-gray-600 text-base sm:text-lg max-w-md mx-auto">
          Your personalized workspace to explore insights and tools designed just for you.
        </p>

        <div className="pt-4">
          <Link
            href="/dashboard"
            className="inline-block px-6 py-3 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-all shadow-md hover:shadow-lg"
          >
            Dashboard
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default WelcomeToInbotiq;
