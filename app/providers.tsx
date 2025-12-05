"use client";

import { ChakraProvider, defaultSystem } from "@chakra-ui/react"; // defaultSystem = theme + tokens

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider value={defaultSystem}>{children}</ChakraProvider>;
}