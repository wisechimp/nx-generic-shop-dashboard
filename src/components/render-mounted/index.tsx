"use client";

// The intention is that this should avoid hydration errors

import { ReactNode, useEffect, useState } from "react";

const RenderMounted = ({ children }: { children: ReactNode }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  if (!isMounted) return null;

  return <>{children}</>;
};

export default RenderMounted;
