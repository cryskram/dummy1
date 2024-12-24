import Link from "next/link";
import React from "react";

const AboutPage = () => {
  return (
    <div className="mt-10">
      <Link
        className="text-2xl bg-white text-black rounded-2xl px-6 py-4"
        href="/"
      >
        Go Back!
      </Link>
      <h1 className="text-4xl mt-10">About Cats</h1>
    </div>
  );
};

export default AboutPage;
