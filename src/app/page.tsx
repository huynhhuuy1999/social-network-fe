"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return <div onClick={() => router.push("/login")}>abd</div>;
}
