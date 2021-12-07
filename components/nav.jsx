import * as React from "react";
import Link from "next/link";

export function NavModule() {
  return (
    <>
      <nav className="flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 sm:items-baseline w-full">
        <div className="mb-2 sm:mb-0">
          <Link href="/" passHref>
            <a className="text-white text-2xl font-bold">Web Sanitizer</a>
          </Link>
        </div>
      </nav>
    </>
  );
}
