"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const navigate = (url) => {
    router.push(url);
  };

  return (
    <div>
      <h1 className="text-center text-2xl capitalize my-5">next app</h1>
      <div className="flex justify-center gap-5 mt-2">
        <Link href="/login">login</Link>
        <Link href="/about">about</Link>
      </div>
      <div className="flex justify-center gap-5 mt-2">
        <button onClick={() => navigate("/login")}>login</button>
        {/* <button onClick={() => navigate("/about")}>about</button> */}
        <Link
          href="/productlist"
          style={{
            backgroundColor: "blue",
            padding: "0.5rem",
            borderRadius: "10px",
          }}
        >
          productlist
        </Link>
      </div>
    </div>
  );
}
