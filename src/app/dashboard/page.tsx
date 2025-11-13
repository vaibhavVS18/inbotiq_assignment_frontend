"use client";

import { useContext, useEffect } from "react";
import { UserContext } from "@/context/user.context";
import DashboardCard from "@/components/dashboard/DashboardCard";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const { user, loading } = useContext(UserContext);
  console.log(user);

  const router = useRouter();

    useEffect(() => {
        if (!loading && !user) {
        router.replace("/"); // redirect to homepage if not logged in
        }
    }, [loading, user, router]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center text-gray-600 text-lg">
        Loading user info...
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      {user && (
        <DashboardCard
          email={user.email}
          role={user.role}
          profileImage={user.profileImage}
        />
      )}
    </div>
  );
}
