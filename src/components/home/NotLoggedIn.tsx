"use client";

import React from "react";
import Link from "next/link";
import { FiLogIn, FiUserPlus } from "react-icons/fi";
import { motion } from "framer-motion";

export default function NotLoggedIn() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="bg-white p-8 sm:p-10 rounded-2xl shadow-2xl w-full max-w-md border border-gray-200 text-center"
      >
        {/* Header */}
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-cyan-900 mb-3">
          Welcome to <span className="text-emerald-600">Inbotiq</span>
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-sm sm:text-base mb-8 leading-relaxed">
          You are not logged in yet. Please sign in to continue or create a new
          account to start exploring our features.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/login"
            className="flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-white font-semibold shadow-md transition-all duration-300"
          >
            <FiLogIn className="text-lg" /> Sign In
          </Link>

          <Link
            href="/signup"
            className="flex items-center justify-center gap-2 py-3 px-6 rounded-xl border-2 border-emerald-500 text-emerald-600 hover:bg-cyan-50 font-semibold shadow-sm transition-all duration-300"
          >
            <FiUserPlus className="text-lg" /> Create Account
          </Link>
        </div>
      </motion.div>

      {/* Footer Text */}
      <p className="mt-8 text-xs text-gray-500 text-center">
        Access personalized features and insights once you’re logged in.
      </p>
    </div>
  );
}
