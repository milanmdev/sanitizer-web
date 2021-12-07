import "tailwindcss/tailwind.css";
import { ChakraProvider } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "../components/AlertTemplate/index";

import { NavModule } from "../components/nav";
import { HeadModule } from "../components/head";

function Website({ Component, pageProps }) {
  const alertOptions = {
    position: positions.BOTTOM_LEFT,
    timeout: 5000,
    offset: "10px",
    transition: transitions.SCALE,
  };

  return (
    <ChakraProvider>
      <AlertProvider template={AlertTemplate} {...alertOptions}>
        {/* Head */}
        <HeadModule />

        <div className="flex flex-col min-h-screen py-2 bg-gray-900">
          {/* Nav */}
          <NavModule />

          {/* Component */}
          <Component {...pageProps} />
        </div>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default Website;
