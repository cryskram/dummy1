"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");

  function displayText(name: string) {
    alert(`${name} clicked the button`);
  }

  return (
    <div className="flex flex-col w-full min-h-screen items-center justify-center bg-white">
      <div className="flex flex-col p-10 items-center justify-center bg-slate-300 rounded-[100px] ">
        <Image
          className="rounded-full"
          src="/cat.jpeg"
          width={200}
          height={200}
          alt="cute cat"
        />
        <h1>i am a fool</h1>
        <h1 className="text-7xl mt-10  font-bold text-black">
          Bunny the good cat
        </h1>
        <Link
          href="/about"
          className="text-3xl uppercase underline text-red-400 mt-10"
        >
          About Cats
        </Link>
        <Link
          className="text-3xl uppercase underline text-red-400 mt-10"
          href="https://www.bmsce.ac.in"
          target="_blank"
        >
          bmsce
        </Link>
        <form className="flex gap-5" action="">
          <input
            className="border-b-2 border-slate-900 mt-10 text-3xl px-4 py-2 rounded-xl text-black outline-none"
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <button
            onClick={() => displayText(name + " is an fool")}
            className="mt-10 px-4 py-2 text-3xl bg-slate-900 rounded-xl"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
