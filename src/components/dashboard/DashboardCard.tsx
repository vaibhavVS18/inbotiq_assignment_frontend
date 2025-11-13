"use client";

import React from "react";
import Image from "next/image";
import { FiMail, FiUser, FiLogOut, FiUserCheck, FiAtSign } from "react-icons/fi";

interface DashboardProps {
  email: string;
  role: string;
  username?: string;
  profileImage?: string;
}

export default function DashboardCard({ email, role, username, profileImage }: DashboardProps) {
  return (
    <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
      
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-extrabold bg-gradient-to-r from-emerald-600 to-cyan-500 bg-clip-text text-transparent">
          {role} Dashboard
        </h2>
        <p className="text-gray-500 text-sm mt-1">Manage your profile & account</p>
      </div>

      {/* Profile Section */}
      <div className="flex flex-col items-center mb-8">
        <Image
          src={profileImage || "/default-user.png"}
          alt="Profile"
          width={110}
          height={110}
          className="w-28 h-28 rounded-full object-cover border-4 border-emerald-500 shadow-md"
        />

        <h3 className="mt-4 text-xl font-semibold text-gray-900 flex items-center gap-2">
          <FiUser className="text-emerald-600" />
          {username || `${role}`}
        </h3>

        <p className="text-gray-500 text-sm">Profile Overview</p>
      </div>

      {/* Account Info */}
      <div className="space-y-4 mb-10">

        {/* Username */}
        {username && (
          <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-200">
            <FiAtSign className="text-emerald-600 text-xl" />
            <div>
              <p className="text-gray-500 text-sm">Username</p>
              <p className="font-medium text-gray-900">{username}</p>
            </div>
          </div>
        )}

        {/* Email */}
        <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-200">
          <FiMail className="text-emerald-600 text-xl" />
          <div>
            <p className="text-gray-500 text-sm">Email</p>
            <p className="font-medium text-gray-900">{email}</p>
          </div>
        </div>

        {/* Role */}
        <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-200">
          <FiUserCheck className="text-emerald-600 text-xl" />
          <div>
            <p className="text-gray-500 text-sm">Role</p>
            <p className="font-medium text-gray-900">{role}</p>
          </div>
        </div>
      </div>

      {/* Logout Button */}
      <button
        onClick={() => {
          localStorage.removeItem("token");
          window.location.reload();
        }}
        className="w-full flex items-center justify-center gap-2 py-3 rounded-xl 
          bg-gradient-to-r from-emerald-600 to-cyan-500 
          hover:from-emerald-500 hover:to-cyan-400 
          text-white font-semibold shadow-md transition-all duration-300"
      >
        <FiLogOut className="text-lg" /> Logout
      </button>
    </div>
  );
}
