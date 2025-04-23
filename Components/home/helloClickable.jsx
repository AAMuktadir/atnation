import React from "react";
import Link from "next/link";

export default function HelloClickable() {
  return (
    <div>
      <Link
        href={"/contact-us"}
        className="border-2 border-white px-4 sm:px-8 py-0 sm:py-1 rounded-full uppercase"
      >
        Start a project with us
      </Link>
    </div>
  );
}
