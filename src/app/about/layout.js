"use client";
import React from "react";
import "./login.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
const layout = ({ children }) => {
  const router = useRouter();
  return (
    <div>
      <ul className="flex gap-4 bg-blue-400 text-white">
        <Link href="/about/contact">
          <li>contact page</li>
        </Link>
        <Link href="/about/services">
          <li>services page</li>
        </Link>
      </ul>
      {children}
      <button onClick={() => router.push("/")}>home</button>
    </div>
  );
};

export default layout;
