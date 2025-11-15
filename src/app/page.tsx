"use client";

import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { UserContext } from "@/context/user.context";
import NotLoggedIn from "@/components/home/NotLoggedIn";
import WelcomeToInbotiq from "@/components/home/WelcomeToInbotiq";

export default function Home() {
  const { user, loading } = useContext(UserContext);
  const router = useRouter();

  //  handlink react free version
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}`);
  }, []);

  // Handle token and redirect from Google OAuth
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
      localStorage.setItem("token", token);
      router.replace("/dashboard");
    }
  }, [router]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center text-gray-600 text-lg">
        Loading user info...
      </div>
    );
  }

  if (!user) return <NotLoggedIn />;

  return <WelcomeToInbotiq/>;
}
