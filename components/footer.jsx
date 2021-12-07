import Link from "next/link";
import { useEffect } from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function FooterModule() {
  useEffect(() => {}, []);

  return (
    <>
      <footer className="bg-gray-800 body-font text-white">
        <div className="container flex flex-col items-center px-8 py-8 mx-auto max-w-7xl sm:flex-row">
          <p className="mt-4 text-md sm:ml-4 sm:pl-4 sm:mt-0">
            &copy; {new Date().getFullYear()}{" "}
            <Link href="https://milanm.org" passHref>
              <a target="_blank">milanmdev</a>
            </Link>
          </p>
          <span className="inline-flex justify-center mt-4 space-x-5 sm:ml-auto sm:mt-0 sm:justify-start text-xl">
            <Link href="https://l.milanm.org/sanitizer-gh" passHref>
              <a target="_blank" className="text-gray-300 hover:text-gray-400">
                <span className="sr-only">GitHub</span>
                <FontAwesomeIcon
                  icon={faGithub}
                  className="w-6 h-6"
                  fill="currentColor"
                />
              </a>
            </Link>
          </span>
        </div>
      </footer>
    </>
  );
}
